import Image from "next/image";
import Link from "next/link";
import { Clock, Users, Star, ChevronRight } from "lucide-react";
import { tours } from "@/data/tours";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tours | Rain Forest Experiences CR",
  description:
    "Explore our nature tours in La Fortuna, Costa Rica. Night walks, sloth tours, volcano hikes, hanging bridges, birdwatching, Rio Celeste and more.",
};

export default function ToursPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/arenal-volcano-mountains-sky-costa-rica.webp"
          alt="Tours in La Fortuna"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <span className="text-forest-400 font-semibold text-sm tracking-[0.2em] uppercase block mb-3">
            Our Experiences
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-forest-300">
              Tours
            </span>
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto text-lg">
            Personalized adventures with certified local guides in La Fortuna, Costa Rica
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {tours.map((tour) => (
              <Link
                key={tour.slug}
                href={`/tours/${tour.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star size={14} className="text-gold-500 fill-gold-500" />
                    <span className="text-sm font-semibold text-gray-800">5.0</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-forest-700/90 backdrop-blur-sm text-white text-sm font-bold px-3 py-1 rounded-full">
                      From ${tour.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-forest-700 transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {tour.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Clock size={15} className="text-forest-600" />
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users size={15} className="text-forest-600" />
                      {tour.maxGroup}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-forest-700 font-semibold text-sm group-hover:gap-2 transition-all">
                    View Details
                    <ChevronRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
