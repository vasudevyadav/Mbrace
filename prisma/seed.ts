import { PrismaClient, type Prisma } from "@prisma/client";
import { slugify } from "../src/lib/slugify";
import { fallbackBlogArticles } from "../src/components/sections/mbrace/blog/blogContent";
import { carePageSlugs, fallbackCareCategoryContent } from "../src/components/sections/mbrace/services/careCategoryContent";
import { approvedCareFaqs, approvedServiceGroups } from "../src/components/sections/mbrace/services/approvedCarePageData";

const prisma = new PrismaClient();

const careCategories = ["Women's Care", "Child Care", "Pregnancy & Birth Support", "Fertility Care"];

const serviceGroups = approvedServiceGroups;

const asset = (n: number) => `/images/figma/asset-${n}.webp`;

const doctorBio =
  "Dedicated to listening first and treating second, our specialists combine advanced diagnostics with a calm, patient-first approach — so every consultation starts with understanding your history, not repeating it.\n\nEvery doctor with us works from one principle: explain clearly, decide together.";

const homeDoctors = [
  { name: "DR. B MENAKA", qualifications: "MBBS, MD", role: "Consultant Obstetrics Gynecologist", image: asset(10) },
  { name: "DR. ARCHANA DINESH", qualifications: "MBBS, MD, DGO", role: "Consultant Obstetrics & Gynaecologist", image: asset(11) },
  { name: "DR. A PRASANNA LATHA", qualifications: "MBBS, DNB, DGO", role: "Consultant Obstetrician", image: asset(12) },
  { name: "DR. VASAVI", qualifications: "MBBS, MS (Obstetrics & Gynaecology), FMAS", role: "Consultant Obstetrics", image: asset(13) },
  { name: "DR. S NARASIMHA RAO", qualifications: "MD Paediatrics, DCH", role: "Professor & HOD Paediatrics", image: asset(24) },
  { name: "DR. SURESH THOMAS", qualifications: "", role: "Senior Consultant Paediatrician", image: asset(25) },
  { name: "DR. KANCHAN S", qualifications: "MBBS, DNB Paediatrics, PGPN Boston, IDPCCM", role: "Consultant Pediatrics", image: asset(26) },
  { name: "DR. R V SOUJANYA", qualifications: "MBBS, DNB Paediatrics, FNNF", role: "Consultant Paediatrician", image: asset(27) },
  { name: "DR. BHARGAVI", qualifications: "", role: "Consultant Paediatrician & Neonatologist", image: asset(28) },
  { name: "DR. SARIKA MUDARAPU", qualifications: "", role: "Consultant, Infertility Specialist", image: asset(29) },
  { name: "DR. SEERAM LAKSHMI", qualifications: "", role: "Consultant, Infertility Specialist", image: asset(30) },
  { name: "DR. M SRI LATHA", qualifications: "", role: "Consultant, Infertility Specialist", image: asset(31) },
].map(doctor => ({
  ...doctor,
  slug: slugify(doctor.name),
  designation: doctor.role,
  bio: doctorBio,
  timing: "Mon To Sat, 09:00AM-06:00PM",
}));

const featuredDoctor = {
  name: "DR. K VASUNDHARA",
  qualifications: "MBBS, DGO, DNB",
  role: "Head of Obstetrics & Gynaecology and Medical Director of the Kamineni Fertility Center",
  image: asset(14),
  yearsExperience: "35+ Years",
  slug: slugify("DR. K VASUNDHARA"),
  designation: "Head of Obstetrics & Gynaecology and Medical Director of the Kamineni Fertility Center",
  bio: doctorBio,
  timing: "Sat To Sun, 09:00AM-08:00PM",
};

const doctorTips = [
  { title: "Mosquitoes Love Clean Water! Check Your Balcony Today", doctorName: "Dr. Kiranmayee", image: "/images/figma/doctor-tip-mosquito.png" },
  { title: "How to Check Fever in Children", doctorName: "Dr. R V Soujanya", image: "/images/figma/doctor-tip-fever-poster.png", videoUrl: "" },
  { title: "Why Couples Struggle to Conceive?", doctorName: "Dr. M Srilatha", image: "/images/figma/doctor-tip-conceive.png" },
];

const homeTestimonials = [
  { name: "Ananya & Vivek", quote: "The team made us feel heard and supported throughout every appointment. Today, we are grateful parents." },
  { name: "Riya Sharma", quote: "Clear guidance, warm care and constant encouragement gave us confidence through the entire journey." },
  { name: "Meera & Arjun", quote: "Every question was answered honestly. The experience felt personal, respectful and reassuring." },
];

const homeFaqs = approvedCareFaqs;

