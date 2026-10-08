import { prisma } from "@/lib/prisma";
import {
  careCategories as fallbackCareCategories,
  featuredDoctor as fallbackFeaturedDoctor,
  homeBlogs as fallbackBlogs,
  homeDoctors as fallbackDoctors,
  homeFaqs as fallbackFaqs,
  homeTestimonials as fallbackTestimonials,
  hospital as fallbackHospital,
  serviceGroups as fallbackServiceGroups,
} from "@/lib/mbrace-home";
import { fallbackBlogArticles, findBlogArticle, type BlogArticle, type BlogBlock } from "@/components/sections/mbrace/blog/blogContent";
import { carePageSlugs, fallbackCareCategoryContent, type CareCategoryContent, type JourneyItem } from "@/components/sections/mbrace/services/careCategoryContent";

function toBlogBlocks(value: unknown): BlogBlock[] {
  return Array.isArray(value) ? (value as BlogBlock[]) : [];
}

function toBlogArticle(row: { slug: string; title: string; category: string; image: string; summary: string; intro: string; blocks: unknown; metaTitle?: string; metaDescription?: string }): BlogArticle {
  return {
    slug: row.slug,
    title: row.title,
    category: row.category,
    image: row.image,
    summary: row.summary,
    intro: row.intro,
    blocks: toBlogBlocks(row.blocks),
    metaTitle: row.metaTitle || undefined,
    metaDescription: row.metaDescription || undefined,
  };
}

function toJourney(value: unknown, fallback: JourneyItem[]): JourneyItem[] {
  return Array.isArray(value) && value.length > 0 ? (value as JourneyItem[]) : fallback;
}

export async function getCareCategoryContent(slug: string): Promise<CareCategoryContent & { slug: string; label: string }> {
  const label = carePageSlugs.find(p => p.slug === slug)?.label ?? slug;
  const fallback = { ...fallbackCareCategoryContent[label], slug, label };
  try {
    const row = await prisma.careCategoryContent.findUnique({ where: { slug } });
    if (!row) return fallback;
    return {
      slug: row.slug,
      label: row.label,
      heroBadge: row.heroBadge,
      heroHeadingLine1: row.heroHeadingLine1,
      heroHeadingHighlight1: row.heroHeadingHighlight1,
      heroHeadingHighlight2: row.heroHeadingHighlight2,
      heroHeadingLine2: row.heroHeadingLine2,
      heroDescription: row.heroDescription,
      heroImage: row.heroImage,
      journeyHeading: row.journeyHeading,
      journeyHighlight: row.journeyHighlight,
      journey: toJourney(row.journey, fallback.journey),
      talkToExpertsHeading: row.talkToExpertsHeading,
      talkToExpertsBody: row.talkToExpertsBody,
      whyChooseHeading: row.whyChooseHeading,
      whyChooseHighlight: row.whyChooseHighlight,
      whyChooseBody: row.whyChooseBody,
      excellenceEyebrow: row.excellenceEyebrow,
      excellenceHeading: row.excellenceHeading,
      excellenceHighlight: row.excellenceHighlight,
      excellenceBody: row.excellenceBody,
      metaTitle: row.metaTitle || undefined,
      metaDescription: row.metaDescription || undefined,
    };
  } catch (error) {
    console.warn(`Database unavailable; using local care-category fallback for ${slug}.`, error);
    return fallback;
  }
}

