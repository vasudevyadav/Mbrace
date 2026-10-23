import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE_NAME, isValidSessionToken } from "@/lib/adminAuth";
import { logoutAction } from "@/app/admin/actions";
import { prisma } from "@/lib/prisma";
import AdminNav, { type AdminNavEntry } from "@/app/admin/AdminNav";

async function getNavEntries(): Promise<AdminNavEntry[]> {
  const carePages: AdminNavEntry = { type: "entity", section: "Services", entity: { key: "care-pages", label: "Main & Child Services", listHref: "/admin/care-pages", addHref: "/admin/services", addLabel: "Add child service", activePrefixes: ["/admin/care-pages", "/admin/services"], children: [] } };
  const faqs: AdminNavEntry = { type: "entity", section: "Home", entity: { key: "faqs", label: "FAQs", listHref: "/admin/faqs", addHref: "/admin/faqs", addLabel: "Add FAQ", children: [] } };
  const testimonials: AdminNavEntry = { type: "entity", section: "Home", entity: { key: "testimonials", label: "Testimonials", listHref: "/admin/testimonials", addHref: "/admin/testimonials/new", addLabel: "Add testimonial", children: [] } };
  const blogs: AdminNavEntry = { type: "entity", section: "Blog", entity: { key: "blogs", label: "Blog & Articles", listHref: "/admin/blogs", addHref: "/admin/blogs/new", addLabel: "Add blog post", activePrefixes: ["/admin/blogs", "/admin/pages/blog"], children: [] } };
  const doctors: AdminNavEntry = { type: "entity", section: "Doctors page", entity: { key: "doctors", label: "Doctors", listHref: "/admin/doctors", addHref: "/admin/doctors/new", addLabel: "Add doctor", activePrefixes: ["/admin/doctors", "/admin/pages/doctors"], children: [] } };
  const doctorTips: AdminNavEntry = { type: "entity", section: "Doctors page", entity: { key: "doctor-tips", label: "Doctor Tips", listHref: "/admin/doctor-tips", addHref: "/admin/doctor-tips/new", addLabel: "Add doctor tip", children: [] } };
  const locations: AdminNavEntry = { type: "entity", section: "Locations", entity: { key: "locations", label: "Locations", listHref: "/admin/locations", addHref: "/admin/locations/new", addLabel: "Add location", children: [] } };

  try {
    const [carePageRows, serviceCategories, careCategories, faqItems, testimonialRows, blogRows, doctorRows, doctorTipRows, locationRows] = await Promise.all([
      prisma.careCategoryContent.findMany({ orderBy: { id: "asc" } }),
      prisma.serviceCategory.findMany({ orderBy: { order: "asc" }, include: { items: { orderBy: { order: "asc" } } } }),
      prisma.careCategory.findMany({ orderBy: { order: "asc" } }),
      prisma.faqItem.findMany({ orderBy: { order: "asc" } }),
      prisma.testimonial.findMany({ orderBy: { order: "asc" } }),
      prisma.blog.findMany({ orderBy: { order: "asc" } }),
      prisma.doctor.findMany({ orderBy: { order: "asc" } }),
      prisma.doctorTip.findMany({ orderBy: { order: "asc" } }),
      prisma.location.findMany({ orderBy: { order: "asc" } }),
    ]);
    const careCategoryLabel = Object.fromEntries(careCategories.map(c => [c.key, c.label]));

    const categoryForPage = (slug: string) => serviceCategories.find(category =>
      (slug === "womens-care" && category.label.toLowerCase().includes("women")) ||
      (slug === "child-care" && category.label.toLowerCase().includes("child")) ||
      (slug === "fertility-care" && category.label.toLowerCase().includes("fertility"))
    );
    carePages.entity.children = carePageRows.flatMap(page => {
      const category = categoryForPage(page.slug);
      return [
        { id: -page.id, label: page.label, meta: "Main page", href: `/admin/care-pages/${page.id}`, level: "parent" as const },
        ...(category?.items.map(item => ({ id: item.id, label: item.name, meta: "Child service", href: `/admin/services/${item.id}`, level: "child" as const })) ?? []),
      ];
    });
    faqs.entity.children = faqItems.map(item => ({ id: item.id, label: item.question, meta: careCategoryLabel[item.categoryKey], href: `/admin/faqs/${item.id}` }));
    testimonials.entity.children = testimonialRows.map(t => ({ id: t.id, label: t.name, href: `/admin/testimonials/${t.id}` }));
    blogs.entity.children = [
      { id: -1, label: "Blog page settings", meta: "SEO", href: "/admin/pages/blog", level: "parent" },
      ...blogRows.map(b => ({ id: b.id, label: b.title, meta: b.category || undefined, href: `/admin/blogs/${b.id}`, level: "child" as const })),
    ];
    doctors.entity.children = [
      { id: -1, label: "Doctors page settings", meta: "SEO", href: "/admin/pages/doctors", level: "parent" },
      ...doctorRows.map(d => ({ id: d.id, label: d.name, meta: d.location, href: `/admin/doctors/${d.id}`, level: "child" as const })),
    ];
    doctorTips.entity.children = doctorTipRows.map(t => ({ id: t.id, label: t.title, href: `/admin/doctor-tips/${t.id}` }));
    locations.entity.children = locationRows.map(l => ({ id: l.id, label: l.name, href: `/admin/locations/${l.id}` }));
  } catch (error) {
    console.warn("Database unavailable; showing admin nav without per-item sub-menus.", error);
  }

  return [
    { type: "link", section: "Overview", link: { key: "dashboard", label: "Dashboard", href: "/admin" } },

    // Page-first CMS order: Home → About → Services → Locations → Blog.
    { type: "link", section: "Home", link: { key: "home-page", label: "Home Page & SEO", href: "/admin/pages/home" } },
    { type: "link", section: "Home", link: { key: "hero", label: "Hero Section", href: "/admin/hero" } },
    { type: "link", section: "Home", link: { key: "stats", label: "Statistics", href: "/admin/stats" } },
    faqs,
    testimonials,

    { type: "link", section: "About Us", link: { key: "about-page", label: "About Page & SEO", href: "/admin/pages/about" } },

    carePages,
    locations,
    blogs,

    doctors,
    doctorTips,

    { type: "link", section: "Leads", link: { key: "appointments", label: "Appointment Leads", href: "/admin/appointments" } },
    { type: "link", section: "Leads", link: { key: "subscribers", label: "Subscribers", href: "/admin/subscribers" } },

    { type: "link", section: "Site-wide", link: { key: "settings", label: "Site Settings", href: "/admin/settings" } },
    { type: "link", section: "Site-wide", link: { key: "privacy-seo", label: "Privacy Policy SEO", href: "/admin/pages/privacy" } },
    { type: "link", section: "Site-wide", link: { key: "terms-seo", label: "Terms SEO", href: "/admin/pages/terms" } },
  ];
}

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const session = (await cookies()).get(ADMIN_COOKIE_NAME)?.value;
  if (!isValidSessionToken(session)) redirect("/admin/login");

  const navEntries = await getNavEntries();

  return (
    <div className="admin-shell flex min-h-screen bg-[#f7f6f9] text-[#30283b] [&_input]:text-[16px] [&_input]:[transition:border-color_.2s,_box-shadow_.2s] [&_select]:text-[16px] [&_select]:[transition:border-color_.2s,_box-shadow_.2s] [&_textarea]:text-[16px] [&_textarea]:[transition:border-color_.2s,_box-shadow_.2s] [&_button]:cursor-pointer">
      <aside className="admin-sidebar hidden w-64 shrink-0 flex-col overflow-y-auto bg-[linear-gradient(180deg,#2d2038_0%,#211829_100%)] text-[#eee7f3] shadow-[12px_0_40px_rgba(39,25,49,.08)] md:sticky md:top-0 md:flex md:h-screen md:overflow-hidden xl:w-70">
        <Link href="/admin" className="admin-brand flex shrink-0 items-center gap-3 border-b border-white/10 px-6 py-6">
          <span className="admin-brand-mark relative grid h-10.5 w-10.5 place-content-center rounded-[13px] border border-[#dac0a666] bg-[#f2dfbf] text-[25px] font-semibold text-[#483253]">
            M<span className="absolute right-1.5 top-0.5 text-[20px]">’</span>
          </span>
          <span>
            <strong className="block text-[20px] tracking-[-.5px] text-white">M&rsquo;Brace</strong>
            <small className="mt-0.5 block text-[9px] tracking-[.2em] text-[#c1accd]">CONTENT STUDIO</small>
          </span>
        </Link>

        <AdminNav entries={navEntries} />

        <div className="admin-sidebar-bottom mt-auto flex shrink-0 flex-col gap-0.5 border-t border-white/10 px-3.5 py-4">
          <Link href="/" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-lg px-3 py-2.5 text-[12px] font-medium text-[#c9bdcf] transition hover:bg-white/5 hover:text-white">
            View website <span aria-hidden="true">↗</span>
          </Link>
          <form action={logoutAction}>
            <button type="submit" className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-[12px] font-medium text-[#c9bdcf] transition hover:bg-white/5 hover:text-white">
              Sign out <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>
      </aside>

      <div className="admin-workspace flex min-w-0 flex-1 flex-col">
        <header className="admin-topbar sticky top-0 z-40 flex min-h-17 items-center justify-between gap-5 border-b border-[#e9e4ed]/80 bg-white/90 px-4 py-3 text-[11px] text-[#777080] shadow-[0_8px_30px_rgba(52,35,65,.04)] backdrop-blur-xl sm:px-6 md:min-h-20 md:px-8 md:py-5 xl:px-10">
          <div className="hidden items-center gap-3 md:flex"><span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,.1)]" /><span className="font-medium">Content management</span></div>
          <Link href="/admin" className="flex items-center gap-2.5 md:hidden">
            <span className="relative grid size-9 place-content-center rounded-xl bg-brand-950 text-lg font-bold text-white">M<span className="absolute right-1.5 top-0 text-sm text-accent-400">’</span></span>
            <span><strong className="block text-sm text-slate-900">M&rsquo;Brace</strong><small className="block text-[9px] uppercase tracking-[.15em] text-slate-400">Content Studio</small></span>
          </Link>
          <span className="admin-account hidden items-center gap-2.5 text-[#514559] md:flex [&>span]:grid [&>span]:h-8 [&>span]:w-8 [&>span]:place-content-center [&>span]:rounded-full [&>span]:bg-[#f1ebf6] [&>span]:font-semibold [&>span]:text-[#74518f]">
            <span aria-hidden="true">A</span>Administrator
          </span>
          <details className="group relative md:hidden">
            <summary className="flex list-none cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm [&::-webkit-details-marker]:hidden">
              <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
              Menu
            </summary>
            <div className="absolute right-0 top-[calc(100%+10px)] z-50 flex h-[calc(100dvh-88px)] w-[calc(100vw-24px)] flex-col overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#2d2038_0%,#211829_100%)] text-[#eee7f3] shadow-[0_24px_80px_rgba(25,16,32,.38)] ring-1 ring-white/10">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3"><strong className="text-sm text-white">Navigation</strong><span className="text-[10px] uppercase tracking-wider text-white/45">Select a page</span></div>
              <AdminNav entries={navEntries} />
              <div className="grid grid-cols-2 gap-2 border-t border-white/10 p-3">
                <Link href="/" target="_blank" rel="noreferrer" className="rounded-lg bg-white/5 px-3 py-2.5 text-center text-xs font-semibold text-white/80">View website ↗</Link>
                <form action={logoutAction}><button type="submit" className="w-full rounded-lg bg-white/5 px-3 py-2.5 text-xs font-semibold text-white/80">Sign out →</button></form>
              </div>
            </div>
          </details>
        </header>
        <main className="admin-content flex-1 bg-[radial-gradient(circle_at_top_right,#eee5f6_0,transparent_32%),radial-gradient(circle_at_bottom_left,#fff6e8_0,transparent_28%),#f8f7fa] px-4 py-6 sm:px-6 md:px-8 md:py-9 xl:px-10 xl:py-10"><div className="mx-auto w-full max-w-[1600px]">{children}</div></main>
        <footer className="admin-workspace-footer flex flex-wrap justify-between gap-4 border-t border-[#e9e4ed] px-5 py-5 text-[10px] text-[#817789] md:px-10">
          M’Brace Content Studio <span>Women’s care · Child care · Fertility</span>
        </footer>
      </div>
    </div>
  );
}
