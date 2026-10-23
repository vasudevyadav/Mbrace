import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CareCategoryPageClient from "@/components/sections/mbrace/services/CareCategoryPageClient";
import { getCareCategoryContent, getHomeData, getServiceCategoryByKey } from "@/lib/queries";
import { pageMetadata } from "@/lib/approvedMetadata";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getCareCategoryContent("womens-care");
  return { title: { absolute: content.metaTitle || pageMetadata.womensCare.title }, description: content.metaDescription || pageMetadata.womensCare.description };
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
