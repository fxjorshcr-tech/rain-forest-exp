import Image from "next/image";
import Link from "next/link";
import { Clock, Users, Star, ChevronRight, Award, Heart, Binoculars, TreePine } from "lucide-react";
import { tours } from "@/data/tours";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tours | Rain Forest Experiences CR",
  description:
    "Explore our nature tours in La Fortuna, Costa Rica. Night walks, sloth tours, volcano hikes, hanging bridges, birdwatching, Rio Celeste and more.",
};

export default function ToursPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/arenal-volcano-mountains-sky-costa-rica.webp"
          alt="Tours in La Fortuna"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-forest-400 font-semibold text-sm tracking-[0.2em] uppercase block mb-3">
            La Fortuna, Costa Rica
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Your Adventure in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-forest-300">
              Paradise
            </span>{" "}
            Starts Here
          </h1>
          <p className="mt-5 text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
            Nestled at the base of the majestic Arenal Volcano, La Fortuna is one of the most
            biodiverse places on the planet. Choose your perfect experience and let us show you
            why this corner of Costa Rica takes everyone&apos;s breath away.
          </p>
        </div>
      </section>

      {/* Intro section - La Fortuna + Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <span className="text-forest-600 font-semibold text-sm tracking-[0.2em] uppercase">
                Why La Fortuna
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                A Place Where Nature{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-forest-500">
                  Comes Alive
                </span>
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  La Fortuna de San Carlos is not just a destination — it&apos;s an experience
                  that transforms everyone who visits. With the mighty Arenal Volcano standing
                  guard over tropical rainforests, crystal-clear rivers, thundering waterfalls,
                  and natural hot springs heated by volcanic activity, this small town in the
                  heart of Costa Rica offers some of the most spectacular natural wonders on
                  Earth.
                </p>
                <p>
                  Home to over 500 wildlife species, more than 350 bird species, and ecosystems
                  that scientists travel from around the world to study, La Fortuna is the kind
                  of place where you can spot a sloth napping in a cecropia tree in the morning,
                  hike ancient lava trails in the afternoon, and watch a red-eyed tree frog
                  emerge from hiding at dusk — all in a single day.
                </p>
                <p>
                  But the true magic of this place isn&apos;t just what you see — it&apos;s who
                  shows it to you.
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/arenal-volcano-tour-visit.webp"
                alt="Arenal Volcano, La Fortuna Costa Rica"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guide / Operation section */}
      <section className="py-20 bg-forest-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] lg:order-1 order-2">
              <Image
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/WhatsApp%20Image%202026-01-14%20at%209.02.46%20AM.jpeg"
                alt="Your certified naturalist guide"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-3xl font-bold text-forest-700">10+</div>
                <div className="text-sm text-gray-600">Years of Experience</div>
              </div>
            </div>
            {/* Text */}
            <div className="lg:order-2 order-1">
              <span className="text-forest-400 font-semibold text-sm tracking-[0.2em] uppercase">
                Your Guide
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
                Not Just a Tour —{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-forest-300">
                  A Personal Connection
                </span>
              </h2>
              <div className="mt-6 space-y-4 text-white/80 leading-relaxed">
                <p>
                  When you book with Rain Forest Experiences, you&apos;re not getting a
                  mass-market tourist operation. You&apos;re getting a certified naturalist guide
                  who was born and raised right here in La Fortuna — someone who grew up
                  exploring these forests, studying the wildlife, and falling in love with every
                  corner of this incredible ecosystem.
                </p>
                <p>
                  With over a decade of experience and official ICT certification from Costa
                  Rica&apos;s Tourism Board, your guide brings deep scientific knowledge
                  combined with the kind of local insight you can only get from someone who
                  calls the rainforest home. The secret spots where sloths sleep, the branches
                  where toucans feed at dawn, the streams where poison dart frogs hide — this
                  is knowledge that no textbook can teach.
                </p>
                <p>
                  We keep our groups small because we believe every guest deserves personal
                  attention. We provide professional optical equipment because we want you to
                  see every detail. And we bring genuine passion to every single tour because
                  sharing this paradise is what we live for.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: Award, label: "ICT Certified Naturalist" },
                  { icon: Heart, label: "Born & Raised in La Fortuna" },
                  { icon: Binoculars, label: "Professional Optical Equipment" },
                  { icon: TreePine, label: "Small Groups, Big Experiences" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 bg-white/10 rounded-xl p-3"
                    >
                      <Icon size={20} className="text-forest-400 flex-shrink-0" />
                      <span className="text-sm font-medium text-white/90">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Tours Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section intro */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-forest-600 font-semibold text-sm tracking-[0.2em] uppercase">
              Choose Your Adventure
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Which Experience{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-forest-500">
                Calls to You?
              </span>
            </h2>
            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              Whether you want to walk among the treetops on hanging bridges, discover the
              nocturnal world of the rainforest, hike ancient lava trails, or float down a
              river spotting wildlife — we have the perfect adventure waiting for you. Every
              tour includes a certified guide, entrance fees, snacks, and professional equipment.
              All you need to bring is your sense of wonder.
            </p>
          </div>

          {/* Tours grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {tours.map((tour) => (
              <Link
                key={tour.slug}
                href={`/tours/${tour.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star size={14} className="text-gold-500 fill-gold-500" />
                    <span className="text-sm font-semibold text-gray-800">5.0</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-forest-700/90 backdrop-blur-sm text-white text-sm font-bold px-3 py-1 rounded-full">
                      From ${tour.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-forest-700 transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {tour.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Clock size={15} className="text-forest-600" />
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users size={15} className="text-forest-600" />
                      {tour.maxGroup}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-forest-700 font-semibold text-sm group-hover:gap-2 transition-all">
                    View Details & Book
                    <ChevronRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Can&apos;t Decide?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-forest-500">
              We&apos;ll Help You Choose
            </span>
          </h2>
          <p className="mt-5 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Not sure which tour is right for you? Tell us about your interests, your group,
            and how much time you have — and we&apos;ll recommend the perfect experience. You
            can also combine multiple tours into a custom adventure day. Just ask!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/50688888888?text=Hello!%20I%20need%20help%20choosing%20the%20right%20tour%20for%20my%20trip%20to%20La%20Fortuna."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-forest-700 hover:bg-forest-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg hover:shadow-forest-600/20 inline-flex items-center justify-center gap-2"
            >
              Chat With Us on WhatsApp
            </a>
            <Link
              href="/contact"
              className="border-2 border-forest-700 text-forest-700 hover:bg-forest-700 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all text-center"
            >
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
