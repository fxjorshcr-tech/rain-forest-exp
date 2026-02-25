import { NextResponse } from "next/server";

// Tilopay SDK/API endpoint for initializing payment sessions
const TILOPAY_API_URL = "https://app.tilopay.com/api/v1/processSdk";

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

    // Call Tilopay API to create payment session
    const tilopayBody = {
      key: apiKey,
      user: apiUser,
      password: apiPassword,
      module: "payment",
      amount: Number(total).toFixed(2),
      currency: "USD",
      orderNumber,
      billToFirstName: firstName,
      billToLastName: lastName,
      billToEmail: email,
      billToCountry: country,
      billToTelephone: phone,
      billToAddress: "",
      billToCity: "",
      billToState: "",
      billToZipPostCode: "",
      redirect: redirectUrl,
      language: locale === "es" ? "es" : "en",
      capture: 1,
      subscription: 0,
      hashVersion: "V2",
      typeDni: 0,
      dni: "",
    };

    const tilopayRes = await fetch(TILOPAY_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tilopayBody),
    });

    const tilopayData = await tilopayRes.json();

    // Tilopay returns type "200" for success
    if (tilopayData.type === "200" || tilopayData.type === 200) {
      // For redirect mode, Tilopay may provide a redirect URL
      // If it returns session data (for SDK), we pass it back to the client
      const paymentUrl =
        tilopayData.url ||
        tilopayData.redirect_url ||
        tilopayData.redirectUrl ||
        tilopayData.payment_url;

      return NextResponse.json({
        redirectUrl: paymentUrl || null,
        orderNumber,
        tilopayToken: apiKey, // SDK needs this for client-side init
        sessionData: {
          uniqueIdtransaction: tilopayData.uniqueIdtransaction,
          methods: tilopayData.methods,
          test: tilopayData.test,
        },
        // Pass all data needed for SDK initialization on the client
        sdkParams: {
          amount: Number(total).toFixed(2),
          currency: "USD",
          orderNumber,
          billToEmail: email,
          billToFirstName: firstName,
          billToLastName: lastName,
          billToCountry: country,
          billToTelephone: phone,
          redirect: redirectUrl,
          language: locale === "es" ? "es" : "en",
          capture: 1,
          subscription: 0,
        },
      });
    }

    console.error("Tilopay API error:", tilopayData);
    return NextResponse.json(
      { error: tilopayData.message || tilopayData.error || "Payment creation failed" },
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
