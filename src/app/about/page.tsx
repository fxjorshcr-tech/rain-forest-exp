import Image from "next/image";
import { Award, Heart, Shield, Leaf, Users, Star, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Rain Forest Experiences CR",
  description:
    "Meet your local guide. Born and raised in La Fortuna, Costa Rica. Certified naturalist with 10+ years of experience sharing the magic of the rainforest.",
};

const highlights = [
  {
    icon: Award,
    title: "ICT Certified Naturalist",
    description:
      "Officially certified by the Costa Rican Tourism Board (ICT) with extensive training in biology, ecology, and tropical ecosystems.",
  },
  {
    icon: Heart,
    title: "Passion for Nature",
    description:
      "Born and raised in La Fortuna with a lifelong dedication to understanding and protecting the rainforest and its inhabitants.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "First-aid certified with years of field experience ensuring every adventure is safe, comfortable, and memorable for all guests.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious Tourism",
    description:
      "Committed to sustainable practices, supporting local conservation efforts, and minimizing environmental impact on every tour.",
  },
];

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "5,000+", label: "Happy Guests" },
  { value: "8", label: "Unique Tours" },
  { value: "5.0", label: "Google Rating" },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/arenal-volcano-tour-visit.webp"
          alt="About Rain Forest Experiences"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <span className="text-forest-400 font-semibold text-sm tracking-[0.2em] uppercase block mb-3">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-forest-300">
              Us
            </span>
          </h1>
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
                  src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.46%20AM.jpeg"
                  alt="Your local guide"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-forest-600/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-forest-400/20 rounded-2xl -z-10" />
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-3xl font-bold text-forest-700">10+</div>
                <div className="text-sm text-gray-600">Years of Experience</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-forest-600 font-semibold text-sm tracking-[0.2em] uppercase">
                Meet Your Guide
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
                  Born and raised in the heart of La Fortuna, I grew up surrounded
                  by the wonders of the rainforest. From childhood explorations to
                  becoming a certified naturalist guide, my passion has always been
                  sharing the magic of Costa Rica&apos;s biodiversity with visitors
                  from around the world.
                </p>
                <p>
                  With over a decade of experience leading tours through the
                  rainforest, I bring a deep, personal knowledge of the local
                  ecosystem — the secret spots where sloths sleep, the trails where
                  toucans feed, and the streams where poison dart frogs thrive.
                  Every tour is a personal experience, not just a walk through the
                  woods.
                </p>
                <p>
                  My mission is to create authentic, unforgettable connections
                  between people and nature, while supporting conservation and the
                  local community. When you book with Rain Forest Experiences,
                  you&apos;re getting more than a tour — you&apos;re gaining a
                  friend in the jungle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-forest-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-forest-500">
                Us
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item) => {
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

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Commitment
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                At Rain Forest Experiences, we believe that the best way to protect
                nature is to help people fall in love with it. Every tour we lead is
                designed not just to show you the rainforest, but to help you
                understand it — its incredible complexity, its fragility, and the
                vital role it plays in our planet&apos;s health.
              </p>
              <p>
                We keep our groups small to minimize our impact on the environment
                and maximize your experience. We support local conservation projects
                and work with communities to ensure that tourism benefits the people
                who live alongside the rainforest.
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
