import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateLocationHighlightAction } from "@/app/admin/actions";

export default async function EditLocationHighlightPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string; highlightId: string }>;
  searchParams: Promise<{ section?: string }>;
}) {
  const { id, highlightId } = await params;
  const { section } = await searchParams;
  const highlight = await prisma.locationHighlight.findUnique({ where: { id: Number(highlightId) } });
  if (!highlight) notFound();
  const isStat = highlight.section === "stat";

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Edit item</h1>
      <form action={updateLocationHighlightAction} className="mt-6 max-w-2xl grid gap-4 rounded-2xl bg-white p-5 sm:p-8 shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200">
        <input type="hidden" name="id" value={highlight.id} />
        <input type="hidden" name="locationId" value={id} />
        <input type="hidden" name="section" value={section ?? highlight.section} />
        <label className="block text-sm font-medium text-slate-700">{isStat ? "Value (e.g. 35+)" : "Title"}<input name="title" defaultValue={highlight.title} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">{isStat ? "Label (e.g. Years of Expert Care)" : "Description"}<textarea name="description" defaultValue={highlight.description} rows={3} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">Display order<input name="order" type="number" defaultValue={highlight.order} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <button type="submit" className="w-fit inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50">Save changes</button>
      </form>
    </div>
  );
}
