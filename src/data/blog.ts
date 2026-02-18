export interface BlogArticle {
  slug: string;
  image: string;
  date: string;
  readTime: number;
  relatedTourSlugs: string[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "nocturnal-diversity-costa-rica",
    image:
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/red-eye-frog.webp",
    date: "2026-01-14",
    readTime: 8,
    relatedTourSlugs: ["night-walk", "sloth-tour"],
  },
];
