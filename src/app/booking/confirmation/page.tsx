"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import {
  CheckCircle,
  XCircle,
  Calendar,
  Clock,
  Users,
  Mail,
  Phone,
  Globe,
  User,
  ArrowLeft,
  TreePine,
  CreditCard,
} from "lucide-react";
import { useLanguage } from "@/i18n/context";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const { t } = useLanguage();
  const ct = t.bookingConfirmation;

  const status = searchParams.get("status");
  const isSuccess = status === "success";

  const orderNumber = searchParams.get("orderNumber") || "";
  const tour = searchParams.get("tour") || "";
  const date = searchParams.get("date") || "";
  const time = searchParams.get("time") || "";
  const adults = searchParams.get("adults") || "0";
  const children = searchParams.get("children") || "0";
  const total = searchParams.get("total") || "0";
  const firstName = searchParams.get("firstName") || "";
  const lastName = searchParams.get("lastName") || "";
  const email = searchParams.get("email") || "";
  const country = searchParams.get("country") || "";
  const phone = searchParams.get("phone") || "";
  const tourSlug = searchParams.get("tourSlug") || "";

  const childrenNum = parseInt(children);

  if (!isSuccess) {
    return (
      <main className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-red-600 p-8 text-center">
              <XCircle size={64} className="mx-auto text-white mb-4" />
              <h1 className="text-2xl font-bold text-white">{ct.paymentFailed}</h1>
            </div>
            <div className="p-8 text-center space-y-6">
              <p className="text-gray-600 text-lg">{ct.paymentFailedMsg}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {tourSlug ? (
                  <Link
                    href={`/tours/${tourSlug}`}
                    className="inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-600 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                  >
                    <ArrowLeft size={18} />
                    {ct.tryAgain}
                  </Link>
                ) : (
                  <Link
                    href="/tours"
                    className="inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-600 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                  >
                    <ArrowLeft size={18} />
                    {ct.tryAgain}
                  </Link>
                )}
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all"
                >
                  {ct.backToHome}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Success Header */}
          <div className="bg-gradient-to-br from-forest-800 to-forest-600 p-8 text-center">
            <CheckCircle size={64} className="mx-auto text-white mb-4" />
            <h1 className="text-2xl font-bold text-white">{ct.title}</h1>
            <p className="text-white/80 mt-2">{ct.subtitle}</p>
          </div>

          <div className="p-8 space-y-8">
            {/* Order Number */}
            {orderNumber && (
              <div className="text-center">
                <span className="text-xs text-gray-500 uppercase tracking-wider">{ct.orderNumber}</span>
                <p className="text-lg font-mono font-bold text-forest-700">{orderNumber}</p>
              </div>
            )}

            {/* Booking Details */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CreditCard size={20} className="text-forest-600" />
                {ct.bookingDetails}
              </h2>
              <div className="bg-forest-50 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-gray-600">
                    <TreePine size={16} />
                    {ct.tour}
                  </span>
                  <span className="font-semibold text-gray-900 text-right max-w-[60%]">{tour}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} />
                    {ct.date}
                  </span>
                  <span className="font-semibold text-gray-900">{date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-gray-600">
                    <Clock size={16} />
                    {ct.time}
                  </span>
                  <span className="font-semibold text-gray-900">{time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-gray-600">
                    <Users size={16} />
                    {ct.guests}
                  </span>
                  <span className="font-semibold text-gray-900">
                    {adults} {ct.adults}
                    {childrenNum > 0 && `, ${children} ${ct.children}`}
                  </span>
                </div>
                <div className="border-t border-forest-200 pt-3 flex items-center justify-between">
                  <span className="font-semibold text-gray-900">{ct.total}</span>
                  <span className="text-2xl font-bold text-forest-700">${total}</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <User size={20} className="text-forest-600" />
                {ct.contactInfo}
              </h2>
              <div className="bg-gray-50 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-gray-600">
                    <User size={16} />
                    {ct.name}
                  </span>
                  <span className="font-semibold text-gray-900">{firstName} {lastName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-gray-600">
                    <Mail size={16} />
                    {ct.email}
                  </span>
                  <span className="font-semibold text-gray-900">{email}</span>
                </div>
                {phone && (
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-gray-600">
                      <Phone size={16} />
                      {ct.phone}
                    </span>
                    <span className="font-semibold text-gray-900">{phone}</span>
                  </div>
                )}
                {country && (
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-gray-600">
                      <Globe size={16} />
                      {ct.country}
                    </span>
                    <span className="font-semibold text-gray-900">{country}</span>
                  </div>
                )}
              </div>
            </div>

            {/* What Happens Next */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">{ct.whatNext}</h2>
              <ol className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-amber-400 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  {ct.step1}
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-amber-400 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  {ct.step2}
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-amber-400 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                  {ct.step3}
                </li>
              </ol>
            </div>

            {/* Contact */}
            <div className="text-center text-sm text-gray-500">
              <p>{ct.questions}</p>
              <div className="flex justify-center gap-4 mt-2">
                <a href="https://wa.me/50685104507" className="text-forest-600 hover:text-forest-700 font-medium">
                  WhatsApp: +506 8510-4507
                </a>
                <a href="mailto:info@rainforestexperiencescr.com" className="text-forest-600 hover:text-forest-700 font-medium">
                  info@rainforestexperiencescr.com
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all"
              >
                <ArrowLeft size={18} />
                {ct.backToHome}
              </Link>
              <Link
                href="/tours"
                className="inline-flex items-center justify-center gap-2 bg-forest-700 hover:bg-forest-600 text-white px-6 py-3 rounded-xl font-semibold transition-all"
              >
                <TreePine size={18} />
                {ct.exploreTours}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function BookingConfirmationPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-gray-50 pt-32 pb-20 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-forest-600 border-t-transparent rounded-full animate-spin" />
        </main>
      }
    >
      <ConfirmationContent />
    </Suspense>
  );
}
