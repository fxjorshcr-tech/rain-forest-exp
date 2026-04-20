import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/i18n/context";
import JsonLd from "@/components/JsonLd";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const BASE_URL = "https://www.rainforestexperiencescr.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Gabriel — Certified Naturalist Guide in La Fortuna | Personalized Tours in Costa Rica",
    template: "%s | Gabriel · Rain Forest Experiences CR",
  },
  description:
    "Gabriel is a certified naturalist guide based in La Fortuna, Costa Rica, with 13+ years of experience designing personalized rainforest, wildlife and Arenal Volcano tours for small groups.",
  keywords:
    "Gabriel naturalist guide, certified guide La Fortuna, personalized tours La Fortuna, private tours Arenal, Costa Rica naturalist guide, guía certificado La Fortuna, tours personalizados La Fortuna, guía naturalista Costa Rica, Arenal volcano guide, sloth tour La Fortuna, night walk La Fortuna, birdwatching guide Costa Rica",
  authors: [{ name: "Gabriel — Rain Forest Experiences CR", url: BASE_URL }],
  creator: "Gabriel — Rain Forest Experiences CR",
  publisher: "Rain Forest Experiences CR",
  openGraph: {
    title:
      "Gabriel — Certified Naturalist Guide in La Fortuna, Costa Rica",
    description:
      "Personalized nature tours in La Fortuna led by Gabriel, a certified naturalist guide with 13+ years of experience. Small groups, local knowledge, real connection with the rainforest.",
    url: BASE_URL,
    siteName: "Rain Forest Experiences CR",
    locale: "en_US",
    alternateLocale: "es_CR",
    type: "website",
    images: [
      {
        url: "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/arenal-volcano-mountains-sky-costa-rica.webp",
        width: 1200,
        height: 630,
        alt: "Gabriel — Certified Naturalist Guide in La Fortuna, Costa Rica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel — Certified Naturalist Guide in La Fortuna",
    description:
      "Personalized rainforest, wildlife and Arenal Volcano tours in La Fortuna with certified naturalist guide Gabriel.",
    images: [
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/arenal-volcano-mountains-sky-costa-rica.webp",
    ],
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-US": BASE_URL,
      "es-CR": BASE_URL,
      "x-default": BASE_URL,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <GoogleAnalytics />
        <LanguageProvider>
          <JsonLd />
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
