import { prisma } from "@/lib/prisma";
import {
  careCategories as fallbackCareCategories,
  homeBlogs as fallbackBlogs,
  homeFaqs as fallbackFaqs,
  homeTestimonials as fallbackTestimonials,
  hospital as fallbackHospital,
  serviceGroups as fallbackServiceGroups,
} from "@/lib/mbrace-home";
import { fallbackBlogArticles, findBlogArticle, type BlogArticle, type BlogBlock } from "@/components/sections/mbrace/blog/blogContent";
import { carePageSlugs, fallbackCareCategoryContent, type CareCategoryContent } from "@/components/sections/mbrace/services/careCategoryContent";
import { pregnancyServicesBySlug } from "@/components/sections/mbrace/services/pregnancyServiceContent";
import { approvedDoctors, findApprovedDoctor } from "@/components/sections/mbrace/doctors/doctorContent";
import { findApprovedLocationContent } from "@/components/sections/mbrace/locations/locationContent";
import { getStoredServiceSlug } from "@/lib/serviceLinks";
import { pageMetadata } from "@/lib/approvedMetadata";

const happyFamiliesStat = { value: "Lakhs of", label: "Happy Families" } as const;
const babiesDeliveredStat = { value: "Over 1,10,000", label: "Babies Delivered" } as const;

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

export async function getCareCategoryContent(slug: string): Promise<CareCategoryContent & { slug: string; label: string }> {
  const label = carePageSlugs.find(p => p.slug === slug)?.label ?? slug;
  const fallback = { ...fallbackCareCategoryContent[label], slug, label };
  try {
    const row = await prisma.careCategoryContent.findUnique({ where: { slug } });
    if (!row) return fallback;
    return {
      ...fallback,
      // Editorial copy and approved page imagery come from the reviewed local
      // source. The CMS owns explicit hero-image and SEO overrides.
      heroImage: row.heroImage || fallback.heroImage,
      metaTitle: row.metaTitle || undefined,
      metaDescription: row.metaDescription || undefined,
    };
  } catch (error) {
    console.warn(`Database unavailable; using local care-category fallback for ${slug}.`, error);
    return fallback;
  }
}

