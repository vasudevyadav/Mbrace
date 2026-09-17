import ImageUploadField from "@/app/admin/ImageUploadField";

export default function BlogForm({
  action,
  blog,
  submitLabel,
}: {
  action: (formData: FormData) => void;
  blog?: { id?: number; title?: string; date?: string; image?: string; order?: number };
  submitLabel: string;
}) {
  return (
    <form action={action} className="mt-6 max-w-3xl grid gap-5 rounded-2xl bg-white p-5 sm:p-8 shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200">
      {blog?.id !== undefined && <input type="hidden" name="id" value={blog.id} />}
      <ImageUploadField label="Cover photo" currentImage={blog?.image} required />
      <label className="block text-sm font-medium text-slate-700">Title<input name="title" defaultValue={blog?.title} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">Date (display text)<input name="date" defaultValue={blog?.date} required placeholder="May 08, 2026" className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">Display order<input name="order" type="number" defaultValue={blog?.order ?? 0} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
      </div>
      <button type="submit" className="w-fit inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50">{submitLabel}</button>
    </form>
  );
}
