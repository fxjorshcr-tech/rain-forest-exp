"use client";

import { useState } from "react";
import { Send, MapPin, Phone, Mail, Clock, Loader2, CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/context";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-forest-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(149,213,178,0.3),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-forest-400 font-semibold text-sm tracking-[0.2em] uppercase">
            {t.contact.label}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {t.contact.title1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-forest-300">
              {t.contact.title2}
            </span>
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">{t.contact.contactInfo}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-forest-600/30 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-forest-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">{t.contact.location}</p>
                    <p className="text-white/60 text-sm mt-1">
                      La Fortuna de San Carlos,
                      <br />
                      Alajuela, Costa Rica
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-forest-600/30 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-forest-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">{t.contact.phone}</p>
                    <a
                      href="tel:+50685104507"
                      className="text-white/60 text-sm mt-1 hover:text-forest-400 transition-colors block"
                    >
                      +506 8510-4507
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-forest-600/30 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-forest-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">{t.contact.emailLabel}</p>
                    <a
                      href="mailto:info@rainforestexperiencescr.com"
                      className="text-white/60 text-sm mt-1 hover:text-forest-400 transition-colors block"
                    >
                      info@rainforestexperiencescr.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-forest-600/30 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-forest-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">{t.contact.hours}</p>
                    <p className="text-white/60 text-sm mt-1">
                      {t.contact.hoursValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    {t.contact.fullName}
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-forest-400 focus:ring-2 focus:ring-forest-400/20 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-forest-400 focus:ring-2 focus:ring-forest-400/20 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  {t.contact.message}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-forest-400 focus:ring-2 focus:ring-forest-400/20 outline-none transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-forest-600 hover:bg-forest-500 text-white py-4 rounded-xl text-base font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    {t.contact.sendingBtn} <Loader2 size={18} className="animate-spin" />
                  </>
                ) : status === "sent" ? (
                  <>
                    {t.contact.messageSent} <CheckCircle size={18} />
                  </>
                ) : status === "error" ? (
                  t.contact.errorMsg
                ) : (
                  <>
                    {t.contact.sendBtn} <Send size={18} />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-white/40">
                {t.contact.emailNote}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
