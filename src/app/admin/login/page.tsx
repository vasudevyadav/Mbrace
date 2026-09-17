import Link from "next/link";
import { loginAction } from "@/app/admin/actions";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const params = await searchParams;
  const next = params.next || "/admin";

  return (
    <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
      <div className="relative hidden overflow-hidden bg-[#291e34] lg:flex lg:flex-col lg:justify-between lg:p-12 xl:p-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/doctors/priya-sethi.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#291e34] via-[#291e34]/90 to-[#4a3560]/80" aria-hidden="true" />

        <div className="relative flex items-center gap-3">
          <span className="grid h-11 w-11 place-content-center rounded-2xl border border-[#dac0a666] bg-[#f2dfbf] text-2xl font-semibold text-[#483253]">M</span>
          <div>
            <p className="text-xl font-semibold text-white">M&rsquo;Brace</p>
            <p className="text-[11px] font-medium tracking-[.2em] text-[#c1accd]">CONTENT STUDIO</p>
          </div>
        </div>

        <div className="relative max-w-md">
          <h2 className="text-3xl font-semibold leading-tight text-white xl:text-4xl">Care starts with connection.</h2>
          <p className="mt-4 text-sm leading-7 text-[#c9bdcf]">
            Manage your doctors, services, blogs and patient stories from one place — everything you publish here appears instantly on the M&rsquo;Brace website.
          </p>
        </div>

        <p className="relative text-xs text-[#b4a3c0]">M&rsquo;Brace by Kamineni Hospitals &middot; Women&rsquo;s care &middot; Child care &middot; Fertility</p>
      </div>

      <div className="flex min-h-screen items-center justify-center bg-white px-6 py-12 sm:px-10 lg:px-16">
        <div className="w-full max-w-sm">
          <div className="mb-8 flex items-center gap-2.5 lg:hidden">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-100 text-base font-bold text-brand-700">M</span>
            <div className="text-left">
              <p className="text-xl font-semibold text-brand-900">M&rsquo;Brace</p>
              <p className="text-[11px] font-medium text-slate-500">CONTENT STUDIO</p>
            </div>
          </div>

          <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-500">Sign in to manage your team, services and patient stories.</p>

          <form action={loginAction} className="mt-8">
            {params.error && (
              <p role="alert" className="mb-5 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
                Incorrect password. Try again.
              </p>
            )}
            <input type="hidden" name="next" value={next} />
            <label className="block text-sm font-medium text-slate-700">
              Password
              <input
                type="password"
                name="password"
                required
                autoComplete="current-password"
                placeholder="Enter your password"
                autoFocus
                className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex min-h-11 w-full shrink-0 items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Sign in to your workspace &rarr;
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-slate-500">
            <Link href="/" className="font-medium text-brand-700 hover:underline">&larr; Back to M&rsquo;Brace website</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
