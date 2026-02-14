"use client";

import { useState } from "react";
import { Shield, Clock, Users, Check } from "lucide-react";
import type { Tour } from "@/data/tours";

export default function BookingForm({ tour }: { tour: Tour }) {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState(tour.startTimes[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<1 | 2>(1);

  const total = adults * tour.price + children * Math.round(tour.price * 0.5);

  const handleReserve = () => {
    const msg = encodeURIComponent(
      `Hello! I'd like to book:\n\n` +
        `Tour: ${tour.title}\n` +
        `Date: ${date}\n` +
        `Time: ${time}\n` +
        `Adults: ${adults} ($${tour.price} each)\n` +
        `Children: ${children} ($${Math.round(tour.price * 0.5)} each)\n` +
        `Total: $${total}\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}`
    );
    window.open(`https://wa.me/50688888888?text=${msg}`, "_blank");
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-28">
      {/* Header */}
      <div className="bg-forest-900 text-white p-6">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold">${tour.price}</span>
          <span className="text-white/70 text-sm">/ per person</span>
        </div>
        <div className="mt-2 flex items-center gap-4 text-sm text-white/70">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {tour.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users size={14} />
            {tour.maxGroup}
          </span>
        </div>
      </div>

      <div className="p-6 space-y-5">
        {step === 1 ? (
          <>
            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Select Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none text-sm text-gray-900"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Start Time
              </label>
              <div className="flex flex-wrap gap-2">
                {tour.startTimes.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTime(t)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      time === t
                        ? "bg-forest-700 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Adults */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Adults
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setAdults(Math.max(tour.minPeople, adults - 1))}
                  className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors"
                >
                  -
                </button>
                <span className="w-8 text-center font-semibold text-gray-900">
                  {adults}
                </span>
                <button
                  onClick={() => setAdults(adults + 1)}
                  className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors"
                >
                  +
                </button>
                <span className="text-sm text-gray-500 ml-2">
                  × ${tour.price}
                </span>
              </div>
            </div>

            {/* Children */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Children (50% off)
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setChildren(Math.max(0, children - 1))}
                  className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors"
                >
                  -
                </button>
                <span className="w-8 text-center font-semibold text-gray-900">
                  {children}
                </span>
                <button
                  onClick={() => setChildren(children + 1)}
                  className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors"
                >
                  +
                </button>
                <span className="text-sm text-gray-500 ml-2">
                  × ${Math.round(tour.price * 0.5)}
                </span>
              </div>
            </div>

            {/* Total */}
            <div className="border-t border-gray-100 pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 font-medium">Total</span>
                <span className="text-2xl font-bold text-gray-900">${total}</span>
              </div>
              <button
                onClick={() => {
                  if (date) setStep(2);
                }}
                disabled={!date}
                className="w-full bg-forest-700 hover:bg-forest-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-xl text-base font-semibold transition-all hover:shadow-lg hover:shadow-forest-600/20"
              >
                Continue to Booking
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Summary */}
            <div className="bg-forest-50 rounded-xl p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Date</span>
                <span className="font-medium text-gray-900">{date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time</span>
                <span className="font-medium text-gray-900">{time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">
                  {adults} Adult{adults > 1 ? "s" : ""}
                  {children > 0 && `, ${children} Child${children > 1 ? "ren" : ""}`}
                </span>
                <span className="font-bold text-gray-900">${total}</span>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none text-sm text-gray-900 placeholder:text-gray-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none text-sm text-gray-900 placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-3">
              <button
                onClick={handleReserve}
                disabled={!name || !email}
                className="w-full bg-forest-700 hover:bg-forest-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-xl text-base font-semibold transition-all hover:shadow-lg hover:shadow-forest-600/20 flex items-center justify-center gap-2"
              >
                <Shield size={18} />
                Reserve Now — ${total}
              </button>
              <button
                onClick={() => setStep(1)}
                className="w-full text-gray-500 hover:text-gray-700 text-sm py-2 transition-colors"
              >
                ← Back to details
              </button>
            </div>
          </>
        )}

        {/* Trust signals */}
        <div className="border-t border-gray-100 pt-4 space-y-2">
          {["Free cancellation up to 24hrs", "Instant confirmation", "Secure booking"].map(
            (text) => (
              <div key={text} className="flex items-center gap-2 text-xs text-gray-500">
                <Check size={14} className="text-forest-600" />
                {text}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
