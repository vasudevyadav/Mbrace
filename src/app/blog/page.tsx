import type { Metadata } from "next";
import { Suspense } from "react";
import BlogPageClient from "@/components/sections/mbrace/blog/BlogPageClient";
import { getBlogArticles, getHomeData, getPageSeo } from "@/lib/queries";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSeo("blog");
  return { title: seo.metaTitle, description: seo.metaDescription };
}

export default async function BlogPage() {
  const [data, articles] = await Promise.all([getHomeData(), getBlogArticles()]);
  return (
    <Suspense>
      <BlogPageClient data={data} articles={articles} />
    </Suspense>
  );
}
