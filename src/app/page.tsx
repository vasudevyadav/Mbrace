import type { Metadata } from "next";
import MbraceHome from "@/components/sections/MbraceHome";
import { getHomeData, getPageSeo } from "@/lib/queries";

// Public content can be served from the route cache. Admin mutations already
// revalidate affected routes, while this short interval covers shared content.
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSeo("home");
  return { title: { absolute: seo.metaTitle }, description: seo.metaDescription, alternates: { canonical: "/" } };
}

export default async function Home() {
  const data = await getHomeData();
  return <MbraceHome data={data} />;
}
