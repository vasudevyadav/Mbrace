import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CareCategoryPageClient from "@/components/sections/mbrace/services/CareCategoryPageClient";
import { getCareCategoryContent, getHomeData, getServiceCategoryByKey } from "@/lib/queries";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getCareCategoryContent("child-care");
  return {
    title: content.metaTitle || "Child Care",
    description: content.metaDescription || content.heroDescription,
  };
}

export default async function ChildCarePage() {
  const [content, data, category] = await Promise.all([
    getCareCategoryContent("child-care"),
    getHomeData(),
    getServiceCategoryByKey("Child Care"),
  ]);
  if (!category) notFound();

  return <CareCategoryPageClient careCategoryLabel="Child Care" content={content} category={category} data={data} />;
}
