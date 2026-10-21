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
    <form action={action} className="mt-6 grid w-full gap-6 lg:grid-cols-12">
      {tip?.id !== undefined && <input type="hidden" name="id" value={tip.id} />}
      <section className="p-5 sm:p-6 lg:col-span-5"><ImageUploadField label="Card image" currentImage={tip?.image} required helpText="Recommended: 16:9 landscape image." /></section>
      <section className="p-5 sm:p-6 lg:col-span-7"><h2 className="text-base font-bold text-slate-900">Tip details</h2><div className="mt-5 grid gap-5">
      <label className="block text-sm font-medium text-slate-700">Title<input name="title" defaultValue={tip?.title} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">Doctor name<input name="doctorName" defaultValue={tip?.doctorName} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">Display order<input name="order" type="number" defaultValue={tip?.order ?? 0} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
      </div>
      <label className="block text-sm font-medium text-slate-700">Video URL (optional — shows a play button over the card)<input name="videoUrl" defaultValue={tip?.videoUrl} placeholder="https://..." className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
      </div></section>
      <div className="lg:col-span-12 lg:flex lg:justify-end"><button type="submit" className="inline-flex min-h-12 w-full shrink-0 items-center justify-center rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 sm:w-auto">{submitLabel}</button></div>
    </form>
  );
}
