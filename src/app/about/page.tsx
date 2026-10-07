import type { Metadata } from "next";
import AboutPageClient from "@/components/sections/mbrace/about/AboutPageClient";
import { getHomeData } from "@/lib/queries";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About Us",
  description: "For her health, her child, and her tomorrow — learn about M’Brace by Kamineni Hospitals, our mission, our director and our multidisciplinary team.",
};

export default async function AboutPage() {
  const data = await getHomeData();
  return <AboutPageClient data={data} />;
}
