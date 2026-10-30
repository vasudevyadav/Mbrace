import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CareCategoryPageClient from "@/components/sections/mbrace/services/CareCategoryPageClient";
import { getCareCategoryContent, getHomeData, getServiceCategoryByKey } from "@/lib/queries";
import { pageMetadata } from "@/lib/approvedMetadata";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getCareCategoryContent("fertility-care");
  return { title: { absolute: content.metaTitle || pageMetadata.fertility.title }, description: content.metaDescription || pageMetadata.fertility.description, alternates: { canonical: "/fertility-care" } };
}

export default async function FertilityCarePage() {
  const [content, data, category] = await Promise.all([
    getCareCategoryContent("fertility-care"),
    getHomeData(),
    getServiceCategoryByKey("Fertility"),
  ]);
  if (!category) notFound();

  return <CareCategoryPageClient careCategoryLabel="Fertility Care" content={content} category={category} data={data} />;
}
