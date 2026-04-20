import { tours } from "@/data/tours";

const BASE_URL = "https://www.rainforestexperiencescr.com";
const GABRIEL_ID = `${BASE_URL}/#gabriel`;
const BUSINESS_ID = `${BASE_URL}/#business`;

function GabrielPersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": GABRIEL_ID,
    name: "Gabriel",
    jobTitle: "Certified Naturalist Guide",
    description:
      "Certified naturalist guide based in La Fortuna, Costa Rica, with a Bachelor's degree in Ecological Tourism and over 13 years of experience leading personalized nature and wildlife tours around the Arenal Volcano.",
    knowsAbout: [
      "Costa Rica wildlife",
      "Arenal Volcano",
      "Rainforest ecology",
      "Birdwatching",
      "Herpetology",
      "Sloth behavior",
      "Night rainforest walks",
      "Tropical biology",
    ],
    knowsLanguage: ["en", "es"],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "Bachelor's degree in Ecological Tourism",
    },
    worksFor: { "@id": BUSINESS_ID },
    url: `${BASE_URL}/about`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "La Fortuna de San Carlos",
      addressRegion: "Alajuela",
      addressCountry: "CR",
    },
    sameAs: ["https://wa.me/50685104507"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TravelAgency", "TouristAttraction"],
    "@id": BUSINESS_ID,
    name: "Rain Forest Experiences CR",
    alternateName: "Gabriel — Certified Naturalist Guide in La Fortuna",
    description:
      "Personalized nature and wildlife tours in La Fortuna, Costa Rica, led personally by Gabriel, a certified naturalist guide with 13+ years of experience around the Arenal Volcano.",
    url: BASE_URL,
    telephone: "+50685104507",
    email: "info@rainforestexperiencescr.com",
    founder: { "@id": GABRIEL_ID },
    employee: { "@id": GABRIEL_ID },
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
    areaServed: {
      "@type": "Place",
      name: "La Fortuna, Arenal Volcano, Costa Rica",
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
    name: "Personalized Nature Tours in La Fortuna led by Gabriel",
    description:
      "Small-group, personalized rainforest and wildlife tours in La Fortuna, Costa Rica, led by certified naturalist guide Gabriel.",
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
        provider: { "@id": BUSINESS_ID },
        attendee: { "@id": GABRIEL_ID },
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
    "@id": `${BASE_URL}/#website`,
    name: "Rain Forest Experiences CR",
    alternateName: "Gabriel — Certified Naturalist Guide in La Fortuna",
    url: BASE_URL,
    description:
      "Personalized nature tours in La Fortuna, Costa Rica, led by certified naturalist guide Gabriel.",
    inLanguage: ["en", "es"],
    publisher: { "@id": BUSINESS_ID },
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
      <GabrielPersonSchema />
      <LocalBusinessSchema />
      <TourOffersSchema />
      <WebSiteSchema />
    </>
  );
}
