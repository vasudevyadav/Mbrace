import { createTestimonialAction } from "@/app/admin/actions";

import TestimonialForm from "../TestimonialForm";

export default function NewTestimonialPage() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Add testimonial</h1>
      <TestimonialForm action={createTestimonialAction} submitLabel="Create testimonial" />
    </div>
  );
}
