import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailClient from "@/components/sections/mbrace/services/ServiceDetailClient";
import { getHomeData, getServiceItemBySlug } from "@/lib/queries";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceItemBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle || service.name,
    description: service.metaDescription || service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [service, data] = await Promise.all([
    getServiceItemBySlug(slug),
    getHomeData(),
  ]);
  if (!service) notFound();

  return (
    <ServiceDetailClient
      service={service}
      data={data}
    />
  );
}
