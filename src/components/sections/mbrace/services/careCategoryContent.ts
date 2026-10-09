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
  metaTitle?: string;
  metaDescription?: string;
};

export const carePageSlugs = [
  { slug: "womens-care", label: "Women's Care" },
  { slug: "child-care", label: "Child Care" },
  { slug: "pregnancy-birth-support", label: "Pregnancy & Birth Support" },
  { slug: "fertility-care", label: "Fertility Care" },
] as const;

// Approved copy from the “MBrace - Website Content” Google Doc. Images are
// presentation assets; all user-facing editorial text below comes from it.
export const fallbackCareCategoryContent: Record<string, CareCategoryContent> = {
  "Women's Care": {
    heroBadge: "Women's Care Hospital in Hyderabad",
    heroHeadingLine1: "Gynecologist in Hyderabad",
    heroHeadingHighlight1: "For Every Stage",
    heroHeadingHighlight2: "of Womanhood",
    heroHeadingLine2: "LB Nagar | King Koti",
    heroDescription: "From preconception counselling to menopause care, speak openly with senior gynaecologists and laparoscopic and robotics surgeons who assist with diagnosis, treatment and wellness support.",
    heroImage: "/images/figma/about-hero-bg-alt.png",
    journeyHeading: "Whatever Brings You In,",
    journeyHighlight: "Start a Conversation!",
    journey: [
      { image: "/images/figma/womens-care-routine-checkup.webp", question: "Need a Routine Check-Up?", cta: "" },
      { image: "/images/figma/womens-care-hormonal-concerns.webp", question: "Period or Hormonal Changes?", cta: "" },
      { image: "/images/figma/womens-care-planning-pregnancy.webp", question: "Planning a Pregnancy?", cta: "" },
      { image: "/images/figma/womens-care-menopause-symptoms.webp", question: "Menopause Symptoms?", cta: "" },
    ],
    talkToExpertsHeading: "Talk to Our Women Care Experts",
    talkToExpertsBody: "You do not need a diagnosis to book. A symptom, a question or a check-up that is due is reason enough.",
    whyChooseHeading: "One Trusted Destination",
    whyChooseHighlight: "for Women, Mothers and Children",
    whyChooseBody: "M'Brace is a dedicated unit of an NABH and NABL accredited hospital, with scans, tests, surgery and emergency care on site.",
    excellenceEyebrow: "Women’s Health Guide",
    excellenceHeading: "Gynecologist or Obstetrician:",
    excellenceHighlight: "Which Do You Need?",
    excellenceBody: "A gynaecologist cares for women's reproductive health, including periods, hormones and menopause. An obstetrician cares for women during pregnancy, childbirth and the weeks after birth. At M'Brace, our women's care doctors hold both roles, so the same doctor you trust can see you before, during and after pregnancy.",
  },
  "Child Care": {
    heroBadge: "Child Care Hospital in Hyderabad",
    heroHeadingLine1: "From Newborns to Teenagers",
    heroHeadingHighlight1: "Expert Care",
    heroHeadingHighlight2: "Under One Roof",
    heroHeadingLine2: "LB Nagar | King Koti",
    heroDescription: "Paediatricians, neonatologists and a paediatric intensivist, caring for children from birth to 18. Emergency care: open 24 hours a day, 7 days a week.",
    heroImage: "/images/figma/home-hero-bg-alt.png",
    journeyHeading: "What is Worrying You",
    journeyHighlight: "About Your Child?",
    journey: [
      { image: "/images/figma/womens-care-routine-checkup.webp", question: "Fever That Won’t Come Down?", cta: "" },
      { image: "/images/figma/womens-care-hormonal-concerns.webp", question: "Child Hurt or Suddenly Very Unwell?", cta: "" },
      { image: "/images/figma/womens-care-planning-pregnancy.webp", question: "Newborn Feeding Poorly or Very Sleepy?", cta: "" },
      { image: "/images/figma/womens-care-menopause-symptoms.webp", question: "Speech Delay or Missed Milestones?", cta: "" },
    ],
    talkToExpertsHeading: "Book Your Child’s Next Paediatric Visit",
    talkToExpertsBody: "For a routine review or a concern that can wait for an appointment, choose a time with our paediatricians at LB Nagar or King Koti.",
    whyChooseHeading: "One Trusted Destination",
    whyChooseHighlight: "for Women, Mothers and Children",
    whyChooseBody: "M'Brace is a dedicated unit of an NABH and NABL accredited hospital, with scans, tests, surgery and emergency care on site.",
    excellenceEyebrow: "Child Health Guide",
    excellenceHeading: "When to Take Your Child To A",
    excellenceHighlight: "Pediatric Hospital in Hyderabad?",
    excellenceBody: "Take your child to emergency care straight away if you see any of the signs. For milder illness that is not improving or that worries you, book a paediatric visit. If you are unsure, have your child checked rather than wait at home.",
  },
  "Pregnancy & Birth Support": {
    heroBadge: "Pregnancy & Birth Support Hospital in Hyderabad",
    heroHeadingLine1: "With You, From Your First Scan,",
    heroHeadingHighlight1: "To Your Baby’s",
    heroHeadingHighlight2: "1st Days.",
    heroHeadingLine2: "LB Nagar | King Koti",
    heroDescription: "Senior obstetricians and gynaecologists, with neonatologists ready to care for your baby if needed. Pregnancy emergencies care open 24/7.",
    heroImage: "/images/figma/about-hero-bg-alt.png",
    journeyHeading: "What is Worrying You",
    journeyHighlight: "About Your Pregnancy?",
    journey: [
      { image: "/images/figma/womens-care-routine-checkup.webp", question: "Just Found Out About Your Positive Test Result!", cta: "" },
      { image: "/images/figma/womens-care-hormonal-concerns.webp", question: "Unsure What to Eat During the 9 Months of Pregnancy?", cta: "" },
      { image: "/images/figma/womens-care-planning-pregnancy.webp", question: "Pregnancy Scan Report Raised a Question?", cta: "" },
      { image: "/images/figma/womens-care-menopause-symptoms.webp", question: "Been Told You Have a High-Risk Pregnancy!", cta: "" },
    ],
    talkToExpertsHeading: "Talk to Our Obstetricians About Your Pregnancy",
    talkToExpertsBody: "Book as soon as you know you are pregnant. An early visit lets you plan your check-ups, scans and delivery with one team.",
    whyChooseHeading: "One Trusted Destination",
    whyChooseHighlight: "for Women, Mothers and Children",
    whyChooseBody: "M'Brace is a dedicated unit of an NABH and NABL accredited hospital, with scans, tests, surgery and emergency care on site.",
    excellenceEyebrow: "Complete Pregnancy Guide",
    excellenceHeading: "When You Must Visit A",
    excellenceHighlight: "Pregnancy & Birth Support Hospital in Hyderabad?",
    excellenceBody: "Go to the hospital straight away if you notice any sign below. For milder worries, call and book a check-up. If you are unsure, it is safer to be examined than to wait at home. Do not wait for your next scheduled visit.",
  },
  "Fertility Care": {
    heroBadge: "ICMR-Recognised Fertility Hospital in Hyderabad",
    heroHeadingLine1: "From 1st Test to Pregnancy Care",
    heroHeadingHighlight1: "Complete Care",
    heroHeadingHighlight2: "With One Team",
    heroHeadingLine2: "LB Nagar | King Koti",
    heroDescription: "Specialists and embryologists supporting couples and individuals, from the first test through their entire fertility journey, starting from conception treatment assistance, to early pregnancy.",
    heroImage: "/images/figma/about-hero-bg-alt.png",
    journeyHeading: "What Are You Facing",
    journeyHighlight: "While Trying to Conceive?",
    journey: [
      { image: "/images/figma/womens-care-routine-checkup.webp", question: "Pregnancy Not Happening Despite Trying?", cta: "" },
      { image: "/images/figma/womens-care-hormonal-concerns.webp", question: "Periods Irregular or Hard to Predict?", cta: "" },
      { image: "/images/figma/womens-care-planning-pregnancy.webp", question: "Semen Test Report Came Back Abnormal?", cta: "" },
      { image: "/images/figma/womens-care-menopause-symptoms.webp", question: "Not Ready for Pregnancy, but Want to Keep an Option?", cta: "" },
    ],
    talkToExpertsHeading: "Talk to Specialists For All the Answers!",
    talkToExpertsBody: "Your first visit is all about clearing your queries and committing to a plan, not for treatment you have not agreed to.",
    whyChooseHeading: "One Trusted Destination",
    whyChooseHighlight: "for Women, Mothers and Children",
    whyChooseBody: "M'Brace is a dedicated unit of an NABH and NABL accredited hospital, with scans, tests, surgery and emergency care on site.",
    excellenceEyebrow: "Fertility Treatment Pathway",
    excellenceHeading: "How Treatment Works At",
    excellenceHighlight: "Fertility Hospital in Hyderabad?",
    excellenceBody: "Treatment follows a clear order, and you approve each stage before it begins. Not everyone needs every step, because your results decide where you start and how far you go.",
  },
};
