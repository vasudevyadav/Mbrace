import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateTestimonialAction } from "@/app/admin/actions";

import TestimonialForm from "../TestimonialForm";

export default async function EditTestimonialPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const testimonial = await prisma.testimonial.findUnique({ where: { id: Number(id) } });
  if (!testimonial) notFound();

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Edit testimonial</h1>
      <TestimonialForm action={updateTestimonialAction} testimonial={testimonial} submitLabel="Save changes" />
    </div>
  );
}
