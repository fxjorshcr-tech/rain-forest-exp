"use client";

import { useState } from "react";
import { Shield, Clock, Users, Check, CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import type { Tour } from "@/data/tours";
import { useLanguage } from "@/i18n/context";

export default function BookingForm({ tour }: { tour: Tour }) {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [time, setTime] = useState(tour.startTimes[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<1 | 2>(1);
  const { t, locale } = useLanguage();

  const total = adults * tour.price + children * Math.round(tour.price * 0.5);

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString(locale === "es" ? "es-CR" : "en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  const handleReserve = () => {
    const msg = encodeURIComponent(
      `${t.booking.whatsappMsg}\n\n` +
        `${t.booking.tourLabel}: ${tour.title}\n` +
        `${t.booking.dateLabel}: ${formattedDate}\n` +
        `${t.booking.timeLabel}: ${time}\n` +
        `${t.booking.adultsMsg}: ${adults} ($${tour.price})\n` +
        `${t.booking.childrenMsg}: ${children} ($${Math.round(tour.price * 0.5)})\n` +
        `${t.booking.totalMsg}: $${total}\n\n` +
        `${t.booking.nameMsg}: ${name}\n` +
        `${t.booking.emailMsg}: ${email}`
    );
    window.open(`https://wa.me/50685104507?text=${msg}`, "_blank");
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const trustSignals = [t.booking.freeCancellation, t.booking.instantConfirmation, t.booking.secureBooking];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-28">
      {/* Header */}
      <div className="bg-forest-900 text-white p-6">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold">${tour.price}</span>
          <span className="text-white/70 text-sm">{t.booking.perPerson}</span>
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
            {/* Calendar */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                <CalendarDays size={16} className="text-forest-600" />
                {t.booking.selectDate}
              </label>
              <div className="flex justify-center">
                <DayPicker
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={{ before: today }}
                  showOutsideDays
                  classNames={{
                    root: "w-full",
                    months: "w-full",
                    month: "w-full",
                    month_caption: "flex justify-center items-center mb-2",
                    caption_label: "text-sm font-semibold text-gray-900",
                    nav: "flex items-center justify-between absolute inset-x-0 top-0 px-1",
                    button_previous: "p-1.5 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors",
                    button_next: "p-1.5 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors",
                    weekdays: "grid grid-cols-7 mb-1",
                    weekday: "text-xs font-medium text-gray-400 text-center py-1",
                    weeks: "w-full",
                    week: "grid grid-cols-7",
                    day: "text-center p-0",
                    day_button:
                      "w-9 h-9 mx-auto text-sm rounded-lg transition-all hover:bg-forest-50 hover:text-forest-700 font-medium",
                    selected:
                      "!bg-forest-700 !text-white !rounded-lg !hover:bg-forest-600",
                    today: "font-bold text-forest-700",
                    outside: "text-gray-300",
                    disabled: "text-gray-200 cursor-not-allowed hover:bg-transparent",
                    month_grid: "w-full relative",
                  }}
                  components={{
                    Chevron: ({ orientation }) =>
                      orientation === "left" ? (
                        <ChevronLeft size={16} />
                      ) : (
                        <ChevronRight size={16} />
                      ),
                  }}
                />
              </div>
              {selectedDate && (
                <div className="mt-2 text-center">
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-forest-700 bg-forest-50 px-3 py-1 rounded-full">
                    <CalendarDays size={14} />
                    {formattedDate}
                  </span>
                </div>
              )}
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {t.booking.startTime}
              </label>
              <div className="flex flex-wrap gap-2">
                {tour.startTimes.map((st) => (
                  <button
                    key={st}
                    onClick={() => setTime(st)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      time === st
                        ? "bg-forest-700 text-white shadow-md shadow-forest-700/20"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Adults */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {t.booking.adults}
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
                {t.booking.children}
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
                <span className="text-gray-600 font-medium">{t.booking.total}</span>
                <span className="text-2xl font-bold text-gray-900">${total}</span>
              </div>
              <button
                onClick={() => {
                  if (selectedDate) setStep(2);
                }}
                disabled={!selectedDate}
                className="w-full bg-forest-700 hover:bg-forest-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-xl text-base font-semibold transition-all hover:shadow-lg hover:shadow-forest-600/20"
              >
                {t.booking.continueTo}
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Summary */}
            <div className="bg-forest-50 rounded-xl p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">{t.booking.date}</span>
                <span className="font-medium text-gray-900">{formattedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t.booking.time}</span>
                <span className="font-medium text-gray-900">{time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">
                  {adults} {adults > 1 ? t.booking.adultsLabel : t.booking.adult}
                  {children > 0 && `, ${children} ${children > 1 ? t.booking.childrenLabel : t.booking.child}`}
                </span>
                <span className="font-bold text-gray-900">${total}</span>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {t.booking.fullName}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.booking.yourName}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 outline-none text-sm text-gray-900 placeholder:text-gray-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {t.booking.email}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.booking.emailPlaceholder}
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
                {t.booking.reserveNow} — ${total}
              </button>
              <button
                onClick={() => setStep(1)}
                className="w-full text-gray-500 hover:text-gray-700 text-sm py-2 transition-colors"
              >
                {t.booking.backToDetails}
              </button>
            </div>
          </>
        )}

        {/* Trust signals */}
        <div className="border-t border-gray-100 pt-4 space-y-2">
          {trustSignals.map((text) => (
            <div key={text} className="flex items-center gap-2 text-xs text-gray-500">
              <Check size={14} className="text-forest-600" />
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
