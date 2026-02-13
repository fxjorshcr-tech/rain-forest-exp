"use client";

import { useRef } from "react";
import Image from "next/image";
import { TreePine, Mountain, Droplets, Bird } from "lucide-react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: Mountain,
    title: "Arenal Volcano",
    description:
      "One of the most active volcanoes in the world, towering at 1,670 meters with breathtaking views and rich biodiversity on its slopes.",
  },
  {
    icon: Droplets,
    title: "Natural Hot Springs",
    description:
      "Heated by volcanic activity, the thermal waters create natural hot springs throughout the region, perfect for relaxation after a day of adventure.",
  },
  {
    icon: TreePine,
    title: "Tropical Rainforest",
    description:
      "Dense, lush rainforest covering over 500,000 hectares with some of the highest biodiversity on Earth — home to 5% of the world's species.",
  },
  {
    icon: Bird,
    title: "Incredible Wildlife",
    description:
      "Spot sloths, toucans, monkeys, poison dart frogs, quetzals, and hundreds of other species in their pristine natural habitat.",
  },
];

export default function LaFortuna() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="fortuna" className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/arenal-volcano-mountains-sky-costa-rica.webp"
          alt="Arenal Volcano, La Fortuna"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark-900/80 backdrop-blur-[2px]" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-forest-400 font-semibold text-sm tracking-[0.2em] uppercase">
            Our Paradise
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            La Fortuna de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-forest-300">
              San Carlos
            </span>
          </h2>
          <p className="mt-6 text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">
            Nestled at the base of the majestic Arenal Volcano, La Fortuna is a
            small town with enormous natural beauty. Surrounded by tropical
            rainforest, waterfalls, rivers, and volcanic hot springs, it is one
            of Costa Rica&apos;s most spectacular destinations and a true
            paradise for nature lovers and adventurers.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/15 hover:border-forest-400/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-forest-600/30 flex items-center justify-center mb-5 group-hover:bg-forest-600/50 transition-colors">
                  <Icon size={28} className="text-forest-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { value: "500+", label: "Wildlife Species" },
            { value: "70m", label: "Waterfall Height" },
            { value: "1,670m", label: "Volcano Elevation" },
            { value: "27°C", label: "Average Temperature" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-forest-400">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