function getFallbackHomeData() {
  const doctors = approvedDoctors.filter(doctor => !doctor.isFeatured);
  const featuredDoctor = approvedDoctors.find(doctor => doctor.isFeatured) ?? null;

  return {
    hospital: {
      ...fallbackHospital,
      kingKotiAddress: "King Koti, Hyderabad, Telangana.",
    },
    social: { instagramUrl: "https://www.instagram.com/mbrace.care/", facebookUrl: "", linkedinUrl: "", youtubeUrl: "" },
    hero: {
      badgePrefix: "Backed by",
      headingPlain: "Connected Care for",
      headingHighlight: "Women, Mothers & Children",
      subheading: "Care that listens first",
      description: "One connected team for women’s health, pregnancy, child care and fertility support.",
    },
    stats: {
      yearsOfCare: { value: "34+", label: "Years of Care" },
      happyFamilies: babiesDeliveredStat,
      locations: { value: "2", label: "Locations" },
      whyUsFamilies: happyFamiliesStat,
      whyUsYears: { value: "34+", label: "Years of Mother & Child care experience" },
      whyUsBabies: babiesDeliveredStat,
      awardsYears: { value: "34+", label: "Years Of Experience" },
      awardsSatisfaction: { value: "98%", label: "Patient Satisfaction" },
      awardsFamilies: happyFamiliesStat,
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
    testimonials,
    blogs,
    doctorRows,
  ] = await Promise.all([
    prisma.siteSettings.findUnique({ where: { id: 1 } }),
    prisma.heroContent.findUnique({ where: { id: 1 } }),
    prisma.stat.findMany(),
    prisma.careCategory.findMany({ orderBy: { order: "asc" } }),
    prisma.serviceCategory.findMany({ orderBy: { order: "asc" }, include: { items: { orderBy: { order: "asc" } } } }),
    prisma.faqItem.findMany({ orderBy: { order: "asc" } }),
    prisma.testimonial.findMany({ orderBy: { order: "asc" } }),
    prisma.blog.findMany({ orderBy: { order: "asc" } }),
    prisma.doctor.findMany({ orderBy: { order: "asc" } }),
  ]);

  const statMap = Object.fromEntries(stats.map(s => [s.slug, { value: s.value, label: s.label }]));
  statMap.whyUsFamilies = happyFamiliesStat;
  statMap.whyUsBabies = babiesDeliveredStat;
  statMap.awardsFamilies = happyFamiliesStat;

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

  const doctorSource = doctorRows.length > 0
    ? Array.from(doctorRows.reduce((uniqueDoctors, doctor) => {
        const approvedDoctor = findApprovedDoctor(doctor.slug);
        const canonicalDoctor = approvedDoctor
          ? { ...doctor, ...approvedDoctor, id: doctor.id }
          : doctor;
        const canonicalKey = approvedDoctor?.slug ?? doctor.name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
        const existing = uniqueDoctors.get(canonicalKey);

        // Prefer the canonical DB row when both an old short slug and the
        // current full profile exist; approved copy supplies complete details.
        if (!existing || doctor.slug === canonicalKey) {
          uniqueDoctors.set(canonicalKey, canonicalDoctor);
        }
        return uniqueDoctors;
      }, new Map<string, (typeof doctorRows)[number]>()).values())
    : approvedDoctors;
  const featuredDoctor = doctorSource.find(d => d.isFeatured) ?? null;
  const otherDoctors = doctorSource.filter(d => !d.isFeatured);

  return {
    hospital: {
      phone: siteSettings?.phone ?? "",
      phoneHref: siteSettings?.phoneHref ?? "",
      email: siteSettings?.email ?? "",
      address: siteSettings?.lbNagarAddress ?? "",
      kingKotiAddress: siteSettings?.kingKotiAddress ?? "",
    },
    social: {
      instagramUrl: siteSettings?.instagramUrl || "https://www.instagram.com/mbrace.care/",
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
    metaTitle: pageMetadata.home.title,
    metaDescription: pageMetadata.home.description,
  },
  about: {
    label: "About Us",
    metaTitle: pageMetadata.about.title,
    metaDescription: pageMetadata.about.description,
  },
  doctors: {
    label: "Doctors",
    metaTitle: pageMetadata.doctors.title,
    metaDescription: pageMetadata.doctors.description,
  },
  blog: {
    label: "Blog",
    metaTitle: pageMetadata.blog.title,
    metaDescription: pageMetadata.blog.description,
  },
  privacy: {
    label: "Privacy Policy",
    metaTitle: pageMetadata.privacy.title,
    metaDescription: pageMetadata.privacy.description,
  },
  terms: {
    label: "Terms and Conditions",
    metaTitle: pageMetadata.terms.title,
    metaDescription: pageMetadata.terms.description,
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
    const row = await prisma.doctor.findUnique({ where: { slug } });
    const approvedDoctor = findApprovedDoctor(slug);
    return row && approvedDoctor
      ? { ...row, ...approvedDoctor, id: row.id }
      : row ?? approvedDoctor;
  } catch (error) {
    console.warn(`Database unavailable; using local doctor fallback for ${slug}.`, error);
    return findApprovedDoctor(slug);
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
  const storedSlug = getStoredServiceSlug(slug);
  const approvedPregnancyService = pregnancyServicesBySlug[storedSlug];
  try {
    const row = await prisma.serviceItem.findUnique({ where: { slug: storedSlug }, include: { category: true } });
    if (!approvedPregnancyService) return row;
    return {
      id: row?.id ?? -(approvedPregnancyService.order + 1),
      categoryId: row?.categoryId ?? 0,
      slug: storedSlug,
      name: approvedPregnancyService.name,
      description: approvedPregnancyService.description,
      detail: approvedPregnancyService.description,
      heroImage: row?.heroImage ?? "/images/freepik/pregnancy-care.jpg",
      blocks: row?.blocks ?? [],
      metaTitle: row?.metaTitle ?? "",
      metaDescription: row?.metaDescription ?? "",
      order: approvedPregnancyService.order,
      category: row?.category ?? { id: 0, key: "Pregnancy & Birth Support", label: "Pregnancy & Birth Support", order: 2 },
    };
  } catch (error) {
    console.warn(`Database unavailable; using fallback service for ${slug}.`, error);
    if (approvedPregnancyService) {
      return {
        id: -(approvedPregnancyService.order + 1),
        categoryId: 0,
        slug: storedSlug,
        name: approvedPregnancyService.name,
        description: approvedPregnancyService.description,
        detail: approvedPregnancyService.description,
        heroImage: "/images/freepik/pregnancy-care.jpg",
        blocks: [],
        metaTitle: "",
        metaDescription: "",
        order: approvedPregnancyService.order,
        category: { id: 0, key: "Pregnancy & Birth Support", label: "Pregnancy & Birth Support", order: 2 },
      };
    }
    const name = storedSlug
      .split("-")
      .filter(Boolean)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return {
      id: 0,
      categoryId: 0,
      slug: storedSlug,
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
  const approved = findApprovedLocationContent(slug);
  try {
    const row = await prisma.location.findUnique({
      where: { slug },
      include: { highlights: { orderBy: { order: "asc" } } },
    });
    if (!approved) return row;
    return {
      id: row?.id ?? (slug === "lb-nagar" ? -1 : -2),
      slug,
      name: approved.name,
      address: slug === "lb-nagar"
        ? "Inner Ring Road, Suryodaya Colony, Central Bank Colony, Bahadurguda, Hyderabad, Telangana 500068."
        : "Boggulakunta, King Koti, Abids, Hyderabad 500001.",
      phone: approved.phone,
      phoneHref: approved.phoneHref,
      email: row?.email || "mbrace@kaminenihospitals.com",
      mapUrl: row?.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`M'Brace Kamineni Hospitals ${approved.name} Hyderabad`)}`,
      heroImage: row?.heroImage || "/images/figma/location-hero-bg.png",
      servicesImage: row?.servicesImage || "/images/figma/location-services.png",
      clinicImage: row?.clinicImage || "/images/figma/location-clinic.png",
      introParagraph: approved.about.paragraphs[0],
      whatToExpectIntro: approved.visit.body,
      carePromiseIntro: approved.whyChoose.body,
      whyChooseIntro: approved.whyChoose.body,
      reachIntro: approved.reach.body,
      blocks: row?.blocks ?? [],
      order: row?.order ?? (slug === "lb-nagar" ? 0 : 1),
      metaTitle: row?.metaTitle || approved.heroHeading,
      metaDescription: row?.metaDescription || approved.about.paragraphs[0],
      highlights: row?.highlights ?? [],
    };
  } catch (error) {
    console.warn(`Database unavailable; using local location content for ${slug}.`, error);
    if (!approved) return null;
    return {
      id: slug === "lb-nagar" ? -1 : -2,
      slug,
      name: approved.name,
      address: slug === "lb-nagar"
        ? "Inner Ring Road, Suryodaya Colony, Central Bank Colony, Bahadurguda, Hyderabad, Telangana 500068."
        : "Boggulakunta, King Koti, Abids, Hyderabad 500001.",
      phone: approved.phone,
      phoneHref: approved.phoneHref,
      email: "mbrace@kaminenihospitals.com",
      mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`M'Brace Kamineni Hospitals ${approved.name} Hyderabad`)}`,
      heroImage: "/images/figma/location-hero-bg.png",
      servicesImage: "/images/figma/location-services.png",
      clinicImage: "/images/figma/location-clinic.png",
      introParagraph: approved.about.paragraphs[0],
      whatToExpectIntro: approved.visit.body,
      carePromiseIntro: approved.whyChoose.body,
      whyChooseIntro: approved.whyChoose.body,
      reachIntro: approved.reach.body,
      blocks: [],
      order: slug === "lb-nagar" ? 0 : 1,
      metaTitle: approved.heroHeading,
      metaDescription: approved.about.paragraphs[0],
      highlights: [],
    };
  }
}

export async function getLocations() {
  return prisma.location.findMany({ orderBy: { order: "asc" } });
}
