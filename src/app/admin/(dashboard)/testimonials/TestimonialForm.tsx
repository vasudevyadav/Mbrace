export default function TestimonialForm({
  action,
  testimonial,
  submitLabel,
}: {
  action: (formData: FormData) => void;
  testimonial?: { id?: number; name?: string; quote?: string; order?: number };
  submitLabel: string;
}) {
  return (
    <form action={action} className="mt-6 max-w-3xl grid gap-4 rounded-2xl bg-white p-5 sm:p-8 shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200">
      {testimonial?.id !== undefined && <input type="hidden" name="id" value={testimonial.id} />}
      <label className="block text-sm font-medium text-slate-700">Name<input name="name" defaultValue={testimonial?.name} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
      <label className="block text-sm font-medium text-slate-700">Quote<textarea name="quote" defaultValue={testimonial?.quote} required rows={3} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
      <label className="block text-sm font-medium text-slate-700">Display order<input name="order" type="number" defaultValue={testimonial?.order ?? 0} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
      <button type="submit" className="w-fit inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50">{submitLabel}</button>
    </form>
  );
}
