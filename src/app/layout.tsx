import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/i18n/context";

export const metadata: Metadata = {
  title: "Rain Forest Experiences CR | Tours en La Fortuna, Costa Rica",
  description:
    "Discover the magic of Costa Rica's rainforest with personalized tours in La Fortuna. Night walks, sloth tours, volcano hikes, waterfall adventures and more with expert local guides.",
  keywords:
    "La Fortuna tours, Costa Rica rainforest, night walk, sloth tour, Arenal volcano, hanging bridges, waterfall, nature tours",
  openGraph: {
    title: "Rain Forest Experiences CR | Tours en La Fortuna",
    description:
      "Personalized rainforest tours in La Fortuna, Costa Rica. Expert local guides, unforgettable adventures.",
    type: "website",
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
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
