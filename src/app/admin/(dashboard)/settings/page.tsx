import { prisma } from "@/lib/prisma";
import { updateSettingsAction } from "@/app/admin/actions";

export default async function AdminSettingsPage({ searchParams }: { searchParams: Promise<{ saved?: string }> }) {
  const { saved } = await searchParams;
  const [settings, hero] = await Promise.all([
    prisma.siteSettings.findUnique({ where: { id: 1 } }),
    prisma.heroContent.findUnique({ where: { id: 1 } }),
  ]);

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Site Settings & Hero</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Contact info and social links are shared across the header, footer and location section. Hero text appears at the very top of the homepage.</p>
      {saved && <p className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">Saved.</p>}

      <form action={updateSettingsAction} className="mt-6 grid max-w-3xl gap-6">
        <section className="rounded-2xl bg-white p-5 sm:p-6 shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Contact & Locations</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">Phone (display)<input name="phone" defaultValue={settings?.phone} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
            <label className="block text-sm font-medium text-slate-700">Phone (tel: link)<input name="phoneHref" defaultValue={settings?.phoneHref} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
            <label className="block text-sm font-medium text-slate-700 sm:col-span-2">Email<input name="email" type="email" defaultValue={settings?.email} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
          </div>
          <label className="block text-sm font-medium text-slate-700 mt-4">LB Nagar address<textarea name="lbNagarAddress" defaultValue={settings?.lbNagarAddress} required rows={2} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
          <label className="block text-sm font-medium text-slate-700 mt-4">King Koti address<textarea name="kingKotiAddress" defaultValue={settings?.kingKotiAddress} required rows={2} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
        </section>

        <section className="rounded-2xl bg-white p-5 sm:p-6 shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Social Links</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">Instagram URL<input name="instagramUrl" defaultValue={settings?.instagramUrl} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
            <label className="block text-sm font-medium text-slate-700">Facebook URL<input name="facebookUrl" defaultValue={settings?.facebookUrl} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
            <label className="block text-sm font-medium text-slate-700">LinkedIn URL<input name="linkedinUrl" defaultValue={settings?.linkedinUrl} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
            <label className="block text-sm font-medium text-slate-700">YouTube URL<input name="youtubeUrl" defaultValue={settings?.youtubeUrl} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-5 sm:p-6 shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Hero Section</h2>
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
