import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateBlogAction } from "@/app/admin/actions";

import BlogForm from "../BlogForm";

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = await prisma.blog.findUnique({ where: { id: Number(id) } });
  if (!blog) notFound();

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Edit blog post</h1>
      <BlogForm action={updateBlogAction} blog={blog} submitLabel="Save changes" />
    </div>
  );
}
