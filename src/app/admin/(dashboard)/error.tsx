"use client";

import { useEffect } from "react";

export default function AdminDashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Admin dashboard error:", error);
  }, [error]);

  const databaseUnavailable =
    error.message.includes("Prisma") ||
    error.message.includes("database") ||
    error.message.includes("Can't reach database server");

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-5 py-12">
      <section className="w-full rounded-3xl border border-amber-200 bg-white p-7 shadow-[0_20px_60px_rgba(41,30,52,.08)] sm:p-10">
        <span className="grid size-12 place-items-center rounded-2xl bg-amber-100 text-2xl" aria-hidden="true">
          !
        </span>
        <p className="mt-6 text-xs font-bold uppercase tracking-[.14em] text-amber-700">
          {databaseUnavailable ? "Database unavailable" : "Admin page unavailable"}
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {databaseUnavailable ? "The admin panel cannot connect to Neon" : "This page could not be loaded"}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
          {databaseUnavailable
            ? "Check that the Neon project and branch are active, then update DATABASE_URL and DATABASE_URL_UNPOOLED with fresh connection strings. Restart the development server after changing them."
            : "Please retry the request. If the problem continues, check the server terminal for the original error."}
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-7 inline-flex min-h-11 items-center justify-center rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-700"
        >
          Retry connection
        </button>
      </section>
    </main>
  );
}
