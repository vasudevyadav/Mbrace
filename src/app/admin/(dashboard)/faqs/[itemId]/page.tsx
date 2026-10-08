import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateFaqAction } from "@/app/admin/actions";

export default async function EditFaqPage({
  params,
  searchParams,
}: {
  params: Promise<{ itemId: string }>;
  searchParams: Promise<{ category?: string }>;
}) {
  const { itemId } = await params;
  const { category } = await searchParams;
  const item = await prisma.faqItem.findUnique({ where: { id: Number(itemId) } });
  if (!item) notFound();

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Edit FAQ</h1>
      <form action={updateFaqAction} className="mt-6 grid w-full max-w-none gap-6 rounded-3xl bg-white p-5 shadow-[0_18px_55px_rgba(41,30,52,0.07)] ring-1 ring-[#e4dce9] sm:p-8 xl:p-10">
        <input type="hidden" name="id" value={item.id} />
        <input type="hidden" name="categoryKey" value={category ?? item.categoryKey} />
        <label className="block text-sm font-medium text-slate-700">Question<input name="question" defaultValue={item.question} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">Answer<textarea name="answer" defaultValue={item.answer} required rows={3} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <label className="block text-sm font-medium text-slate-700">Display order<input name="order" type="number" defaultValue={item.order} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        <button type="submit" className="w-fit inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50">Save changes</button>
      </form>
    </div>
  );
}
