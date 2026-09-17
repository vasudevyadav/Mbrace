"use client";

import { useRef, useState } from "react";

export default function DeleteButton({
  action,
  hiddenFields = {},
  label = "Delete",
  confirmTitle = "Delete this item?",
  confirmMessage = "This action can’t be undone.",
  className = "text-sm font-medium text-rose-600 hover:text-rose-700 hover:underline",
}: {
  action: (formData: FormData) => void;
  hiddenFields?: Record<string, string | number>;
  label?: string;
  confirmTitle?: string;
  confirmMessage?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <>
      <form ref={formRef} action={action} className="inline">
        {Object.entries(hiddenFields).map(([name, value]) => (
          <input key={name} type="hidden" name={name} value={value} />
        ))}
        <button type="button" onClick={() => setOpen(true)} className={className}>
          {label}
        </button>
      </form>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
            <h2 className="text-lg font-semibold text-slate-900">{confirmTitle}</h2>
            <p className="mt-2 text-sm text-slate-500">{confirmMessage}</p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-10 items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 ring-1 ring-slate-200 transition hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => formRef.current?.requestSubmit()}
                className="inline-flex min-h-10 items-center justify-center rounded-lg bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-700"
              >
                {label}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
