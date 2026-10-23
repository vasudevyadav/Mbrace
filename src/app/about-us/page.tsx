import type { Metadata } from "next";
import AboutPageClient from "@/components/sections/mbrace/about/AboutPageClient";
import { getHomeData } from "@/lib/queries";
import { pageMetadata } from "@/lib/approvedMetadata";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = pageMetadata.about;
  return { title: { absolute: seo.title }, description: seo.description };
}

export default async function AboutPage() {
  const data = await getHomeData();
  return <AboutPageClient data={data} />;
}
