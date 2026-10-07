import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DoctorProfileClient from "@/components/sections/mbrace/doctors/DoctorProfileClient";
import { getHomeData, getDoctorBySlug } from "@/lib/queries";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const doctor = await getDoctorBySlug(slug);
  if (!doctor) return {};
  return {
    title: doctor.name,
    description: doctor.designation || doctor.role,
  };
}

export default async function DoctorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [doctor, data] = await Promise.all([getDoctorBySlug(slug), getHomeData()]);
  if (!doctor) notFound();

  return <DoctorProfileClient doctor={doctor} data={data} />;
}
