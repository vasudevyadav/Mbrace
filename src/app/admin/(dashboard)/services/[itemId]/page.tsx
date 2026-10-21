import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateServiceItemAction } from "@/app/admin/actions";
import ImageUploadField from "@/app/admin/ImageUploadField";
import SeoFields from "@/app/admin/SeoFields";
import DynamicPageSectionsEditor from "@/app/admin/DynamicPageSectionsEditor";

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
      <form action={updateServiceItemAction} className="mt-6 grid w-full gap-6 lg:grid-cols-12">
        <input type="hidden" name="id" value={item.id} />
        <input type="hidden" name="categoryId" value={category ?? item.categoryId} />
        <section className="p-5 sm:p-6 lg:col-span-7"><SeoFields metaTitle={item.metaTitle} metaDescription={item.metaDescription} titlePlaceholder={item.name} descriptionPlaceholder={item.description} /></section>
        <section className="p-5 sm:p-6 lg:col-span-5"><div className="mb-5"><h2 className="text-base font-bold text-slate-900">Hero image</h2><p className="mt-1 text-xs leading-5 text-slate-500">This wide image appears at the top of the service page.</p></div><ImageUploadField label="Banner image" currentImage={item.heroImage} helpText="Recommended: 2200 × 1300px, JPG or WebP." /></section>
        <section className="p-5 sm:p-6 lg:col-span-12"><div><h2 className="text-base font-bold text-slate-900">Service information</h2><p className="mt-1 text-xs text-slate-500">Core page identity and summaries.</p></div>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">Name<input name="name" defaultValue={item.name} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">URL slug (public page: /services/{item.slug || "…"})<input name="slug" defaultValue={item.slug} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">Short description (shown in the homepage card)<textarea name="description" defaultValue={item.description} required rows={3} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">Full detail (shown on the /services/[slug] page)<textarea name="detail" defaultValue={item.detail} rows={3} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        </div>
        </section>
        <section className="p-5 sm:p-6 lg:col-span-12">
          <h2 className="text-base font-bold text-slate-900">Detail Page Sections</h2>
          <p className="mt-1 text-xs text-slate-500">Add and reorder the complete content shown uniquely on this service slug.</p>
          <div className="mt-4"><DynamicPageSectionsEditor name="blocksJson" initialSections={Array.isArray(item.blocks) ? item.blocks : []} /></div>
        </section>
        <label className="block text-sm font-medium text-slate-700 lg:col-span-3">Display order<input name="order" type="number" defaultValue={item.order} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <div className="flex items-end lg:col-span-9 lg:justify-end"><button type="submit" className="inline-flex min-h-12 w-full shrink-0 items-center justify-center rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 sm:w-auto">Save changes</button></div>
      </form>
    </div>
  );
}
