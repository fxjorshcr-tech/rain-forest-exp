"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Users,
  MapPin,
  Calendar,
  Check,
  ChevronRight,
  Star,
  AlertCircle,
} from "lucide-react";
import type { Tour } from "@/data/tours";
import BookingForm from "@/components/BookingForm";
import { useLanguage } from "@/i18n/context";
import { tourContentEs } from "@/i18n/tourContent";

export default function TourDetailContent({
  tour,
  otherTours,
}: {
  tour: Tour;
  otherTours: Tour[];
}) {
  const { t, locale } = useLanguage();
  const td = (t.tourData as Record<string, { title: string; shortTitle: string; description: string }>)[tour.slug];
  const title = td?.title ?? tour.title;
  const shortTitle = td?.shortTitle ?? tour.shortTitle;

  // Full content translation for detail page
  const esContent = locale === "es" ? tourContentEs[tour.slug] : null;
  const longDescription = esContent?.longDescription ?? tour.longDescription;
  const highlights = esContent?.highlights ?? tour.highlights;
  const includes = esContent?.includes ?? tour.includes;
  const whatToBring = esContent?.whatToBring ?? tour.whatToBring;
  const note = esContent?.note ?? tour.note;

  // Metadata translations
  const duration = (t.tourMeta.durations as Record<string, string>)[tour.duration] ?? tour.duration;
  const difficulty = (t.tourMeta.difficulties as Record<string, string>)[tour.difficulty] ?? tour.difficulty;
  const schedule = t.tourMeta.schedule;
  const maxGroup = t.tourMeta.maxGroup;

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <Image
          src={tour.image}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-white/70 mb-3">
              <Link href="/" className="hover:text-white transition-colors">
                {t.tourDetail.home}
              </Link>
              <ChevronRight size={14} />
              <Link href="/tours" className="hover:text-white transition-colors">
                {t.tourDetail.tours}
              </Link>
              <ChevronRight size={14} />
              <span className="text-white">{shortTitle}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              {title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1.5">
                <Clock size={16} />
                {duration}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={16} />
                La Fortuna, Costa Rica
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={16} />
                {schedule}
              </span>
              <span className="flex items-center gap-1.5">
                <Users size={16} />
                {maxGroup}
              </span>
              <span className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <Star size={14} className="text-gold-400 fill-gold-400" />
                <span className="font-semibold text-white">5.0</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content + Booking */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t.tourDetail.aboutTour}
                </h2>
                <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
                  {longDescription.split("\n\n").map((p, i) => (
                    <p key={i} className="mb-4 last:mb-0">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t.tourDetail.highlights}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={14} className="text-forest-700" />
                      </div>
                      <span className="text-gray-700 text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Details grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* What's included */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {t.tourDetail.whatsIncluded}
                  </h3>
                  <ul className="space-y-3">
                    {includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check
                          size={16}
                          className="text-forest-600 flex-shrink-0 mt-0.5"
                        />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What to bring */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {t.tourDetail.whatToBring}
                  </h3>
                  <ul className="space-y-3">
                    {whatToBring.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <ChevronRight
                          size={16}
                          className="text-forest-600 flex-shrink-0 mt-0.5"
                        />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Quick info */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {t.tourDetail.tourInfo}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      {t.tourDetail.duration}
                    </div>
                    <div className="font-semibold text-gray-900">
                      {duration}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      {t.tourDetail.difficulty}
                    </div>
                    <div className="font-semibold text-gray-900">
                      {difficulty}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      {t.tourDetail.startTimes}
                    </div>
                    <div className="font-semibold text-gray-900">
                      {tour.startTimes.join(", ")}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      {t.tourDetail.minPeople}
                    </div>
                    <div className="font-semibold text-gray-900">
                      {tour.minPeople} {t.tourDetail.adults}
                    </div>
                  </div>
                </div>
                {note && (
                  <div className="mt-4 flex items-start gap-2 text-sm text-amber-700 bg-amber-50 rounded-xl p-3">
                    <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                    {note}
                  </div>
                )}
              </div>
            </div>

            {/* Booking sidebar */}
            <div className="lg:col-span-1">
              <BookingForm tour={tour} />
            </div>
          </div>
        </div>
      </section>

      {/* Other tours */}
      <section className="py-20 bg-forest-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-forest-400 font-semibold text-sm tracking-[0.2em] uppercase">
              {t.tourDetail.moreAdventures}
            </span>
            <h2 className="mt-2 text-3xl font-bold text-white">
              {t.tourDetail.youMightAlsoLike}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherTours.map((ot) => {
              const otd = (t.tourData as Record<string, { title: string; description: string }>)[ot.slug];
              const otTitle = otd?.title ?? ot.title;
              const otDesc = otd?.description ?? ot.description;

              return (
                <Link
                  key={ot.slug}
                  href={`/tours/${ot.slug}`}
                  className="group relative rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-forest-400/10 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={ot.image}
                      alt={otTitle}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <Star size={13} className="text-gold-500 fill-gold-500" />
                      <span className="text-xs font-bold text-gray-800">5.0</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-forest-600/90 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full">
                          {t.toursSection.from} ${ot.price}
                        </span>
                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                          {ot.difficulty}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-forest-300 transition-colors">
                        {otTitle}
                      </h3>
                      <p className="text-white/60 text-sm mt-1 line-clamp-2">
                        {otDesc}
                      </p>
                      <div className="mt-3 flex items-center gap-4 text-xs text-white/50">
                        <span className="flex items-center gap-1">
                          <Clock size={13} />
                          {ot.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users size={13} />
                          {ot.maxGroup}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
