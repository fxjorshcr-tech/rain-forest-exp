import { Resend } from "resend";
import { NextResponse } from "next/server";

const BUSINESS_EMAIL = "info@rainforestexperiencescr.com";
const FROM_EMAIL = "Rain Forest Experiences CR <no-reply@rainforestexperiencescr.com>";

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
  const guestStr = `${booking.adults} ${txt.adultsLabel}${booking.children > 0 ? `, ${booking.children} ${txt.childrenLabel}` : ""}`;

  return `
    <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9fafb;border-radius:12px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,#1b4332,#2d6a4f);padding:32px;text-align:center;">
        <h1 style="color:#fff;margin:0;font-size:24px;">${txt.heading(booking.firstName)}</h1>
        <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;">Rain Forest Experiences CR</p>
      </div>
      <div style="padding:32px;">
        <p style="color:#374151;font-size:16px;line-height:1.6;">${txt.confirmed}</p>

        <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);margin:16px 0;">
          <tr><td style="padding:12px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">${txt.tourLabel}</td><td style="padding:12px 16px;border-bottom:1px solid #f3f4f6;">${booking.tourTitle}</td></tr>
          <tr style="background:#f1f5f2;"><td style="padding:12px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">${txt.dateLabel}</td><td style="padding:12px 16px;border-bottom:1px solid #f3f4f6;">${booking.formattedDate}</td></tr>
          <tr><td style="padding:12px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">${txt.timeLabel}</td><td style="padding:12px 16px;border-bottom:1px solid #f3f4f6;">${booking.time}</td></tr>
          <tr style="background:#f1f5f2;"><td style="padding:12px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">${txt.guestsLabel}</td><td style="padding:12px 16px;border-bottom:1px solid #f3f4f6;">${guestStr}</td></tr>
          <tr><td style="padding:12px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">${txt.totalLabel}</td><td style="padding:12px 16px;border-bottom:1px solid #f3f4f6;font-weight:700;color:#1b4332;font-size:18px;">$${booking.total}</td></tr>
          <tr style="background:#f1f5f2;"><td style="padding:12px 16px;font-weight:600;color:#1b4332;">${txt.orderLabel}</td><td style="padding:12px 16px;font-family:monospace;">${booking.orderNumber}</td></tr>
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
          <tr><td style="padding:10px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">Order</td><td style="padding:10px 16px;border-bottom:1px solid #f3f4f6;font-family:monospace;">${booking.orderNumber}</td></tr>
          <tr style="background:#f1f5f2;"><td style="padding:10px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">Tour</td><td style="padding:10px 16px;border-bottom:1px solid #f3f4f6;">${booking.tourTitle}</td></tr>
          <tr><td style="padding:10px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">Date</td><td style="padding:10px 16px;border-bottom:1px solid #f3f4f6;">${booking.formattedDate}</td></tr>
          <tr style="background:#f1f5f2;"><td style="padding:10px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">Time</td><td style="padding:10px 16px;border-bottom:1px solid #f3f4f6;">${booking.time}</td></tr>
          <tr><td style="padding:10px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">Guests</td><td style="padding:10px 16px;border-bottom:1px solid #f3f4f6;">${guestStr}</td></tr>
          <tr style="background:#f1f5f2;"><td style="padding:10px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">Total</td><td style="padding:10px 16px;border-bottom:1px solid #f3f4f6;font-weight:700;color:#1b4332;font-size:18px;">$${booking.total}</td></tr>
        </table>

        <h3 style="color:#1b4332;margin:24px 0 16px;">Customer Information</h3>
        <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
          <tr><td style="padding:10px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">Name</td><td style="padding:10px 16px;border-bottom:1px solid #f3f4f6;">${booking.firstName} ${booking.lastName}</td></tr>
          <tr style="background:#f1f5f2;"><td style="padding:10px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">Email</td><td style="padding:10px 16px;border-bottom:1px solid #f3f4f6;"><a href="mailto:${booking.email}" style="color:#2d6a4f;">${booking.email}</a></td></tr>
          <tr><td style="padding:10px 16px;font-weight:600;color:#1b4332;border-bottom:1px solid #f3f4f6;">Phone</td><td style="padding:10px 16px;border-bottom:1px solid #f3f4f6;"><a href="tel:${booking.phone}" style="color:#2d6a4f;">${booking.phone}</a></td></tr>
          <tr style="background:#f1f5f2;"><td style="padding:10px 16px;font-weight:600;color:#1b4332;">Country</td><td style="padding:10px 16px;">${booking.country}</td></tr>
        </table>
      </div>
    </div>
  `;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const encodedData = searchParams.get("data");

    // Tilopay may pass back status-related params
    const tilopayStatus = searchParams.get("status") || searchParams.get("code") || "";
    const tilopayAuth = searchParams.get("auth") || "";

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://rainforestexperiencescr.com";

    if (!encodedData) {
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
    // Tilopay typically returns status codes: 1 = success, other = failed
    const isPaymentSuccessful =
      tilopayStatus === "1" ||
      tilopayStatus === "success" ||
      tilopayAuth === "1" ||
      // If no status params, check if we at least have the data (may vary by Tilopay config)
      (!tilopayStatus && !tilopayAuth && encodedData);

    if (isPaymentSuccessful) {
      // Send confirmation emails
      const resendKey = process.env.RESEND_API_KEY;
      if (resendKey) {
        const resend = new Resend(resendKey);
        const txt = booking.locale === "es" ? emailText.es : emailText.en;

        // Send both emails in parallel
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

      // Redirect to confirmation page with booking info
      const confirmParams = new URLSearchParams({
        status: "success",
        orderNumber: booking.orderNumber,
        tour: booking.tourTitle,
        date: booking.formattedDate,
        time: booking.time,
        adults: String(booking.adults),
        children: String(booking.children),
        total: String(booking.total),
        firstName: booking.firstName,
        lastName: booking.lastName,
        email: booking.email,
        country: booking.country,
        phone: booking.phone,
        locale: booking.locale,
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
