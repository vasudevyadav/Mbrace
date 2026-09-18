import { prisma } from "@/lib/prisma";
import { updateHeroAction } from "@/app/admin/actions";

export default async function AdminHeroPage({ searchParams }: { searchParams: Promise<{ saved?: string }> }) {
  const { saved } = await searchParams;
  const hero = await prisma.heroContent.findUnique({ where: { id: 1 } });

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Hero Section</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">The heading and badge at the very top of the Home page.</p>
      {saved && <p className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">Saved.</p>}

      <form action={updateHeroAction} className="mt-6 grid max-w-3xl gap-6">
        <section className="rounded-2xl bg-white p-5 sm:p-6 shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Hero Copy</h2>
          <label className="block text-sm font-medium text-slate-700 mt-4">Badge prefix (e.g. &ldquo;Backed By&rdquo;)<input name="badgePrefix" defaultValue={hero?.badgePrefix} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
          <p className="mt-1.5 text-xs text-slate-400">The bold years number next to it comes from the &ldquo;yearsOfCare&rdquo; stat counter.</p>
          <label className="block text-sm font-medium text-slate-700 mt-4">Heading (plain part)<input name="headingPlain" defaultValue={hero?.headingPlain} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
          <label className="block text-sm font-medium text-slate-700 mt-4">Heading (highlighted part)<input name="headingHighlight" defaultValue={hero?.headingHighlight} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
          <label className="block text-sm font-medium text-slate-700 mt-4">Subheading<input name="subheading" defaultValue={hero?.subheading} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
          <label className="block text-sm font-medium text-slate-700 mt-4">Description<textarea name="description" defaultValue={hero?.description} required rows={3} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        </section>

        <button type="submit" className="w-fit inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50">Save changes</button>
      </form>
    </div>
  );
}
