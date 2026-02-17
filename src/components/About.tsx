"use client";

import Image from "next/image";
import { Award, Heart, Shield, Leaf, GraduationCap, Binoculars } from "lucide-react";
import { useLanguage } from "@/i18n/context";

export default function About() {
  const { t } = useLanguage();
  const h = t.homeAbout;

  const highlights = [
    { icon: GraduationCap, title: h.credBachelor, description: h.credBachelorDesc },
    { icon: Award, title: h.credGuide, description: h.credGuideDesc },
    { icon: Shield, title: h.credLifeguard, description: h.credLifeguardDesc },
    { icon: Binoculars, title: h.credBirder, description: h.credBirderDesc },
    { icon: Heart, title: h.credPassion, description: h.credPassionDesc },
    { icon: Leaf, title: h.credEco, description: h.credEcoDesc },
  ];

  return (
    <section id="about" className="py-24 bg-forest-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <Image
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/1gabriel-expert-natural.avif"
                alt="Gabriel — Founder of Rain Forest Experiences CR"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-forest-600/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-forest-400/20 rounded-2xl -z-10" />
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-forest-700">13+</div>
              <div className="text-sm text-gray-600">{h.yearsExp}</div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <span className="text-forest-600 font-semibold text-sm tracking-[0.2em] uppercase">
              {h.label}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              {h.title1}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-forest-500">
                {h.title2}
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>{h.p1}</p>
              <p>{h.p2}</p>
              <p>{h.p3}</p>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/80 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-forest-600/15 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-forest-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-xs mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
