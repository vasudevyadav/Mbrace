import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailClient from "@/components/sections/mbrace/blog/BlogDetailClient";
import { getRelatedArticles } from "@/components/sections/mbrace/blog/blogContent";
import { getBlogArticleBySlug, getBlogArticles, getHomeData } from "@/lib/queries";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getBlogArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.metaTitle || article.title,
    description: article.metaDescription || article.summary,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getBlogArticleBySlug(slug);
  if (!article) notFound();

  const [data, articles] = await Promise.all([getHomeData(), getBlogArticles()]);
  const relatedArticles = getRelatedArticles(articles, slug);

  return <BlogDetailClient article={article} relatedArticles={relatedArticles} data={data} />;
}
