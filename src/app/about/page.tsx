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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Gabriel | Rain Forest Experiences CR",
  description:
    "Meet Gabriel, your certified naturalist guide in La Fortuna, Costa Rica. Bachelor's in Ecological Tourism, 13+ years of experience, professional lifeguard, and passionate about sharing the magic of the rainforest.",
};

const credentials = [
  {
    icon: GraduationCap,
    title: "Bachelor's in Ecological Tourism",
    description:
      "Graduated from the University of Costa Rica (UCR) with a Bachelor's degree in Ecological Tourism, combining academic knowledge with hands-on field experience.",
  },
  {
    icon: Award,
    title: "Licensed General Guide — INA",
    description:
      "Holds a General Guide License issued by the National Learning Institute (INA) of Costa Rica, the official certification for professional tour guides in the country.",
  },
  {
    icon: Shield,
    title: "Professional Lifeguard",
    description:
      "Certified professional lifeguard, ensuring the safety of guests during water-related activities and outdoor adventures.",
  },
  {
    icon: Heart,
    title: "First Aid & CPR Certified",
    description:
      "Trained in first aid and CPR, prepared to handle any emergency situation in the field so you can explore with complete peace of mind.",
  },
  {
    icon: Binoculars,
    title: "Expert Birder & Naturalist",
    description:
      "Over 13 years of experience in birdwatching and general naturalism, with deep knowledge of Costa Rica's 900+ bird species and tropical ecosystems.",
  },
  {
    icon: Leaf,
    title: "Nationwide Touring Experience",
    description:
      "Extensive experience leading tours across all of Costa Rica — from Arenal and Monteverde to Manuel Antonio, Corcovado, and beyond.",
  },
];

const stats = [
  { value: "13+", label: "Years of Experience" },
  { value: "5,000+", label: "Happy Guests" },
  { value: "8", label: "Unique Tours" },
  { value: "5.0", label: "Google Rating" },
];

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

const tourInclusions = [
  {
    icon: Bus,
    title: "Round-Trip Hotel Transportation",
    description:
      "Complimentary pick-up and drop-off from your hotel in the La Fortuna area. Sit back, relax, and let us handle the logistics.",
  },
  {
    icon: Coffee,
    title: "Snacks & Refreshments",
    description:
      "Fresh tropical fruits, water, and light snacks are included on every tour to keep you energized throughout your adventure.",
  },
  {
    icon: Binoculars,
    title: "Professional Optical Equipment",
    description:
      "High-powered spotting scopes and binoculars provided so you can get incredible close-up views of wildlife and birds.",
  },
  {
    icon: Camera,
    title: "Small Groups & Personal Attention",
    description:
      "We keep our groups small to ensure a personalized, intimate experience where every guest gets the attention they deserve.",
  },
];

export default function AboutPage() {
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
            Meet Your Guide
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-forest-300">
              Gabriel
            </span>
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Certified Naturalist Guide &bull; La Fortuna, Costa Rica
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
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
                <div className="text-sm text-gray-600">Years of Experience</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-forest-600 font-semibold text-sm tracking-[0.2em] uppercase">
                Meet Gabriel
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                Your Personal Connection
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-forest-500">
                  to the Rainforest
                </span>
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Born and raised in the heart of La Fortuna, I grew up
                  surrounded by the wonders of the rainforest. From childhood
                  explorations along volcanic trails to earning my Bachelor&apos;s
                  degree in Ecological Tourism from the University of Costa Rica,
                  my passion has always been sharing the magic of Costa
                  Rica&apos;s biodiversity with visitors from around the world.
                </p>
                <p>
                  With over 13 years of professional experience as a naturalist
                  guide, I bring a deep, personal knowledge of the local
                  ecosystem — the secret spots where sloths sleep, the trails
                  where toucans feed, and the streams where poison dart frogs
                  thrive. I&apos;ve guided tours across the entire country, from
                  the cloud forests of Monteverde to the pristine shores of
                  Corcovado, but La Fortuna will always be my home and my
                  greatest passion.
                </p>
                <p>
                  My mission is to create authentic, unforgettable connections
                  between people and nature, while supporting conservation and
                  the local community. When you book with Rain Forest
                  Experiences, you&apos;re not just getting a tour — you&apos;re
                  gaining a friend in the jungle.
                </p>
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
              Qualifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-forest-500">
                Credentials
              </span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Gabriel combines formal academic training with over a decade of
              hands-on field experience to deliver world-class guided
              experiences.
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
              In the Field
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Gabriel{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-forest-500">
                in Action
              </span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              From spotting rare birds with professional optics to leading groups
              through hanging bridges and volcanic trails — here&apos;s a
              glimpse of what your experience will look like.
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
              All Tours Include
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Everything You Need for a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-forest-500">
                Perfect Adventure
              </span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Every tour with Gabriel includes these essentials so you can focus
              on enjoying the experience — no hidden fees, no surprises.
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
              Also Included on Every Tour
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Round-trip hotel pick-up & drop-off in La Fortuna",
                "Certified bilingual naturalist guide (Gabriel)",
                "Park or reserve entrance fees",
                "Professional spotting scopes & binoculars",
                "Fresh tropical fruit snacks & water",
                "Small group experience (personalized attention)",
              ].map((item) => (
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

      {/* Values / Commitment */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Commitment
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                At Rain Forest Experiences, we believe that the best way to
                protect nature is to help people fall in love with it. Every tour
                Gabriel leads is designed not just to show you the rainforest,
                but to help you understand it — its incredible complexity, its
                fragility, and the vital role it plays in our planet&apos;s
                health.
              </p>
              <p>
                We keep our groups small to minimize our impact on the
                environment and maximize your experience. We support local
                conservation projects and work with communities to ensure that
                tourism benefits the people who live alongside the rainforest.
              </p>
              <p>
                We are proud members of the La Fortuna community, and we are
                committed to sharing our paradise with the world in a way that
                preserves it for generations to come.
              </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/tours"
                className="bg-forest-700 hover:bg-forest-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg text-center"
              >
                Explore Our Tours
              </a>
              <a
                href="/contact"
                className="border-2 border-forest-700 text-forest-700 hover:bg-forest-700 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
