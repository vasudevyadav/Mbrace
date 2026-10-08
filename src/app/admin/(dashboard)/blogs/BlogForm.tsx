import ImageUploadField from "@/app/admin/ImageUploadField";
import SeoFields from "@/app/admin/SeoFields";
import { blogCategories, type BlogArticle } from "@/components/sections/mbrace/blog/blogContent";
import BlogBlocksEditor from "./BlogBlocksEditor";

export type BlogFormValues = {
  id?: number;
  slug?: string;
  title?: string;
  date?: string;
  image?: string;
  order?: number;
  category?: string;
  summary?: string;
  intro?: string;
  blocks?: BlogArticle["blocks"];
  metaTitle?: string;
  metaDescription?: string;
};

const fieldClass = "mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";

export default function BlogForm({
  action,
  blog,
  submitLabel,
}: {
  action: (formData: FormData) => void;
  blog?: BlogFormValues;
  submitLabel: string;
}) {
  return (
    <form action={action} className="mt-6 grid w-full max-w-none gap-6 rounded-3xl bg-white p-5 shadow-[0_18px_55px_rgba(41,30,52,0.07)] ring-1 ring-[#e4dce9] sm:p-8 xl:p-10">
      {blog?.id !== undefined && <input type="hidden" name="id" value={blog.id} />}
      <SeoFields metaTitle={blog?.metaTitle} metaDescription={blog?.metaDescription} titlePlaceholder={blog?.title} descriptionPlaceholder={blog?.summary} />
      <ImageUploadField label="Cover photo" currentImage={blog?.image} required />
      <label className="block text-sm font-medium text-slate-700">Title<input name="title" defaultValue={blog?.title} required className={fieldClass} /></label>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">Date (display text)<input name="date" defaultValue={blog?.date} required placeholder="May 08, 2026" className={fieldClass} /></label>
        <label className="block text-sm font-medium text-slate-700">Display order<input name="order" type="number" defaultValue={blog?.order ?? 0} required className={fieldClass} /></label>
      </div>

      <div className="border-t border-slate-100 pt-5">
        <h2 className="text-sm font-semibold text-slate-900">Article page</h2>
        <p className="mt-1 text-xs text-slate-500">Shown at /blog and /blog/{blog?.slug || "…"}, and linked from the homepage &ldquo;From Our Experts&rdquo; card.</p>
        <div className="mt-4 grid gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">URL slug (optional — auto-generated from title if left blank)<input name="slug" defaultValue={blog?.slug} placeholder="understanding-your-menstrual-cycle" className={fieldClass} /></label>
            <label className="block text-sm font-medium text-slate-700">Category
              <select name="category" defaultValue={blog?.category || blogCategories[0]} required className={fieldClass}>
                {blogCategories.map(category => <option key={category} value={category}>{category}</option>)}
              </select>
            </label>
          </div>
          <label className="block text-sm font-medium text-slate-700">Card summary (shown on listing &amp; related-article cards)<textarea name="summary" defaultValue={blog?.summary} rows={2} required className={fieldClass} /></label>
          <label className="block text-sm font-medium text-slate-700">Opening paragraph<textarea name="intro" defaultValue={blog?.intro} rows={3} required className={fieldClass} /></label>
        </div>
      </div>

      <div className="border-t border-slate-100 pt-5">
        <h2 className="text-sm font-semibold text-slate-900">Content blocks</h2>
        <p className="mt-1 text-xs text-slate-500">Build the article body as an ordered list of sections, alert callouts and key-takeaway boxes.</p>
        <div className="mt-4">
          <BlogBlocksEditor name="blocksJson" initialBlocks={blog?.blocks ?? []} />
        </div>
      </div>

      <button type="submit" className="w-fit inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50">{submitLabel}</button>
    </form>
  );
}
