import type { Metadata } from "next";
import { en } from "@/i18n/en";
import FaqPageClient from "./FaqPageClient";

const FAQ_URL = "https://www.rainforestexperiencescr.com/faq";

export const metadata: Metadata = {
  title: "FAQ — Questions about Tours with Gabriel in La Fortuna",
  description:
    "Answers to common questions about personalized tours in La Fortuna, Costa Rica, led by certified naturalist guide Gabriel: booking, pricing, what's included, transportation and more.",
  alternates: {
    canonical: FAQ_URL,
    languages: {
      "en-US": FAQ_URL,
      "es-CR": FAQ_URL,
      "x-default": FAQ_URL,
    },
  },
  openGraph: {
    type: "website",
    title: "FAQ — Tours with Gabriel in La Fortuna",
    description:
      "Common questions about personalized rainforest and Arenal Volcano tours with certified naturalist guide Gabriel.",
    url: FAQ_URL,
  },
};

type FaqCategories = Array<{
  category: string;
  questions: Array<{ q: string; a: string }>;
}>;

function FaqJsonLd() {
  const categories = en.faq.categories as unknown as FaqCategories;

  const mainEntity = categories.flatMap((section) =>
    section.questions.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    }))
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${FAQ_URL}#faq`,
    inLanguage: "en",
    mainEntity,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd />
      <FaqPageClient />
    </>
  );
}
