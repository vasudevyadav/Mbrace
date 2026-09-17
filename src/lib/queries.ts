import { prisma } from "@/lib/prisma";

export async function getHomeData() {
  const [
    siteSettings,
    hero,
    stats,
    careCategories,
    serviceCategories,
    faqItems,
    doctors,
    testimonials,
    blogs,
  ] = await Promise.all([
    prisma.siteSettings.findUnique({ where: { id: 1 } }),
    prisma.heroContent.findUnique({ where: { id: 1 } }),
    prisma.stat.findMany(),
    prisma.careCategory.findMany({ orderBy: { order: "asc" } }),
    prisma.serviceCategory.findMany({ orderBy: { order: "asc" }, include: { items: { orderBy: { order: "asc" } } } }),
    prisma.faqItem.findMany({ orderBy: { order: "asc" } }),
    prisma.doctor.findMany({ orderBy: { order: "asc" } }),
    prisma.testimonial.findMany({ orderBy: { order: "asc" } }),
    prisma.blog.findMany({ orderBy: { order: "asc" } }),
  ]);

  const statMap = Object.fromEntries(stats.map(s => [s.slug, { value: s.value, label: s.label }]));

  const serviceGroups: Record<string, [string, string][]> = {};
  for (const category of serviceCategories) {
    serviceGroups[category.label] = category.items.map(item => [item.name, item.description]);
  }

  const homeFaqs: Record<string, { question: string; answer: string }[]> = {};
  for (const category of careCategories) {
    homeFaqs[category.label] = faqItems
      .filter(f => f.categoryKey === category.key)
      .map(f => ({ question: f.question, answer: f.answer }));
  }

  const featuredDoctor = doctors.find(d => d.isFeatured) ?? null;
  const otherDoctors = doctors.filter(d => !d.isFeatured);

  return {
    hospital: {
      phone: siteSettings?.phone ?? "",
      phoneHref: siteSettings?.phoneHref ?? "",
      email: siteSettings?.email ?? "",
      address: siteSettings?.lbNagarAddress ?? "",
      kingKotiAddress: siteSettings?.kingKotiAddress ?? "",
    },
    social: {
      instagramUrl: siteSettings?.instagramUrl ?? "",
      facebookUrl: siteSettings?.facebookUrl ?? "",
      linkedinUrl: siteSettings?.linkedinUrl ?? "",
      youtubeUrl: siteSettings?.youtubeUrl ?? "",
    },
    hero: {
      badgePrefix: hero?.badgePrefix ?? "",
      headingPlain: hero?.headingPlain ?? "",
      headingHighlight: hero?.headingHighlight ?? "",
      subheading: hero?.subheading ?? "",
      description: hero?.description ?? "",
    },
    stats: statMap,
    careCategories: careCategories.map(c => c.label),
    serviceGroups,
    featuredDoctor,
    doctors: otherDoctors,
    homeTestimonials: testimonials.map(t => ({ name: t.name, quote: t.quote })),
    homeFaqs,
    homeBlogs: blogs.map(b => ({ title: b.title, date: b.date, image: b.image })),
  };
}

export type HomeData = Awaited<ReturnType<typeof getHomeData>>;
