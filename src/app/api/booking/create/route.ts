import { NextResponse } from "next/server";
import crypto from "crypto";
import { getTourBySlug } from "@/data/tours";

const TILOPAY_BASE_URL = "https://app.tilopay.com/api/v1/";
const ALLOWED_ORIGINS = [
  "https://www.rainforestexperiencescr.com",
  "https://rainforestexperiencescr.com",
];

function signData(data: string, secret: string): string {
  return crypto.createHmac("sha256", secret).update(data).digest("hex");
}

// Simple in-memory rate limiter (per IP, 3 requests per minute for payments)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

export async function POST(request: Request) {
  try {
    // CSRF protection
    const origin = request.headers.get("origin");
    if (origin && !ALLOWED_ORIGINS.includes(origin) && process.env.NODE_ENV === "production") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = await request.json();
    const {
      tourSlug,
      tourTitle,
      date,
      formattedDate,
      time,
      adults,
      children,
      firstName,
      lastName,
      email,
      country,
      phone,
      locale,
    } = body;

    // Input validation
    if (!tourSlug || !date || !time || !firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Missing required booking fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 254) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const adultsNum = Number(adults);
    const childrenNum = Number(children) || 0;
    if (!Number.isInteger(adultsNum) || adultsNum < 1 || adultsNum > 20) {
      return NextResponse.json({ error: "Invalid number of adults" }, { status: 400 });
    }
    if (!Number.isInteger(childrenNum) || childrenNum < 0 || childrenNum > 20) {
      return NextResponse.json({ error: "Invalid number of children" }, { status: 400 });
    }
    if (firstName.length > 200 || lastName.length > 200) {
      return NextResponse.json({ error: "Name too long" }, { status: 400 });
    }

    // Server-side price verification: look up tour and recalculate total
    const tour = await getTourBySlug(tourSlug);
    if (!tour) {
      return NextResponse.json({ error: "Tour not found" }, { status: 400 });
    }

    const pricePerAdult = tour.price;
    const pricePerChild = Math.round(tour.price * 0.5);
    const verifiedTotal = adultsNum * pricePerAdult + childrenNum * pricePerChild;

    const apiKey = process.env.TILOPAY_API_KEY;
    const apiUser = process.env.TILOPAY_API_USER;
    const apiPassword = process.env.TILOPAY_API_PASSWORD;

    if (!apiKey || !apiUser || !apiPassword) {
      console.error("Missing Tilopay credentials");
      return NextResponse.json(
        { error: "Payment system not configured" },
        { status: 500 }
      );
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://rainforestexperiencescr.com";
    const hmacSecret = apiPassword + apiKey;

    // Generate unique order number with crypto randomness
    const randomPart = crypto.randomBytes(4).toString("hex").toUpperCase();
    const orderNumber = `RF-${Date.now()}-${randomPart}`;

    // Build the redirect URL with booking data signed with HMAC
    const bookingData = {
      tourSlug,
      tourTitle: tour.title,
      date,
      formattedDate,
      time,
      adults: adultsNum,
      children: childrenNum,
      total: verifiedTotal,
      firstName,
      lastName,
      email,
      country: country || "",
      phone: phone || "",
      locale: locale === "es" ? "es" : "en",
      pricePerAdult,
      pricePerChild,
      orderNumber,
    };

    const encodedData = Buffer.from(JSON.stringify(bookingData)).toString("base64");
    const signature = signData(encodedData, hmacSecret);

    const redirectUrl = `${baseUrl}/api/booking/callback?data=${encodeURIComponent(encodedData)}&sig=${signature}`;

    // Step 1: Login to Tilopay to get access token
    const loginRes = await fetch(TILOPAY_BASE_URL + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        email: apiUser,
        password: apiPassword,
      }),
    });

    const loginData = await loginRes.json();

    if (!loginData.access_token) {
      console.error("Tilopay login failed:", loginData);
      return NextResponse.json(
        { error: "Payment authentication failed" },
        { status: 500 }
      );
    }

    // Step 2: Create payment with bearer token using server-verified total
    const paymentBody = {
      redirect: redirectUrl,
      key: apiKey,
      amount: Number(verifiedTotal).toFixed(2),
      currency: "USD",
      billToFirstName: firstName,
      billToLastName: lastName,
      billToAddress: "",
      billToAddress2: "",
      billToCity: "",
      billToState: "",
      billToZipPostCode: "",
      billToCountry: country || "",
      billToTelephone: phone || "",
      billToEmail: email,
      orderNumber,
      capture: 1,
      subscription: 0,
      platform: "nextjs-redirect",
      lang: locale === "es" ? "es" : "en",
      hashVersion: "V2",
    };

    const paymentRes = await fetch(TILOPAY_BASE_URL + "processPayment", {
      method: "POST",
      headers: {
        "Authorization": "bearer " + loginData.access_token,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(paymentBody),
    });

    const paymentData = await paymentRes.json();

    // Tilopay redirect returns type 100 with a URL to their payment form
    if (paymentData.type === 100 || paymentData.type === "100") {
      return NextResponse.json({
        redirectUrl: paymentData.url,
        orderNumber,
      });
    }

    console.error("Tilopay processPayment error:", paymentData);
    return NextResponse.json(
      { error: "Payment creation failed" },
      { status: 500 }
    );
  } catch (error) {
    console.error("Failed to create booking:", error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
