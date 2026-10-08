import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CareCategoryPageClient from "@/components/sections/mbrace/services/CareCategoryPageClient";
import { getCareCategoryContent, getHomeData, getServiceCategoryByKey } from "@/lib/queries";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getCareCategoryContent("womens-care");
  return {
    title: content.metaTitle || "Women's Care",
    description: content.metaDescription || content.heroDescription,
  };
}

export default async function WomensCarePage() {
  const [content, data, category] = await Promise.all([
    getCareCategoryContent("womens-care"),
    getHomeData(),
    getServiceCategoryByKey("Women Care"),
  ]);
  if (!category) notFound();

  return <CareCategoryPageClient careCategoryLabel="Women's Care" content={content} category={category} data={data} />;
}
