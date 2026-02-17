import type { MetadataRoute } from "next";
import { getTours } from "@/data/tours";

const BASE_URL = "https://www.rainforestexperiencescr.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const tours = await getTours();

  const tourPages: MetadataRoute.Sitemap = tours.map((tour) => ({
    url: `${BASE_URL}/tours/${tour.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/tours`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...tourPages,
  ];
}
