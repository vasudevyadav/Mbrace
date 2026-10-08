import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateLocationAction, createLocationHighlightAction, deleteLocationHighlightAction } from "@/app/admin/actions";
import DeleteButton from "@/app/admin/DeleteButton";

import LocationForm from "../LocationForm";

const SECTIONS = [
  { key: "service", label: "Services Available" },
  { key: "step", label: "What To Expect (steps)" },
  { key: "promise", label: "Our Care Promise" },
  { key: "feature", label: "Why Patients Choose Us (features)" },
  { key: "stat", label: "Why Patients Choose Us (stats)" },
  { key: "reach", label: "How To Reach" },
] as const;

export default async function EditLocationPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ section?: string }>;
}) {
  const { id } = await params;
  const { section } = await searchParams;
  const location = await prisma.location.findUnique({ where: { id: Number(id) } });
  if (!location) notFound();

  const activeSection = SECTIONS.find(s => s.key === section) ?? SECTIONS[0];
  const highlights = await prisma.locationHighlight.findMany({
    where: { locationId: location.id, section: activeSection.key },
    orderBy: { order: "asc" },
  });
  const isStat = activeSection.key === "stat";

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Edit location</h1>
      <LocationForm action={updateLocationAction} location={location} submitLabel="Save changes" />

      <div className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 tracking-tight">Page content</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Repeating cards shown on the public location page, grouped by section.</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {SECTIONS.map(s => (
            <Link key={s.key} href={`/admin/locations/${location.id}?section=${s.key}`} className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${activeSection.key === s.key ? "bg-brand-100 text-brand-800 ring-1 ring-brand-200" : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"}`}>
              {s.label}
            </Link>
          ))}
        </div>

        {highlights.length === 0 ? (
          <p className="mt-6 rounded-xl border border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center text-sm text-slate-500">Nothing in {activeSection.label} yet.</p>
        ) : (
          <div className="mt-6 grid gap-3">
            {highlights.map(h => (
              <div key={h.id} className="rounded-2xl bg-white p-5 sm:p-6 shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-slate-900">{h.title}</p>
                    {h.description && <p className="mt-1 text-sm text-slate-500">{h.description}</p>}
                  </div>
                  <div className="flex shrink-0 gap-3">
                    <Link href={`/admin/locations/${location.id}/highlights/${h.id}?section=${activeSection.key}`} className="text-sm font-medium text-brand-600 hover:text-brand-700 hover:underline">Edit</Link>
                    <DeleteButton
                      action={deleteLocationHighlightAction}
                      hiddenFields={{ id: h.id, locationId: location.id, section: activeSection.key }}
                      confirmTitle="Delete this item?"
                      confirmMessage="This card will be removed from the location page. This action can’t be undone."
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <form action={createLocationHighlightAction} className="mt-6 w-full max-w-none rounded-3xl bg-white p-5 shadow-[0_18px_55px_rgba(41,30,52,0.07)] ring-1 ring-[#e4dce9] sm:p-8 xl:p-10">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Add to {activeSection.label}</h3>
          <input type="hidden" name="locationId" value={location.id} />
          <input type="hidden" name="section" value={activeSection.key} />
          <label className="block text-sm font-medium text-slate-700 mt-4">{isStat ? "Value (e.g. 35+)" : "Title"}<input name="title" required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
          <label className="block text-sm font-medium text-slate-700 mt-4">{isStat ? "Label (e.g. Years of Expert Care)" : "Description"}<textarea name="description" rows={2} className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
          <label className="block text-sm font-medium text-slate-700 mt-4">Display order<input name="order" type="number" defaultValue={highlights.length} required className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" /></label>
          <button type="submit" className="mt-4 inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50">Add</button>
        </form>
      </div>
    </div>
  );
}
