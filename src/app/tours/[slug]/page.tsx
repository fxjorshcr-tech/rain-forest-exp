import { notFound } from "next/navigation";
import { getTours, getTourBySlug } from "@/data/tours";
import type { Metadata } from "next";
import TourDetailContent from "./TourDetailContent";

export const revalidate = 60;

const BASE_URL = "https://www.rainforestexperiencescr.com";

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
    openGraph: {
      title: `${tour.title} | Rain Forest Experiences CR`,
      description: tour.description,
      url: `${BASE_URL}/tours/${tour.slug}`,
      images: [{ url: tour.image, alt: tour.title }],
      type: "website",
    },
    alternates: {
      canonical: `${BASE_URL}/tours/${tour.slug}`,
    },
  };
}

function TourJsonLd({ tour }: { tour: { slug: string; title: string; description: string; price: number; duration: string; image: string; highlights: string[]; difficulty: string; startTimes: string[] } }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.description,
    url: `${BASE_URL}/tours/${tour.slug}`,
    image: tour.image,
    touristType: "Nature lovers",
    offers: {
      "@type": "Offer",
      price: tour.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "TouristAttraction",
      name: "Rain Forest Experiences CR",
      address: {
        "@type": "PostalAddress",
        addressLocality: "La Fortuna de San Carlos",
        addressRegion: "Alajuela",
        addressCountry: "CR",
      },
    },
    itinerary: {
      "@type": "ItemList",
      name: "Tour Highlights",
      itemListElement: tour.highlights.map((h, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: h,
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
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

  return (
    <>
      <TourJsonLd tour={tour} />
      <TourDetailContent tour={tour} otherTours={otherTours} />
    </>
  );
}
