// About page copy transcribed from Figma: Mbrace About us Page 3, node 177:97.
// The "Our Mission" and "Values" tab copy could not be read from Figma (MCP rate limit) —
// drafted in the same voice as the Vision copy and the rest of the site; edit freely.

export const aboutHero = {
  headingPlain: "Know More",
  headingHighlight: "About Us!",
  description:
    "Multidisciplinary team of specialists, including gynaecologists, obstetricians, paediatricians and neonatologists, working as one team with advanced NICU and PICU support.",
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
};

export const missionTabs: MissionTab[] = [
  {
    key: "vision",
    tabLabel: "Our Vision",
    title: "Our Vision",
    subtitle: "Give life to your dreams based on our ethics.",
    body: "We help humanity by removing the stress, pain, and humiliation associated with infertility and replacing it with a new life. We aim to do this by offering the best treatment methods with state-of-the-art technology and medical staff in a sterile environment. Through our efforts, we aim to create an island of excellence in infertility treatment and management.",
    image: "/images/figma/asset-19.webp",
  },
  {
    key: "mission",
    tabLabel: "Our Mission",
    title: "Our Mission",
    subtitle: "Deliver connected, compassionate care at every stage.",
    body: "Our mission is to bring women’s health, pregnancy support, child care and fertility treatment together under one multidisciplinary team — so every family gets consistent, unhurried guidance instead of being passed between disconnected specialists. We combine advanced technology with a warm, transparent approach, and treat every consultation as a conversation, not a transaction.",
    image: "/images/figma/asset-5.webp",
  },
  {
    key: "values",
    tabLabel: "Values",
    title: "Our Values",
    subtitle: "Ethics, transparency and trust guide every decision.",
    body: "We recommend treatment only when your diagnosis genuinely needs it, explain every option in plain language, and never let a family navigate a hard decision alone. From high-risk pregnancies to fertility counselling, our multidisciplinary team is built to treat every patient like family.",
    image: "/images/figma/asset-18.webp",
  },
];

export const directorMessage = {
  eyebrow: "Director Message",
  paragraphs: [
    "Dear Families,",
    "At Mbrace, we understand that each pregnancy, each birth, each child’s journey is deeply personal — and profoundly life-changing. Our ambition has always been to bring world-class, super-speciality care in a warm, reassuring environment.",
    "What sets us apart is not just our clinical strength, but our commitment to ethics, transparency, and trust. From high-risk pregnancies to neonatal critical care, from fertility counselling to adolescent health, our goal is simple: to treat each patient like family.",
    "You entrust us during some of the most vulnerable moments of your life — and we do not take that lightly. Thank you for your trust and faith in Mbrace. Together, we will nurture healthy beginnings and brighter futures.",
  ],
  subheading: "Personalized care for every patient",
  cta: "Explore More",
};
