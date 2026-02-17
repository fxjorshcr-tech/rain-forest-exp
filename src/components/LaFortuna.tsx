"use client";

import Image from "next/image";
import { TreePine, Mountain, Droplets, Bird } from "lucide-react";
import { useLanguage } from "@/i18n/context";

export default function LaFortuna() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Mountain,
      title: t.laFortuna.volcanoTitle,
      description: t.laFortuna.volcanoDesc,
    },
    {
      icon: Droplets,
      title: t.laFortuna.hotSpringsTitle,
      description: t.laFortuna.hotSpringsDesc,
    },
    {
      icon: TreePine,
      title: t.laFortuna.rainforestTitle,
      description: t.laFortuna.rainforestDesc,
    },
    {
      icon: Bird,
      title: t.laFortuna.wildlifeTitle,
      description: t.laFortuna.wildlifeDesc,
    },
  ];

  const stats = [
    { value: "500+", label: t.laFortuna.statSpecies },
    { value: "70m", label: t.laFortuna.statWaterfall },
    { value: "1,670m", label: t.laFortuna.statVolcano },
    { value: "27°C", label: t.laFortuna.statTemp },
  ];

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-forest-400 font-semibold text-sm tracking-[0.2em] uppercase">
            {t.laFortuna.label}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {t.laFortuna.title1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-forest-300">
              {t.laFortuna.title2}
            </span>
          </h2>
          <p className="mt-6 text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">
            {t.laFortuna.subtitle}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
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
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-forest-400">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
