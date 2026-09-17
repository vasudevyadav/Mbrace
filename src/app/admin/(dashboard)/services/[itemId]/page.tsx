import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateServiceItemAction } from "@/app/admin/actions";

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
      <form action={updateServiceItemAction} className="mt-6 max-w-3xl grid gap-4 rounded-2xl bg-white p-5 sm:p-8 shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200">
        <input type="hidden" name="id" value={item.id} />
        <input type="hidden" name="categoryId" value={category ?? item.categoryId} />
        <label className="block text-sm font-medium text-slate-700">Name<input name="name" defaultValue={item.name} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">Description<textarea name="description" defaultValue={item.description} required rows={2} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">Display order<input name="order" type="number" defaultValue={item.order} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <button type="submit" className="w-fit inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50">Save changes</button>
      </form>
    </div>
  );
}
