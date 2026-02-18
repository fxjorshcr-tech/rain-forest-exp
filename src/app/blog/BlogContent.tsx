"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/context";
import { blogArticles } from "@/data/blog";

const HERO_IMAGE =
  "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/blog-hero-blue-jeans-frog.webp";

export default function BlogContent() {
  const { t, locale } = useLanguage();
  const b = t.blog;

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Blue Jeans Poison Dart Frog — Costa Rica"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12">
          <span className="text-forest-400 font-semibold text-sm tracking-[0.2em] uppercase block mb-3">
            {b.label}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {b.title1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-400 to-forest-300">
              {b.title2}
            </span>
          </h1>
          <p className="mt-3 text-white/80 max-w-2xl text-base sm:text-lg">
            {b.subtitle}
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article) => {
              const articleContent = (
                t.blogArticles as Record<
                  string,
                  { title: string; excerpt: string; content: string }
                >
              )[article.slug];
              if (!articleContent) return null;

              const formattedDate = new Date(
                article.date + "T12:00:00"
              ).toLocaleDateString(locale === "es" ? "es-CR" : "en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });

              return (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={articleContent.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-forest-600" />
                        {formattedDate}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} className="text-forest-600" />
                        {article.readTime} {b.minRead}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-forest-700 transition-colors line-clamp-2">
                      {articleContent.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {articleContent.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-forest-700 font-semibold text-sm group-hover:gap-2 transition-all">
                      {b.readMore}
                      <ChevronRight size={16} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
