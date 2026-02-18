import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog | Rain Forest Experiences CR",
  description:
    "Explore stories, tips, and insights about Costa Rica's incredible biodiversity. Learn about the rainforest, wildlife, and adventure from our expert guides in La Fortuna.",
};

export default function BlogPage() {
  return <BlogContent />;
}
