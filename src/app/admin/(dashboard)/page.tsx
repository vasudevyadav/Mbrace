import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminDashboardPage() {
  const [doctors, services, faqs, testimonials, blogs, appointments, subscribers] = await Promise.all([
    prisma.doctor.count(),
    prisma.serviceItem.count(),
    prisma.faqItem.count(),
    prisma.testimonial.count(),
    prisma.blog.count(),
    prisma.appointmentRequest.count({ where: { status: "new" } }),
    prisma.subscriber.count(),
  ]);
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
      <div className="admin-page-heading flex justify-between mb-7.5 max-[801px]:items-start max-[801px]:gap-4 max-[801px]:flex-col min-[801px]:items-center min-[801px]:gap-6">
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
      <div className="admin-metrics grid max-[481px]:grid-cols-[repeat(2,minmax(0,1fr))] max-[481px]:gap-3 min-[481px]:max-[1201px]:grid-cols-[repeat(3,minmax(0,1fr))] min-[1201px]:grid-cols-[repeat(5,minmax(0,1fr))] min-[481px]:gap-4">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="admin-metric max-[481px]:pt-4.5 max-[481px]:pr-4.5 max-[481px]:pb-4.5 max-[481px]:pl-4.5 min-[481px]:pt-5.5 min-[481px]:pr-5.5 min-[481px]:pb-5.5 min-[481px]:pl-5.5 [border:1px_solid_#e7e1eb] rounded-[14px] bg-white shadow-[0_4px_20px_#291e3403] [transition:border-color_.2s,_transform_.2s] [&:hover]:[transform:translateY(-3px)] [&:hover]:[border-color:#ac8bc5] [&_strong]:block [&_strong]:mt-5 [&_strong]:mr-0 [&_strong]:mb-2 [&_strong]:ml-0 [&_strong]:text-[36px] [&_strong]:leading-[1] [&_strong]:font-semibold [&_strong]:tracking-[-1px] [&_strong]:text-[#503761] [&_p]:text-[10px] [&_p]:text-[#777080] max-[481px]:[&:last-child]:col-[1_/_-1]"
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
      <div className="admin-overview-grid grid gap-6 mt-7 max-[801px]:grid-cols-[1fr] min-[801px]:grid-cols-[1.4fr_1fr]">
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
        <section className="admin-settings-card bg-[#eee7f4] [border:1px_solid_#e3d8ee] rounded-[16px] flex flex-col items-start max-[481px]:pt-6 max-[481px]:pr-6 max-[481px]:pb-6 max-[481px]:pl-6 min-[481px]:pt-7 min-[481px]:pr-7 min-[481px]:pb-7 min-[481px]:pl-7 [&_h2]:text-[25px] [&_h2]:tracking-[-.7px] [&_h2]:leading-[1.4] [&_h2]:font-semibold [&_h2]:text-[#503761] [&>p:not(.admin-eyebrow)]:text-[12px] [&>p:not(.admin-eyebrow)]:leading-[1.9] [&>p:not(.admin-eyebrow)]:text-[#716779] [&>p:not(.admin-eyebrow)]:mt-4 [&>p:not(.admin-eyebrow)]:mr-0 [&>p:not(.admin-eyebrow)]:mb-6 [&>p:not(.admin-eyebrow)]:ml-0">
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
