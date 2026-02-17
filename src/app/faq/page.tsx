"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/i18n/context";

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
  const { t } = useLanguage();
  const faqs = t.faq.categories as unknown as Array<{
    category: string;
    questions: Array<{ q: string; a: string }>;
  }>;

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] flex items-center justify-center overflow-hidden bg-forest-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(149,213,178,0.3),transparent_70%)]" />
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="text-forest-400 font-semibold text-sm tracking-[0.2em] uppercase block mb-3">
            {t.faq.label}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            {t.faq.title1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-forest-300">
              {t.faq.title2}
            </span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg">
            {t.faq.subtitle}
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
            <h3 className="text-2xl font-bold mb-3">{t.faq.stillQuestions}</h3>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">
              {t.faq.stillQuestionsDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/50685104507"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-forest-600 hover:bg-forest-500 text-white px-8 py-3 rounded-full font-semibold transition-all hover:shadow-lg"
              >
                {t.faq.chatWhatsApp}
              </a>
              <Link
                href="/contact"
                className="border-2 border-white/30 hover:border-white text-white px-8 py-3 rounded-full font-semibold transition-all hover:bg-white/10"
              >
                {t.faq.contactPage}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
