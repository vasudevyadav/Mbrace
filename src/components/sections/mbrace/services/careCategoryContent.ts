// Fallback copy shown when the database is unreachable (see
// getCareCategoryContent in src/lib/queries.ts). In normal operation, each of
// the four care-category pages is authored from /admin/care-pages and stored
// on the CareCategoryContent model — this file is not the source of truth
// once the admin has edited a page.
//
// Women's Care copy transcribed from Figma: Mbrace Women care Page 4.
// Child Care / Pregnancy & Birth Support / Fertility Care copy is drafted in
// the same voice pending their own Figma frames — flag for review once those
// are available.

export type JourneyItem = { image: string; question: string; cta: string };

export type CareCategoryContent = {
  heroBadge: string;
  heroHeadingLine1: string;
  heroHeadingHighlight1: string;
  heroHeadingHighlight2: string;
  heroHeadingLine2: string;
  heroDescription: string;
  heroImage: string;
  journeyHeading: string;
  journeyHighlight: string;
  journey: JourneyItem[];
  talkToExpertsHeading: string;
  talkToExpertsBody: string;
  whyChooseHeading: string;
  whyChooseHighlight: string;
  whyChooseBody: string;
  excellenceEyebrow: string;
  excellenceHeading: string;
  excellenceHighlight: string;
  excellenceBody: string;
  // SEO overrides — blank falls back to label/heroDescription.
  metaTitle?: string;
  metaDescription?: string;
};

// The four care-category pages and their fixed route slugs — independent of
// ServiceCategory/CareCategory keys, since those don't map 1:1 onto these
// routes (pregnancy-birth-support reuses the "Women Care" ServiceCategory).
export const carePageSlugs = [
  { slug: "womens-care", label: "Women's Care" },
  { slug: "child-care", label: "Child Care" },
  { slug: "pregnancy-birth-support", label: "Pregnancy & Birth Support" },
  { slug: "fertility-care", label: "Fertility Care" },
] as const;

