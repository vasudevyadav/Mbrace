import type { Metadata } from "next";
import DoctorsPageClient from "@/components/sections/mbrace/doctors/DoctorsPageClient";
import { getHomeData, getDoctorTips, getPageSeo } from "@/lib/queries";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSeo("doctors");
  return { title: seo.metaTitle, description: seo.metaDescription };
}

export default async function DoctorsPage() {
  const [data, tips] = await Promise.all([getHomeData(), getDoctorTips()]);
  return <DoctorsPageClient data={data} tips={tips} />;
}
