import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { createFaqAction, deleteFaqAction } from "@/app/admin/actions";
import DeleteButton from "@/app/admin/DeleteButton";

export default async function AdminFaqsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const categories = await prisma.careCategory.findMany({ orderBy: { order: "asc" } });
  const activeCategory = categories.find(c => c.key === category) ?? categories[0];
  const items = activeCategory
    ? await prisma.faqItem.findMany({ where: { categoryKey: activeCategory.key }, orderBy: { order: "asc" } })
    : [];

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">FAQs</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Grouped by category, shown in the FAQ accordion on the homepage.</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map(c => (
          <Link key={c.key} href={`/admin/faqs?category=${encodeURIComponent(c.key)}`} className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${activeCategory?.key === c.key ? "bg-brand-100 text-brand-800 ring-1 ring-brand-200" : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"}`}>
            {c.label}
          </Link>
        ))}
      </div>

      {activeCategory && (
        <>
          {items.length === 0 ? (
            <p className="mt-6 rounded-xl border border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center text-sm text-slate-500">No FAQs in {activeCategory.label} yet.</p>
          ) : (
            <div className="mt-6 grid gap-3">
              {items.map(item => (
                <div key={item.id} className="rounded-2xl bg-white p-5 sm:p-6 shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium text-slate-900">{item.question}</p>
                      <p className="mt-1 text-sm text-slate-500">{item.answer}</p>
                    </div>
                    <div className="flex shrink-0 gap-3">
                      <Link href={`/admin/faqs/${item.id}?category=${encodeURIComponent(activeCategory.key)}`} className="text-sm font-medium text-brand-600 hover:text-brand-700 hover:underline">Edit</Link>
                      <DeleteButton
                        action={deleteFaqAction}
                        hiddenFields={{ id: item.id, categoryKey: activeCategory.key }}
                        confirmTitle="Delete this FAQ?"
                        confirmMessage="This FAQ will be removed from the homepage accordion. This action can’t be undone."
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <form action={createFaqAction} className="mt-6 max-w-3xl rounded-2xl bg-white p-5 sm:p-8 shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Add FAQ to {activeCategory.label}</h2>
            <input type="hidden" name="categoryKey" value={activeCategory.key} />
            <label className="block text-sm font-medium text-slate-700 mt-4">Question<input name="question" required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
            <label className="block text-sm font-medium text-slate-700 mt-4">Answer<textarea name="answer" required rows={3} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
            <label className="block text-sm font-medium text-slate-700 mt-4">Display order<input name="order" type="number" defaultValue={items.length} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
            <button type="submit" className="mt-4 inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50">Add FAQ</button>
          </form>
        </>
      )}
    </div>
  );
}
