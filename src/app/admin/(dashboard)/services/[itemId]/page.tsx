import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateServiceItemAction } from "@/app/admin/actions";
import ImageUploadField from "@/app/admin/ImageUploadField";
import SeoFields from "@/app/admin/SeoFields";
import BlogBlocksEditor from "@/app/admin/(dashboard)/blogs/BlogBlocksEditor";
import type { BlogBlock } from "@/components/sections/mbrace/blog/blogContent";

export default async function EditServiceItemPage({
  params,
  searchParams,
}: {
  params: Promise<{ itemId: string }>;
  searchParams: Promise<{ category?: string }>;
}) {
  const { itemId } = await params;
  const { category } = await searchParams;
  const item = await prisma.serviceItem.findUnique({ where: { id: Number(itemId) } });
  if (!item) notFound();

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Edit service</h1>
      <form action={updateServiceItemAction} className="mt-6 grid w-full max-w-none gap-6 rounded-3xl bg-white p-5 shadow-[0_18px_55px_rgba(41,30,52,0.07)] ring-1 ring-[#e4dce9] sm:p-8 xl:p-10">
        <input type="hidden" name="id" value={item.id} />
        <input type="hidden" name="categoryId" value={category ?? item.categoryId} />
        <SeoFields metaTitle={item.metaTitle} metaDescription={item.metaDescription} titlePlaceholder={item.name} descriptionPlaceholder={item.description} />
        <label className="block text-sm font-medium text-slate-700">Name<input name="name" defaultValue={item.name} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">URL slug (public page: /services/{item.slug || "…"})<input name="slug" defaultValue={item.slug} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">Short description (shown in the homepage card)<textarea name="description" defaultValue={item.description} required rows={2} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">Full detail (shown on the /services/[slug] page)<textarea name="detail" defaultValue={item.detail} rows={5} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <ImageUploadField label="Hero image" currentImage={item.heroImage} />
        <section className="border-t border-slate-100 pt-5">
          <h2 className="text-sm font-semibold text-slate-900">Detail page sections</h2>
          <p className="mt-1 text-xs text-slate-500">Add and reorder the complete content shown uniquely on this service slug.</p>
          <div className="mt-4"><BlogBlocksEditor name="blocksJson" initialBlocks={(Array.isArray(item.blocks) ? item.blocks : []) as BlogBlock[]} /></div>
        </section>
        <label className="block text-sm font-medium text-slate-700">Display order<input name="order" type="number" defaultValue={item.order} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <button type="submit" className="w-fit inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50">Save changes</button>
      </form>
    </div>
  );
}