function getFallbackHomeData() {
  const doctorBio =
    "Dedicated to listening first and treating second, our specialists combine advanced diagnostics with a calm, patient-first approach — so every consultation starts with understanding your history, not repeating it.\n\nEvery doctor with us works from one principle: explain clearly, decide together.";
  const doctors = fallbackDoctors.map((doctor, index) => ({
    id: index + 1,
    slug: doctor.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    name: doctor.name,
    qualifications: doctor.qualifications,
    role: doctor.role,
    image: `/images/figma/asset-${doctor.image}.webp`,
    yearsExperience: "15+ Years",
    languages: "English, Hindi, Telugu",
    location: index % 2 === 0 ? "LB Nagar" : "King Koti",
    isFeatured: false,
    order: index,
    designation: doctor.role,
    bio: doctorBio,
    timing: "",
    phone: "",
    email: "",
    fullAddress: "",
    metaTitle: "",
    metaDescription: "",
  }));
  const featuredDoctor = {
    id: 0,
    slug: fallbackFeaturedDoctor.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    name: fallbackFeaturedDoctor.name,
    qualifications: fallbackFeaturedDoctor.qualifications,
    role: fallbackFeaturedDoctor.role,
    image: `/images/figma/asset-${fallbackFeaturedDoctor.image}.webp`,
    yearsExperience: "35+ Years",
    languages: "English, Hindi, Telugu",
    location: "LB Nagar",
    isFeatured: true,
    order: -1,
    designation: fallbackFeaturedDoctor.role,
    bio: "Dr. K Vasundhara is a senior obstetrician and gynaecologist with extensive experience in women’s health, pregnancy care and fertility support. As Medical Director of the Kamineni Fertility Center, she guides patients with clear explanations, evidence-based treatment and compassionate care.\n\nHer clinical approach focuses on understanding each patient’s history, discussing every available option and making treatment decisions together.",
    timing: "Sat To Sun, 09:00AM-08:00PM",
    phone: "+91 70362 70362",
    email: "info@kaminenihospitals.com",
    fullAddress: "Inner Ring Rd, Suryodaya Colony, Central Bank Colony, Bahadurguda, Hyderabad, Telangana",
    metaTitle: "",
    metaDescription: "",
  };

  return {
    hospital: {
      ...fallbackHospital,
      kingKotiAddress: "King Koti, Hyderabad, Telangana.",
    },
    social: { instagramUrl: "", facebookUrl: "", linkedinUrl: "", youtubeUrl: "" },
    hero: {
      badgePrefix: "Backed by",
      headingPlain: "Connected Care for",
      headingHighlight: "Women, Mothers & Children",
      subheading: "Care that listens first",
      description: "One connected team for women’s health, pregnancy, child care and fertility support.",
    },
    stats: {
      yearsOfCare: { value: "34+", label: "Years of Care" },
      happyFamilies: { value: "1,10,000+", label: "Healthy Babies" },
      locations: { value: "2", label: "Locations" },
      whyUsFamilies: { value: "Lakhs of", label: "Happy Families" },
      whyUsYears: { value: "34+", label: "Years of Mother & Child care experience" },
      whyUsBabies: { value: "14,000+", label: "Healthy Baby Deliveries" },
      awardsYears: { value: "34+", label: "Years Of Experience" },
      awardsSatisfaction: { value: "98%", label: "Patient Satisfaction" },
      awardsFamilies: { value: "Lakhs of", label: "Happy Families" },
    } as Record<string, { value: string; label: string }>,
    careCategories: [...fallbackCareCategories],
    serviceGroups: fallbackServiceGroups,
    featuredDoctor,
    doctors,
    homeTestimonials: fallbackTestimonials.map(t => ({ ...t, image: "", videoUrl: undefined as string | undefined })),
    homeFaqs: fallbackFaqs,
    homeBlogs: fallbackBlogs.map(blog => ({ ...blog, image: `/images/figma/asset-${blog.image}.webp`, slug: undefined as string | undefined })),
  };
}

export async function getHomeData() {
  try {
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
    homeTestimonials: testimonials.map(t => ({ name: t.name, quote: t.quote, image: t.image, videoUrl: t.videoUrl || undefined })),
    homeFaqs,
    homeBlogs: blogs.map(b => ({ title: b.title, date: b.date, image: b.image, slug: b.category ? b.slug : undefined })),
  };
  } catch (error) {
    console.warn("Database unavailable; using local public-content fallback.", error);
    return getFallbackHomeData();
  }
}

export type HomeData = Awaited<ReturnType<typeof getHomeData>>;

const pageSeoFallbacks = {
  home: {
    label: "Home",
    metaTitle: "M’Brace by Kamineni Hospitals | Women’s Care, Child Care & Fertility",
    metaDescription: "Connected care for women, mothers and children at M’Brace in Hyderabad.",
  },
  about: {
    label: "About Us",
    metaTitle: "About Us",
    metaDescription: "Learn about M’Brace by Kamineni Hospitals, our mission and multidisciplinary care team.",
  },
  doctors: {
    label: "Doctors",
    metaTitle: "Doctors & Our Specialists",
    metaDescription: "Meet the multidisciplinary specialists behind M’Brace by Kamineni Hospitals.",
  },
  blog: {
    label: "Blog",
    metaTitle: "Health Insights",
    metaDescription: "Expert guidance on women’s health, pregnancy, child care and fertility from M’Brace specialists.",
  },
} as const;

