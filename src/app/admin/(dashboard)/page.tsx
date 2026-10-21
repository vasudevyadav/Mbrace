import Link from "next/link";
import { prisma } from "@/lib/prisma";
import LeadsTrendChart, { type LeadsTrendPoint } from "./LeadsTrendChart";

const STATUS_STYLES: Record<string, string> = {
  new: "bg-amber-50 text-amber-700 ring-amber-200",
  contacted: "bg-sky-50 text-sky-700 ring-sky-200",
  closed: "bg-emerald-50 text-emerald-700 ring-emerald-200",
};

function timeAgo(date: Date) {
  const minutes = Math.floor((Date.now() - date.getTime()) / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MetricIcon({ type }: { type: "leads" | "doctors" | "services" | "subscribers" }) {
  const paths = {
    leads: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7 8a7 7 0 0 0-14 0M18 8v6m-3-3h6" />,
    doctors: <path d="M12 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-7 7a7 7 0 0 1 14 0M12 16v4m-2-2h4" />,
    services: <path d="M4 7.5h16v11H4v-11ZM8 7.5V5h8v2.5M9 13h6m-3-3v6" />,
    subscribers: <path d="M4 6h16v12H4V6Zm1 1 7 6 7-6" />,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[type]}</g>
    </svg>
  );
}

export default async function AdminDashboardPage() {
  const trendStart = new Date();
  trendStart.setHours(0, 0, 0, 0);
  trendStart.setDate(trendStart.getDate() - 13);

  const [doctors, services, faqs, testimonials, blogs, appointments, subscribers, recentRequestDates, recentLeads] = await Promise.all([
    prisma.doctor.count(),
    prisma.serviceItem.count(),
    prisma.faqItem.count(),
    prisma.testimonial.count(),
    prisma.blog.count(),
    prisma.appointmentRequest.count({ where: { status: "new" } }),
    prisma.subscriber.count(),
    prisma.appointmentRequest.findMany({ where: { createdAt: { gte: trendStart } }, select: { createdAt: true } }),
    prisma.appointmentRequest.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
  ]);

  const leadsTrend: LeadsTrendPoint[] = Array.from({ length: 14 }, (_, i) => {
    const date = new Date(trendStart);
    date.setDate(trendStart.getDate() + i);
    const count = recentRequestDates.filter(request => request.createdAt.toDateString() === date.toDateString()).length;
    return {
      label: String(date.getDate()),
      fullLabel: date.toLocaleDateString("en-US", { weekday: "short", day: "numeric", month: "short" }),
      count,
    };
  });
  const leadsLast14Days = leadsTrend.reduce((sum, day) => sum + day.count, 0);

  const metrics = [
    { label: "New leads", count: appointments, href: "/admin/appointments", note: "Needs your attention", type: "leads" as const, iconClass: "bg-[#fff2d9] text-[#d88716]", accentClass: "from-[#fff9ed] to-white" },
    { label: "Doctors", count: doctors, href: "/admin/doctors", note: "Active care team", type: "doctors" as const, iconClass: "bg-[#efe6f7] text-[#754996]", accentClass: "from-[#f9f4fc] to-white" },
    { label: "Services", count: services, href: "/admin/services", note: "Published services", type: "services" as const, iconClass: "bg-[#e5f4f2] text-[#32847c]", accentClass: "from-[#f1fbf9] to-white" },
    { label: "Subscribers", count: subscribers, href: "/admin/subscribers", note: "Newsletter audience", type: "subscribers" as const, iconClass: "bg-[#eeeefe] text-[#5b5eb0]", accentClass: "from-[#f6f6ff] to-white" },
  ];

  const quickActions = [
    { href: "/admin/doctors/new", title: "Add doctor", text: "Create a specialist profile", number: "01" },
    { href: "/admin/blogs/new", title: "Write article", text: "Publish a health insight", number: "02" },
    { href: "/admin/testimonials/new", title: "Add story", text: "Share a patient experience", number: "03" },
  ];

  return (
    <div className="admin-dashboard space-y-5 sm:space-y-6">
      <section className="admin-dashboard-hero relative isolate overflow-hidden rounded-[26px] bg-[#24152f] px-5 py-7 text-white shadow-[0_24px_60px_rgba(38,20,49,0.22)] sm:px-8 sm:py-9 lg:px-10">
        <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#8d5aad]/35 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-[38%] h-64 w-64 rounded-full bg-[#e8a532]/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:34px_34px]" />
        <div className="relative flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f3c566] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f7b43b] shadow-[0_0_0_4px_rgba(247,180,59,.12)]" />
              M&apos;Brace Content Studio
            </div>
            <h1 className="!text-white">Welcome back, Administrator</h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/62 sm:text-[15px]">Your website, care team and patient enquiries are all together in one calm workspace.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/admin/blogs/new" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#f5ad2e] px-4 py-2.5 text-sm font-semibold text-[#291b31] shadow-[0_10px_28px_rgba(245,173,46,.2)] hover:bg-[#ffc255]">Create content <ArrowIcon /></Link>
            <Link href="/" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.08] px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/[0.14]">View live website <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="relative mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-5 text-xs text-white/55">
          <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,.1)]" /> Website is live</span>
          <span>Changes publish when you save</span>
        </div>
      </section>

      <section aria-label="Website overview" className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
        {metrics.map(metric => (
          <Link key={metric.label} href={metric.href} className={`admin-premium-card group relative overflow-hidden rounded-[20px] border border-[#e8e1ec] bg-gradient-to-br ${metric.accentClass} p-4 shadow-[0_10px_32px_rgba(39,25,49,0.055)] sm:p-5`}>
            <div className="flex items-start justify-between gap-3">
              <span className={`grid h-10 w-10 place-items-center rounded-xl ${metric.iconClass}`}><MetricIcon type={metric.type} /></span>
              <span className="grid h-8 w-8 place-items-center rounded-full border border-slate-200/80 bg-white/80 text-slate-400 transition group-hover:border-[#c6a9d9] group-hover:text-[#74518f]"><ArrowIcon className="h-3.5 w-3.5 -rotate-45" /></span>
            </div>
            <strong className="mt-5 block text-[28px] font-bold leading-none tracking-[-0.04em] text-[#2d2035] sm:text-[34px]">{metric.count.toString().padStart(2, "0")}</strong>
            <p className="mt-2 text-xs font-semibold text-[#473a4e] sm:text-sm">{metric.label}</p>
            <p className="mt-1 hidden text-[11px] text-slate-500 sm:block">{metric.note}</p>
          </Link>
        ))}
      </section>

      <div className="grid gap-5 xl:grid-cols-12">
        <section className="admin-premium-card rounded-[22px] border border-[#e8e1ec] bg-white p-5 shadow-[0_12px_36px_rgba(39,25,49,0.055)] sm:p-6 xl:col-span-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#8a5aa8]">Appointment activity</p>
              <h2 className="mt-2 text-xl font-bold tracking-[-0.025em] text-[#2d2035]">Leads over the last 14 days</h2>
              <p className="mt-1 text-xs text-slate-500">Daily enquiries received through your website.</p>
            </div>
            <div className="rounded-2xl bg-[#f7f2fa] px-4 py-2.5 text-right"><strong className="block text-xl font-bold leading-none text-[#604176]">{leadsLast14Days}</strong><span className="mt-1 block text-[10px] font-medium text-slate-500">total requests</span></div>
          </div>
          <div className="mt-5 xl:min-h-[220px]"><LeadsTrendChart data={leadsTrend} /></div>
        </section>

        <section className="admin-premium-card flex flex-col rounded-[22px] border border-[#e8e1ec] bg-white p-5 shadow-[0_12px_36px_rgba(39,25,49,0.055)] sm:p-6 xl:col-span-4 xl:min-h-[390px]">
          <div className="flex items-start justify-between gap-3">
            <div><p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#8a5aa8]">Inbox</p><h2 className="mt-2 text-xl font-bold tracking-[-0.025em] text-[#2d2035]">Recent requests</h2></div>
            <Link href="/admin/appointments" className="rounded-full bg-[#f7f2fa] px-3 py-1.5 text-[10px] font-bold text-[#6c4785] hover:bg-[#eee3f5]">View all</Link>
          </div>
          {recentLeads.length === 0 ? (
            <div className="mt-5 grid flex-1 place-items-center rounded-2xl border border-dashed border-[#ded3e5] bg-[#fbf9fc] px-4 py-8 text-center text-sm text-slate-500">No appointment requests yet.</div>
          ) : (
            <div className="mt-5 flex flex-1 flex-col divide-y divide-[#f0ebf2]">
              {recentLeads.map((lead, index) => (
                <Link key={lead.id} href="/admin/appointments" className="group flex items-center gap-3 rounded-xl px-1 py-3 transition hover:bg-[#fbf8fc] sm:px-2">
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-xs font-bold ${index % 3 === 0 ? "bg-[#f3e9f8] text-[#754996]" : index % 3 === 1 ? "bg-[#fff1d8] text-[#b96f0c]" : "bg-[#e5f4f2] text-[#287970]"}`}>{lead.name.trim().slice(0, 1).toUpperCase()}</span>
                  <span className="min-w-0 flex-1"><span className="block truncate text-sm font-semibold text-[#34283b]">{lead.name}</span><span className="mt-0.5 block truncate text-[11px] text-slate-500">{lead.service} · {timeAgo(lead.createdAt)}</span></span>
                  <span className={`shrink-0 rounded-full px-2 py-1 text-[9px] font-bold capitalize ring-1 ${STATUS_STYLES[lead.status] ?? "bg-slate-50 text-slate-600 ring-slate-200"}`}>{lead.status}</span>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>

      <div className="grid gap-5 xl:grid-cols-12">
        <section className="admin-premium-card rounded-[22px] border border-[#e8e1ec] bg-white p-5 shadow-[0_12px_36px_rgba(39,25,49,0.055)] sm:p-6 xl:col-span-7">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div><p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#8a5aa8]">Quick actions</p><h2 className="mt-2 text-xl font-bold tracking-[-0.025em] text-[#2d2035]">What would you like to update?</h2></div>
            <p className="text-[11px] text-slate-500">Most-used shortcuts</p>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {quickActions.map(action => (
              <Link key={action.href} href={action.href} className="group rounded-2xl border border-[#ece5ef] bg-[#fcfafc] p-4 transition hover:border-[#cbb5dc] hover:bg-white hover:shadow-[0_14px_30px_rgba(55,34,68,.08)]">
                <span className="flex items-center justify-between text-[10px] font-bold tracking-[0.12em] text-[#a48cad]"><span>{action.number}</span><ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                <strong className="mt-8 block text-sm font-bold text-[#392b41]">{action.title}</strong>
                <span className="mt-1.5 block text-[11px] leading-5 text-slate-500">{action.text}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="admin-premium-card relative overflow-hidden rounded-[22px] bg-gradient-to-br from-[#6f4788] to-[#3b234b] p-5 text-white shadow-[0_18px_44px_rgba(64,38,79,.2)] sm:p-6 xl:col-span-5">
          <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full border-[28px] border-white/[0.04]" />
          <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#f4c664]">Content health</p>
          <div className="relative mt-5 grid grid-cols-3 gap-2">
            {[
              { label: "FAQs", count: faqs, href: "/admin/faqs" },
              { label: "Stories", count: testimonials, href: "/admin/testimonials" },
              { label: "Articles", count: blogs, href: "/admin/blogs" },
            ].map(item => (
              <Link key={item.label} href={item.href} className="rounded-2xl border border-white/10 bg-white/[0.08] px-3 py-4 backdrop-blur-sm transition hover:bg-white/[0.14]"><strong className="block text-2xl font-bold tracking-tight">{item.count.toString().padStart(2, "0")}</strong><span className="mt-1 block text-[10px] text-white/60">{item.label}</span></Link>
            ))}
          </div>
          <div className="relative mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-5">
            <Link href="/admin/settings" className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-xs font-bold text-[#513665] hover:bg-[#fff8e9]">Site settings <ArrowIcon className="h-3.5 w-3.5" /></Link>
            <Link href="/admin/hero" className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-white/15 px-3.5 py-2 text-xs font-bold text-white hover:bg-white/10">Edit homepage</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
