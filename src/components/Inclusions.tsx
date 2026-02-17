"use client";

import { Bus, UtensilsCrossed, Binoculars, Users, Check } from "lucide-react";
import { useLanguage } from "@/i18n/context";

export default function Inclusions() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Bus,
      title: t.about.inclTransport,
      description: t.about.inclTransportDesc,
    },
    {
      icon: UtensilsCrossed,
      title: t.about.inclSnacks,
      description: t.about.inclSnacksDesc,
    },
    {
      icon: Binoculars,
      title: t.about.inclOptics,
      description: t.about.inclOpticsDesc,
    },
    {
      icon: Users,
      title: t.about.inclSmall,
      description: t.about.inclSmallDesc,
    },
  ];

  const inclList = t.about.inclList as unknown as string[];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-forest-600 font-semibold text-sm tracking-[0.2em] uppercase">
            {t.about.inclusionsLabel}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            {t.about.inclusionsTitle1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-forest-500">
              {t.about.inclusionsTitle2}
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            {t.about.inclusionsSubtitle}
          </p>
        </div>

        {/* 4 Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-forest-50 rounded-2xl p-6 border border-forest-100 hover:shadow-lg hover:border-forest-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-forest-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Checklist */}
        <div className="bg-forest-900 rounded-2xl p-8 sm:p-10">
          <h3 className="text-lg font-bold text-white mb-6 text-center">
            {t.about.alsoIncluded}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {inclList.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-forest-500/30 flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-forest-400" />
                </div>
                <span className="text-white/90 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
