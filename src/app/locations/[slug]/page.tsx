import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import LocationPageClient from "@/components/sections/mbrace/locations/LocationPageClient";
import { getHomeData, getLocationBySlug } from "@/lib/queries";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const locations = await prisma.location.findMany({ select: { slug: true } });
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = await getLocationBySlug(slug);
  if (!location) return {};
  return {
    title: `M'Brace Hospital, ${location.name}`,
    description: location.introParagraph || location.address,
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [location, data] = await Promise.all([getLocationBySlug(slug), getHomeData()]);
  if (!location) notFound();

  return <LocationPageClient location={location} data={data} />;
}
