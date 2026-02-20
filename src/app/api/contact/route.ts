import { Resend } from "resend";
import { NextResponse } from "next/server";

const BUSINESS_EMAIL = "info@rainforestexperiencescr.com";

const emailText = {
  en: {
    subject: "We received your message! — Rain Forest Experiences CR",
    heading: (name: string) => `Thank You, ${name}!`,
    received: "We have received your message and will get back to you within 24 hours.",
    reachOut: "In the meantime, feel free to reach us directly:",
    lookForward: "We look forward to helping you plan an unforgettable rainforest adventure!",
    closing: "Pura Vida,",
  },
  es: {
    subject: "Recibimos tu mensaje! — Rain Forest Experiences CR",
    heading: (name: string) => `Gracias, ${name}!`,
    received: "Hemos recibido tu mensaje y te responderemos en menos de 24 horas.",
    reachOut: "Mientras tanto, puedes contactarnos directamente:",
    lookForward: "Esperamos ayudarte a planificar una aventura inolvidable en el bosque lluvioso!",
    closing: "Pura Vida,",
  },
};

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, message, tour, date, guests, locale } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    // Build detail rows for optional fields
    const details = [
      tour ? `<tr><td style="padding:8px 16px;font-weight:600;color:#1b4332;">Tour:</td><td style="padding:8px 16px;">${tour}</td></tr>` : "",
      date ? `<tr><td style="padding:8px 16px;font-weight:600;color:#1b4332;">Date:</td><td style="padding:8px 16px;">${date}</td></tr>` : "",
      guests ? `<tr><td style="padding:8px 16px;font-weight:600;color:#1b4332;">Guests:</td><td style="padding:8px 16px;">${guests}</td></tr>` : "",
    ]
      .filter(Boolean)
      .join("");

    const FROM_EMAIL = "Rain Forest Experiences CR <no-reply@rainforestexperiencescr.com>";

    // 1. Email to the business (notification of new inquiry — always in English)
    const { error: bizError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [BUSINESS_EMAIL],
      subject: `New inquiry from ${name}`,
      html: `
        <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9fafb;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#1b4332,#2d6a4f);padding:32px;text-align:center;">
            <h1 style="color:#fff;margin:0;font-size:24px;">New Contact Inquiry</h1>
            <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;">Rain Forest Experiences CR</p>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
              <tr><td style="padding:8px 16px;font-weight:600;color:#1b4332;">Name:</td><td style="padding:8px 16px;">${name}</td></tr>
              <tr style="background:#f1f5f2;"><td style="padding:8px 16px;font-weight:600;color:#1b4332;">Email:</td><td style="padding:8px 16px;"><a href="mailto:${email}" style="color:#2d6a4f;">${email}</a></td></tr>
              ${details}
            </table>
            <div style="margin-top:24px;padding:16px;background:#fff;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
              <h3 style="margin:0 0 8px;color:#1b4332;">Message:</h3>
              <p style="margin:0;color:#374151;white-space:pre-wrap;">${message}</p>
            </div>
          </div>
        </div>
      `,
    });

    if (bizError) {
      console.error("Failed to send business email:", bizError);
      return NextResponse.json(
        { error: bizError.message },
        { status: 500 }
      );
    }

    // 2. Confirmation email to the client — in their language
    const txt = locale === "es" ? emailText.es : emailText.en;

    const { error: clientError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: txt.subject,
      html: `
        <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9fafb;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#1b4332,#2d6a4f);padding:32px;text-align:center;">
            <h1 style="color:#fff;margin:0;font-size:24px;">${txt.heading(name)}</h1>
            <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;">Rain Forest Experiences CR</p>
          </div>
          <div style="padding:32px;">
            <p style="color:#374151;font-size:16px;line-height:1.6;">
              ${txt.received}
            </p>
            <p style="color:#374151;font-size:16px;line-height:1.6;">
              ${txt.reachOut}
            </p>
            <div style="background:#fff;padding:20px;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,0.1);margin:16px 0;">
              <p style="margin:4px 0;color:#374151;"><strong>WhatsApp:</strong> <a href="https://wa.me/50685104507" style="color:#2d6a4f;">+506 8510-4507</a></p>
              <p style="margin:4px 0;color:#374151;"><strong>Email:</strong> <a href="mailto:info@rainforestexperiencescr.com" style="color:#2d6a4f;">info@rainforestexperiencescr.com</a></p>
            </div>
            <p style="color:#374151;font-size:16px;line-height:1.6;">
              ${txt.lookForward}
            </p>
            <p style="color:#6b7280;font-size:14px;margin-top:24px;">
              ${txt.closing}<br/>
              <strong>Gabriel — Rain Forest Experiences CR</strong><br/>
              La Fortuna de San Carlos, Costa Rica
            </p>
          </div>
        </div>
      `,
    });

    if (clientError) {
      console.error("Failed to send client confirmation email:", clientError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
