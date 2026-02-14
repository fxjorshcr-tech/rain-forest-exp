"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    category: "Booking & Reservations",
    questions: [
      {
        q: "How do I book a tour?",
        a: "You can book directly through our website by selecting your preferred tour, choosing a date and time, and completing the reservation form. You can also contact us via WhatsApp at +506 8888-8888 or email us at info@rainforestexperiencescr.com. We recommend booking at least 24 hours in advance.",
      },
      {
        q: "What is the minimum number of people required?",
        a: "All our tours require a minimum of 2 adults to operate. If you are traveling solo, please contact us and we'll try to pair you with another group or offer a private tour option.",
      },
      {
        q: "Can I cancel or reschedule my booking?",
        a: "Yes! We offer free cancellation up to 24 hours before the tour start time. If you need to reschedule, just contact us and we'll be happy to find a new date that works for you. Cancellations made less than 24 hours before the tour are non-refundable.",
      },
      {
        q: "Do I need to pay in advance?",
        a: "We accept payment on the day of the tour. You can pay in cash (USD or Costa Rican colones) or by credit/debit card. For group bookings of 6 or more people, we may require a deposit to secure your reservation.",
      },
      {
        q: "Are there discounts for children?",
        a: "Yes, children receive a 50% discount on all tours. Children must be accompanied by an adult at all times. Some tours have minimum age requirements for safety reasons — please check the specific tour details or ask us.",
      },
      {
        q: "Do you offer private tours?",
        a: "Absolutely! All our tours can be arranged as private experiences for your group. Private tours offer more flexibility with departure times and a fully personalized experience. Contact us for private tour pricing.",
      },
    ],
  },
  {
    category: "Tours & Activities",
    questions: [
      {
        q: "What is included in the tour price?",
        a: "All our tours include a certified naturalist guide, park entrance fees, water and snacks, and professional optical equipment (binoculars, spotting scopes). The Best of Arenal combo tour also includes a traditional Costa Rican lunch. Transportation to/from tour locations is also included.",
      },
      {
        q: "What should I bring on the tours?",
        a: "We recommend bringing insect repellent, a rain jacket or poncho (it can rain at any time in the rainforest), comfortable clothing and closed-toe shoes. For the Night Walk, bring a flashlight. For Rio Celeste, wear sturdy hiking shoes and bring a swimsuit. Sunscreen and a hat are always a good idea.",
      },
      {
        q: "Are the tours suitable for children?",
        a: "Most of our tours are family-friendly and suitable for children of all ages. The Night Walk, Sloth Tour, and Hanging Bridges are particularly popular with families. The Volcano Hike and Rio Celeste require moderate fitness levels. We'll always advise you on the best options for your family.",
      },
      {
        q: "What happens if it rains?",
        a: "Welcome to the rainforest — rain is part of the experience! Our tours operate rain or shine, and the forest is actually more active during and after rain. We provide tips on staying comfortable, and many of our guests say rainy tours were their favorite. In case of severe weather (lightning, tropical storms), we will reschedule your tour at no extra charge.",
      },
      {
        q: "How physically demanding are the tours?",
        a: "It varies by tour. The Sloth Tour and Night Walk are easy walks on flat trails. The Hanging Bridges and Volcano Hike are moderate with some inclines. Rio Celeste involves a 6km hike that requires moderate fitness. We always match tours to your fitness level and pace our walks accordingly.",
      },
      {
        q: "What wildlife can I expect to see?",
        a: "La Fortuna is one of the most biodiverse places on Earth. Common sightings include sloths (two-toed and three-toed), howler monkeys, white-faced capuchins, toucans, poison dart frogs, red-eyed tree frogs, hummingbirds, motmots, and many more species. On night walks, you may also see snakes, tarantulas, and bioluminescent fungi. We can never guarantee specific sightings, but our guides have an excellent track record.",
      },
      {
        q: "What is the Best of Arenal combo tour?",
        a: "Our flagship full-day experience combines the three top attractions: a 2-hour volcano hike on the 1968 lava flow, a visit to the stunning La Fortuna Waterfall where you can swim, and a walk through the Hanging Bridges at canopy level. A traditional Costa Rican lunch is included. It's the best way to see everything in one day.",
      },
      {
        q: "What makes the Visit a Costa Rican Family tour special?",
        a: "This unique cultural experience goes beyond nature tours. You'll visit a real local farming family, participate in daily farm activities like milking cows and extracting sugar cane juice, taste traditional Costa Rican liquor, and enjoy an authentic home-cooked lunch. It's a genuine window into the warmth and traditions of Costa Rican rural life.",
      },
    ],
  },
  {
    category: "Logistics & Practical Info",
    questions: [
      {
        q: "Do you offer hotel pickup?",
        a: "Yes, we offer complimentary pickup and drop-off at hotels and accommodations in the La Fortuna area. When booking, simply provide your hotel name and we'll arrange the pickup time. For accommodations outside La Fortuna, please contact us to discuss transportation options.",
      },
      {
        q: "What languages do your guides speak?",
        a: "Our guides are bilingual and lead tours in both English and Spanish. If you need a tour in another language, please contact us in advance and we'll do our best to accommodate your request.",
      },
      {
        q: "What optical equipment do you provide?",
        a: "We provide professional-grade binoculars and spotting scopes on all tours. This equipment allows you to see wildlife up close — including animals high in the canopy or camouflaged in the vegetation — that you would never see with the naked eye. It's one of the things that sets our tours apart.",
      },
      {
        q: "Is it safe to visit the rainforest?",
        a: "Absolutely! Our guides are first-aid certified with years of experience in the field. We follow strict safety protocols, maintain small group sizes, and know the forest intimately. Costa Rica is one of the safest countries in Central America, and La Fortuna is a well-established tourist destination with excellent infrastructure.",
      },
      {
        q: "When is the best time to visit La Fortuna?",
        a: "La Fortuna is a year-round destination! The dry season (December to April) offers more sunshine, while the green season (May to November) brings more rain but also lush vegetation, fewer tourists, and more active wildlife. The rainforest is always alive and beautiful, regardless of the season.",
      },
      {
        q: "How far in advance should I book?",
        a: "We recommend booking at least 24-48 hours in advance, especially during high season (December to April). For the Best of Arenal combo tour and Rio Celeste, booking 2-3 days ahead is advisable as these fill up quickly. Last-minute bookings are sometimes possible — just contact us!",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900 text-sm sm:text-base">
          {q}
        </span>
        <ChevronDown
          size={20}
          className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] flex items-center justify-center overflow-hidden bg-forest-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(149,213,178,0.3),transparent_70%)]" />
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="text-forest-400 font-semibold text-sm tracking-[0.2em] uppercase block mb-3">
            Questions & Answers
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-forest-300">
              Questions
            </span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg">
            Everything you need to know about our tours and visiting La Fortuna
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((section) => (
            <div key={section.category} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.questions.map((item) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="mt-16 bg-forest-900 rounded-2xl p-8 sm:p-12 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">
              We&apos;re happy to help! Reach out to us via WhatsApp or email and
              we&apos;ll get back to you as quickly as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/50688888888"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-forest-600 hover:bg-forest-500 text-white px-8 py-3 rounded-full font-semibold transition-all hover:shadow-lg"
              >
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="border-2 border-white/30 hover:border-white text-white px-8 py-3 rounded-full font-semibold transition-all hover:bg-white/10"
              >
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
