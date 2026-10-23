import type { Metadata } from "next";
import DoctorsPageClient from "@/components/sections/mbrace/doctors/DoctorsPageClient";
import { getHomeData, getDoctorTips } from "@/lib/queries";
import { pageMetadata } from "@/lib/approvedMetadata";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = pageMetadata.doctors;
  return { title: { absolute: seo.title }, description: seo.description };
}

export default async function DoctorsPage() {
  const [data, tips] = await Promise.all([getHomeData(), getDoctorTips()]);
  return <DoctorsPageClient data={data} tips={tips} />;
}
