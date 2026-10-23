import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CareCategoryPageClient from "@/components/sections/mbrace/services/CareCategoryPageClient";
import { getCareCategoryContent, getHomeData, getServiceCategoryByKey } from "@/lib/queries";
import { pageMetadata } from "@/lib/approvedMetadata";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return { title: { absolute: pageMetadata.pregnancy.title }, description: pageMetadata.pregnancy.description };
}

export default async function PregnancyBirthSupportPage() {
  const [content, data, category] = await Promise.all([
    getCareCategoryContent("pregnancy-birth-support"),
    getHomeData(),
    getServiceCategoryByKey("Pregnancy & Birth Support"),
  ]);
  if (!category) notFound();

  return <CareCategoryPageClient careCategoryLabel="Pregnancy & Birth Support" content={content} category={category} data={data} />;
}
