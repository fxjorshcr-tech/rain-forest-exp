import type { Metadata } from "next";
import { blogArticles } from "@/data/blog";
import ArticleContent from "./ArticleContent";
import { en } from "@/i18n/en";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);
  const content = (
    en.blogArticles as Record<
      string,
      { title: string; excerpt: string; content: string }
    >
  )[slug];

  if (!article || !content) {
    return { title: "Article Not Found | Rain Forest Experiences CR" };
  }

  return {
    title: `${content.title} | Rain Forest Experiences CR`,
    description: content.excerpt,
    openGraph: {
      title: content.title,
      description: content.excerpt,
      images: [{ url: article.image }],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  return <ArticleContent slug={slug} />;
}
