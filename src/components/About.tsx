import Image from "next/image";
import { Award, Heart, Shield, Leaf, GraduationCap, Binoculars } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "B.A. in Ecological Tourism",
    description: "Graduated from the University of Costa Rica with a degree in Ecological Tourism.",
  },
  {
    icon: Award,
    title: "Licensed Guide — INA",
    description: "Officially certified General Guide by the National Learning Institute of Costa Rica.",
  },
  {
    icon: Shield,
    title: "Lifeguard, First Aid & CPR",
    description: "Professional lifeguard with first aid and CPR certifications for your safety.",
  },
  {
    icon: Binoculars,
    title: "Expert Birder & Naturalist",
    description: "13+ years of experience in birdwatching and naturalism across Costa Rica.",
  },
  {
    icon: Heart,
    title: "Passion for Nature",
    description: "Born and raised in La Fortuna with a lifelong dedication to the rainforest.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious",
    description: "Committed to sustainable tourism and supporting local conservation efforts.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-forest-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <Image
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/1gabriel-expert-natural.avif"
                alt="Gabriel — Your local naturalist guide"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-forest-600/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-forest-400/20 rounded-2xl -z-10" />

            {/* Experience badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-forest-700">13+</div>
              <div className="text-sm text-gray-600">Years of Experience</div>
            </div>
          </div>

          {/* Content side */}
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
                Born and raised in the heart of La Fortuna, Gabriel grew up
                surrounded by the wonders of the rainforest. With a
                Bachelor&apos;s degree in Ecological Tourism from the University
                of Costa Rica and over 13 years of professional experience, his
                passion has always been sharing the magic of Costa Rica&apos;s
                biodiversity with visitors from around the world.
              </p>
              <p>
                Gabriel brings a deep, personal knowledge of the local
                ecosystem — the secret spots where sloths sleep, the trails
                where toucans feed, and the streams where poison dart frogs
                thrive. Every tour is a personal experience, not just a walk
                through the woods.
              </p>
              <p>
                When you book with Rain Forest Experiences, you&apos;re not
                just getting a tour — you&apos;re gaining a friend in the
                jungle.
              </p>
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
