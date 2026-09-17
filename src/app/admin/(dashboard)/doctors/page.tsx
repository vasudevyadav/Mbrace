import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deleteDoctorAction } from "@/app/admin/actions";
import DeleteButton from "@/app/admin/DeleteButton";

export default async function AdminDoctorsPage() {
  const doctors = await prisma.doctor.findMany({ orderBy: { order: "asc" } });

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Doctors</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">The featured doctor appears in the large card; everyone else appears in the scrolling grid below it.</p>
        </div>
        <Link href="/admin/doctors/new" className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50">+ Add doctor</Link>
      </div>

      {doctors.length === 0 ? (
        <p className="mt-6 rounded-xl border border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center text-sm text-slate-500">No doctors yet. Add your first one to show it on the homepage.</p>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-2xl bg-white p-5 sm:p-6 shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200 p-0!">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3" />
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Featured</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {doctors.map(d => (
                <tr key={d.id} className="transition hover:bg-slate-50">
                  <td className="px-4 py-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-100">
                      <Image src={d.image} alt="" fill className="object-cover" />
                    </div>
                  </td>
                  <td className="px-4 py-3.5 font-medium text-slate-900">{d.name}</td>
                  <td className="px-4 py-3.5 text-slate-600">{d.role}</td>
                  <td className="px-4 py-3.5 text-slate-600">{d.location}</td>
                  <td className="px-4 py-3.5 text-slate-600">{d.isFeatured && <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700">Featured</span>}</td>
                  <td className="px-4 py-3.5 text-right">
                    <Link href={`/admin/doctors/${d.id}`} className="text-sm font-medium text-brand-600 hover:text-brand-700 hover:underline">Edit</Link>
                    <span className="ml-4">
                      <DeleteButton
                        action={deleteDoctorAction}
                        hiddenFields={{ id: d.id }}
                        confirmTitle={`Delete ${d.name}?`}
                        confirmMessage="This doctor will be removed from the homepage and doctors list. This action can’t be undone."
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
