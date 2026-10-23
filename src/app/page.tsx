import type { Metadata } from "next";
import MbraceHome from "@/components/sections/MbraceHome";
import { getHomeData, getPageSeo } from "@/lib/queries";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSeo("home");
  return { title: { absolute: seo.metaTitle }, description: seo.metaDescription };
}

export default async function Home() {
  const data = await getHomeData();
  return <MbraceHome data={data} />;
}
