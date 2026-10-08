// Blog types, plus the fallback copy shown when the database is unreachable
// (see getBlogArticles/getBlogArticleBySlug in src/lib/queries.ts). In normal
// operation, articles are authored from /admin/blogs and stored on the Blog
// model's category/summary/intro/blocks columns — this file is not the
// source of truth once the admin has real posts.
//
// "Understanding Your Menstrual Cycle" is transcribed verbatim from Figma:
// Mbrace Blog Inner Page 10. The remaining fallback articles are drafted in
// the same voice so the listing page (Mbrace Blog Main Page 9) always has a
// same-template detail page to link to, even before the admin adds posts.

export type BlogSectionBlock = {
  kind: "section";
  heading: string;
  lead?: string;
  bullets?: string[];
  trailing?: string;
};

export type BlogAlertBlock = {
  kind: "alert";
  heading: string;
  body: string;
};

export type BlogTakeawayBlock = {
  kind: "takeaway";
  body: string;
};

export type BlogBlock = BlogSectionBlock | BlogAlertBlock | BlogTakeawayBlock;

export type BlogArticle = {
  slug: string;
  title: string;
  category: string;
  image: string;
  summary: string;
  intro: string;
  blocks: BlogBlock[];
  // SEO overrides — blank falls back to title/summary.
  metaTitle?: string;
  metaDescription?: string;
};

export const blogCategories = ["Women’s Health", "Child Care", "Pregnancy & Birth", "Fertility Care"] as const;

