import type { Metadata } from "next";
import AboutPageClient from "@/components/sections/mbrace/about/AboutPageClient";
import { getHomeData, getPageSeo } from "@/lib/queries";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSeo("about");
  return { title: seo.metaTitle, description: seo.metaDescription };
}

export default async function AboutPage() {
  const data = await getHomeData();
  return <AboutPageClient data={data} />;
}
