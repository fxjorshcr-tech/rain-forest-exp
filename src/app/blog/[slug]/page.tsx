import type { Metadata } from "next";
import { getBlogArticles, getBlogArticleBySlug } from "@/data/blog";
import ArticleContent from "./ArticleContent";

export const revalidate = 60;

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const articles = await getBlogArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getBlogArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found | Rain Forest Experiences CR" };
  }

  return {
    title: `${article.title} | Rain Forest Experiences CR`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
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
  const article = await getBlogArticleBySlug(slug);
  return <ArticleContent article={article} />;
}
