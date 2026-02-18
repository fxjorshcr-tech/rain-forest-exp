import { supabase } from "@/lib/supabase";

export interface BlogArticle {
  slug: string;
  title: string;
  titleEs: string;
  excerpt: string;
  excerptEs: string;
  content: string;
  contentEs: string;
  image: string;
  date: string;
  readTime: number;
  relatedTours: string[];
}

interface BlogRow {
  slug: string;
  title: string;
  title_es: string;
  excerpt: string;
  excerpt_es: string;
  content: string;
  content_es: string;
  image: string;
  date: string;
  read_time: number;
  related_tours: string[];
}

function mapRow(row: BlogRow): BlogArticle {
  return {
    slug: row.slug,
    title: row.title,
    titleEs: row.title_es,
    excerpt: row.excerpt,
    excerptEs: row.excerpt_es,
    content: row.content,
    contentEs: row.content_es,
    image: row.image,
    date: row.date,
    readTime: row.read_time,
    relatedTours: row.related_tours,
  };
}

// Static fallback (minimal — only metadata, no heavy content)
const fallbackArticles: BlogArticle[] = [];

export async function getBlogArticles(): Promise<BlogArticle[]> {
  if (!supabase) return fallbackArticles;
  try {
    const { data, error } = await supabase
      .from("rain_forest_exp_blog")
      .select("*")
      .eq("active", true)
      .order("date", { ascending: false });

    if (error || !data || data.length === 0) return fallbackArticles;
    return data.map(mapRow);
  } catch {
    return fallbackArticles;
  }
}

export async function getBlogArticleBySlug(
  slug: string
): Promise<BlogArticle | undefined> {
  if (!supabase) return undefined;
  try {
    const { data, error } = await supabase
      .from("rain_forest_exp_blog")
      .select("*")
      .eq("slug", slug)
      .eq("active", true)
      .single();

    if (error || !data) return undefined;
    return mapRow(data);
  } catch {
    return undefined;
  }
}
