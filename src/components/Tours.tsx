import Image from "next/image";
import Link from "next/link";
import { Clock, Users, Star, ChevronRight } from "lucide-react";
import { tours } from "@/data/tours";

export default function Tours() {
  return (
    <section id="tours" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-forest-600 font-semibold text-sm tracking-[0.2em] uppercase">
            Our Experiences
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Unforgettable{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-forest-500">
              Adventures
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Choose from our carefully crafted tours, each designed to give you an
            authentic and personal connection with Costa Rica&apos;s incredible
            nature.
          </p>
        </div>

        {/* Tour cards grid */}
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-forest-700 transition-colors">
                  {tour.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {tour.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-5">
                  <span className="flex items-center gap-1.5">
                    <Clock size={15} className="text-forest-600" />
                    {tour.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users size={15} className="text-forest-600" />
                    {tour.maxGroup}
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-forest-700 font-semibold text-sm group-hover:gap-3 transition-all">
                  View Details & Book
                  <ChevronRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg hover:shadow-forest-600/20"
          >
            View All Tours
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
