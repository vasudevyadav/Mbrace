import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deleteBlogAction } from "@/app/admin/actions";
import DeleteButton from "@/app/admin/DeleteButton";

export default async function AdminBlogsPage() {
  const blogs = await prisma.blog.findMany({ orderBy: { order: "asc" } });

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Blogs</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Shown in the &ldquo;From Our Experts&rdquo; section.</p>
        </div>
        <Link href="/admin/blogs/new" className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50">+ Add blog post</Link>
      </div>

      {blogs.length === 0 ? (
        <p className="mt-6 rounded-xl border border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center text-sm text-slate-500">No blog posts yet.</p>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-2xl bg-white p-5 sm:p-6 shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200 p-0!">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3" />
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {blogs.map(b => (
                <tr key={b.id} className="transition hover:bg-slate-50">
                  <td className="px-4 py-3">
                    <div className="relative h-10 w-14 overflow-hidden rounded-md bg-slate-100">
                      <Image src={b.image} alt="" fill className="object-cover" />
                    </div>
                  </td>
                  <td className="px-4 py-3.5 font-medium text-slate-900">{b.title}</td>
                  <td className="px-4 py-3.5 text-slate-600">{b.date}</td>
                  <td className="px-4 py-3.5 text-right">
                    <Link href={`/admin/blogs/${b.id}`} className="text-sm font-medium text-brand-600 hover:text-brand-700 hover:underline">Edit</Link>
                    <span className="ml-4">
                      <DeleteButton
                        action={deleteBlogAction}
                        hiddenFields={{ id: b.id }}
                        confirmTitle={`Delete “${b.title}”?`}
                        confirmMessage="This blog post will be removed from the homepage. This action can’t be undone."
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
