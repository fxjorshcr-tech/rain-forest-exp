"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/context";
import { blogArticles } from "@/data/blog";
import { tours } from "@/data/tours";

export default function ArticleContent({ slug }: { slug: string }) {
  const { t, locale } = useLanguage();
  const b = t.blog;

  const article = blogArticles.find((a) => a.slug === slug);
  const articleContent = (
    t.blogArticles as Record<
      string,
      { title: string; excerpt: string; content: string }
    >
  )[slug];

  if (!article || !articleContent) {
    return (
      <main className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Article not found
        </h1>
        <Link href="/blog" className="text-forest-600 mt-4 inline-block">
          {b.backToBlog}
        </Link>
      </main>
    );
  }

  const formattedDate = new Date(article.date + "T12:00:00").toLocaleDateString(
    locale === "es" ? "es-CR" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  const relatedTours = tours.filter((tour) =>
    article.relatedTourSlugs.includes(tour.slug)
  );

  // Parse markdown-like content into sections
  const renderContent = (content: string) => {
    const parts = content.split("\n\n");
    let subtitleRendered = false;
    return parts.map((part, index) => {
      if (part.startsWith("## ")) {
        return (
          <h2
            key={index}
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
          >
            {part.replace("## ", "")}
          </h2>
        );
      }
      // First paragraph is the subtitle/intro
      if (!subtitleRendered) {
        subtitleRendered = true;
        return (
          <p
            key={index}
            className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 font-medium border-l-4 border-forest-500 pl-5 italic"
          >
            {part}
          </p>
        );
      }
      return (
        <p key={index} className="text-gray-600 leading-relaxed mb-4">
          {part}
        </p>
      );
    });
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src={article.image}
          alt={articleContent.title}
          fill
          className="object-cover object-[center_30%]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl px-6 py-5 sm:px-8 sm:py-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-forest-400 hover:text-forest-300 text-sm font-medium mb-4 transition-colors"
            >
              <ArrowLeft size={16} />
              {b.backToBlog}
            </Link>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              {articleContent.title}
            </h1>
            <div className="flex items-center gap-4 mt-4 text-white/70 text-sm">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {article.readTime} {b.minRead}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {renderContent(articleContent.content)}
          </div>
        </div>
      </section>

      {/* Related Tours */}
      {relatedTours.length > 0 && (
        <section className="py-16 bg-forest-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              {b.relatedTours}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedTours.map((tour) => {
                const td = (
                  t.tourData as Record<
                    string,
                    { title: string; shortTitle: string; description: string }
                  >
                )[tour.slug];
                const title = td?.title ?? tour.title;
                const description = td?.description ?? tour.description;

                return (
                  <Link
                    key={tour.slug}
                    href={`/tours/${tour.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={tour.image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-forest-700/90 backdrop-blur-sm text-white text-sm font-bold px-3 py-1 rounded-full">
                          ${tour.price}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-forest-700 transition-colors">
                        {title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-3">
                        {description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-forest-700 font-semibold text-sm group-hover:gap-2 transition-all">
                        {t.toursSection.viewDetails}
                        <ChevronRight size={16} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog CTA */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg"
          >
            <ArrowLeft size={20} />
            {b.backToBlog}
          </Link>
        </div>
      </section>
    </main>
  );
}
