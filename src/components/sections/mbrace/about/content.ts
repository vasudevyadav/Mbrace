// Approved copy from the “About Us” tab of the MBrace website-content document.

export const aboutHero = {
  headingPlain: "Women & Child Care",
  headingHighlight: "Hospital in Hyderabad",
  description:
    "M'Brace by Kamineni Hospitals is a women's fertility and child care hospital in Hyderabad, with specialists who support families from planning a pregnancy to a child's growing years.",
};

export const aboutIntroExtra = {
  badgeLabel: "About M’Brace",
};

export type MissionTab = {
  key: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  body: string;
  image: string;
  imageAlt?: string;
};

export const missionTabs: MissionTab[] = [
  {
    key: "vision",
    tabLabel: "Our Vision",
    title: "Our Vision",
    subtitle: "A Name Families Rely On",
    body: "We aim to be the women and child hospital in Hyderabad that families turn to first, known for clinical standards they can depend on and care that treats every patient with dignity.",
    image: "/images/about/happy-indian-couple-newborn.webp",
    imageAlt: "Happy Indian parents holding their newborn baby",
  },
  {
    key: "mission",
    tabLabel: "Our Mission",
    title: "Our Mission",
    subtitle: "Understand First, Then Treat",
    body: "Our approach is ethical and patient-first. Every plan begins with a careful evaluation, including both partners in fertility care, and treatment is then matched to the findings rather than a fixed protocol.",
    image: "/images/figma/asset-5.webp",
  },
  {
    key: "values",
    tabLabel: "Our Values",
    title: "Our Values",
    subtitle: "Compassion, Privacy, Family & Safety",
    body: "Counselling is offered at each step, and sensitive matters stay private. Partners and parents are welcome in every decision, and every procedure follows strict clinical and infection-control standards.",
    image: "/images/figma/asset-18.webp",
  },
];

export const directorMessage = {
  eyebrow: "Director’s Message",
  paragraphs: [
    "Few moments in life carry as much hope and worry as trying for a baby, expecting one or caring for a child who is unwell. As an obstetrician, I have seen how much a mother needs to feel heard during these months, not only treated.",
    "That is the standard I ask of every doctor at M'Brace. Listen fully before advising. Make sure each patient leaves knowing what was found, what the options are and what happens next. Medicine cannot always promise certainty. What we can promise is our full attention, sound clinical judgement and honest answers, whether the news is simple or difficult.",
    "Thank you for trusting M'Brace with this part of your life. We will work every day to earn it.",
  ],
  subheading: "Listened to, Informed & Care For!",
  cta: "Meet the Doctors",
};

export const aboutFaqs = [
  {
    question: "Is M'Brace part of Kamineni Hospitals?",
    answer: "Yes. M'Brace is a unit of Kamineni Hospitals Pvt. Ltd., launched in January 2026 as a women and child care hospital in Hyderabad. It is a separate brand from Kamineni Fertility, but patients have access to Kamineni Hospitals' diagnostics, surgery, emergency and critical-care support when needed.",
  },
  {
    question: "Where is M'Brace located in Hyderabad?",
    answer: "M'Brace has two locations in Hyderabad: LB Nagar, on the Inner Ring Road (Telangana 500068), and King Koti. All M'Brace services are available at both locations, so families can choose the one that is easier to reach.",
  },
  {
    question: "Is M'Brace NABH accredited?",
    answer: "M'Brace is backed by NABH- and NABL-accredited Kamineni Hospitals, which has also been recognised as Best Multispeciality Hospital – South Region. These credentials belong to Kamineni Hospitals, the parent organisation that supports M'Brace's clinical care.",
  },
  {
    question: "What happens if my pregnancy or my child's condition needs more specialised care?",
    answer: "Care is stepped up based on what the condition requires. Pregnancies that need closer monitoring can be assessed in the Fetal Medicine Unit. Newborns and children who need intensive care are treated in the NICU or PICU. If wider support is needed, Kamineni Hospitals' surgical and critical-care teams are available.",
  },
];
