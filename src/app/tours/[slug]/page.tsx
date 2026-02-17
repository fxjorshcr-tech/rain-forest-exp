import { notFound } from "next/navigation";
import { getTours, getTourBySlug } from "@/data/tours";
import type { Metadata } from "next";
import TourDetailContent from "./TourDetailContent";

export async function generateStaticParams() {
  const tours = await getTours();
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = await getTourBySlug(slug);
  if (!tour) return { title: "Tour Not Found" };
  return {
    title: `${tour.title} | Rain Forest Experiences CR`,
    description: tour.description,
  };
}

export default async function TourPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = await getTourBySlug(slug);
  if (!tour) notFound();

  const allTours = await getTours();
  const otherTours = allTours.filter((t) => t.slug !== tour.slug).slice(0, 3);

  return <TourDetailContent tour={tour} otherTours={otherTours} />;
}
