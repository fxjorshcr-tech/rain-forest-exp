import { getTours } from "@/data/tours";
import type { Metadata } from "next";
import ToursPageContent from "./ToursPageContent";

export const metadata: Metadata = {
  title: "Tours | Rain Forest Experiences CR",
  description:
    "Explore our nature tours in La Fortuna, Costa Rica. Night walks, sloth tours, volcano hikes, hanging bridges, birdwatching, Rio Celeste and more.",
};

export default async function ToursPage() {
  const tours = await getTours();
  return <ToursPageContent tours={tours} />;
}