export function slugifyHeading(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const fallbackBlogArticles: BlogArticle[] = [
  {
    slug: "understanding-your-menstrual-cycle",
    title: "Understanding Your Menstrual Cycle: What’s Normal & When to Seek Help",
    category: "Women’s Health",
    image: "/Rectangle.png",
    summary: "Your cycle is a window into your overall health. Learn what changes to watch for and when to consult a specialist.",
    intro:
      "Your menstrual cycle can offer useful information about your health. Cycles vary between people and may change at different life stages. Understanding your own pattern is more useful than expecting every period to arrive on exactly the same day. This article explores the patterns worth tracking and the changes that deserve a conversation with a gynaecologist.",
    blocks: [
      {
        kind: "section",
        heading: "Individual Variation Is Normal",
        lead: "No two bodies are the same. Cycle length, flow intensity, and symptom patterns differ from person to person, and even from cycle to cycle across different life stages. Factors such as stress, travel, changes in body weight, illness, and significant life events can all cause temporary shifts in your cycle without indicating an underlying problem.",
        trailing:
          "Tracking your cycle over several months — noting start dates, flow volume, pain levels, and mood changes — gives you a reliable picture of your individual baseline. This information is also invaluable when you speak with a healthcare provider, as it helps contextualise any changes rather than looking at isolated episodes.",
      },
      {
        kind: "section",
        heading: "Tracking Cycle Patterns and Symptoms",
        lead: "Building a picture of your cycle does not require sophisticated tools — a simple diary, calendar, or period-tracking app can help you note:",
        bullets: [
          "First and last day of your period each month",
          "Flow volume (light, moderate, or heavy, and number of pads or tampons used)",
          "Any clotting, spotting between periods, or discharge",
          "Cramping or pelvic pain and its severity",
          "Premenstrual symptoms such as bloating, mood changes, or breast tenderness",
          "Any patterns that repeat, worsen, or feel new",
        ],
        trailing:
          "Over time, this log can help you identify what is normal for your body and notice when something shifts — which is far more useful than comparing yourself to a generalised average.",
      },
      {
        kind: "section",
        heading: "Heavy, Painful, Irregular or Missed Periods",
        lead: "Some changes in your cycle deserve closer attention, particularly if they are new, persistent, or interfering with daily life:",
        bullets: [
          "Heavy periods: Soaking through a pad or tampon in an hour or less for several consecutive hours, passing large clots, or needing to use double protection.",
          "Painful periods: Cramping that is severe enough to prevent normal activity, or pain that starts several days before your period or continues after it ends.",
          "Irregular cycles: Significant variation in cycle length from month to month, particularly if cycles are shorter than 21 days or longer than 35 days consistently.",
          "Missed periods: In the absence of pregnancy, stress or sudden weight changes are common causes, but repeated missed periods may reflect hormonal imbalances, thyroid conditions, or other factors worth investigating.",
          "Spotting: Bleeding between periods, after intercourse, or post-menopause always warrants professional review.",
        ],
      },
      {
        kind: "alert",
        heading: "When to Seek Urgent Medical Attention",
        body: "If you experience very heavy bleeding — soaking through pads rapidly — accompanied by faintness, dizziness, or severe pain, please seek urgent medical care. These symptoms may indicate a condition that requires immediate assessment rather than a routine appointment.",
      },
      {
        kind: "section",
        heading: "When to See a Women’s Health Specialist",
        lead: "Many cycle irregularities are benign and self-resolving. However, it is worth consulting a gynaecologist or women’s health specialist if you notice:",
        bullets: [
          "A new pattern of heavy, painful, or irregular periods lasting more than two to three cycles",
          "Significant changes to your cycle after starting or stopping contraception",
          "Cycle symptoms that are affecting your quality of life, work, or relationships",
          "Periods that have stopped for three or more months (outside of pregnancy)",
          "Any post-menopausal bleeding",
          "Symptoms you feel uncertain or concerned about, even if they seem minor",
        ],
        trailing: "There is no threshold of “severe enough” required to seek a professional opinion. If something feels different for you, that alone is a valid reason to reach out.",
      },
      {
        kind: "takeaway",
        body: "Understanding your own cycle patterns is the first step towards informed, personalised care. Tracking and sharing that information makes every clinical conversation more effective.",
      },
      {
        kind: "section",
        heading: "What to Prepare for Your Appointment",
        lead: "Coming to a consultation prepared helps make the most of your time with a clinician. Consider noting the following before your appointment:",
        bullets: [
          "Your recent cycle log (dates, flow volume, symptoms)",
          "Any medications, supplements, or hormonal contraception you are taking",
          "Other health conditions or recent changes in weight, stress, or sleep",
          "Questions or concerns you want to address — writing them down in advance helps ensure nothing is forgotten",
        ],
        trailing:
          "Assessments at M’Brace are tailored to individual presentations. What is offered — whether a conversation, examination, or investigations — will depend on your specific symptoms and history, not a fixed protocol.",
      },
      {
        kind: "section",
        heading: "Personalised Assessment and Follow-up",
        lead: "At M’Brace, care plans are shaped around each individual. Follow-up recommendations are based on findings and your preferences, with ongoing support available at both our LB Nagar and King Koti, Hyderabad centres.",
      },
    ],
  },
  {
    slug: "pcos-explained-symptoms-diagnosis-care",
    title: "PCOS Explained: Symptoms, Diagnosis & Care Options at M’Brace",
    category: "Women’s Health",
    image: "/Rectangle (1).png",
    summary: "Polycystic ovary syndrome affects many women. Discover supportive, evidence-informed care pathways available to you.",
    intro:
      "Polycystic ovary syndrome (PCOS) is one of the most common hormonal conditions affecting women of reproductive age, yet it often goes unrecognised for years. This article walks through the symptoms worth noticing, how diagnosis works, and the care options available at M’Brace.",
    blocks: [
      {
        kind: "section",
        heading: "Recognising the Signs of PCOS",
        lead: "PCOS can present differently from person to person, which is part of why it is frequently missed. Common signs include:",
        bullets: [
          "Irregular, infrequent, or absent periods",
          "Excess facial or body hair growth, or persistent acne",
          "Weight gain or difficulty losing weight",
          "Thinning hair on the scalp",
          "Difficulty conceiving",
        ],
        trailing: "Experiencing one or two of these on their own does not necessarily mean PCOS — but a cluster of symptoms together is worth discussing with a specialist.",
      },
      {
        kind: "section",
        heading: "How PCOS Is Diagnosed",
        lead: "There is no single test for PCOS. Specialists typically look at a combination of:",
        bullets: ["Your menstrual history", "Blood tests for hormone levels", "A pelvic ultrasound to check the ovaries"],
        trailing: "A diagnosis is usually made when at least two of three recognised criteria are present, after ruling out other conditions with similar symptoms.",
      },
      {
        kind: "alert",
        heading: "When PCOS Needs Prompt Attention",
        body: "Very heavy or prolonged bleeding, severe pelvic pain, or a sudden worsening of symptoms should not wait for a routine appointment — these warrant a sooner review.",
      },
      {
        kind: "section",
        heading: "Long-Term Health Considerations",
        lead: "PCOS is linked to a higher risk of insulin resistance, type 2 diabetes, and cardiovascular concerns over time, which is why ongoing monitoring matters as much as managing day-to-day symptoms.",
      },
      {
        kind: "takeaway",
        body: "PCOS is manageable with the right combination of lifestyle support, medical treatment, and regular monitoring — an early conversation makes a real difference.",
      },
      {
        kind: "section",
        heading: "What to Prepare for Your Appointment",
        lead: "Bring along:",
        bullets: [
          "A record of your cycle over the last few months",
          "Any symptoms you have noticed, and when they started",
          "Family history of diabetes or PCOS",
          "Questions about fertility or treatment options",
        ],
      },
      {
        kind: "section",
        heading: "Personalised Assessment and Follow-up",
        lead: "At M’Brace, PCOS care plans are built around your individual hormone profile, symptoms, and goals — whether that is symptom relief, long-term health, or planning a pregnancy. Ongoing support is available at both our LB Nagar and King Koti, Hyderabad centres.",
      },
    ],
  },
  {
    slug: "endometriosis-awareness-recognising-symptoms-early",
    title: "Endometriosis Awareness: Recognising Symptoms Early",
    category: "Women’s Health",
    image: "/Rectangle (2).png",
    summary: "Early recognition can make a significant difference. Understand the signs and the specialist-led support available at M’Brace.",
    intro:
      "Endometriosis affects roughly one in ten women of reproductive age, yet it takes many years, on average, to reach a diagnosis. Recognising the symptoms early — and knowing they are not something to simply endure — can change the course of your care.",
    blocks: [
      {
        kind: "section",
        heading: "What Endometriosis Feels Like",
        lead: "Endometriosis occurs when tissue similar to the womb lining grows elsewhere in the body. It can present as:",
        bullets: [
          "Pelvic pain that is often worse during your period",
          "Pain during or after sex",
          "Pain with bowel movements or urination, particularly during your period",
          "Heavy periods, and difficulty conceiving",
          "Fatigue that does not improve with rest",
        ],
        trailing: "Pain that regularly disrupts school, work, or daily life is not something you need to simply manage alone.",
      },
      {
        kind: "section",
        heading: "Why Diagnosis Can Take Time",
        lead: "Symptoms often overlap with other conditions, and period pain is still too often dismissed as ordinary. A specialist assessment — history, examination, and imaging such as ultrasound or MRI where needed — helps build a clearer picture.",
      },
      {
        kind: "alert",
        heading: "When to Seek Prompt Care",
        body: "Sudden, severe pelvic pain, especially with fever, fainting, or heavy bleeding, needs urgent medical attention rather than a routine appointment.",
      },
      {
        kind: "section",
        heading: "Treatment and Support Options",
        lead: "Care is tailored to your symptoms, age, and whether you are trying to conceive, and may include:",
        bullets: ["Pain management and hormonal treatment", "Minimally invasive surgery where appropriate", "Fertility-focused support if you are planning a pregnancy"],
      },
      {
        kind: "takeaway",
        body: "Living with ongoing pelvic pain is not something you have to accept. Early, specialist-led evaluation can meaningfully improve both symptoms and quality of life.",
      },
      {
        kind: "section",
        heading: "What to Prepare for Your Appointment",
        lead: "Noting when your pain occurs, its severity, and what eases or worsens it will help your specialist build an accurate picture from the first visit.",
      },
      {
        kind: "section",
        heading: "Personalised Assessment and Follow-up",
        lead: "At M’Brace, endometriosis care is coordinated across consultation, imaging, and — where needed — surgical teams, with continued follow-up at both our LB Nagar and King Koti, Hyderabad centres.",
      },
    ],
  },
  {
    slug: "navigating-menopause-comfort-clarity-care",
    title: "Navigating Menopause: Comfort, Clarity & Care at Every Stage",
    category: "Women’s Health",
    image: "/Rectangle (3).png",
    summary: "Menopause is a natural transition. Our specialists help you manage symptoms and maintain quality of life with confidence.",
    intro:
      "Menopause is a natural life stage, not a medical problem to be fixed — but the symptoms that come with it are real, and support is available. This article covers what to expect during the transition and the care options that can help.",
    blocks: [
      {
        kind: "section",
        heading: "Recognising Perimenopause and Menopause",
        lead: "In the years leading up to menopause, it is common to notice:",
        bullets: [
          "Irregular periods, and changes in flow",
          "Hot flushes and night sweats",
          "Disrupted sleep, and changes in mood",
          "Vaginal dryness or discomfort",
          "Changes in memory or concentration",
        ],
        trailing: "Menopause itself is confirmed once periods have stopped for twelve consecutive months.",
      },
      {
        kind: "section",
        heading: "Managing Symptoms Day to Day",
        lead: "Many symptoms respond well to a combination of lifestyle adjustments, non-hormonal treatments, and, where suitable, hormone therapy — the right mix depends on your personal and family health history.",
      },
      {
        kind: "alert",
        heading: "When to See a Specialist Sooner",
        body: "Any bleeding after twelve months without a period (post-menopausal bleeding) should always be reviewed promptly, even if it appears minor.",
      },
      {
        kind: "section",
        heading: "Long-Term Health Through the Transition",
        lead: "Falling oestrogen affects more than cycles — bone density and cardiovascular health both benefit from attention during and after menopause, alongside ongoing screening.",
      },
      {
        kind: "takeaway",
        body: "Menopause looks different for everyone. With the right support, it is possible to move through this stage with comfort, clarity, and confidence.",
      },
      {
        kind: "section",
        heading: "What to Prepare for Your Appointment",
        lead: "Note which symptoms bother you most, how long they have been occurring, and any questions you have about treatment options, including hormone therapy.",
      },
      {
        kind: "section",
        heading: "Personalised Assessment and Follow-up",
        lead: "At M’Brace, menopause care plans are reviewed and adjusted over time as your symptoms and priorities change, with ongoing support at both our LB Nagar and King Koti, Hyderabad centres.",
      },
    ],
  },
  {
    slug: "preparing-for-birth-practical-guide",
    title: "Preparing for Birth: A Practical Guide for Expecting Mothers",
    category: "Pregnancy & Birth",
    image: "/images/figma/asset-8.webp",
    summary: "From birth plans to hospital bags, our care team walks you through what to expect as your due date approaches.",
    intro:
      "As your due date approaches, a little preparation can bring a lot of peace of mind. This guide covers the practical steps worth taking in the final weeks of pregnancy.",
    blocks: [
      {
        kind: "section",
        heading: "Building Your Birth Plan",
        lead: "A birth plan is a starting point for conversation with your care team, covering preferences such as:",
        bullets: ["Pain relief options", "Who you would like present", "Preferences around delivery and immediate newborn care"],
        trailing: "It is a guide, not a fixed script — your care team will talk through any changes needed on the day.",
      },
      {
        kind: "section",
        heading: "Packing Your Hospital Bag",
        lead: "Most parents find it helpful to pack by the 36-week mark, including:",
        bullets: [
          "Comfortable clothing for labour and recovery, and for the baby",
          "Toiletries and essential documents",
          "Your maternity records and any medication you take regularly",
        ],
      },
      {
        kind: "alert",
        heading: "When to Head to the Hospital",
        body: "Regular, strengthening contractions, your waters breaking, reduced foetal movement, or any heavy bleeding all mean it is time to contact your care team or come in without waiting.",
      },
      {
        kind: "section",
        heading: "What Happens During Labour",
        lead: "Every labour progresses differently. Your care team will monitor you and your baby throughout, and will talk you through each stage and any decisions as they arise.",
      },
      {
        kind: "takeaway",
        body: "Preparation does not mean controlling every detail — it means walking in informed, supported, and ready to adapt alongside your care team.",
      },
      {
        kind: "section",
        heading: "What to Prepare for Your Appointment",
        lead: "Bring your birth plan preferences, any questions about pain relief or delivery options, and a list of who you would like involved in your care.",
      },
      {
        kind: "section",
        heading: "Personalised Assessment and Follow-up",
        lead: "At M’Brace, our obstetric and neonatal teams work together through delivery and beyond, with continued postnatal support at both our LB Nagar and King Koti, Hyderabad centres.",
      },
    ],
  },
  {
    slug: "fertility-consultation-signs-first-steps",
    title: "When to Seek a Fertility Consultation: Key Signs & First Steps",
    category: "Fertility Care",
    image: "/Rectangle.png",
    summary: "If you have been trying to conceive without success, understanding when to seek specialist advice can open new possibilities.",
    intro:
      "Deciding when to seek fertility support can feel uncertain. This article outlines the general guidelines specialists use, and what a first consultation usually involves.",
    blocks: [
      {
        kind: "section",
        heading: "General Timelines Worth Knowing",
        lead: "As a general guide, it is reasonable to seek a consultation if you have been trying to conceive without success for:",
        bullets: [
          "12 months, if you are under 35",
          "6 months, if you are 35 or older",
          "Sooner, if you have irregular cycles, known reproductive conditions, or previous pregnancy loss",
        ],
      },
      {
        kind: "section",
        heading: "Signs Worth Discussing Sooner",
        lead: "Certain factors warrant an earlier conversation rather than waiting out a general timeline:",
        bullets: ["Very irregular or absent periods", "A known diagnosis such as PCOS or endometriosis", "A partner with a known fertility concern"],
      },
      {
        kind: "alert",
        heading: "When to Seek Care Promptly",
        body: "Severe pelvic pain, signs of an ectopic pregnancy, or a missed period with a positive pregnancy test and pain or bleeding should be assessed without delay.",
      },
      {
        kind: "section",
        heading: "What a First Consultation Involves",
        lead: "An initial visit typically covers your medical and cycle history for both partners, basic investigations, and a discussion of next steps tailored to what is found.",
      },
      {
        kind: "takeaway",
        body: "Seeking a consultation does not commit you to any particular treatment — it opens the door to understanding your options sooner rather than later.",
      },
      {
        kind: "section",
        heading: "What to Prepare for Your Appointment",
        lead: "Bring a record of your cycle, details of how long you have been trying to conceive, and any relevant test results or medical history for both partners.",
      },
      {
        kind: "section",
        heading: "Personalised Assessment and Follow-up",
        lead: "At M’Brace, fertility evaluations are built around both partners, with an in-house embryology lab and continued support at both our LB Nagar and King Koti, Hyderabad centres.",
      },
    ],
  },
  {
    slug: "newborn-checkups-what-to-expect",
    title: "Newborn Checkups: What to Expect in the First Year",
    category: "Child Care",
    image: "/Rectangle (2).png",
    summary: "From the first checkup to the one-year milestone, here is what parents can expect at each paediatric visit.",
    intro:
      "Regular checkups in the first year help track your baby’s growth and catch anything that needs attention early. Here is what typically happens at each stage.",
    blocks: [
      {
        kind: "section",
        heading: "The First Few Checkups",
        lead: "In the early weeks and months, visits usually cover:",
        bullets: ["Weight, length, and head circumference", "Feeding and sleep patterns", "Vaccination schedule", "Any questions from new parents"],
      },
      {
        kind: "section",
        heading: "Tracking Growth and Development",
        lead: "Each visit plots your baby against growth charts over time — what matters most is a steady, consistent curve for your baby specifically, not a single measurement in isolation.",
      },
      {
        kind: "alert",
        heading: "When to Seek Care Sooner",
        body: "Persistent high fever in a young infant, difficulty feeding, laboured breathing, or reduced responsiveness should be assessed promptly rather than waiting for the next scheduled visit.",
      },
      {
        kind: "section",
        heading: "Staying on Top of Vaccinations",
        lead: "Vaccination schedules are designed to protect your child at the points they are most vulnerable — our paediatric team will walk you through the schedule and answer any concerns at each visit.",
      },
      {
        kind: "takeaway",
        body: "Consistent checkups build a complete picture of your child’s health over time, making it easier to spot — and act on — anything unusual early.",
      },
      {
        kind: "section",
        heading: "What to Prepare for Your Appointment",
        lead: "Bring your child’s vaccination record, a note of feeding and sleep patterns, and any questions about growth or development.",
      },
      {
        kind: "section",
        heading: "Personalised Assessment and Follow-up",
        lead: "At M’Brace, paediatric and neonatal care is coordinated as your child grows, with ongoing support available at both our LB Nagar and King Koti, Hyderabad centres.",
      },
    ],
  },
];

export function findBlogArticle(articles: BlogArticle[], slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(articles: BlogArticle[], slug: string, limit = 3) {
  const current = findBlogArticle(articles, slug);
  const sameCategory = articles.filter((article) => article.slug !== slug && article.category === current?.category);
  const rest = articles.filter((article) => article.slug !== slug && article.category !== current?.category);
  return [...sameCategory, ...rest].slice(0, limit);
}
