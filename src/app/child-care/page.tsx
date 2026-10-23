import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CareCategoryPageClient from "@/components/sections/mbrace/services/CareCategoryPageClient";
import { getCareCategoryContent, getHomeData, getServiceCategoryByKey } from "@/lib/queries";
import { pageMetadata } from "@/lib/approvedMetadata";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return { title: { absolute: pageMetadata.childCare.title }, description: pageMetadata.childCare.description };
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
