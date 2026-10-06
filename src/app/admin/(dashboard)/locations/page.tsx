import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deleteLocationAction } from "@/app/admin/actions";
import DeleteButton from "@/app/admin/DeleteButton";

export default async function AdminLocationsPage() {
  const locations = await prisma.location.findMany({ orderBy: { order: "asc" } });

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Locations</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Each location gets its own public page at /locations/[slug].</p>
        </div>
        <Link href="/admin/locations/new" className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50">+ Add location</Link>
      </div>

      {locations.length === 0 ? (
        <p className="mt-6 rounded-xl border border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center text-sm text-slate-500">No locations yet. Add your first one to publish its page.</p>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-2xl bg-white p-5 sm:p-6 shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200 p-0!">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3" />
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Address</th>
                <th className="px-4 py-3">Page</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {locations.map(l => (
                <tr key={l.id} className="transition hover:bg-slate-50">
                  <td className="px-4 py-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-slate-100">
                      {l.heroImage && <Image src={l.heroImage} alt="" fill className="object-cover" />}
                    </div>
                  </td>
                  <td className="px-4 py-3.5 font-medium text-slate-900">{l.name}</td>
                  <td className="px-4 py-3.5 max-w-xs truncate text-slate-600">{l.address}</td>
                  <td className="px-4 py-3.5 text-slate-500">
                    <a href={`/locations/${l.slug}`} target="_blank" rel="noreferrer" className="hover:underline">/locations/{l.slug}</a>
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    <Link href={`/admin/locations/${l.id}`} className="text-sm font-medium text-brand-600 hover:text-brand-700 hover:underline">Edit</Link>
                    <span className="ml-4">
                      <DeleteButton
                        action={deleteLocationAction}
                        hiddenFields={{ id: l.id }}
                        confirmTitle={`Delete ${l.name}?`}
                        confirmMessage="This location and all of its page content will be removed. This action can’t be undone."
                      />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
