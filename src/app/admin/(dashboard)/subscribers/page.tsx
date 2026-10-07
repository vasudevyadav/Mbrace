import { prisma } from "@/lib/prisma";
import { deleteSubscriberAction } from "@/app/admin/actions";
import DeleteButton from "@/app/admin/DeleteButton";

export default async function AdminSubscribersPage() {
  const subscribers = await prisma.subscriber.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Subscribers</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Emails collected from the &ldquo;Ready to Talk?&rdquo; newsletter form in the footer, on any page.</p>

      {subscribers.length === 0 ? (
        <p className="mt-6 rounded-xl border border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center text-sm text-slate-500">No subscribers yet.</p>
      ) : (
        <div className="mt-6 max-w-3xl overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <th className="px-5 py-3">Email</th>
                <th className="px-5 py-3">Source</th>
                <th className="px-5 py-3">Subscribed</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody>
              {subscribers.map(subscriber => (
                <tr key={subscriber.id} className="border-b border-slate-50 last:border-0">
                  <td className="px-5 py-3.5 font-medium text-slate-900">{subscriber.email}</td>
                  <td className="px-5 py-3.5 text-slate-500">{subscriber.source ?? "—"}</td>
                  <td className="px-5 py-3.5 text-slate-500">{subscriber.createdAt.toLocaleDateString()}</td>
                  <td className="px-5 py-3.5 text-right">
                    <DeleteButton
                      action={deleteSubscriberAction}
                      hiddenFields={{ id: subscriber.id }}
                      confirmTitle="Remove this subscriber?"
                      confirmMessage="This action can’t be undone."
                    />
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
