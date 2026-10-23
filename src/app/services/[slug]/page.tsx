import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import ServiceDetailClient from "@/components/sections/mbrace/services/ServiceDetailClient";
import { getHomeData, getServiceItemBySlug } from "@/lib/queries";
import { getCanonicalServiceSlug } from "@/lib/serviceLinks";
import { serviceMetadata } from "@/lib/approvedMetadata";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const canonicalSlug = getCanonicalServiceSlug(slug);
  if (canonicalSlug !== slug) permanentRedirect(`/services/${canonicalSlug}`);
  const service = await getServiceItemBySlug(slug);
  if (!service) return {};
  const approvedSeo = serviceMetadata[canonicalSlug];
  return {
    title: { absolute: service.metaTitle || approvedSeo?.title || service.name },
    description: service.metaDescription || approvedSeo?.description || service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const canonicalSlug = getCanonicalServiceSlug(slug);
  if (canonicalSlug !== slug) permanentRedirect(`/services/${canonicalSlug}`);
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
