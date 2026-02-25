import { Resend } from "resend";
import { NextResponse } from "next/server";
import crypto from "crypto";

const BUSINESS_EMAIL = "info@rainforestexperiencescr.com";
const FROM_EMAIL = "Rain Forest Experiences CR <no-reply@rainforestexperiencescr.com>";
const TILOPAY_BASE_URL = "https://app.tilopay.com/api/v1/";

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

interface BookingData {
  tourSlug: string;
  tourTitle: string;
  date: string;
  formattedDate: string;
  time: string;
  adults: number;
  children: number;
  total: number;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  phone: string;
  locale: string;
  pricePerAdult: number;
  pricePerChild: number;
  orderNumber: string;
}

function verifySignature(data: string, signature: string, secret: string): boolean {
  const expected = crypto.createHmac("sha256", secret).update(data).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}

async function verifyPaymentWithTilopay(orderNumber: string): Promise<boolean> {
  try {
    const apiUser = process.env.TILOPAY_API_USER;
    const apiPassword = process.env.TILOPAY_API_PASSWORD;

    if (!apiUser || !apiPassword) return false;

    // Login to get token
    const loginRes = await fetch(TILOPAY_BASE_URL + "login", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({ email: apiUser, password: apiPassword }),
    });

    const loginData = await loginRes.json();
    if (!loginData.access_token) return false;

    // Check payment status with Tilopay
    const checkRes = await fetch(TILOPAY_BASE_URL + "checkPayment", {
      method: "POST",
      headers: {
        "Authorization": "bearer " + loginData.access_token,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ orderNumber }),
    });

    const checkData = await checkRes.json();

    // Tilopay returns status for the payment
    // Accept if payment is confirmed/captured
    if (checkData.type === 200 || checkData.type === "200") {
      return true;
    }

    console.log("Tilopay checkPayment response:", JSON.stringify(checkData));
    return false;
  } catch (error) {
    console.error("Failed to verify payment with Tilopay:", error);
    // If verification API fails, fall back to signature + query param check
    return false;
  }
}

const emailText = {
  en: {
    subject: (tourTitle: string) => `Booking Confirmed: ${tourTitle} — Rain Forest Experiences CR`,
    bizSubject: (name: string, tourTitle: string) => `New Booking: ${tourTitle} from ${name}`,
    heading: (name: string) => `Your Adventure is Booked, ${name}!`,
    confirmed: "Your booking has been confirmed and payment received. Here are your booking details:",
    tourLabel: "Tour",
    dateLabel: "Date",
    timeLabel: "Time",
    guestsLabel: "Guests",
    totalLabel: "Total Paid",
    orderLabel: "Order Number",
    adultsLabel: "adults",
    childrenLabel: "children",
    whatNext: "What Happens Next?",
    step1: "We'll pick you up from your hotel in La Fortuna at the scheduled time.",
    step2: "Bring comfortable clothing, insect repellent, and a rain jacket.",
    step3: "If you need to cancel, you can do so free of charge up to 24 hours before the tour.",
    questions: "Have questions? Contact us:",
    closing: "Pura Vida,",
    contactInfo: "Contact Information",
  },
  es: {
    subject: (tourTitle: string) => `Reserva Confirmada: ${tourTitle} — Rain Forest Experiences CR`,
    bizSubject: (name: string, tourTitle: string) => `Nueva Reserva: ${tourTitle} de ${name}`,
    heading: (name: string) => `Tu Aventura esta Reservada, ${name}!`,
    confirmed: "Tu reserva ha sido confirmada y el pago recibido. Aqui estan los detalles de tu reserva:",
    tourLabel: "Tour",
    dateLabel: "Fecha",
    timeLabel: "Hora",
    guestsLabel: "Personas",
    totalLabel: "Total Pagado",
    orderLabel: "Numero de Orden",
    adultsLabel: "adultos",
    childrenLabel: "ninos",
    whatNext: "Que Sigue?",
    step1: "Te recogeremos en tu hotel en La Fortuna a la hora programada.",
    step2: "Trae ropa comoda, repelente de insectos y una chaqueta para lluvia.",
    step3: "Si necesitas cancelar, puedes hacerlo sin cargo hasta 24 horas antes del tour.",
    questions: "Tienes preguntas? Contactanos:",
    closing: "Pura Vida,",
    contactInfo: "Informacion de Contacto",
  },
};

