import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deleteTestimonialAction } from "@/app/admin/actions";
import DeleteButton from "@/app/admin/DeleteButton";

export default async function AdminTestimonialsPage() {
  const testimonials = await prisma.testimonial.findMany({ orderBy: { order: "asc" } });

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Testimonials</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Shown in the homepage testimonial slider.</p>
        </div>
        <Link href="/admin/testimonials/new" className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50">+ Add testimonial</Link>
      </div>

      {testimonials.length === 0 ? (
        <p className="mt-6 rounded-xl border border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center text-sm text-slate-500">No testimonials yet.</p>
      ) : (
        <div className="mt-6 grid gap-3">
          {testimonials.map(t => (
            <div key={t.id} className="rounded-2xl bg-white p-5 sm:p-6 shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-slate-900">{t.name}</p>
                  <p className="mt-1 text-sm text-slate-500">&ldquo;{t.quote}&rdquo;</p>
                </div>
                <div className="flex shrink-0 gap-3">
                  <Link href={`/admin/testimonials/${t.id}`} className="text-sm font-medium text-brand-600 hover:text-brand-700 hover:underline">Edit</Link>
                  <DeleteButton
                    action={deleteTestimonialAction}
                    hiddenFields={{ id: t.id }}
                    confirmTitle={`Delete ${t.name}’s testimonial?`}
                    confirmMessage="This testimonial will be removed from the homepage slider. This action can’t be undone."
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
