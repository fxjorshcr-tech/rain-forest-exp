import { NextResponse } from "next/server";

const TILOPAY_BASE_URL = "https://app.tilopay.com/api/v1/";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      tourSlug,
      tourTitle,
      date,
      formattedDate,
      time,
      adults,
      children,
      total,
      firstName,
      lastName,
      email,
      country,
      phone,
      locale,
      pricePerAdult,
      pricePerChild,
    } = body;

    if (!tourSlug || !date || !time || !firstName || !lastName || !email || !total) {
      return NextResponse.json(
        { error: "Missing required booking fields" },
        { status: 400 }
      );
    }

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

    // Generate unique order number
    const orderNumber = `RF-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

    // Build the redirect URL with booking data encoded
    const bookingData = {
      tourSlug,
      tourTitle,
      date,
      formattedDate,
      time,
      adults,
      children,
      total,
      firstName,
      lastName,
      email,
      country,
      phone,
      locale,
      pricePerAdult,
      pricePerChild,
      orderNumber,
    };

    const encodedData = encodeURIComponent(
      Buffer.from(JSON.stringify(bookingData)).toString("base64")
    );

    const redirectUrl = `${baseUrl}/api/booking/callback?data=${encodedData}`;

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

    // Step 2: Create payment with bearer token
    const paymentBody = {
      redirect: redirectUrl,
      key: apiKey,
      amount: Number(total).toFixed(2),
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
      { error: paymentData.message || paymentData.error || "Payment creation failed" },
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
