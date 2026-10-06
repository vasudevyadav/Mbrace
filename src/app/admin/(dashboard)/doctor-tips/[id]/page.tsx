import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateDoctorTipAction } from "@/app/admin/actions";

import DoctorTipForm from "../DoctorTipForm";

export default async function EditDoctorTipPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tip = await prisma.doctorTip.findUnique({ where: { id: Number(id) } });
  if (!tip) notFound();

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Edit doctor tip</h1>
      <DoctorTipForm action={updateDoctorTipAction} tip={tip} submitLabel="Save changes" />
    </div>
  );
}
