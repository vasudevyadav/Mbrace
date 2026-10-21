import ImageUploadField from "@/app/admin/ImageUploadField";

export default function TestimonialForm({
  action,
  testimonial,
  submitLabel,
}: {
  action: (formData: FormData) => void;
  testimonial?: { id?: number; name?: string; quote?: string; image?: string; videoUrl?: string; order?: number };
  submitLabel: string;
}) {
  return (
    <form action={action} className="mt-6 grid w-full gap-6 lg:grid-cols-12">
      {testimonial?.id !== undefined && <input type="hidden" name="id" value={testimonial.id} />}
      <section className="p-5 sm:p-6 lg:col-span-5"><ImageUploadField label="Patient photo" currentImage={testimonial?.image} helpText="Optional. An initial is shown when no image is uploaded." /></section>
      <section className="p-5 sm:p-6 lg:col-span-7"><h2 className="text-base font-bold text-slate-900">Patient story</h2><div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">Name<input name="name" defaultValue={testimonial?.name} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">Display order<input name="order" type="number" defaultValue={testimonial?.order ?? 0} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700 sm:col-span-2">Quote<textarea name="quote" defaultValue={testimonial?.quote} required rows={4} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700 sm:col-span-2">Video URL (optional)<input name="videoUrl" defaultValue={testimonial?.videoUrl} placeholder="https://..." className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
      </div></section>
      <div className="lg:col-span-12 lg:flex lg:justify-end"><button type="submit" className="inline-flex min-h-12 w-full shrink-0 items-center justify-center rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 sm:w-auto">{submitLabel}</button></div>
    </form>
  );
}
