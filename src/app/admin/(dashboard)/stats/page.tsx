import { prisma } from "@/lib/prisma";
import { updateStatAction } from "@/app/admin/actions";

const WHERE_USED: Record<string, string> = {
  yearsOfCare: "Hero badge & About section badge",
  whyUsFamilies: "\"Why Choose M'Brace\" — first stat",
  whyUsYears: "\"Why Choose M'Brace\" — second stat",
  whyUsBabies: "\"Why Choose M'Brace\" — third stat",
  awardsYears: "Awards & Recognition — first stat",
  awardsSatisfaction: "Awards & Recognition — second stat",
  awardsFamilies: "Awards & Recognition — third stat",
};

export default async function AdminStatsPage({ searchParams }: { searchParams: Promise<{ saved?: string }> }) {
  const { saved } = await searchParams;
  const stats = await prisma.stat.findMany({ orderBy: { id: "asc" } });

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Stat Counters</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">These numbers animate/count up on the homepage. Editing &ldquo;yearsOfCare&rdquo; updates both the hero badge and the About section at once.</p>
      {saved && <p className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">Saved.</p>}

      <div className="mt-6 grid max-w-7xl gap-4">
        {stats.map(stat => (
          <form key={stat.id} action={updateStatAction} className="rounded-2xl bg-white p-5 sm:p-6 shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200">
            <input type="hidden" name="id" value={stat.id} />
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{WHERE_USED[stat.slug] ?? stat.slug}</p>
            <div className="mt-3 grid gap-4 sm:grid-cols-[160px_1fr]">
              <label className="block text-sm font-medium text-slate-700">Value<input name="value" defaultValue={stat.value} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
              <label className="block text-sm font-medium text-slate-700">Label<input name="label" defaultValue={stat.label} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
            </div>
            <button type="submit" className="mt-4 inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50">Save</button>
          </form>
        ))}
      </div>
    </div>
  );
}
