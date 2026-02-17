"use client";

import { useState } from "react";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import { tours } from "@/data/tours";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const message = data.get("message") as string;
    const tour = data.get("tour") as string;

    const whatsappMsg = encodeURIComponent(
      `Hello! My name is ${name}. I'm interested in: ${tour}. ${message}`
    );
    window.open(`https://wa.me/50685104507?text=${whatsappMsg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    form.reset();
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
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-forest-300">
              Us
            </span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg">
            Ready for your adventure? Send us a message and we&apos;ll help you plan
            the perfect rainforest experience.
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
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-forest-700/50 flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-forest-400" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Location</p>
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
                      <p className="font-medium text-sm">Phone / WhatsApp</p>
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
                      <p className="font-medium text-sm">Email</p>
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
                      <p className="font-medium text-sm">Hours</p>
                      <p className="text-white/70 text-sm mt-1">
                        Mon - Sun: 6:00 AM - 9:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
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
                  Send Us a Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none transition-all text-sm text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none transition-all text-sm text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="tour"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tour Interest
                  </label>
                  <select
                    id="tour"
                    name="tour"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none transition-all text-sm text-gray-900 bg-white"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    {tours.map((t) => (
                      <option key={t.slug} value={t.title}>
                        {t.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Preferred Date
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
                      Number of Guests
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
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your trip plans, special requirements, or any questions..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none transition-all text-sm text-gray-900 placeholder:text-gray-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-forest-700 hover:bg-forest-600 text-white py-4 rounded-xl text-base font-semibold transition-all hover:shadow-lg hover:shadow-forest-600/20 flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    "Message Sent! Redirecting to WhatsApp..."
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400">
                  Your message will be sent via WhatsApp for a faster response.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
