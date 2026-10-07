import ImageUploadField from "@/app/admin/ImageUploadField";

export type DoctorTipFormValues = {
  id?: number;
  title?: string;
  doctorName?: string;
  image?: string;
  videoUrl?: string;
  order?: number;
};

export default function DoctorTipForm({
  action,
  tip,
  submitLabel,
}: {
  action: (formData: FormData) => void;
  tip?: DoctorTipFormValues;
  submitLabel: string;
}) {
  return (
    <form action={action} className="mt-6 grid max-w-3xl gap-5 rounded-2xl bg-white p-5 sm:p-8 shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200">
      {tip?.id !== undefined && <input type="hidden" name="id" value={tip.id} />}
      <ImageUploadField label="Card image" currentImage={tip?.image} required />
      <label className="block text-sm font-medium text-slate-700">Title<input name="title" defaultValue={tip?.title} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">Doctor name<input name="doctorName" defaultValue={tip?.doctorName} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">Display order<input name="order" type="number" defaultValue={tip?.order ?? 0} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
      </div>
      <label className="block text-sm font-medium text-slate-700">Video URL (optional — shows a play button over the card)<input name="videoUrl" defaultValue={tip?.videoUrl} placeholder="https://..." className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
      <button type="submit" className="w-fit inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50">{submitLabel}</button>
    </form>
  );
}
