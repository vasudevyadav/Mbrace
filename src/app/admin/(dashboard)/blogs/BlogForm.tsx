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
    <form action={action} className="mt-6 grid w-full gap-6 lg:grid-cols-12">
      {blog?.id !== undefined && <input type="hidden" name="id" value={blog.id} />}
      <section className="p-5 sm:p-6 lg:col-span-12"><SeoFields metaTitle={blog?.metaTitle} metaDescription={blog?.metaDescription} titlePlaceholder={blog?.title} descriptionPlaceholder={blog?.summary} /></section>
      <section className="p-5 sm:p-6 lg:col-span-5"><ImageUploadField label="Cover photo" currentImage={blog?.image} required helpText="Recommended: 1600 × 900px, JPG or WebP." /></section>
      <section className="p-5 sm:p-6 lg:col-span-7"><h2 className="text-base font-bold text-slate-900">Article basics</h2><div className="mt-5 grid gap-5">
      <label className="block text-sm font-medium text-slate-700">Title<input name="title" defaultValue={blog?.title} required className={fieldClass} /></label>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">Date (display text)<input name="date" defaultValue={blog?.date} required placeholder="May 08, 2026" className={fieldClass} /></label>
        <label className="block text-sm font-medium text-slate-700">Display order<input name="order" type="number" defaultValue={blog?.order ?? 0} required className={fieldClass} /></label>
      </div>
      </div></section>

      <section className="p-5 sm:p-6 lg:col-span-12">
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
      </section>

      <section className="p-5 sm:p-6 lg:col-span-12">
        <h2 className="text-sm font-semibold text-slate-900">Content blocks</h2>
        <p className="mt-1 text-xs text-slate-500">Build the article body as an ordered list of sections, alert callouts and key-takeaway boxes.</p>
        <div className="mt-4">
          <BlogBlocksEditor name="blocksJson" initialBlocks={blog?.blocks ?? []} />
        </div>
      </section>

      <div className="lg:col-span-12 lg:flex lg:justify-end"><button type="submit" className="inline-flex min-h-12 w-full shrink-0 items-center justify-center rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 sm:w-auto">{submitLabel}</button></div>
    </form>
  );
}
