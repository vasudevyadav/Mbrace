import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminCarePagesPage() {
  const [pages, categories] = await Promise.all([
    prisma.careCategoryContent.findMany({ orderBy: { id: "asc" } }),
    prisma.serviceCategory.findMany({ orderBy: { order: "asc" }, include: { items: { orderBy: { order: "asc" } } } }),
  ]);
  const categoryForPage = (slug: string) => categories.find(category =>
    (slug === "womens-care" && category.label.toLowerCase().includes("women")) ||
    (slug === "child-care" && category.label.toLowerCase().includes("child")) ||
    (slug === "fertility-care" && category.label.toLowerCase().includes("fertility"))
  );

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Main Care &amp; Child Services</h1>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">Manage each main care page and all service detail pages that belong to it from one place.</p>

      <div className="mt-6 grid gap-6">
        {pages.map(page => {
          const category = categoryForPage(page.slug);
          return (
            <section key={page.id} className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 bg-slate-50 px-5 py-4 sm:px-6">
                <div><p className="text-[10px] font-semibold uppercase tracking-wider text-brand-600">Main service page</p><h2 className="mt-1 text-lg font-semibold text-slate-900">{page.label}</h2></div>
                <Link href={`/admin/care-pages/${page.id}`} className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white">Edit main page</Link>
              </div>
              <div className="p-5 sm:p-6">
                <div className="mb-4 flex items-center justify-between gap-4"><h3 className="text-sm font-semibold text-slate-800">Child service pages</h3>{category && <Link href={`/admin/services?category=${category.id}`} className="text-xs font-semibold text-brand-600">Manage / add child services →</Link>}</div>
                {!category || category.items.length === 0 ? <p className="rounded-lg border border-dashed border-slate-200 px-4 py-5 text-sm text-slate-500">No separate child services configured for this page.</p> : (
                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {category.items.map(item => <Link key={item.id} href={`/admin/services/${item.id}?category=${category.id}`} className="rounded-xl border border-slate-200 px-4 py-3 transition hover:border-brand-300 hover:bg-brand-50"><strong className="block text-sm text-slate-800">{item.name}</strong><span className="mt-1 block text-[11px] text-slate-500">/services/{item.slug}</span></Link>)}
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
