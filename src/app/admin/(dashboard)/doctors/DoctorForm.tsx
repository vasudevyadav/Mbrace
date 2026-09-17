import ImageUploadField from "@/app/admin/ImageUploadField";

export type DoctorFormValues = {
  id?: number;
  name?: string;
  qualifications?: string;
  role?: string;
  image?: string;
  yearsExperience?: string;
  languages?: string;
  location?: string;
  isFeatured?: boolean;
  order?: number;
};

export default function DoctorForm({
  action,
  doctor,
  submitLabel,
}: {
  action: (formData: FormData) => void;
  doctor?: DoctorFormValues;
  submitLabel: string;
}) {
  return (
    <form action={action} className="mt-6 grid max-w-3xl gap-5 rounded-2xl bg-white p-5 sm:p-8 shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200">
      {doctor?.id !== undefined && <input type="hidden" name="id" value={doctor.id} />}
      <ImageUploadField label="Photo" currentImage={doctor?.image} required />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">Name<input name="name" defaultValue={doctor?.name} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">Role / title<input name="role" defaultValue={doctor?.role} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
      </div>
      <label className="block text-sm font-medium text-slate-700">Qualifications<input name="qualifications" defaultValue={doctor?.qualifications} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">Years of experience<input name="yearsExperience" defaultValue={doctor?.yearsExperience} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">Location<input name="location" defaultValue={doctor?.location} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">Languages<input name="languages" defaultValue={doctor?.languages} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">Display order<input name="order" type="number" defaultValue={doctor?.order ?? 0} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
      </div>
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <input type="checkbox" name="isFeatured" defaultChecked={doctor?.isFeatured} className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
          Featured doctor (large card)
        </label>
      </div>
      <button type="submit" className="w-fit inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50">{submitLabel}</button>
    </form>
  );
}
