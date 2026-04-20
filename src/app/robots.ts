import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/booking/thank-you"],
      },
    ],
    sitemap: "https://www.rainforestexperiencescr.com/sitemap.xml",
    host: "https://www.rainforestexperiencescr.com",
  };
}
