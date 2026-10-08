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
  // Pregnancy & birth support doesn't have its own ServiceCategory record —
  // it reuses the "Women Care" group's services.
  const [content, data, category] = await Promise.all([
    getCareCategoryContent("pregnancy-birth-support"),
    getHomeData(),
    getServiceCategoryByKey("Women Care"),
  ]);
  if (!category) notFound();

  return <CareCategoryPageClient careCategoryLabel="Pregnancy & Birth Support" content={content} category={category} data={data} />;
}
