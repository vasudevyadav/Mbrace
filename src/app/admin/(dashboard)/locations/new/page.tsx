import { createLocationAction } from "@/app/admin/actions";

import LocationForm from "../LocationForm";

export default function NewLocationPage() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Add location</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">You can add services, steps, care-promise cards and more once the location is created.</p>
      <LocationForm action={createLocationAction} submitLabel="Create location" />
    </div>
  );
}
