import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
import { getTours, getTourBySlug } from "@/data/tours";
import BookingForm from "@/components/BookingForm";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const tours = await getTours();
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = await getTourBySlug(slug);
  if (!tour) return { title: "Tour Not Found" };
  return {
    title: `${tour.title} | Rain Forest Experiences CR`,
    description: tour.description,
  };
}

export default async function TourPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = await getTourBySlug(slug);
  if (!tour) notFound();

  const allTours = await getTours();
  const otherTours = allTours.filter((t) => t.slug !== tour.slug).slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
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
                Home
              </Link>
              <ChevronRight size={14} />
              <Link href="/tours" className="hover:text-white transition-colors">
                Tours
              </Link>
              <ChevronRight size={14} />
              <span className="text-white">{tour.shortTitle}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              {tour.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1.5">
                <Clock size={16} />
                {tour.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={16} />
                La Fortuna, Costa Rica
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={16} />
                {tour.schedule}
              </span>
              <span className="flex items-center gap-1.5">
                <Users size={16} />
                {tour.maxGroup}
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
                  About This Tour
                </h2>
                <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
                  {tour.longDescription.split("\n\n").map((p, i) => (
                    <p key={i} className="mb-4 last:mb-0">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Tour Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tour.highlights.map((h) => (
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
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-3">
                    {tour.includes.map((item) => (
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
                    What to Bring
                  </h3>
                  <ul className="space-y-3">
                    {tour.whatToBring.map((item) => (
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
                  Tour Information
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Duration
                    </div>
                    <div className="font-semibold text-gray-900">
                      {tour.duration}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Difficulty
                    </div>
                    <div className="font-semibold text-gray-900">
                      {tour.difficulty}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Start Times
                    </div>
                    <div className="font-semibold text-gray-900">
                      {tour.startTimes.join(", ")}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Min. People
                    </div>
                    <div className="font-semibold text-gray-900">
                      {tour.minPeople} adults
                    </div>
                  </div>
                </div>
                {tour.note && (
                  <div className="mt-4 flex items-start gap-2 text-sm text-amber-700 bg-amber-50 rounded-xl p-3">
                    <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                    {tour.note}
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
              More Adventures
            </span>
            <h2 className="mt-2 text-3xl font-bold text-white">
              You Might Also Like
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherTours.map((t) => (
              <Link
                key={t.slug}
                href={`/tours/${t.slug}`}
                className="group relative rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-forest-400/10 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.title}
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
                        From ${t.price}
                      </span>
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                        {t.difficulty}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-forest-300 transition-colors">
                      {t.title}
                    </h3>
                    <p className="text-white/60 text-sm mt-1 line-clamp-2">
                      {t.description}
                    </p>
                    <div className="mt-3 flex items-center gap-4 text-xs text-white/50">
                      <span className="flex items-center gap-1">
                        <Clock size={13} />
                        {t.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={13} />
                        {t.maxGroup}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