export type PageSeoSlug = keyof typeof pageSeoFallbacks;

export async function getPageSeo(slug: PageSeoSlug) {
  const fallback = pageSeoFallbacks[slug];
  try {
    const row = await prisma.pageSeo.findUnique({ where: { slug } });
    return {
      label: row?.label || fallback.label,
      metaTitle: row?.metaTitle || fallback.metaTitle,
      metaDescription: row?.metaDescription || fallback.metaDescription,
    };
  } catch (error) {
    console.warn(`Database unavailable; using local SEO fallback for ${slug}.`, error);
    return fallback;
  }
}

export async function getDoctorBySlug(slug: string) {
  try {
    return await prisma.doctor.findUnique({ where: { slug } });
  } catch (error) {
    console.warn(`Database unavailable; using local doctor fallback for ${slug}.`, error);
    const fallback = getFallbackHomeData();
    return [fallback.featuredDoctor, ...fallback.doctors].find((doctor) => doctor.slug === slug) ?? null;
  }
}

export async function getDoctorTips() {
  try {
    return await prisma.doctorTip.findMany({ orderBy: { order: "asc" } });
  } catch (error) {
    console.warn("Database unavailable; using local doctor-tip fallback.", error);
    return [
      {
        id: 1,
        title: "Mosquitoes Love Clean Water! Check Your Balcony Today",
        doctorName: "Dr. Kiranmayee",
        image: "/images/figma/doctor-tip-mosquito.png",
        videoUrl: "",
        order: 0,
      },
      {
        id: 2,
        title: "How to Check Fever in Children",
        doctorName: "Dr. R V Soujanya",
        image: "/images/figma/doctor-tip-fever-poster.png",
        videoUrl: "",
        order: 1,
      },
      {
        id: 3,
        title: "Why Couples Struggle to Conceive?",
        doctorName: "Dr. M Srilatha",
        image: "/images/figma/doctor-tip-conceive.png",
        videoUrl: "",
        order: 2,
      },
    ];
  }
}

export async function getServiceItemBySlug(slug: string) {
  try {
    return await prisma.serviceItem.findUnique({ where: { slug }, include: { category: true } });
  } catch (error) {
    console.warn(`Database unavailable; using fallback service for ${slug}.`, error);
    const name = slug
      .split("-")
      .filter(Boolean)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return {
      id: 0,
      categoryId: 0,
      slug,
      name: name || "Gynaecology",
      description: "Complete women’s healthcare with clear guidance and personalised treatment at every stage of life.",
      detail: "",
      heroImage: "/services-details-banner.png",
      blocks: [],
      metaTitle: "",
      metaDescription: "",
      order: 0,
      category: { id: 0, key: "women-care", label: "Women Care", order: 0 },
    };
  }
}

export async function getBlogArticles(): Promise<BlogArticle[]> {
  try {
    const rows = await prisma.blog.findMany({ where: { category: { not: "" } }, orderBy: { order: "asc" } });
    return rows.map(toBlogArticle);
  } catch (error) {
    console.warn("Database unavailable; using local blog fallback.", error);
    return fallbackBlogArticles;
  }
}

export async function getBlogArticleBySlug(slug: string): Promise<BlogArticle | undefined> {
  try {
    const row = await prisma.blog.findUnique({ where: { slug } });
    if (!row || !row.category) return undefined;
    return toBlogArticle(row);
  } catch (error) {
    console.warn(`Database unavailable; using local blog fallback for ${slug}.`, error);
    return findBlogArticle(fallbackBlogArticles, slug);
  }
}

export async function getServiceCategoryByKey(key: string) {
  return prisma.serviceCategory.findUnique({
    where: { key },
    include: { items: { orderBy: { order: "asc" } } },
  });
}

export async function getLocationBySlug(slug: string) {
  return prisma.location.findUnique({
    where: { slug },
    include: { highlights: { orderBy: { order: "asc" } } },
  });
}

export async function getLocations() {
  return prisma.location.findMany({ orderBy: { order: "asc" } });
}
