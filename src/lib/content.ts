// Single source of truth for all clinic content.
// Edit this file to rebrand or update copy without touching any component.

export const clinic = {
  name: "Northstar Dental Studio",
  shortName: "Northstar Dental",
  tagline: "Thoughtful dentistry, delivered with care",
  description:
    "A modern dental studio offering general, cosmetic, and specialist care in a calm, judgment-free environment.",
  phone: "(555) 204-7890",
  phoneHref: "tel:+15552047890",
  email: "hello@northstardentalstudio.com",
  address: {
    line1: "482 Ashgrove Avenue, Suite 3",
    line2: "Portland, OR 97205",
    mapQuery: "482 Ashgrove Avenue, Portland, OR 97205",
    mapEmbedSrc:
      "https://www.google.com/maps?q=482+Ashgrove+Avenue,+Portland,+OR+97205&output=embed",
  },
  hours: [
    { day: "Monday – Thursday", time: "8:00 AM – 6:00 PM" },
    { day: "Friday", time: "8:00 AM – 4:00 PM" },
    { day: "Saturday", time: "9:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Google Reviews", href: "https://google.com" },
  ],
} as const;

export const trustStats = [
  { value: "14+", label: "Years in practice" },
  { value: "18,000+", label: "Patients treated" },
  { value: "4.9/5", label: "Average patient rating" },
  { value: "ADA", label: "Accredited practice" },
] as const;

export const about = {
  label: "Our commitment",
  title: "Dedicated to your comfort and confidence",
  description:
    "We built Northstar around one uncomfortable truth: most people avoid the dentist because a past visit made them feel rushed or judged. Every appointment here is paced so you understand what's happening and why, before anything happens.",
  points: [
    "Patient-first approach — no pressure, no surprise treatment",
    "Transparent, itemized pricing before any work begins",
  ],
  badge: { value: "14+", label: "Years serving local families" },
} as const;

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  detail: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "general-preventive-dentistry",
    name: "General & Preventive Dentistry",
    shortDescription:
      "Checkups, cleanings, and sealants to keep small issues from becoming big ones.",
    detail:
      "Our general dentistry program is built around prevention. Twice-yearly exams, professional cleanings, digital X-rays, and fluoride or sealant treatments catch decay and gum disease early, when they're simplest and least expensive to treat. Every visit includes a plain-language walkthrough of your scans so you always know what we're seeing and why.",
    highlights: [
      "Comprehensive exams with digital, low-radiation X-rays",
      "Professional cleanings and periodontal maintenance",
      "Fluoride treatments and protective sealants for kids and adults",
    ],
  },
  {
    slug: "clear-aligners-braces",
    name: "Clear Aligners & Braces",
    shortDescription:
      "Straighten teeth with discreet aligners or traditional braces, mapped out from day one.",
    detail:
      "We offer both clear aligner therapy and traditional braces, and help you choose based on your bite, timeline, and lifestyle. Treatment starts with a 3D scan and a full visual plan showing your projected results before you commit, followed by regular progress check-ins every 6–8 weeks.",
    highlights: [
      "3D digital scanning — no messy impressions",
      "Visual treatment plan before you start",
      "Options for teens and adults, including nighttime-only aligners",
    ],
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    shortDescription:
      "Permanent, natural-feeling replacements for single teeth or a full arch.",
    detail:
      "From a single missing tooth to full-arch restoration, our implant planning uses 3D imaging to place each implant with precision, minimizing recovery time. We coordinate the surgical placement and the final crown or bridge under one roof, so you aren't shuttled between offices for a single treatment.",
    highlights: [
      "Single-tooth, multi-tooth, and full-arch (All-on-4 style) options",
      "3D-guided placement for greater precision",
      "Restoration and surgical planning handled in-house",
    ],
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    shortDescription:
      "Veneers, bonding, and smile design for a look that still feels like you.",
    detail:
      "Cosmetic consultations start with a conversation about what bothers you and what you'd like to change — not a sales pitch. We use digital smile design software so you can preview veneers, bonding, or reshaping before any permanent work begins.",
    highlights: [
      "Porcelain and composite veneers",
      "Digital smile preview before treatment",
      "Bonding and reshaping for minor corrections",
    ],
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    shortDescription:
      "In-studio and take-home whitening, calibrated to protect enamel and gums.",
    detail:
      "Our whitening protocols are dentist-supervised to keep sensitivity low and results even. Choose an in-studio session for same-day results before an event, or a custom take-home tray system you control on your own schedule.",
    highlights: [
      "In-studio whitening in a single visit",
      "Custom take-home trays with professional-grade gel",
      "Sensitivity screening before every whitening plan",
    ],
  },
  {
    slug: "root-canal-therapy",
    name: "Root Canal Therapy",
    shortDescription:
      "Save an infected or badly decayed tooth with a gentle, modern procedure.",
    detail:
      "Modern root canal therapy is far more comfortable than its reputation suggests. Using rotary instruments and thorough local anesthesia, most root canals are completed in a single visit with recovery comparable to a standard filling.",
    highlights: [
      "Single-visit treatment in most cases",
      "Rotary instrumentation for a faster, gentler procedure",
      "Same-week appointments for infected or painful teeth",
    ],
  },
  {
    slug: "pediatric-dentistry",
    name: "Pediatric Dentistry",
    shortDescription:
      "A calm first experience with the dentist, built for kids from toddlers to teens.",
    detail:
      "Our pediatric appointments are paced for children — shorter visits, clear explanations, and a treatment room designed to feel unintimidating. We focus on building comfort with the dentist early so checkups stay routine, not stressful, for years to come.",
    highlights: [
      "First-visit program for children under 3",
      "Sealants and fluoride treatments for growing teeth",
      "Parents welcome in the treatment room at every age",
    ],
  },
  {
    slug: "emergency-dental-care",
    name: "Emergency Dental Care",
    shortDescription:
      "Same-day appointments for pain, breaks, and injuries — call before you wait it out.",
    detail:
      "Dental pain rarely waits for a convenient time. We hold same-day slots for urgent issues — a cracked tooth, a lost filling, or unexplained pain — and can typically see existing and new patients within hours of calling.",
    highlights: [
      "Same-day slots held for urgent cases",
      "Guidance by phone if you're unsure it's an emergency",
      "Treatment for pain, breaks, knocked-out teeth, and lost restorations",
    ],
  },
];

