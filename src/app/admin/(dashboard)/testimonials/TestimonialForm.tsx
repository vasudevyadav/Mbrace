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
    <form action={action} className="mt-6 grid w-full max-w-none gap-6 rounded-3xl bg-white p-5 shadow-[0_18px_55px_rgba(41,30,52,0.07)] ring-1 ring-[#e4dce9] sm:p-8 xl:p-10">
      {testimonial?.id !== undefined && <input type="hidden" name="id" value={testimonial.id} />}
      <ImageUploadField label="Patient photo (optional — shows an initial if left blank)" currentImage={testimonial?.image} />
      <label className="block text-sm font-medium text-slate-700">Name<input name="name" defaultValue={testimonial?.name} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
      <label className="block text-sm font-medium text-slate-700">Quote<textarea name="quote" defaultValue={testimonial?.quote} required rows={3} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
      <label className="block text-sm font-medium text-slate-700">Video URL (optional — shows a play button over the photo)<input name="videoUrl" defaultValue={testimonial?.videoUrl} placeholder="https://..." className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
      <label className="block text-sm font-medium text-slate-700">Display order<input name="order" type="number" defaultValue={testimonial?.order ?? 0} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
      <button type="submit" className="w-fit inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50">{submitLabel}</button>
    </form>
  );
}
