"use client";

import Image from "next/image";
import {
  Award,
  Heart,
  Shield,
  Leaf,
  GraduationCap,
  Binoculars,
  Bus,
  Coffee,
  Camera,
  Check,
} from "lucide-react";
import { useLanguage } from "@/i18n/context";
import Reviews from "@/components/Reviews";

const galleryImages = [
  {
    src: "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/1gabriel-guide-costa-rica.webp",
    alt: "Gabriel guiding a tour in Costa Rica's rainforest",
  },
  {
    src: "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/1binocoulars-tour-guide-cr.webp",
    alt: "Gabriel using binoculars for wildlife observation",
  },
  {
    src: "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/1gabriel-expert-natural.avif",
    alt: "Gabriel as expert naturalist guide",
  },
  {
    src: "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/1guiding-people-cr.avif",
    alt: "Gabriel guiding visitors through the rainforest",
  },
  {
    src: "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/1tour-guide-la-fortuna.avif",
    alt: "Gabriel as tour guide in La Fortuna",
  },
  {
    src: "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/1Tour-la-fortuna.webp",
    alt: "Tour experience in La Fortuna with Gabriel",
  },
  {
    src: "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/1volcan-arenal-gabriel.avif",
    alt: "Gabriel at Arenal Volcano viewpoint",
  },
  {
    src: "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/1gabriel-guide.avif",
    alt: "Gabriel, professional naturalist guide",
  },
  {
    src: "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/1Gabriel-Tour-Guide.webp",
    alt: "Gabriel leading a tour group",
  },
];

export default function AboutContent() {
  const { t } = useLanguage();
  const a = t.about;

  const credentials = [
    { icon: GraduationCap, title: a.credBachelor, description: a.credBachelorDesc },
    { icon: Award, title: a.credGuide, description: a.credGuideDesc },
    { icon: Shield, title: a.credLifeguard, description: a.credLifeguardDesc },
    { icon: Heart, title: a.credFirstAid, description: a.credFirstAidDesc },
    { icon: Binoculars, title: a.credBirder, description: a.credBirderDesc },
    { icon: Leaf, title: a.credNationwide, description: a.credNationwideDesc },
  ];

  const stats = [
    { value: "13+", label: a.statsYears },
    { value: "5,000+", label: a.statsGuests },
    { value: "8", label: a.statsTours },
    { value: "5.0", label: a.statsRating },
  ];

  const tourInclusions = [
    { icon: Bus, title: a.inclTransport, description: a.inclTransportDesc },
    { icon: Coffee, title: a.inclSnacks, description: a.inclSnacksDesc },
    { icon: Binoculars, title: a.inclOptics, description: a.inclOpticsDesc },
    { icon: Camera, title: a.inclSmall, description: a.inclSmallDesc },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/1volcan-arenal-gabriel.avif"
          alt="Gabriel — Naturalist Guide at Rain Forest Experiences"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <span className="text-forest-400 font-semibold text-sm tracking-[0.2em] uppercase block mb-3">
            {a.heroSubtitle}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            {a.heroTitle}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-forest-300">
              {a.heroName}
            </span>
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            {a.heroTagline} &bull; {a.heroLocation}
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                <Image
                  src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/1gabriel-guide.avif"
                  alt="Gabriel — Your local naturalist guide"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-forest-600/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-forest-400/20 rounded-2xl -z-10" />
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-3xl font-bold text-forest-700">13+</div>
                <div className="text-sm text-gray-600">{a.yearsExp}</div>
              </div>
            </div>
            <div>
              <span className="text-forest-600 font-semibold text-sm tracking-[0.2em] uppercase">
                {a.storyLabel}
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                {a.storyTitle1}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-forest-500">
                  {a.storyTitle2}
                </span>
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>{a.storyP1}</p>
                <p>{a.storyP2}</p>
                <p>{a.storyP3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-forest-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-forest-600 font-semibold text-sm tracking-[0.2em] uppercase block mb-3">
              {a.credLabel}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {a.credTitle1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-forest-500">
                {a.credTitle2}
              </span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              {a.credSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {credentials.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-forest-600/15 flex items-center justify-center mb-5">
                    <Icon size={28} className="text-forest-700" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-forest-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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

      {/* Photo Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-forest-600 font-semibold text-sm tracking-[0.2em] uppercase block mb-3">
              {a.galleryLabel}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {a.galleryTitle1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-forest-500">
                {a.galleryTitle2}
              </span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              {a.gallerySubtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden shadow-lg group ${
                  index === 0 ? "md:row-span-2 aspect-[3/4]" : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included in Every Tour */}
      <section className="py-20 bg-forest-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-forest-600 font-semibold text-sm tracking-[0.2em] uppercase block mb-3">
              {a.inclusionsLabel}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {a.inclusionsTitle1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-forest-500">
                {a.inclusionsTitle2}
              </span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              {a.inclusionsSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tourInclusions.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-forest-600/15 flex items-center justify-center mb-5 mx-auto">
                    <Icon size={32} className="text-forest-700" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4 text-center">
              {a.alsoIncluded}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {a.inclList.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-forest-700" />
                  </div>
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <Reviews />

      {/* Values / Commitment */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {a.commitTitle}
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>{a.commitP1}</p>
              <p>{a.commitP2}</p>
              <p>{a.commitP3}</p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/tours"
                className="bg-forest-700 hover:bg-forest-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg text-center"
              >
                {a.exploreTours}
              </a>
              <a
                href="/contact"
                className="border-2 border-forest-700 text-forest-700 hover:bg-forest-700 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all text-center"
              >
                {a.getInTouch}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
