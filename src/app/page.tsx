import type { Metadata } from "next";
import MbraceHome from "@/components/sections/MbraceHome";
import { getHomeData } from "@/lib/queries";
import { pageMetadata } from "@/lib/approvedMetadata";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = pageMetadata.home;
  return { title: { absolute: seo.title }, description: seo.description };
}

export default async function Home() {
  const data = await getHomeData();
  return <MbraceHome data={data} />;
}