export const facilities = {
  intro:
    "Every part of the studio — from sterilization to scheduling — is designed around patient comfort and safety.",
  groups: [
    {
      title: "Facilities",
      items: [
        "Digital, low-radiation X-ray and 3D scanning on-site",
        "Private treatment rooms, not open bays",
        "Noise-canceling headphones and streaming available chairside",
        "Wheelchair-accessible entrance and treatment rooms",
      ],
    },
    {
      title: "Hygiene standards",
      items: [
        "Hospital-grade sterilization for every instrument, every patient",
        "Single-use disposables wherever clinically appropriate",
        "HEPA air filtration in all treatment rooms",
        "Staff trained and certified under current OSHA and CDC guidance",
      ],
    },
    {
      title: "Payment & insurance",
      items: [
        "In-network with most major PPO insurance plans",
        "Interest-free financing plans available on request",
        "Transparent, itemized quotes before treatment begins",
        "HSA and FSA cards accepted",
      ],
    },
  ],
};

export type Doctor = {
  name: string;
  credentials: string;
  role: string;
  specialty: string;
  bio: string;
  initials: string;
  accent: "brand" | "accent" | "teal";
  photo: string;
  featured?: boolean;
  experience: string;
  languages: string;
};

export const doctors: Doctor[] = [
  {
    name: "Dr. Elena Marsh",
    credentials: "DDS",
    role: "Founder & Lead Dentist",
    specialty: "General & Cosmetic Dentistry",
    bio: "Elena founded Northstar Dental Studio to make routine and cosmetic care feel unhurried and judgment-free. She focuses on preventive care and natural-looking restorative work, and reviews every new patient's first scan personally.",
    initials: "EM",
    accent: "brand",
    photo: "/images/doctors/elena-marsh.jpg",
    featured: true,
    experience: "14 years experience",
    languages: "English, Spanish",
  },
  {
    name: "Dr. Rajiv Nanda",
    credentials: "DMD, MSD",
    role: "Prosthodontist",
    specialty: "Dental Implants & Full-Mouth Restoration",
    bio: "Specializes in complex implant planning and full-arch reconstruction.",
    initials: "RN",
    accent: "accent",
    photo: "/images/doctors/rajiv-nanda.jpg",
    experience: "11 years experience",
    languages: "English, Hindi",
  },
  {
    name: "Dr. Priya Sethi",
    credentials: "DDS, MS",
    role: "Orthodontist",
    specialty: "Clear Aligners & Braces",
    bio: "Plans every case with 3D digital scanning for a fully visualized outcome.",
    initials: "PS",
    accent: "teal",
    photo: "/images/doctors/priya-sethi.jpg",
    experience: "9 years experience",
    languages: "English",
  },
  {
    name: "Dr. Marcus Cole",
    credentials: "DDS",
    role: "Pediatric Dentist",
    specialty: "Kids & Family Care",
    bio: "Builds calm, confident first experiences with the dentist for young patients.",
    initials: "MC",
    accent: "brand",
    photo: "/images/doctors/marcus-cole.jpg",
    experience: "8 years experience",
    languages: "English, French",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I'd put off a crown for two years because of one bad experience elsewhere. Dr. Marsh talked me through every step and it was genuinely fine — no drama, no surprise bill.",
    name: "Hannah T.",
    detail: "Patient since 2022",
  },
  {
    quote:
      "My son is 6 and actually asks when his next cleaning is. That alone tells you everything about how Dr. Cole handles kids.",
    name: "Daniel R.",
    detail: "Pediatric patient parent",
  },
  {
    quote:
      "Got my implant consultation, scan, and financing quote in a single appointment. No back-and-forth, no separate referral office.",
    name: "Priya M.",
    detail: "Implant patient",
  },
  {
    quote:
      "The aligner plan showed me what my teeth would look like before I paid a cent. Ten months later, it matched almost exactly.",
    name: "Jordan K.",
    detail: "Clear aligner patient",
  },
  {
    quote:
      "Chipped a tooth on a Sunday night and they saw me first thing Monday morning. Fixed in one visit.",
    name: "Alicia W.",
    detail: "Emergency care patient",
  },
  {
    quote:
      "Straightforward pricing, no pressure to add treatments I didn't need. That's rarer than it should be.",
    name: "Marcus B.",
    detail: "Patient since 2019",
  },
];