export const fallbackCareCategoryContent: Record<string, CareCategoryContent> = {
  "Women's Care": {
    heroBadge: "Backed By",
    heroHeadingLine1: "Best Maternity &",
    heroHeadingHighlight1: "Women",
    heroHeadingHighlight2: "Care",
    heroHeadingLine2: "Hospital in India",
    heroDescription:
      "Multidisciplinary team of specialists, including gynaecologists, obstetricians, paediatricians and neonatologists, working as one team with advanced NICU and PICU support.",
    heroImage: "/images/figma/about-hero-bg-alt.png",
    journeyHeading: "We support every stage of your",
    journeyHighlight: "journey",
    journey: [
      { image: "/images/figma/womens-care-routine-checkup.webp", question: "Need a routine check-up?", cta: "Book an appointment" },
      { image: "/images/figma/womens-care-hormonal-concerns.webp", question: "Period or hormonal concerns?", cta: "Get support" },
      { image: "/images/figma/womens-care-planning-pregnancy.webp", question: "Planning a pregnancy?", cta: "Explore maternity care" },
      { image: "/images/figma/womens-care-menopause-symptoms.webp", question: "Menopause symptoms?", cta: "Discover care options" },
    ],
    talkToExpertsHeading: "Talk to Our Women Care Experts",
    talkToExpertsBody: "Find India's leading women care experts at a location near you",
    whyChooseHeading: "One Trusted Destination",
    whyChooseHighlight: "for Women, Mothers & Children",
    whyChooseBody:
      "Two convenient locations across Hyderabad, compassionate counselling through every hard decision, and treatment recommended only when your diagnosis genuinely needs it.",
    excellenceEyebrow: "Women Care",
    excellenceHeading: "Best Hospital for",
    excellenceHighlight: "Women Care in Hyderabad",
    excellenceBody:
      "Mbrace, rated as the best women care in Hyderabad with 4.8 star google rating, is part of the trusted Kamineni Healthcare Group. Led by Dr. Vasundhara Kamineni and a team of experienced fertility specialists and reproductive medicine consultants, our centres at King Koti and L B Nagar have been guiding couples through fertility care for over 15 years. Our fertility hospital in Hyderabad offers Obstetrics & Pregnancy Care, Gynecological Surgeries, Postnatal & Neonatal Support. We also have in-house embryology labs at both branches. Every couple who visits our fertility hospital in Hyderabad receives a treatment plan based on a complete evaluation of both partners. Our doctors do not apply a standard protocol. Your diagnosis decides your treatment.",
  },
  "Child Care": {
    heroBadge: "Backed By",
    heroHeadingLine1: "Best Paediatric &",
    heroHeadingHighlight1: "Child",
    heroHeadingHighlight2: "Care",
    heroHeadingLine2: "Hospital in India",
    heroDescription:
      "Connected paediatric and neonatal care, backed by a multidisciplinary team and advanced hospital support, from newborn checkups to critical care.",
    heroImage: "/images/figma/home-hero-bg-alt.png",
    journeyHeading: "We support every stage of your",
    journeyHighlight: "journey",
    journey: [
      { image: "/images/figma/womens-care-routine-checkup.webp", question: "Need a routine check-up?", cta: "Book an appointment" },
      { image: "/images/figma/womens-care-hormonal-concerns.webp", question: "Vaccination due?", cta: "Stay on schedule" },
      { image: "/images/figma/womens-care-planning-pregnancy.webp", question: "Newborn arriving?", cta: "Explore NICU support" },
      { image: "/images/figma/womens-care-menopause-symptoms.webp", question: "Growth concerns?", cta: "Talk to a specialist" },
    ],
    talkToExpertsHeading: "Talk to Our Child Care Experts",
    talkToExpertsBody: "Find India's leading paediatric experts at a location near you",
    whyChooseHeading: "One Trusted Destination",
    whyChooseHighlight: "for Every Child's Journey",
    whyChooseBody:
      "Two convenient locations across Hyderabad, a dedicated NICU, and a paediatric team that explains every step before it begins.",
    excellenceEyebrow: "Child Care",
    excellenceHeading: "Best Hospital for",
    excellenceHighlight: "Child Care in Hyderabad",
    excellenceBody:
      "M'Brace, part of the trusted Kamineni Healthcare Group, brings together senior paediatricians and neonatologists under one roof. Our centres at King Koti and LB Nagar are equipped with a dedicated NICU and round-the-clock paediatric support, so every child's treatment plan is built around their own diagnosis, not a standard protocol.",
  },
  "Pregnancy & Birth Support": {
    heroBadge: "Backed By",
    heroHeadingLine1: "Best Pregnancy &",
    heroHeadingHighlight1: "Birth",
    heroHeadingHighlight2: "Support",
    heroHeadingLine2: "Hospital in India",
    heroDescription:
      "Expert obstetric monitoring, high-risk pregnancy management and NICU-backed delivery support, guiding you from the first scan to the first cry.",
    heroImage: "/images/figma/about-hero-bg-alt.png",
    journeyHeading: "We support every stage of your",
    journeyHighlight: "journey",
    journey: [
      { image: "/images/figma/womens-care-routine-checkup.webp", question: "Confirmed pregnancy?", cta: "Book your first scan" },
      { image: "/images/figma/womens-care-hormonal-concerns.webp", question: "High-risk pregnancy?", cta: "Get specialist support" },
      { image: "/images/figma/womens-care-planning-pregnancy.webp", question: "Nearing delivery?", cta: "Explore birth support" },
      { image: "/images/figma/womens-care-menopause-symptoms.webp", question: "Post-delivery care?", cta: "Discover recovery options" },
    ],
    talkToExpertsHeading: "Talk to Our Pregnancy & Birth Experts",
    talkToExpertsBody: "Find India's leading obstetric experts at a location near you",
    whyChooseHeading: "One Trusted Destination",
    whyChooseHighlight: "for Every Birth Journey",
    whyChooseBody:
      "Two convenient locations across Hyderabad, NICU-backed delivery support, and a team that stays with you from the first scan to recovery.",
    excellenceEyebrow: "Pregnancy & Birth Support",
    excellenceHeading: "Best Hospital for",
    excellenceHighlight: "Birth Support in Hyderabad",
    excellenceBody:
      "M'Brace, part of the trusted Kamineni Healthcare Group, pairs experienced obstetricians with a NICU-backed delivery suite at King Koti and LB Nagar. Every mother's treatment plan is built on a complete evaluation of her pregnancy — high-risk cases included — not a standard protocol.",
  },
  "Fertility Care": {
    heroBadge: "Backed By",
    heroHeadingLine1: "Best Fertility &",
    heroHeadingHighlight1: "IVF",
    heroHeadingHighlight2: "Care",
    heroHeadingLine2: "Hospital in India",
    heroDescription:
      "Personalised fertility pathways — from initial assessment to advanced IVF and embryo support — with in-house embryology labs at both locations.",
    heroImage: "/images/figma/about-hero-bg-alt.png",
    journeyHeading: "We support every stage of your",
    journeyHighlight: "journey",
    journey: [
      { image: "/images/figma/womens-care-routine-checkup.webp", question: "Trying to conceive?", cta: "Start a fertility evaluation" },
      { image: "/images/figma/womens-care-hormonal-concerns.webp", question: "Considering IVF?", cta: "Talk to a specialist" },
      { image: "/images/figma/womens-care-planning-pregnancy.webp", question: "Planning ahead?", cta: "Explore fertility preservation" },
      { image: "/images/figma/womens-care-menopause-symptoms.webp", question: "Need a second opinion?", cta: "Get expert guidance" },
    ],
    talkToExpertsHeading: "Talk to Our Fertility Experts",
    talkToExpertsBody: "Find India's leading fertility specialists at a location near you",
    whyChooseHeading: "One Trusted Destination",
    whyChooseHighlight: "for Every Fertility Journey",
    whyChooseBody:
      "Two convenient locations across Hyderabad, in-house embryology labs, and treatment plans built on a complete evaluation of both partners.",
    excellenceEyebrow: "Fertility Care",
    excellenceHeading: "Best Hospital for",
    excellenceHighlight: "Fertility Care in Hyderabad",
    excellenceBody:
      "M'Brace, part of the trusted Kamineni Healthcare Group, has been guiding couples through fertility care for over 15 years at King Koti and LB Nagar. With in-house embryology labs at both branches, every couple receives a treatment plan based on a complete evaluation of both partners — never a standard protocol.",
  },
};
