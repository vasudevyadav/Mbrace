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
    const count = recentRequestDates.filter(r => r.createdAt.toDateString() === date.toDateString()).length;
    return {
      label: String(date.getDate()),
      fullLabel: date.toLocaleDateString("en-US", { weekday: "short", day: "numeric", month: "short" }),
      count,
    };
  });
  const leadsLast14Days = leadsTrend.reduce((sum, d) => sum + d.count, 0);
  const cards = [
    {
      label: "New leads",
      count: appointments,
      href: "/admin/appointments",
      note: "Appointment requests",
    },
    {
      label: "Subscribers",
      count: subscribers,
      href: "/admin/subscribers",
      note: "Newsletter signups",
    },
    {
      label: "Doctors",
      count: doctors,
      href: "/admin/doctors",
      note: "Your care team",
    },
    {
      label: "Services",
      count: services,
      href: "/admin/services",
      note: "Care you offer",
    },
    {
      label: "FAQs",
      count: faqs,
      href: "/admin/faqs",
      note: "Helpful answers",
    },
    {
      label: "Testimonials",
      count: testimonials,
      href: "/admin/testimonials",
      note: "Patient stories",
    },
    {
      label: "Blog posts",
      count: blogs,
      href: "/admin/blogs",
      note: "Expert insights",
    },
  ];
  return (
    <div>
      <div className="admin-page-heading flex justify-between mb-7.5 items-start gap-4 flex-col md:items-center md:gap-6">
        <div>
          <p className="admin-eyebrow text-[#74518f] uppercase text-[10px] font-semibold tracking-[.14em] mb-2.5">
            Your workspace, at a glance
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
            Website overview
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Manage the people, services and stories behind M’Brace.
          </p>
        </div>
        <Link
          href="/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50"
        >
          View website{" "}
          <span className="ml-3" aria-hidden="true">
            ↗
          </span>
        </Link>
      </div>
      <div className="admin-metrics grid grid-cols-[repeat(2,minmax(0,1fr))] gap-3 sm:grid-cols-[repeat(3,minmax(0,1fr))] xl:grid-cols-[repeat(5,minmax(0,1fr))] sm:gap-4">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="admin-metric pt-4.5 pr-4.5 pb-4.5 pl-4.5 sm:pt-5.5 sm:pr-5.5 sm:pb-5.5 sm:pl-5.5 [border:1px_solid_#e7e1eb] rounded-[14px] bg-white shadow-[0_4px_20px_#291e3403] [transition:border-color_.2s,_transform_.2s] [&:hover]:[transform:translateY(-3px)] [&:hover]:[border-color:#ac8bc5] [&_strong]:block [&_strong]:mt-5 [&_strong]:mr-0 [&_strong]:mb-2 [&_strong]:ml-0 [&_strong]:text-[36px] [&_strong]:leading-[1] [&_strong]:font-semibold [&_strong]:tracking-[-1px] [&_strong]:text-[#503761] [&_p]:text-[10px] [&_p]:text-[#777080] [&:last-child]:col-[1_/_-1]"
          >
            <div className="admin-metric-top flex justify-between gap-1.5 text-[#716779] text-[11px] font-medium [&>span:last-child]:text-[#9a85a9]">
              <span>{card.label}</span>
              <span aria-hidden="true">↗</span>
            </div>
            <strong>{card.count.toString().padStart(2, "0")}</strong>
            <p>{card.note}</p>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 mt-7 grid-cols-[1fr] md:grid-cols-[1.4fr_1fr]">
        <section className="rounded-2xl bg-white p-5 sm:p-6 shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="admin-eyebrow text-[#74518f] uppercase text-[10px] font-semibold tracking-[.14em] mb-2.5">Leads</p>
              <h2 className="text-lg font-semibold text-slate-900">Last 14 days</h2>
            </div>
            <p className="text-right"><strong className="block text-2xl font-semibold tracking-tight text-[#503761]">{leadsLast14Days}</strong><span className="text-[11px] text-slate-500">appointment requests</span></p>
          </div>
          <div className="mt-5">
            <LeadsTrendChart data={leadsTrend} />
          </div>
        </section>

        <section className="rounded-2xl bg-white p-5 sm:p-6 shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200">
          <div className="flex items-center justify-between gap-3">
            <p className="admin-eyebrow text-[#74518f] uppercase text-[10px] font-semibold tracking-[.14em] mb-2.5">Leads</p>
            <Link href="/admin/appointments" className="text-[11px] font-semibold text-brand-600 hover:text-brand-700 hover:underline">View all →</Link>
          </div>
          <h2 className="text-lg font-semibold text-slate-900">Recent requests</h2>
          {recentLeads.length === 0 ? (
            <p className="mt-4 rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-6 text-center text-sm text-slate-500">No appointment requests yet.</p>
          ) : (
            <div className="mt-4 flex flex-col gap-1">
              {recentLeads.map(lead => (
                <Link key={lead.id} href="/admin/appointments" className="flex items-center justify-between gap-3 rounded-lg px-2 py-2.5 transition hover:bg-slate-50">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-slate-900">{lead.name}</p>
                    <p className="truncate text-xs text-slate-500">{lead.service} · {timeAgo(lead.createdAt)}</p>
                  </div>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold ring-1 ${STATUS_STYLES[lead.status] ?? "bg-slate-50 text-slate-600 ring-slate-200"}`}>{lead.status}</span>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>

      <div className="admin-overview-grid grid gap-6 mt-7 grid-cols-[1fr] md:grid-cols-[1.4fr_1fr]">
        <section className="rounded-2xl bg-white p-5 sm:p-6 shadow-[0_4px_24px_rgba(41,30,52,0.03)] ring-1 ring-slate-200">
          <p className="admin-eyebrow text-[#74518f] uppercase text-[10px] font-semibold tracking-[.14em] mb-2.5">
            Content management
          </p>
          <h2 className="text-lg font-semibold text-slate-900">
            Make your next update
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Keep your website welcoming, useful and current.
          </p>
          <div className="admin-quick-links mt-5 [&_a]:flex [&_a]:items-center [&_a]:gap-3.5 [&_a]:pt-4.5 [&_a]:pr-0 [&_a]:pb-4.5 [&_a]:pl-0 [&_a]:[border-top:1px_solid_#eee9f1] [&_a:hover_strong]:text-[#74518f] [&_strong]:block [&_strong]:text-[12px] [&_strong]:font-medium [&_small]:block [&_small]:text-[11px] [&_small]:text-[#777080] [&_small]:mt-[5px]">
            {[
              {
                href: "/admin/doctors/new",
                title: "Introduce a doctor",
                text: "Add a profile to your specialist team.",
              },
              {
                href: "/admin/blogs/new",
                title: "Share an expert insight",
                text: "Create a health article for your patients.",
              },
              {
                href: "/admin/testimonials/new",
                title: "Add a patient story",
                text: "Share a family's experience of your care.",
              },
            ].map((item) => (
              <Link href={item.href} key={item.href}>
                <span
                  className="admin-action-icon w-9 h-9 shrink-0 grid place-content-center rounded-[10px] bg-[#f4eff8] text-[#74518f] text-[20px]"
                  aria-hidden="true"
                >
                  +
                </span>
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.text}</small>
                </span>
                <span className="ml-auto" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>
        <section className="admin-settings-card bg-[#eee7f4] [border:1px_solid_#e3d8ee] rounded-[16px] flex flex-col items-start pt-6 pr-6 pb-6 pl-6 sm:pt-7 sm:pr-7 sm:pb-7 sm:pl-7 [&_h2]:text-[25px] [&_h2]:tracking-[-.7px] [&_h2]:leading-[1.4] [&_h2]:font-semibold [&_h2]:text-[#503761] [&>p:not(.admin-eyebrow)]:text-[12px] [&>p:not(.admin-eyebrow)]:leading-[1.9] [&>p:not(.admin-eyebrow)]:text-[#716779] [&>p:not(.admin-eyebrow)]:mt-4 [&>p:not(.admin-eyebrow)]:mr-0 [&>p:not(.admin-eyebrow)]:mb-6 [&>p:not(.admin-eyebrow)]:ml-0">
          <p className="admin-eyebrow text-[#74518f] uppercase text-[10px] font-semibold tracking-[.14em] mb-2.5">
            The essentials
          </p>
          <h2>
            Make a thoughtful
            <br />
            first impression.
          </h2>
          <p>
            Update your homepage introduction, hospital contacts and the numbers
            that tell your story.
          </p>
          <Link
            href="/admin/settings"
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Edit site settings{" "}
            <span className="ml-3" aria-hidden="true">
              →
            </span>
          </Link>
          <Link
            href="/admin/hero"
            className="admin-stat-link flex gap-6 mt-4.5 text-[11px] font-medium text-[#604176]"
          >
            Edit hero section <span aria-hidden="true">↗</span>
          </Link>
          <Link
            href="/admin/stats"
            className="admin-stat-link flex gap-6 mt-2.5 text-[11px] font-medium text-[#604176]"
          >
            Manage statistics <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </div>
      <div className="admin-publishing-note flex items-center gap-3 mt-6.5 text-[11px] leading-[1.8] text-[#777080] [&_strong]:font-medium [&_strong]:text-[#514559]">
        <span aria-hidden="true">ⓘ</span>
        <p>
          <strong>Changes go live when you save.</strong> Review your updates on
          the website after editing.
        </p>
      </div>
    </div>
  );
}
