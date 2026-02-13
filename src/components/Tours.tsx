"use client";

import { useRef } from "react";
import Image from "next/image";
import { Clock, Users, Star, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const tours = [
  {
    title: "Night Rainforest Walk",
    description:
      "Explore the magical nocturnal world of the rainforest. Spot red-eyed tree frogs, sleeping toucans, exotic insects, and more with specialized equipment and expert guidance.",
    image:
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.46%20AM%20(2).jpeg",
    duration: "2 hours",
    groupSize: "Max 8 people",
    rating: 5.0,
  },
  {
    title: "Sloth & Wildlife Tour",
    description:
      "Discover Costa Rica's beloved sloths in their natural habitat along with monkeys, toucans, and colorful birds. A relaxed walk perfect for all ages and fitness levels.",
    image:
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.46%20AM%20(3).jpeg",
    duration: "2.5 hours",
    groupSize: "Max 10 people",
    rating: 5.0,
  },
  {
    title: "La Fortuna Waterfall Hike",
    description:
      "Descend 500 steps to reach the stunning 70-meter La Fortuna Waterfall surrounded by lush rainforest. Swim in crystal-clear natural pools at the base.",
    image:
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.47%20AM%20(1).jpeg",
    duration: "3 hours",
    groupSize: "Max 12 people",
    rating: 4.9,
  },
  {
    title: "Hanging Bridges Adventure",
    description:
      "Walk among the treetops on spectacular hanging bridges with panoramic views of the rainforest canopy, Arenal Volcano, and abundant wildlife.",
    image:
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.47%20AM%20(4).jpeg",
    duration: "3 hours",
    groupSize: "Max 10 people",
    rating: 4.9,
  },
  {
    title: "Arenal Volcano Hike",
    description:
      "Trek through ancient lava trails at the base of the majestic Arenal Volcano. Learn about the volcano's history and the incredible ecosystem that has reclaimed the lava fields.",
    image:
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.48%20AM%20(2).jpeg",
    duration: "3.5 hours",
    groupSize: "Max 10 people",
    rating: 5.0,
  },
  {
    title: "Hot Springs & Relaxation",
    description:
      "Unwind in natural volcanic hot springs surrounded by tropical gardens. The perfect way to end your adventure day with thermal mineral waters and pure relaxation.",
    image:
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.48%20AM%20(4).jpeg",
    duration: "4 hours",
    groupSize: "Max 15 people",
    rating: 4.8,
  },
  {
    title: "Safari Float River Tour",
    description:
      "Glide peacefully along the Peanas River on a safari float. Spot crocodiles, monkeys, iguanas, herons, and other wildlife in their natural riverside habitat.",
    image:
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.48%20AM.jpeg",
    duration: "3 hours",
    groupSize: "Max 10 people",
    rating: 4.9,
  },
  {
    title: "Combo Adventure Day",
    description:
      "The ultimate La Fortuna experience — combine multiple tours in one unforgettable day. Customize your adventure with your choice of activities and enjoy a traditional Costa Rican lunch.",
    image:
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.49%20AM%20(1).jpeg",
    duration: "Full day",
    groupSize: "Max 8 people",
    rating: 5.0,
  },
];

function TourCard({ tour, index }: { tour: (typeof tours)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
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
          <span className="text-sm font-semibold text-gray-800">
            {tour.rating}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-forest-700 transition-colors">
          {tour.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {tour.description}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-5">
          <span className="flex items-center gap-1.5">
            <Clock size={15} className="text-forest-600" />
            {tour.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={15} className="text-forest-600" />
            {tour.groupSize}
          </span>
        </div>
        <a
          href="https://wa.me/50688888888"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-forest-600/20 group/btn"
        >
          Book This Tour
          <ChevronRight
            size={16}
            className="transition-transform group-hover/btn:translate-x-1"
          />
        </a>
      </div>
    </motion.div>
  );
}

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
          {tours.map((tour, i) => (
            <TourCard key={tour.title} tour={tour} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
