import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Gabriel | Rain Forest Experiences CR",
  description:
    "Meet Gabriel, your certified naturalist guide in La Fortuna, Costa Rica. Bachelor's in Ecological Tourism, 13+ years of experience, professional lifeguard, and passionate about sharing the magic of the rainforest.",
};

export default function AboutPage() {
  return <AboutContent />;
}
