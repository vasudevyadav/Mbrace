import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ServiceDetailClient from "@/components/sections/mbrace/services/ServiceDetailClient";
import { getHomeData, getServiceItemBySlug } from "@/lib/queries";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceItemBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [service, data] = await Promise.all([getServiceItemBySlug(slug), getHomeData()]);
  if (!service) notFound();

  const siblingServices = await prisma.serviceItem.findMany({
    where: { categoryId: service.categoryId, id: { not: service.id } },
    orderBy: { order: "asc" },
    take: 4,
  });

  return <ServiceDetailClient service={service} siblingServices={siblingServices} data={data} />;
}
