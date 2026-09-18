import { prisma } from "@/lib/prisma";
import { updateAppointmentStatusAction, deleteAppointmentAction } from "@/app/admin/actions";
import DeleteButton from "@/app/admin/DeleteButton";

const STATUSES = ["new", "contacted", "closed"] as const;

const STATUS_STYLES: Record<string, string> = {
  new: "bg-amber-50 text-amber-700 ring-amber-200",
  contacted: "bg-sky-50 text-sky-700 ring-sky-200",
  closed: "bg-emerald-50 text-emerald-700 ring-emerald-200",
};

export default async function AdminAppointmentsPage() {
  const requests = await prisma.appointmentRequest.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Appointment Leads</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Every request submitted from the hero quick-booking widget or the main appointment form, on any page.</p>

      {requests.length === 0 ? (
        <p className="mt-6 rounded-xl border border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center text-sm text-slate-500">No appointment requests yet.</p>
      ) : (
        <div className="mt-6 grid gap-3">
          {requests.map(request => (
            <div key={request.id} className="rounded-2xl bg-white p-5 sm:p-6 shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <p className="font-medium text-slate-900">{request.name}</p>
                    <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1 ${STATUS_STYLES[request.status] ?? "bg-slate-50 text-slate-600 ring-slate-200"}`}>{request.status}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">{request.email} · {request.phone}</p>
                  <p className="mt-1 text-sm text-slate-500">{request.service} — {request.location} · Preferred: {request.preferredDate}</p>
                  {(request.doctor || request.appointmentType) && <p className="mt-1 text-xs text-slate-400">{[request.doctor, request.appointmentType].filter(Boolean).join(" · ")}</p>}
                  <p className="mt-2 text-xs text-slate-400">{request.source ?? "site"} · {request.createdAt.toLocaleString()}</p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-3">
                  <form action={updateAppointmentStatusAction} className="flex items-center gap-2">
                    <input type="hidden" name="id" value={request.id} />
                    <select name="status" defaultValue={request.status} className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-700 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20">
                      {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <button type="submit" className="rounded-lg bg-brand-600 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-brand-700">Update</button>
                  </form>
                  <DeleteButton
                    action={deleteAppointmentAction}
                    hiddenFields={{ id: request.id }}
                    confirmTitle="Delete this lead?"
                    confirmMessage="This appointment request will be permanently removed. This action can’t be undone."
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
