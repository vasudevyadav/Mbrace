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
