import type { Metadata } from "next";
import { getBlogArticles } from "@/data/blog";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog | Rain Forest Experiences CR",
  description:
    "Explore stories, tips, and insights about Costa Rica's incredible biodiversity. Learn about the rainforest, wildlife, and adventure from our expert guides in La Fortuna.",
};

export default async function BlogPage() {
  const articles = await getBlogArticles();
  return <BlogContent articles={articles} />;
}
