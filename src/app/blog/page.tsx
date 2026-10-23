import type { Metadata } from "next";
import { Suspense } from "react";
import BlogPageClient from "@/components/sections/mbrace/blog/BlogPageClient";
import { getBlogArticles, getHomeData } from "@/lib/queries";
import { pageMetadata } from "@/lib/approvedMetadata";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = pageMetadata.blog;
  return { title: { absolute: seo.title }, description: seo.description };
}

export default async function BlogPage() {
  const [data, articles] = await Promise.all([getHomeData(), getBlogArticles()]);
  return (
    <Suspense>
      <BlogPageClient data={data} articles={articles} />
    </Suspense>
  );
}
