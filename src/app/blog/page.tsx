import type { Metadata } from "next";
import { getBlogArticles } from "@/data/blog";
import BlogContent from "./BlogContent";

const BLOG_URL = "https://www.rainforestexperiencescr.com/blog";

export const metadata: Metadata = {
  title: "Blog — Notes from Gabriel, Naturalist Guide in La Fortuna",
  description:
    "Stories, tips and field notes from Gabriel, certified naturalist guide in La Fortuna, Costa Rica. Wildlife, Arenal Volcano, birdwatching and rainforest insights from 13+ years guiding personalized tours.",
  alternates: {
    canonical: BLOG_URL,
    languages: {
      "en-US": BLOG_URL,
      "es-CR": BLOG_URL,
      "x-default": BLOG_URL,
    },
  },
  openGraph: {
    type: "website",
    title: "Blog — Notes from Gabriel, Naturalist Guide in La Fortuna",
    description:
      "Field notes from Gabriel, certified naturalist guide in La Fortuna, Costa Rica — wildlife, Arenal Volcano and rainforest stories.",
    url: BLOG_URL,
  },
};

export const revalidate = 60; // refresh data every 60 seconds

export default async function BlogPage() {
  const articles = await getBlogArticles();
  return <BlogContent articles={articles} />;
}
