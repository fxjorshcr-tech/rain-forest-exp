"use client";

import { useState } from "react";
import { Send, MapPin, Phone, Mail, Clock, Loader2, CheckCircle } from "lucide-react";
import { tours } from "@/data/tours";
import { useLanguage } from "@/i18n/context";
import ThankYouModal from "@/components/ThankYouModal";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [showModal, setShowModal] = useState(false);
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
          tour: data.get("tour"),
          date: data.get("date"),
          guests: data.get("guests"),
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("sent");
      setShowModal(true);
      form.reset();
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] flex items-center justify-center overflow-hidden bg-forest-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(149,213,178,0.3),transparent_70%)]" />
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="text-forest-400 font-semibold text-sm tracking-[0.2em] uppercase block mb-3">
            {t.contact.label}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            {t.contact.pageTitle1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-forest-300">
              {t.contact.pageTitle2}
            </span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg">
            {t.contact.pageSubtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-forest-900 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">{t.contact.contactInfo}</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-forest-700/50 flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-forest-400" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{t.contact.location}</p>
                      <p className="text-white/70 text-sm mt-1">
                        La Fortuna de San Carlos,
                        <br />
                        Alajuela, Costa Rica
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-forest-700/50 flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-forest-400" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{t.contact.phone}</p>
                      <a
                        href="tel:+50685104507"
                        className="text-white/70 text-sm mt-1 hover:text-forest-400 transition-colors block"
                      >
                        +506 8510-4507
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-forest-700/50 flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-forest-400" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{t.contact.emailLabel}</p>
                      <a
                        href="mailto:info@rainforestexperiencescr.com"
                        className="text-white/70 text-sm mt-1 hover:text-forest-400 transition-colors block"
                      >
                        info@rainforestexperiencescr.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-forest-700/50 flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-forest-400" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{t.contact.hours}</p>
                      <p className="text-white/70 text-sm mt-1">
                        {t.contact.hoursValue}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31392.24591920882!2d-84.65!3d10.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e36e906b5795%3A0x4a2d0f2a6d842f38!2sLa%20Fortuna%2C%20San%20Carlos%2C%20Alajuela%2C%20Costa%20Rica!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rain Forest Experiences location"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 space-y-6"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {t.contact.sendMessage}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t.contact.fullName}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder={t.contact.namePlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none transition-all text-sm text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none transition-all text-sm text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="tour"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t.contact.tourInterest}
                  </label>
                  <select
                    id="tour"
                    name="tour"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none transition-all text-sm text-gray-900 bg-white"
                  >
                    <option value={t.contact.generalInquiry}>{t.contact.generalInquiry}</option>
                    {tours.map((tour) => {
                      const td = (t.tourData as Record<string, { title: string }>)[tour.slug];
                      return (
                        <option key={tour.slug} value={tour.title}>
                          {td?.title ?? tour.title}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t.contact.preferredDate}
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none transition-all text-sm text-gray-900"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t.contact.numGuests}
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      min="1"
                      max="20"
                      defaultValue="2"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none transition-all text-sm text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none transition-all text-sm text-gray-900 placeholder:text-gray-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-forest-700 hover:bg-forest-600 text-white py-4 rounded-xl text-base font-semibold transition-all hover:shadow-lg hover:shadow-forest-600/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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

                <p className="text-center text-xs text-gray-400">
                  {t.contact.emailNote}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <ThankYouModal
          onClose={() => {
            setShowModal(false);
            setStatus("idle");
          }}
        />
      )}
    </main>
  );
}
