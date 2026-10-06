import { createDoctorTipAction } from "@/app/admin/actions";

import DoctorTipForm from "../DoctorTipForm";

export default function NewDoctorTipPage() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Add doctor tip</h1>
      <DoctorTipForm action={createDoctorTipAction} submitLabel="Create tip" />
    </div>
  );
}
