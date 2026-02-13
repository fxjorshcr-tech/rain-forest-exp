"use client";

import { useState } from "react";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactForm() {
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
    window.open(`https://wa.me/50688888888?text=${whatsappMsg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    form.reset();
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-forest-600 font-semibold text-sm tracking-[0.2em] uppercase">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Book Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-forest-500">
              Adventure
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Ready to explore? Send us a message and we&apos;ll help you plan the
            perfect rainforest experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
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
                      href="tel:+50688888888"
                      className="text-white/70 text-sm mt-1 hover:text-forest-400 transition-colors block"
                    >
                      +506 8888-8888
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
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 space-y-6"
            >
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
                  <option value="Night Rainforest Walk">
                    Night Rainforest Walk
                  </option>
                  <option value="Sloth & Wildlife Tour">
                    Sloth &amp; Wildlife Tour
                  </option>
                  <option value="La Fortuna Waterfall Hike">
                    La Fortuna Waterfall Hike
                  </option>
                  <option value="Hanging Bridges Adventure">
                    Hanging Bridges Adventure
                  </option>
                  <option value="Arenal Volcano Hike">
                    Arenal Volcano Hike
                  </option>
                  <option value="Hot Springs & Relaxation">
                    Hot Springs &amp; Relaxation
                  </option>
                  <option value="Safari Float River Tour">
                    Safari Float River Tour
                  </option>
                  <option value="Combo Adventure Day">
                    Combo Adventure Day
                  </option>
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
                  rows={4}
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
  );
}
