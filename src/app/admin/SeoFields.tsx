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
    <div className="border-t border-slate-100 pt-5">
      <h2 className="text-sm font-semibold text-slate-900">SEO</h2>
      <p className="mt-1 text-xs text-slate-500">Optional — controls the title and description shown in search results and link previews. Leave blank to use the page&apos;s own title and description.</p>
      <div className="mt-4 grid gap-4">
        <label className="block text-sm font-medium text-slate-700">Meta title<input name="metaTitle" defaultValue={metaTitle} placeholder={titlePlaceholder} className={fieldClass} /></label>
        <label className="block text-sm font-medium text-slate-700">Meta description<textarea name="metaDescription" defaultValue={metaDescription} rows={2} placeholder={descriptionPlaceholder} className={fieldClass} /></label>
      </div>
    </div>
  );
}