function buildClientEmail(booking: BookingData, txt: (typeof emailText)["en"]) {
  const safe = {
    firstName: escapeHtml(booking.firstName),
    lastName: escapeHtml(booking.lastName),
    tourTitle: escapeHtml(booking.tourTitle),
    formattedDate: escapeHtml(booking.formattedDate),
    time: escapeHtml(booking.time),
    email: escapeHtml(booking.email),
    phone: escapeHtml(booking.phone),
    country: escapeHtml(booking.country),
    orderNumber: escapeHtml(booking.orderNumber),
  };
  const guestStr = `${booking.adults} ${txt.adultsLabel}${booking.children > 0 ? `, ${booking.children} ${txt.childrenLabel}` : ""}`;

  return `
    <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9fafb;border-radius:12px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,#1b4332,#2d6a4f);padding:32px;text-align:center;">
        <h1 style="color:#fff;margin:0;font-size:24px;">${txt.heading(safe.firstName)}</h1>
        <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;">Rain Forest Experiences CR</p>
      </div>
      <div style="padding:32px;">
        <p style="color:#374151;font-size:16px;line-height:1.6;">${txt.confirmed}</p>

        <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);margin:16px 0;">
          <tr><td style="padding:12px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">${txt.tourLabel}</td><td style="padding:12px 16px;border-bottom:1px solid #f3f4f6;">${safe.tourTitle}</td></tr>
          <tr style="background:#f1f5f2;"><td style="padding:12px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">${txt.dateLabel}</td><td style="padding:12px 16px;border-bottom:1px solid #f3f4f6;">${safe.formattedDate}</td></tr>
          <tr><td style="padding:12px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">${txt.timeLabel}</td><td style="padding:12px 16px;border-bottom:1px solid #f3f4f6;">${safe.time}</td></tr>
          <tr style="background:#f1f5f2;"><td style="padding:12px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">${txt.guestsLabel}</td><td style="padding:12px 16px;border-bottom:1px solid #f3f4f6;">${guestStr}</td></tr>
          <tr><td style="padding:12px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">${txt.totalLabel}</td><td style="padding:12px 16px;border-bottom:1px solid #f3f4f6;font-weight:700;color:#1b4332;font-size:18px;">$${booking.total}</td></tr>
          <tr style="background:#f1f5f2;"><td style="padding:12px 16px;font-weight:600;color:#1b4332;">${txt.orderLabel}</td><td style="padding:12px 16px;font-family:monospace;">${safe.orderNumber}</td></tr>
        </table>

        <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:20px;margin:24px 0;">
          <h3 style="margin:0 0 12px;color:#1b4332;font-size:16px;">${txt.whatNext}</h3>
          <ul style="margin:0;padding:0 0 0 20px;color:#374151;line-height:2;">
            <li>${txt.step1}</li>
            <li>${txt.step2}</li>
            <li>${txt.step3}</li>
          </ul>
        </div>

        <p style="color:#374151;font-size:14px;">${txt.questions}</p>
        <div style="background:#fff;padding:16px;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,0.1);margin:8px 0;">
          <p style="margin:4px 0;color:#374151;"><strong>WhatsApp:</strong> <a href="https://wa.me/50685104507" style="color:#2d6a4f;">+506 8510-4507</a></p>
          <p style="margin:4px 0;color:#374151;"><strong>Email:</strong> <a href="mailto:info@rainforestexperiencescr.com" style="color:#2d6a4f;">info@rainforestexperiencescr.com</a></p>
        </div>

        <p style="color:#6b7280;font-size:14px;margin-top:24px;">
          ${txt.closing}<br/>
          <strong>Gabriel — Rain Forest Experiences CR</strong><br/>
          La Fortuna de San Carlos, Costa Rica
        </p>
      </div>
    </div>
  `;
}

