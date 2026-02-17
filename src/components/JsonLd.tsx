import { tours } from "@/data/tours";

const BASE_URL = "https://www.rainforestexperiencescr.com";

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "@id": `${BASE_URL}/#business`,
    name: "Rain Forest Experiences CR",
    description:
      "Personalized nature and wildlife tours in La Fortuna, Costa Rica. Led by certified naturalist guide Gabriel with 13+ years of experience.",
    url: BASE_URL,
    telephone: "+50685104507",
    email: "info@rainforestexperiencescr.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "La Fortuna de San Carlos",
      addressRegion: "Alajuela",
      addressCountry: "CR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.4679,
      longitude: -84.6427,
    },
    image: tours[0]?.image,
    priceRange: "$65 - $170",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "05:00",
      closes: "20:00",
    },
    sameAs: ["https://wa.me/50685104507"],
    availableLanguage: [
      { "@type": "Language", name: "English" },
      { "@type": "Language", name: "Spanish" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function TourOffersSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Nature Tours in La Fortuna, Costa Rica",
    description:
      "Personalized rainforest tours led by certified naturalist guide Gabriel.",
    numberOfItems: tours.length,
    itemListElement: tours.map((tour, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
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
          validFrom: "2025-01-01",
        },
        provider: {
          "@type": "TouristAttraction",
          name: "Rain Forest Experiences CR",
          "@id": `${BASE_URL}/#business`,
        },
        itinerary: {
          "@type": "ItemList",
          name: "Highlights",
          itemListElement: tour.highlights.map((h, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: h,
          })),
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rain Forest Experiences CR",
    url: BASE_URL,
    description:
      "Personalized nature tours in La Fortuna, Costa Rica with certified naturalist guide Gabriel.",
    inLanguage: ["en", "es"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function JsonLd() {
  return (
    <>
      <LocalBusinessSchema />
      <TourOffersSchema />
      <WebSiteSchema />
    </>
  );
}
