import type { Metadata } from "next";
import { getBlogArticles, getBlogArticleBySlug, type BlogArticle } from "@/data/blog";
import ArticleContent from "./ArticleContent";

export const revalidate = 60;

const BASE_URL = "https://www.rainforestexperiencescr.com";
const BUSINESS_ID = `${BASE_URL}/#business`;
const GABRIEL_ID = `${BASE_URL}/#gabriel`;

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
    return { title: "Article Not Found" };
  }

  const url = `${BASE_URL}/blog/${article.slug}`;
  const published = new Date(article.date).toISOString();

  return {
    title: article.title,
    description: article.excerpt,
    authors: [
      { name: "Gabriel — Rain Forest Experiences CR", url: `${BASE_URL}/about` },
    ],
    alternates: {
      canonical: url,
      languages: {
        "en-US": url,
        "es-CR": url,
        "x-default": url,
      },
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url,
      siteName: "Rain Forest Experiences CR",
      locale: "en_US",
      alternateLocale: "es_CR",
      publishedTime: published,
      modifiedTime: published,
      authors: [`${BASE_URL}/about`],
      images: [{ url: article.image, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

function BlogPostingJsonLd({ article }: { article: BlogArticle }) {
  const url = `${BASE_URL}/blog/${article.slug}`;
  const published = new Date(article.date).toISOString();

  const article_schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: article.title,
    alternativeHeadline: article.titleEs,
    description: article.excerpt,
    image: article.image,
    inLanguage: ["en", "es"],
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    datePublished: published,
    dateModified: published,
    author: {
      "@type": "Person",
      "@id": GABRIEL_ID,
      name: "Gabriel",
      jobTitle: "Certified Naturalist Guide",
      url: `${BASE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      "@id": BUSINESS_ID,
      name: "Rain Forest Experiences CR",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/icon-512.png`,
      },
    },
    keywords: [
      "La Fortuna",
      "Arenal Volcano",
      "Costa Rica",
      "rainforest",
      "nature tours",
      "naturalist guide",
    ].join(", "),
    wordCount: article.content.split(/\s+/).length,
    timeRequired: `PT${article.readTime}M`,
  };

  const breadcrumb_schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article_schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb_schema) }}
      />
    </>
  );
}

export default async function ArticlePage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const article = await getBlogArticleBySlug(slug);
  return (
    <>
      {article ? <BlogPostingJsonLd article={article} /> : null}
      <ArticleContent article={article} />
    </>
  );
}
