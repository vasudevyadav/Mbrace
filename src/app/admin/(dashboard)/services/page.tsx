import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { createServiceItemAction, deleteServiceItemAction } from "@/app/admin/actions";
import DeleteButton from "@/app/admin/DeleteButton";

export default async function AdminServicesPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const categories = await prisma.serviceCategory.findMany({ orderBy: { order: "asc" } });
  const activeCategory = categories.find(c => c.id === Number(category)) ?? categories[0];
  const items = activeCategory
    ? await prisma.serviceItem.findMany({ where: { categoryId: activeCategory.id }, orderBy: { order: "asc" } })
    : [];

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Services</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Cards shown in the &ldquo;What We Offer&rdquo; tabs on the homepage.</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map(c => (
          <Link key={c.id} href={`/admin/services?category=${c.id}`} className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${activeCategory?.id === c.id ? "bg-brand-100 text-brand-800 ring-1 ring-brand-200" : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"}`}>
            {c.label}
          </Link>
        ))}
      </div>

      {activeCategory && (
        <>
          {items.length === 0 ? (
            <p className="mt-6 rounded-xl border border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center text-sm text-slate-500">No services in {activeCategory.label} yet.</p>
          ) : (
            <div className="mt-6 overflow-x-auto rounded-2xl bg-white p-5 sm:p-6 shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200 p-0!">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead className="border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Description</th>
                    <th className="px-4 py-3" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {items.map(item => (
                    <tr key={item.id} className="transition hover:bg-slate-50">
                      <td className="px-4 py-3.5 font-medium text-slate-900">{item.name}</td>
                      <td className="px-4 py-3.5 text-slate-600">{item.description}</td>
                      <td className="px-4 py-3.5 text-right">
                        <Link href={`/admin/services/${item.id}?category=${activeCategory.id}`} className="text-sm font-medium text-brand-600 hover:text-brand-700 hover:underline">Edit</Link>
                        <span className="ml-4">
                          <DeleteButton
                            action={deleteServiceItemAction}
                            hiddenFields={{ id: item.id, categoryId: activeCategory.id }}
                            confirmTitle={`Delete “${item.name}”?`}
                            confirmMessage="This service card will be removed from the homepage. This action can’t be undone."
                          />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <form action={createServiceItemAction} className="mt-6 max-w-7xl rounded-2xl bg-white p-5 sm:p-8 shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Add service to {activeCategory.label}</h2>
            <input type="hidden" name="categoryId" value={activeCategory.id} />
            <label className="block text-sm font-medium text-slate-700 mt-4">Name<input name="name" required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
            <label className="block text-sm font-medium text-slate-700 mt-4">Description<textarea name="description" required rows={2} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
            <label className="block text-sm font-medium text-slate-700 mt-4">Display order<input name="order" type="number" defaultValue={items.length} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
            <button type="submit" className="mt-4 inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50">Add service</button>
          </form>
        </>
      )}
    </div>
  );
}
