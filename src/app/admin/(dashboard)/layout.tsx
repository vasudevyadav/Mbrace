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
  ];
}

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const session = (await cookies()).get(ADMIN_COOKIE_NAME)?.value;
  if (!isValidSessionToken(session)) redirect("/admin/login");

  const navEntries = await getNavEntries();

  return (
    <div className="admin-shell flex min-h-screen bg-[#f7f6f9] text-[#30283b] [&_input]:text-[16px] [&_input]:[transition:border-color_.2s,_box-shadow_.2s] [&_select]:text-[16px] [&_select]:[transition:border-color_.2s,_box-shadow_.2s] [&_textarea]:text-[16px] [&_textarea]:[transition:border-color_.2s,_box-shadow_.2s] [&_button]:cursor-pointer">
      <aside className="admin-sidebar flex w-full shrink-0 flex-col overflow-y-auto bg-[#291e34] text-[#eee7f3] md:sticky md:top-0 md:h-screen md:w-55 md:overflow-hidden xl:w-62">
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
        <header className="admin-topbar flex min-h-15 items-center justify-between gap-5 border-b border-[#e9e4ed] bg-white px-5 py-3.5 text-[11px] text-[#777080] md:min-h-20 md:px-6 md:py-5 xl:px-10">
          <span>Administration</span>
          <span className="admin-account flex items-center gap-2.5 text-[#514559] [&>span]:grid [&>span]:h-8 [&>span]:w-8 [&>span]:place-content-center [&>span]:rounded-full [&>span]:bg-[#f1ebf6] [&>span]:font-semibold [&>span]:text-[#74518f]">
            <span aria-hidden="true">A</span>Administrator
          </span>
        </header>
        <div className="admin-content w-full max-w-none flex-1 bg-[radial-gradient(circle_at_top_right,#f2ebf8_0,transparent_34%),#f8f7fa] px-5 py-7 md:px-8 md:py-9 xl:px-12 xl:py-11">{children}</div>
        <footer className="admin-workspace-footer flex flex-wrap justify-between gap-4 border-t border-[#e9e4ed] px-5 py-5 text-[10px] text-[#817789] md:px-10">
          M’Brace Content Studio <span>Women’s care · Child care · Fertility</span>
        </footer>
      </div>
    </div>
  );
}
