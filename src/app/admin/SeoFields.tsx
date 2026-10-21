const fieldClass = "mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";

export default function SeoFields({
  metaTitle,
  metaDescription,
  titlePlaceholder,
  descriptionPlaceholder,
}: {
  metaTitle?: string;
  metaDescription?: string;
  titlePlaceholder?: string;
  descriptionPlaceholder?: string;
}) {
  return (
    <div className="min-w-0">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div><h2 className="text-base font-bold text-slate-900">Search &amp; sharing</h2><p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500">Optional metadata for search results and link previews. Blank fields automatically use the page content.</p></div>
        <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.08em] text-brand-700 ring-1 ring-brand-100">SEO</span>
      </div>
      <div className="mt-5 grid gap-4 xl:grid-cols-2">
        <label className="block text-sm font-semibold text-slate-700">Meta title<input name="metaTitle" defaultValue={metaTitle} placeholder={titlePlaceholder} className={fieldClass} /></label>
        <label className="block text-sm font-semibold text-slate-700">Meta description<textarea name="metaDescription" defaultValue={metaDescription} rows={2} placeholder={descriptionPlaceholder} className={fieldClass} /></label>
      </div>
    </div>
  );
}
