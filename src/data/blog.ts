export interface BlogArticle {
  slug: string;
  image: string;
  date: string;
  readTime: number;
  relatedTourSlugs: string[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "protected-areas-costa-rica",
    image:
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Beatiful-waterfall-costa-rica-nature.webp",
    date: "2026-02-18",
    readTime: 9,
    relatedTourSlugs: ["rio-celeste", "best-of-arenal"],
  },
  {
    slug: "birdwatching-tips-arenal",
    image:
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/1volcan-arenal-gabriel.avif",
    date: "2026-02-04",
    readTime: 7,
    relatedTourSlugs: ["birdwatching", "hanging-bridges"],
  },
  {
    slug: "arenal-rainforest-guide",
    image:
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/bosque-costarica.webp",
    date: "2026-01-28",
    readTime: 8,
    relatedTourSlugs: ["hanging-bridges", "volcano-hike", "best-of-arenal"],
  },
  {
    slug: "sloths-costa-rica",
    image:
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/perezoso-sloth-costa-rica.webp",
    date: "2026-01-21",
    readTime: 7,
    relatedTourSlugs: ["sloth-tour", "hanging-bridges"],
  },
  {
    slug: "nocturnal-diversity-costa-rica",
    image:
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/red-eye-frog.webp",
    date: "2026-01-14",
    readTime: 8,
    relatedTourSlugs: ["night-walk", "sloth-tour"],
  },
];
