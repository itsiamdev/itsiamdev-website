import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { blogPosts as staticBlogPosts, type BlogPost } from "@/data/blogPosts";
import { projects as staticProjects, type Project } from "@/data/projects";
import { isSupabaseConfigured, supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

type BlogPostRow = Database["public"]["Tables"]["blog_posts"]["Row"];
type ProjectRow = Database["public"]["Tables"]["projects"]["Row"];

const splitList = (value: string | null) =>
  value?.split(",").map((item) => item.trim()).filter(Boolean) ?? [];

const toBlogPost = (row: BlogPostRow): BlogPost => ({
  slug: row.slug,
  title: row.title,
  excerpt: row.excerpt ?? "",
  content: row.content ?? "",
  date: row.date ?? "",
  readTime: row.read_time ?? "",
  tags: splitList(row.tags),
  image: row.image ?? undefined,
  author: {
    name: row.author_name ?? "Ionita Aurel Mihai",
    avatar: row.author_avatar ?? undefined,
  },
  relatedPosts: splitList(row.related_posts),
});

const toProject = (row: ProjectRow): Project => ({
  slug: row.slug,
  title: row.title,
  shortDescription: row.short_description ?? "",
  fullDescription: row.full_description ?? "",
  tech: splitList(row.tech),
  image: row.image ?? "",
  githubUrl: row.github_url ?? undefined,
  liveUrl: row.live_url ?? undefined,
  featured: row.featured,
  category: row.category === "web" || row.category === "mobile" || row.category === "fullstack"
    ? row.category
    : "other",
  date: row.date ?? "",
});

const mergeBySlug = <T extends { slug: string }>(staticItems: T[], databaseItems: T[]) => {
  const merged = new Map(staticItems.map((item) => [item.slug, item]));
  databaseItems.forEach((item) => merged.set(item.slug, item));
  return [...merged.values()];
};

export const useBlogPosts = () => useQuery({
  queryKey: ["public-blog-posts"],
  initialData: staticBlogPosts,
  enabled: isSupabaseConfigured,
  queryFn: async () => {
    if (!supabase) return staticBlogPosts;
    const { data, error } = await supabase.from("blog_posts").select("*");
    if (error) {
      toast.error(`Nu s-au putut încărca articolele din baza de date: ${error.message}`);
      return staticBlogPosts;
    }
    return mergeBySlug(staticBlogPosts, data.map(toBlogPost));
  },
});

export const useProjects = () => useQuery({
  queryKey: ["public-projects"],
  initialData: staticProjects,
  enabled: isSupabaseConfigured,
  queryFn: async () => {
    if (!supabase) return staticProjects;
    const { data, error } = await supabase.from("projects").select("*");
    if (error) {
      toast.error(`Nu s-au putut încărca proiectele din baza de date: ${error.message}`);
      return staticProjects;
    }
    return mergeBySlug(staticProjects, data.map(toProject));
  },
});
