import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updatePageSeoAction } from "@/app/admin/actions";
import SeoFields from "@/app/admin/SeoFields";

const pages = {
  home: { label: "Home Page", path: "/", title: "M’Brace by Kamineni Hospitals", description: "Connected care for women, mothers and children." },
  about: { label: "About Page", path: "/about", title: "About Us", description: "Learn about M’Brace, our mission and multidisciplinary team." },
  doctors: { label: "Doctors Page", path: "/doctors", title: "Doctors & Our Specialists", description: "Meet the multidisciplinary specialists behind M’Brace." },
  blog: { label: "Blog Page", path: "/blog", title: "Health Insights", description: "Expert health guidance from M’Brace specialists." },
} as const;

export default async function EditPageSeo({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ saved?: string }> }) {
  const { slug } = await params;
  const config = pages[slug as keyof typeof pages];
  if (!config) notFound();
  const saved = (await searchParams).saved === "1";
  let seo: { metaTitle: string; metaDescription: string } | null = null;
  try {
    seo = await prisma.pageSeo.findUnique({ where: { slug } });
  } catch (error) {
    console.warn(`Database unavailable; showing blank SEO fields for ${slug}.`, error);
  }

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div><p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Page settings</p><h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{config.label}</h1><p className="mt-2 text-sm text-slate-500">Public URL: {config.path}</p></div>
        <a href={config.path} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700">View page ↗</a>
      </div>
      {saved && <p role="status" className="mt-5 rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">SEO settings saved.</p>}
      <form action={updatePageSeoAction} className="mt-6 grid w-full max-w-none gap-6 rounded-3xl bg-white p-5 shadow-[0_18px_55px_rgba(41,30,52,0.07)] ring-1 ring-[#e4dce9] sm:p-8 xl:p-10">
        <input type="hidden" name="slug" value={slug} /><input type="hidden" name="label" value={config.label} />
        <SeoFields metaTitle={seo?.metaTitle} metaDescription={seo?.metaDescription} titlePlaceholder={config.title} descriptionPlaceholder={config.description} />
        <button type="submit" className="w-fit rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700">Save SEO settings</button>
      </form>
    </div>
  );
}
