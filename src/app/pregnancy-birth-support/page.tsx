import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CareCategoryPageClient from "@/components/sections/mbrace/services/CareCategoryPageClient";
import { getCareCategoryContent, getHomeData, getServiceCategoryByKey } from "@/lib/queries";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getCareCategoryContent("pregnancy-birth-support");
  return {
    title: content.metaTitle || "Pregnancy & Birth Support",
    description: content.metaDescription || content.heroDescription,
  };
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
