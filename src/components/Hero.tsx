"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.46%20AM%20(1).jpeg",
  "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.47%20AM%20(2).jpeg",
  "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.48%20AM%20(1).jpeg",
  "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.49%20AM.jpeg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % heroImages.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + heroImages.length) % heroImages.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Images */}
      {heroImages.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Rainforest Experience ${i + 1}`}
            fill
            className={`object-cover ${i === current ? "animate-kenburns" : ""}`}
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <span className="text-forest-400 text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-4">
          La Fortuna, Costa Rica
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight max-w-5xl">
          Discover the Magic of
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-forest-300">
            the Rainforest
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
          Personalized tours with expert local guides. Experience wildlife,
          waterfalls, volcanoes, and the breathtaking beauty of Costa Rica.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#tours"
            className="bg-forest-600 hover:bg-forest-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-xl hover:shadow-forest-600/30 hover:-translate-y-0.5"
          >
            Explore Our Tours
          </a>
          <a
            href="https://wa.me/50688888888"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white/40 hover:border-white text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-white/10"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current
                ? "w-8 bg-forest-400"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
