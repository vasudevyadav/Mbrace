import { createBlogAction } from "@/app/admin/actions";

import BlogForm from "../BlogForm";

export default function NewBlogPage() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Add blog post</h1>
      <BlogForm action={createBlogAction} submitLabel="Create blog post" />
    </div>
  );
}