// Full articles (shown both as homepage teaser cards and at /blog, /blog/[slug]) —
// seeded from the same copy the public pages fall back to when the database
// is unreachable, so a fresh install starts with real, editable content
// instead of empty admin rows.
const blogSeedDates = ["May 08, 2026", "May 12, 2026", "May 16, 2026", "May 20, 2026", "May 24, 2026", "May 28, 2026", "Jun 01, 2026"];
const homeBlogs = fallbackBlogArticles.map((article, i) => ({
  slug: article.slug,
  title: article.title,
  date: blogSeedDates[i] ?? "Jun 01, 2026",
  image: article.image,
  category: article.category,
  summary: article.summary,
  intro: article.intro,
  blocks: article.blocks as unknown as Prisma.InputJsonValue,
}));

async function main() {
  await prisma.siteSettings.upsert({
    where: { id: 1 },
    create: {
      id: 1,
      phone: "+91 93906 34074",
      phoneHref: "tel:+919390634074",
      email: "mbrace@kaminenihospitals.com",
      lbNagarAddress: "Inner Ring Rd, Suryodaya Colony, Central Bank Colony, Bahadurguda, Hyderabad, Telangana 500068.",
      kingKotiAddress: "King Koti, Hyderabad, Telangana. Contact our care team for directions to your appointment.",
    },
    update: {},
  });

  await prisma.heroContent.upsert({
    where: { id: 1 },
    create: {
      id: 1,
      badgePrefix: "Backed By",
      headingPlain: "From Planning to",
      headingHighlight: "Newborn Care  & Paediatrics",
      subheading: "Everything Covered Under One Roof",
      description: "Multidisciplinary team of specialists, including gynaecologists, obstetricians, paediatricians and neonatologists, working as one team with advanced NICU and PICU support.",
    },
    update: {},
  });

  const stats: [string, string, string][] = [
    ["yearsOfCare", "34+", "Years of Care"],
    ["whyUsFamilies", "Lakhs of", "Happy Families"],
    ["whyUsYears", "34+", "Years of Mother & Child care experience"],
    ["whyUsBabies", "14,000+", "Healthy Baby Deliver"],
    ["awardsYears", "34+", "Years Of Experience"],
    ["awardsSatisfaction", "98%", "Patient Satisfaction"],
    ["awardsFamilies", "Lakhs of", "Happy Families"],
  ];
  for (const [slug, value, label] of stats) {
    await prisma.stat.upsert({ where: { slug }, create: { slug, value, label }, update: {} });
  }

  for (const [i, key] of careCategories.entries()) {
    await prisma.careCategory.upsert({
      where: { key },
      create: { key, label: key, order: i },
      update: {},
    });
  }

  for (const [categoryKey, faqs] of Object.entries(homeFaqs)) {
    await prisma.faqItem.deleteMany({ where: { categoryKey } });
    for (const [i, faq] of faqs.entries()) {
      await prisma.faqItem.create({ data: { categoryKey, question: faq.question, answer: faq.answer, order: i } });
    }
  }

  const serviceHeroImages = [3, 4, 5, 7, 8, 9, 18, 6];
  for (const [i, key] of Object.keys(serviceGroups).entries()) {
    const category = await prisma.serviceCategory.upsert({
      where: { key },
      create: { key, label: key, order: i },
      update: { label: key, order: i },
    });
    await prisma.serviceItem.deleteMany({ where: { categoryId: category.id } });
    for (const [j, [name, description]] of serviceGroups[key].entries()) {
      await prisma.serviceItem.create({
        data: {
          categoryId: category.id,
          slug: slugify(name),
          name,
          description,
          order: j,
          detail: description,
          heroImage: asset(serviceHeroImages[j % serviceHeroImages.length]),
        },
      });
    }
  }

  const lbNagarLocation = await prisma.location.upsert({
    where: { slug: "lb-nagar" },
    create: {
      slug: "lb-nagar",
      name: "LB Nagar",
      address: "Inner Ring Rd, Suryodaya Colony, Central Bank Colony, Bahadurguda, Hyderabad, Telangana 500068.",
      phone: "+91 93906 34074",
      phoneHref: "tel:+919390634074",
      email: "mbrace@kaminenihospitals.com",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Mbrace Kamineni Hospitals Inner Ring Rd Bahadurguda Hyderabad"),
      heroImage: "/images/figma/location-hero-bg.png",
      servicesImage: "/images/figma/location-services.png",
      clinicImage: "/images/figma/location-clinic.png",
      introParagraph: "At M'Brace, our specialist team first listens carefully to understand your concern, then recommends a personalised treatment plan based on your condition — whether it's a routine check-up, a high-risk pregnancy or a fertility concern.",
      whatToExpectIntro: "Your visit is arranged in a simple, caring way so that the process feels clear and comfortable from the very beginning.",
      carePromiseIntro: "Every visit to M'Brace is shaped by one commitment — to treat each patient with the same expertise, warmth and clarity we would offer our own family.",
      whyChooseIntro: "When families in Hyderabad compare their options, they return to M'Brace for one reason — compassionate, expert care with complete transparency at every step.",
      reachIntro: "At Inner Ring Road, Suryodaya Colony, Bahadurguda, Hyderabad – 500068. Easily accessible from LB Nagar, Dilsukhnagar, Saroor Nagar, Hayathnagar and surrounding areas.",
      order: 0,
    },
    update: {},
  });

  const kingKotiLocation = await prisma.location.upsert({
    where: { slug: "king-koti" },
    create: {
      slug: "king-koti",
      name: "King Koti",
      address: "King Koti, Hyderabad, Telangana. Contact our care team for directions to your appointment.",
      phone: "+91 93906 34074",
      phoneHref: "tel:+919390634074",
      email: "mbrace@kaminenihospitals.com",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Kamineni Hospitals King Koti Hyderabad"),
      heroImage: "/images/figma/location-hero-bg.png",
      servicesImage: "/images/figma/location-services.png",
      clinicImage: "/images/figma/location-clinic.png",
      introParagraph: "Our King Koti team brings the same connected approach to women's health, child care and fertility support, in the heart of the city.",
      whatToExpectIntro: "Every visit is arranged so the process feels clear and comfortable from the moment you arrive.",
      carePromiseIntro: "Every visit to M'Brace is shaped by one commitment — to treat each patient with the same expertise, warmth and clarity we would offer our own family.",
      whyChooseIntro: "Families across central Hyderabad choose M'Brace King Koti for compassionate, expert care with complete transparency at every step.",
      reachIntro: "Centrally located in King Koti, Hyderabad — easily reachable from Abids, Koti and Nampally.",
      order: 1,
    },
    update: {},
  });

  const locationHighlights: Record<number, { section: string; title: string; description: string }[]> = {
    [lbNagarLocation.id]: [
      { section: "service", title: "Gynaecology & Women's Health", description: "Comprehensive care for women at every stage — from adolescence to menopause." },
      { section: "service", title: "Vaccination & Preventive Care", description: "Scheduled immunisation programmes for newborns, children and adults." },
      { section: "service", title: "Maternity & High-Risk Pregnancy", description: "Expert obstetric monitoring and NICU-backed delivery support for every birth." },
      { section: "service", title: "Fertility Evaluation & IVF", description: "Personalised fertility pathways — from initial assessment to advanced IVF and embryo support." },
      { section: "service", title: "Laparoscopic & Surgical Care", description: "Minimally invasive procedures for faster recovery and better outcomes." },
      { section: "step", title: "Arrival, registration and an initial vitals check", description: "" },
      { section: "step", title: "Review of your medical history, current concerns and vitals", description: "" },
      { section: "step", title: "One-to-one consultation with your specialist if more detail is needed", description: "" },
      { section: "step", title: "Clear explanation of findings and your personalised care plan", description: "" },
      { section: "step", title: "Treatment or procedure with your full knowledge and approval", description: "" },
      { section: "step", title: "Follow-up advice and next steps if further visits are recommended", description: "" },
      { section: "promise", title: "Specialist-Led Vaccinations & Immunisation", description: "Structured immunisation programmes administered by paediatric specialists, following national and international schedules for newborns, infants and children." },
      { section: "promise", title: "Child-Centred NICU & Neonatal Support", description: "A dedicated neonatal intensive care unit with round-the-clock neonatologist coverage — ensuring every newborn receives the safest possible start to life." },
      { section: "promise", title: "On-Site Diagnostics & Scan Centre", description: "Comprehensive scans, lab tests and 4D ultrasound available within the same facility — eliminating the need to visit multiple locations for diagnostic support." },
      { section: "promise", title: "Conveniently Located for Every Family", description: "Situated on Inner Ring Road, LB Nagar — easily reachable from Dilsukhnagar, Saroor Nagar, Hayathnagar and Uppal with dedicated on-site parking." },
      { section: "promise", title: "Compassionate Paediatric & Child Wellness Care", description: "From developmental checks and growth monitoring to adolescent health support — our paediatricians are trained to put children and parents at ease." },
      { section: "feature", title: "Treatment Plans Explained Clearly", description: "Every diagnosis and procedure is explained before it begins — so you always know what to expect and why." },
      { section: "feature", title: "Preventive to Advanced Care Available", description: "From routine vaccinations and check-ups to complex surgical and fertility procedures — all under one roof at LB Nagar." },
      { section: "feature", title: "Easily Accessible from LB Nagar", description: "Located on Inner Ring Road with ample parking, and reachable from Dilsukhnagar, Saroor Nagar and Hayathnagar." },
      { section: "feature", title: "Care for Children, Adults & Seniors", description: "Dedicated specialists for newborns, children and women at every life stage — from adolescence through menopause." },
      { section: "stat", title: "35+", description: "Years of Expert Care" },
      { section: "stat", title: "1,00,000+", description: "Patients Treated" },
      { section: "stat", title: "4.9 ★", description: "Google Patient Rating" },
      { section: "stat", title: "24/7", description: "Emergency Support" },
      { section: "reach", title: "Nearest Auto Stand", description: "LB Nagar Auto Stand (approx. 0.8 km). Autos and cabs ply along Inner Ring Road via LB Nagar X Roads and Chaitanyapuri junction. Easily reachable from Dilsukhnagar and Saroor Nagar." },
      { section: "reach", title: "Nearest Bus Stop", description: "LB Nagar Bus Stop on Inner Ring Road (approx. 600–900 metres). Served by TSRTC routes from Dilsukhnagar, Uppal, Hayathnagar and Mehdipatnam." },
      { section: "reach", title: "Nearest Landmark", description: "LB Nagar Metro Station (approx. 1.2 km), Suchitra Junction, Central Bank Colony and Kamineni Hospitals LB Nagar — directly adjacent." },
    ],
    [kingKotiLocation.id]: [
      { section: "service", title: "Gynaecology & Women's Health", description: "Comprehensive care for women at every stage — from adolescence to menopause." },
      { section: "service", title: "Vaccination & Preventive Care", description: "Scheduled immunisation programmes for newborns, children and adults." },
      { section: "service", title: "Maternity & High-Risk Pregnancy", description: "Expert obstetric monitoring and NICU-backed delivery support for every birth." },
      { section: "service", title: "Fertility Evaluation & IVF", description: "Personalised fertility pathways — from initial assessment to advanced IVF and embryo support." },
      { section: "feature", title: "Treatment Plans Explained Clearly", description: "Every diagnosis and procedure is explained before it begins — so you always know what to expect and why." },
      { section: "feature", title: "Central Hyderabad Location", description: "Easily reachable from Abids, Koti and Nampally, with the same connected care team." },
      { section: "stat", title: "35+", description: "Years of Expert Care" },
      { section: "stat", title: "4.9 ★", description: "Google Patient Rating" },
    ],
  };

  for (const [locationId, highlights] of Object.entries(locationHighlights)) {
    for (const [i, h] of highlights.entries()) {
      const existing = await prisma.locationHighlight.findFirst({ where: { locationId: Number(locationId), title: h.title } });
      if (!existing) {
        await prisma.locationHighlight.create({ data: { locationId: Number(locationId), order: i, ...h } });
      }
    }
  }

  const existingFeatured = await prisma.doctor.findFirst({ where: { name: featuredDoctor.name } });
  if (!existingFeatured) {
    await prisma.doctor.create({
      data: { ...featuredDoctor, languages: "English, Hindi, Telugu", location: "LB Nagar", isFeatured: true, order: 0 },
    });
  }
  for (const [i, doctor] of homeDoctors.entries()) {
    const existing = await prisma.doctor.findFirst({ where: { name: doctor.name } });
    if (!existing) {
      await prisma.doctor.create({
        data: { ...doctor, yearsExperience: "20+ Years", languages: "English, Hindi, Telugu", location: "LB Nagar", isFeatured: false, order: i + 1 },
      });
    }
  }

  for (const [i, tip] of doctorTips.entries()) {
    const existing = await prisma.doctorTip.findFirst({ where: { title: tip.title } });
    if (!existing) await prisma.doctorTip.create({ data: { ...tip, order: i } });
  }

  for (const [i, t] of homeTestimonials.entries()) {
    const existing = await prisma.testimonial.findFirst({ where: { name: t.name } });
    if (!existing) await prisma.testimonial.create({ data: { ...t, order: i } });
  }

  for (const [i, b] of homeBlogs.entries()) {
    const existing = await prisma.blog.findFirst({ where: { slug: b.slug } });
    if (!existing) await prisma.blog.create({ data: { ...b, order: i } });
  }

  for (const { slug, label } of carePageSlugs) {
    const content = {
      ...fallbackCareCategoryContent[label],
      slug,
      label,
      journey: fallbackCareCategoryContent[label].journey as unknown as Prisma.InputJsonValue,
    };
    await prisma.careCategoryContent.upsert({
      where: { slug },
      create: content,
      update: content,
    });
  }

  console.log("Seed complete.");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