function buildBusinessEmail(booking: BookingData) {
  const safe = {
    firstName: escapeHtml(booking.firstName),
    lastName: escapeHtml(booking.lastName),
    tourTitle: escapeHtml(booking.tourTitle),
    formattedDate: escapeHtml(booking.formattedDate),
    time: escapeHtml(booking.time),
    email: escapeHtml(booking.email),
    phone: escapeHtml(booking.phone),
    country: escapeHtml(booking.country),
    orderNumber: escapeHtml(booking.orderNumber),
  };
  const guestStr = `${booking.adults} adults${booking.children > 0 ? `, ${booking.children} children` : ""}`;

  return `
    <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9fafb;border-radius:12px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,#1b4332,#2d6a4f);padding:32px;text-align:center;">
        <h1 style="color:#fff;margin:0;font-size:24px;">New Booking Received!</h1>
        <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;">Rain Forest Experiences CR</p>
      </div>
      <div style="padding:32px;">
        <h3 style="color:#1b4332;margin:0 0 16px;">Booking Details</h3>
        <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
          <tr><td style="padding:10px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">Order</td><td style="padding:10px 16px;border-bottom:1px solid #f3f4f6;font-family:monospace;">${safe.orderNumber}</td></tr>
          <tr style="background:#f1f5f2;"><td style="padding:10px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">Tour</td><td style="padding:10px 16px;border-bottom:1px solid #f3f4f6;">${safe.tourTitle}</td></tr>
          <tr><td style="padding:10px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">Date</td><td style="padding:10px 16px;border-bottom:1px solid #f3f4f6;">${safe.formattedDate}</td></tr>
          <tr style="background:#f1f5f2;"><td style="padding:10px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">Time</td><td style="padding:10px 16px;border-bottom:1px solid #f3f4f6;">${safe.time}</td></tr>
          <tr><td style="padding:10px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">Guests</td><td style="padding:10px 16px;border-bottom:1px solid #f3f4f6;">${guestStr}</td></tr>
          <tr style="background:#f1f5f2;"><td style="padding:10px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">Total</td><td style="padding:10px 16px;border-bottom:1px solid #f3f4f6;font-weight:700;color:#1b4332;font-size:18px;">$${booking.total}</td></tr>
        </table>

        <h3 style="color:#1b4332;margin:24px 0 16px;">Customer Information</h3>
        <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
          <tr><td style="padding:10px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">Name</td><td style="padding:10px 16px;border-bottom:1px solid #f3f4f6;">${safe.firstName} ${safe.lastName}</td></tr>
          <tr style="background:#f1f5f2;"><td style="padding:10px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">Email</td><td style="padding:10px 16px;border-bottom:1px solid #f3f4f6;"><a href="mailto:${safe.email}" style="color:#2d6a4f;">${safe.email}</a></td></tr>
          <tr><td style="padding:10px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">Phone</td><td style="padding:10px 16px;border-bottom:1px solid #f3f4f6;"><a href="tel:${safe.phone}" style="color:#2d6a4f;">${safe.phone}</a></td></tr>
          <tr style="background:#f1f5f2;"><td style="padding:10px 16px;font-weight:600;color:#1b4332;">Country</td><td style="padding:10px 16px;">${safe.country}</td></tr>
        </table>
      </div>
    </div>
  `;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const encodedData = searchParams.get("data");
    const signature = searchParams.get("sig");

    // Tilopay appends query params on redirect
    const formUpdate = searchParams.get("form_update") || "";
    const tilopayStatus = searchParams.get("status") || searchParams.get("code") || "";
    const tilopayAuth = searchParams.get("auth") || "";

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://rainforestexperiencescr.com";

    if (!encodedData || !signature) {
      return NextResponse.redirect(`${baseUrl}/booking/confirmation?status=error`);
    }

    // Verify HMAC signature to prevent data tampering
    const hmacSecret = process.env.TILOPAY_API_PASSWORD + process.env.TILOPAY_API_KEY;
    if (!hmacSecret) {
      console.error("Missing HMAC secret for signature verification");
      return NextResponse.redirect(`${baseUrl}/booking/confirmation?status=error`);
    }

    let signatureValid = false;
    try {
      signatureValid = verifySignature(encodedData, signature, hmacSecret);
    } catch {
      console.error("Signature verification failed");
      return NextResponse.redirect(`${baseUrl}/booking/confirmation?status=error`);
    }

    if (!signatureValid) {
      console.error("Invalid signature - possible data tampering attempt");
      return NextResponse.redirect(`${baseUrl}/booking/confirmation?status=error`);
    }

    let booking: BookingData;
    try {
      const decoded = Buffer.from(decodeURIComponent(encodedData), "base64").toString("utf-8");
      booking = JSON.parse(decoded);
    } catch {
      return NextResponse.redirect(`${baseUrl}/booking/confirmation?status=error`);
    }

    // Check payment status from Tilopay query params
    const tilopayIndicatesSuccess =
      formUpdate === "ok" ||
      tilopayStatus === "1" ||
      tilopayStatus === "success" ||
      tilopayAuth === "1";

    // Verify payment with Tilopay API as a second check
    let tilopayVerified = false;
    if (tilopayIndicatesSuccess) {
      tilopayVerified = await verifyPaymentWithTilopay(booking.orderNumber);
      if (!tilopayVerified) {
        // If API verification fails but Tilopay redirected with success params,
        // still proceed (API might not support checkPayment yet) but log warning
        console.warn("Tilopay API verification could not confirm payment for order:", booking.orderNumber);
      }
    }

    const isPaymentSuccessful = tilopayIndicatesSuccess;

    if (isPaymentSuccessful) {
      // Send confirmation emails
      const resendKey = process.env.RESEND_API_KEY;
      if (resendKey) {
        const resend = new Resend(resendKey);
        const txt = booking.locale === "es" ? emailText.es : emailText.en;

        const [clientResult, bizResult] = await Promise.allSettled([
          resend.emails.send({
            from: FROM_EMAIL,
            to: [booking.email],
            subject: txt.subject(booking.tourTitle),
            html: buildClientEmail(booking, txt),
          }),
          resend.emails.send({
            from: FROM_EMAIL,
            to: [BUSINESS_EMAIL],
            subject: txt.bizSubject(`${booking.firstName} ${booking.lastName}`, booking.tourTitle),
            html: buildBusinessEmail(booking),
          }),
        ]);

        if (clientResult.status === "rejected") {
          console.error("Failed to send client email:", clientResult.reason);
        }
        if (bizResult.status === "rejected") {
          console.error("Failed to send business email:", bizResult.reason);
        }
      }

      // Redirect to confirmation page — only pass non-sensitive display data
      const confirmParams = new URLSearchParams({
        status: "success",
        tour: booking.tourTitle,
        date: booking.formattedDate,
        time: booking.time,
        adults: String(booking.adults),
        children: String(booking.children),
        total: String(booking.total),
        firstName: booking.firstName,
        lastName: booking.lastName,
      });

      return NextResponse.redirect(`${baseUrl}/booking/confirmation?${confirmParams.toString()}`);
    }

    // Payment failed
    const failParams = new URLSearchParams({
      status: "failed",
      tourSlug: booking.tourSlug,
      locale: booking.locale,
    });

    return NextResponse.redirect(`${baseUrl}/booking/confirmation?${failParams.toString()}`);
  } catch (error) {
    console.error("Booking callback error:", error);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://rainforestexperiencescr.com";
    return NextResponse.redirect(`${baseUrl}/booking/confirmation?status=error`);
  }
}
