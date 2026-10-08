import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateCareCategoryContentAction } from "@/app/admin/actions";
import type { JourneyItem } from "@/components/sections/mbrace/services/careCategoryContent";

import CareCategoryContentForm from "../CareCategoryContentForm";

const EMPTY_JOURNEY: JourneyItem = { image: "", question: "", cta: "" };

export default async function EditCarePagePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const page = await prisma.careCategoryContent.findUnique({ where: { id: Number(id) } });
  if (!page) notFound();

  const journey = Array.isArray(page.journey) ? (page.journey as unknown as JourneyItem[]) : [];
  while (journey.length < 4) journey.push({ ...EMPTY_JOURNEY });

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Edit {page.label}</h1>
      <CareCategoryContentForm
        action={updateCareCategoryContentAction}
        id={page.id}
        slug={page.slug}
        label={page.label}
        content={{ ...page, journey, metaTitle: page.metaTitle, metaDescription: page.metaDescription }}
      />
    </div>
  );
}
