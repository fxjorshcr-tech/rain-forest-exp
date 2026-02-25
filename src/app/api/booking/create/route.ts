import { NextResponse } from "next/server";

const TILOPAY_API_URL = "https://app.tilopay.com/api/v1/processPayment";

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

    // Call Tilopay API to create payment
    const tilopayBody = {
      key: apiKey,
      user: apiUser,
      password: apiPassword,
      amount: total.toFixed(2),
      currency: "USD",
      orderNumber,
      billToFirstName: firstName,
      billToLastName: lastName,
      billToEmail: email,
      billToCountry: country,
      billToTelephone: phone,
      redirect: redirectUrl,
      language: locale === "es" ? "es" : "en",
      capture: true,
      hashVersion: "V2",
      description: `${tourTitle} - ${formattedDate} ${time}`,
    };

    const tilopayRes = await fetch(TILOPAY_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tilopayBody),
    });

    const tilopayData = await tilopayRes.json();

    if (!tilopayRes.ok || tilopayData.error) {
      console.error("Tilopay API error:", tilopayData);
      return NextResponse.json(
        { error: tilopayData.message || "Payment creation failed" },
        { status: 500 }
      );
    }

    // Tilopay returns a URL where we redirect the user
    const paymentUrl = tilopayData.url || tilopayData.redirect_url || tilopayData.redirectUrl;

    if (!paymentUrl) {
      console.error("No redirect URL from Tilopay:", tilopayData);
      return NextResponse.json(
        { error: "Payment redirect URL not received" },
        { status: 500 }
      );
    }

    return NextResponse.json({ redirectUrl: paymentUrl, orderNumber });
  } catch (error) {
    console.error("Failed to create booking:", error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
