import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateDoctorAction } from "@/app/admin/actions";

import DoctorForm from "../DoctorForm";

export default async function EditDoctorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const doctor = await prisma.doctor.findUnique({ where: { id: Number(id) } });
  if (!doctor) notFound();

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Edit doctor</h1>
      <DoctorForm action={updateDoctorAction} doctor={doctor} submitLabel="Save changes" />
    </div>
  );
}