export type FaqItem = { question: string; answer: string; category: string };

export const faqCategories = ["Visiting us", "Payment & insurance", "Treatment & emergencies"] as const;

export const faqs: FaqItem[] = [
  {
    question: "What happens at my first visit?",
    answer:
      "Your first visit includes a full exam, digital X-rays if needed, a professional cleaning, and a conversation with your dentist about any concerns or goals. Plan for about 60–75 minutes. We'll send you a short intake form ahead of time so paperwork doesn't eat into your appointment.",
    category: "Visiting us",
  },
  {
    question: "How often should I really get a cleaning?",
    answer:
      "Most patients do well with a cleaning every six months. If you have gum disease, a higher cavity risk, or certain health conditions, we may recommend a more frequent schedule and will explain exactly why.",
    category: "Visiting us",
  },
  {
    question: "Do you treat children?",
    answer:
      "Yes — Dr. Cole sees patients starting from their first tooth. We offer a dedicated first-visit program for toddlers designed to build comfort with the dentist early, and parents are always welcome in the treatment room.",
    category: "Visiting us",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We're in-network with most major PPO dental insurance plans. Bring your insurance details to your first visit (or share them when booking) and our front desk will verify your benefits and give you an out-of-pocket estimate before any treatment begins.",
    category: "Payment & insurance",
  },
  {
    question: "Do you have payment plans?",
    answer:
      "Yes. We offer interest-free financing on treatment plans over a set amount, and accept HSA/FSA cards. Any quote we give you is itemized and explained before you commit to treatment.",
    category: "Payment & insurance",
  },
  {
    question: "What should I do if I have a dental emergency?",
    answer:
      "Call the studio directly — we hold same-day slots for urgent issues like broken teeth, lost fillings, or pain. If it's after hours, our voicemail includes guidance on what to do while you wait for a callback.",
    category: "Treatment & emergencies",
  },
  {
    question: "Are clear aligners or traditional braces better for me?",
    answer:
      "It depends on your bite and lifestyle, not just preference. During your orthodontic consultation, Dr. Sethi reviews your scan and recommends the option that will get you the most predictable result — sometimes that's aligners, sometimes it's braces, and we'll explain why either way.",
    category: "Treatment & emergencies",
  },
];

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Our Team", href: "#team" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Location", href: "#location" },
] as const;

export const treatmentOptions = services.map((s) => s.name);
