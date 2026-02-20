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
    default: "Rain Forest Experiences CR | Tours en La Fortuna, Costa Rica",
    template: "%s | Rain Forest Experiences CR",
  },
  description:
    "Discover the magic of Costa Rica's rainforest with personalized tours in La Fortuna. Night walks, sloth tours, volcano hikes, waterfall adventures and more with expert local guide Gabriel.",
  keywords:
    "La Fortuna tours, Costa Rica rainforest, night walk, sloth tour, Arenal volcano, hanging bridges, waterfall, nature tours, birdwatching, Rio Celeste, La Fortuna Costa Rica, tours en La Fortuna",
  authors: [{ name: "Rain Forest Experiences CR" }],
  creator: "Rain Forest Experiences CR",
  openGraph: {
    title: "Rain Forest Experiences CR | Tours en La Fortuna, Costa Rica",
    description:
      "Personalized rainforest tours in La Fortuna, Costa Rica. Night walks, sloth tours, volcano hikes & more with expert naturalist guide Gabriel.",
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
        alt: "Rain Forest Experiences CR — Tours in La Fortuna, Costa Rica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rain Forest Experiences CR | Tours en La Fortuna",
    description:
      "Personalized rainforest tours in La Fortuna, Costa Rica with expert naturalist guide Gabriel.",
    images: [
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/arenal-volcano-mountains-sky-costa-rica.webp",
    ],
  },
  alternates: {
    canonical: BASE_URL,
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
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "whw1sFV6igmXfG1qpuidGbzxKDeozqYlzdcttd96K-o",
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
