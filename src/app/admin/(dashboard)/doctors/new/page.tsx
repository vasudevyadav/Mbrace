import { createDoctorAction } from "@/app/admin/actions";

import DoctorForm from "../DoctorForm";

export default function NewDoctorPage() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Add doctor</h1>
      <DoctorForm action={createDoctorAction} submitLabel="Create doctor" />
    </div>
  );
}
