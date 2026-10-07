import type { Metadata } from "next";
import DoctorsPageClient from "@/components/sections/mbrace/doctors/DoctorsPageClient";
import { getHomeData, getDoctorTips } from "@/lib/queries";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Doctors & Our Specialists",
  description: "Meet the multidisciplinary team behind M'Brace by Kamineni Hospitals — gynaecologists, obstetricians, paediatricians and neonatologists working as one team.",
};

export default async function DoctorsPage() {
  const [data, tips] = await Promise.all([getHomeData(), getDoctorTips()]);
  return <DoctorsPageClient data={data} tips={tips} />;
}
