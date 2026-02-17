"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/context";

const HERO_IMAGE =
  "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/arenal-volcano-tour-visit.webp";

const LOGO_URL =
  "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/rain-forest-exp-logo-trans.png";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src={HERO_IMAGE}
        alt="Arenal Volcano, La Fortuna Costa Rica"
        fill
        className="object-cover animate-kenburns"
        priority
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          {/* Left: Text */}
          <div>
            <span className="text-forest-400 text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-4 block">
              {t.hero.location}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t.hero.title1}
              <br />
              {t.hero.title2}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-forest-300">
                {t.hero.title3}
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#tours"
                className="bg-forest-600 hover:bg-forest-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-xl hover:shadow-forest-600/30 hover:-translate-y-0.5 text-center"
              >
                {t.hero.exploreTours}
              </a>
              <a
                href="https://wa.me/50685104507"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/40 hover:border-white text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-white/10 text-center"
              >
                {t.hero.contactUs}
              </a>
            </div>
          </div>

          {/* Right: Logo grande */}
          <div className="hidden lg:flex justify-center items-center">
            <Image
              src={LOGO_URL}
              alt="Rain Forest Experiences CR"
              width={500}
              height={500}
              className="w-[400px] xl:w-[480px] h-auto object-contain drop-shadow-2xl opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
