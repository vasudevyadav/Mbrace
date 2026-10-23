export type LocationFaq = { question: string; answer: string };
export type LocationFaqGroup = { label: string; items: LocationFaq[] };
export type LocationItem = { title: string; description: string };

export type ApprovedLocationContent = {
  slug: "lb-nagar" | "king-koti";
  name: string;
  phone: string;
  phoneHref: string;
  heroLabel: string;
  heroHeading: string;
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    question: string;
  };
  contact: { eyebrow: string; heading: string; body: string };
  reach: { eyebrow: string; heading: string; body: string; items: LocationItem[] };
  whyChoose: {
    eyebrow: string;
    heading: string;
    body: string;
    stats: Array<{ value: string; label: string }>;
    items: LocationItem[];
  };
  services: {
    eyebrow: string;
    heading: string;
    body: string;
    statValue: string;
    statLabel: string;
    items: LocationItem[];
  };
  visit: {
    eyebrow: string;
    heading: string;
    body: string;
    items: LocationItem[];
  };
  emergency: {
    eyebrow: string;
    heading: string;
    body: string;
    urgentTitle: string;
    urgentBody: string;
    plannedTitle: string;
    plannedBody: string;
  };
  faqs: LocationFaqGroup[];
};

export const approvedLocationContent: Record<string, ApprovedLocationContent> = {
  "lb-nagar": {
    slug: "lb-nagar",
    name: "LB Nagar",
    phone: "+91 70362 70362",
    phoneHref: "tel:+917036270362",
    heroLabel: "Women’s & Child Hospital",
    heroHeading: "Fertility, Pregnancy & Newborn Specialists Near You in LB Nagar",
    about: {
      eyebrow: "About M’Brace | LB Nagar",
      heading: "Backed by 34+ Years Of Healthcare Experience",
      paragraphs: [
        "M’Brace by Kamineni Hospitals is a hospital for women, mothers, newborns and children. We bring obstetrics, gynaecology, fertility, embryology, neonatology and paediatrics together, so a woman who starts with fertility care can continue through pregnancy, delivery and her baby’s care at the same hospital.",
        "Our team includes obstetricians, laparoscopic and robotic surgeons, infertility specialists, an embryologist, paediatricians and neonatologists. Treatment is planned after evaluation, and fertility assessment includes both partners.",
      ],
      question: "Questions before you visit? Call +91 70362 70362 for the information.",
    },
    contact: {
      eyebrow: "Address & Contact",
      heading: "Find M’Brace in LB Nagar",
      body: "Whether it’s a fertility consultation, a pregnancy check-up or your child’s appointment, here is how to reach M’Brace LB Nagar.",
    },
    reach: {
      eyebrow: "How to Reach",
      heading: "Metro, Bus & Road Access to M’Brace, LB Nagar",
      body: "M’Brace LB Nagar is on Inner Ring Road, close to the LB Nagar Metro terminus and the NH-65 highway. Families from Kothapet, Saroornagar, Mansoorabad, Hastinapuram, Vanasthalipuram, Dilsukhnagar, Nagole and Hayathnagar can reach it by metro, bus or road.",
      items: [
        { title: "Nearest Auto Stand", description: "LB Nagar Metro Station Exit\nAbout 0.9 km | 5–8 minutes by auto, 12–15 minutes on foot. Also: LB Nagar X Road, about 0.8 km." },
        { title: "Nearest Bus Stop", description: "Kamineni Hospital bus stop, LB Nagar, Outside the hospital | 1–2 minutes. LB Nagar X Road for city buses and Vijayawada and Nalgonda services, about 0.8 km (10–12 minutes on foot); APSRTC pickup point, Chintalkunta Checkpost, about 1.1 km (5–8 minutes by auto)" },
        { title: "Nearest Metro Station", description: "LB Nagar Metro (Red Line terminus). About 0.9 km | 5–8 minutes by auto, 12–15 minutes on foot. Also: Victoria Memorial Metro (Red Line), about 1.7 km (8–12 minutes by auto)" },
        { title: "Nearby Landmarks", description: "Kamineni Flyover (beside the hospital), Chitra Layout Park (about 0.5 km), Sri Sita Rama Anjaneya Swamy Temple, NH-65 (about 0.8 km), LB Nagar X Road (about 0.8 km), Sri Krishna Temple, Uppal Road (about 1.3 km)" },
        { title: "Nearby Stays", description: "Lokis Forest Inn, Sivaganga Colony (about 0.4 km), Hotel Sitara Grand, NH-65 (about 0.7 km)" },
        { title: "Nearby Eateries", description: "Venissa Café, Aaditya Nagar (about 0.4 km), Hotel Sitara Grand, NH-65 (about 0.7 km), Maryada Ramanna, Urban Junction (about 1.3 km), The Tree Stories, Urban Junction (about 1.3 km)" },
      ],
    },
    whyChoose: {
      eyebrow: "Why Choose Us",
      heading: "Why Families in LB Nagar Trust M’Brace for Women & Child Care?",
      body: "For families in LB Nagar, Kothapet and Vanasthalipuram, specialist pregnancy, newborn and child care is available within the neighbourhood, not across the city.",
      stats: [
        { value: "34+", label: "Years of Healthcare Experience" },
        { value: "1.1 Lakh+", label: "Babies Delivered" },
        { value: "Lakhs of", label: "Happy Families" },
        { value: "24/7", label: "Emergency Care in LB Nagar" },
      ],
      items: [
        { title: "Hospital Backup On Site", description: "Diagnostics, surgery and critical care are in the same building if a case becomes complex." },
        { title: "Newborn and Child ICUs", description: "NICU with neonatal ventilation, PICU and a paediatric emergency area on site." },
        { title: "Closer Pregnancy Monitoring", description: "A fetal medicine unit, 4D ultrasound and LDR rooms support pregnancies that need closer monitoring." },
        { title: "Accredited Hospital Standards", description: "Care is backed by NABH- and NABL-accredited Kamineni Hospitals, named Best Multispeciality Hospital (South Region)." },
      ],
    },
    services: {
      eyebrow: "Our Services",
      heading: "Treatment & Specialities At M’Brace, LB Nagar",
      body: "M’Brace LB Nagar offers 30 services across women’s care, fertility, pregnancy and birth support, and child care. Every service is available at LB Nagar, and you can book directly without a referral.",
      statValue: "1.1 Lakh",
      statLabel: "Babies Delivered",
      items: [
        { title: "Fertility Care", description: "Fertility evaluation, male fertility care, ovulation tracking, embryology support, IVF, IUI, ICSI and egg freezing." },
        { title: "Pregnancy & Birth Support", description: "Antenatal check-ups, nutrition guidance, fetal medicine, 4D ultrasound, advanced LDR rooms, sterile operation theatres, robotic surgery and high-risk pregnancy support." },
        { title: "Women’s Care", description: "Gynaecology, maternity care, high-risk pregnancy care, laparoscopic surgery, menopause care, preventive health packages, preconception counselling and wellness support." },
        { title: "Child Care", description: "Paediatrics and neonatology, developmental paediatrics, NICU, PICU, paediatric surgery and paediatric emergency care." },
      ],
    },
    visit: {
      eyebrow: "Your Visits, Explained",
      heading: "From Bookings to Follow-Up, What to Expert at Each Visit?",
      body: "A first appointment takes longer than a follow-up, because registration, history and initial checks happen together. This is the order to expect at the best women and child care hospital in LB Nagar.",
      items: [
        { title: "Book Your Appointment", description: "Call +91 70362 70362 or book online, choosing LB Nagar and your speciality." },
        { title: "Bring Your Documents", description: "Carry photo ID, earlier reports and scans, your medicine list and insurance card." },
        { title: "Register at Reception", description: "Register at reception on arrival; for urgent concerns involving children, you can walk in." },
        { title: "Consult Your Specialist", description: "Share every concern and ask all your questions; your specialist explains findings and options." },
        { title: "Insurance and Estimates", description: "Counsellors explain insurance cover, TPA approvals and pre-treatment cost estimates before treatment." },
        { title: "Second Opinion or Admission", description: "If you have doubts, a second opinion is arranged; counsellors guide any admission." },
      ],
    },
    emergency: {
      eyebrow: "24/7 Emergency Support",
      heading: "Help At Any Hour for Mothers, Newborns & Children",
      body: "Emergencies involving a pregnancy, a newborn or a child are assessed at M’Brace LB Nagar at any time, including nights, Sundays and public holidays.",
      urgentTitle: "When to Come Straight In",
      urgentBody: "Come in directly or call +91 70362 70362 for bleeding or reduced baby movements in pregnancy, a newborn who is not feeding, or a child struggling to breathe.",
      plannedTitle: "Planning a Visit Instead?",
      plannedBody: "Book a consultation for fertility, pregnancy, gynaecology or your child’s health, Monday to Saturday.",
    },
    faqs: [
      { label: "Women’s Care", items: [
        { question: "Which women’s health services are available at M’Brace LB Nagar?", answer: "As a Women’s Care Hospital in LB Nagar, M’Brace offers gynaecology, laparoscopic and robotic surgery, menopause care, preconception counselling and preventive health packages. Consultations run Monday to Saturday." },
        { question: "Can I book a gynaecology consultation directly?", answer: "Yes. Call +91 70362 70362 or book online without a referral. Bring earlier reports, scans and a list of current medicines to your first appointment." },
        { question: "Is laparoscopic or robotic surgery done at the LB Nagar location?", answer: "Yes. Both are available here for selected gynaecological conditions. Whether surgery suits you depends on your diagnosis, which your specialist assesses first." },
        { question: "Where can I get help for perimenopause symptoms in LB Nagar?", answer: "M’Brace LB Nagar offers menopause care for concerns such as hot flushes, sleep changes and irregular periods. Treatment depends on your symptoms and overall health." },
        { question: "Are preventive health check-ups for women available here?", answer: "Yes. Preventive women’s health packages are available at this location. Call the hospital for current details, as tests are recommended by age and health history." },
      ] },
      { label: "Child Care", items: [
        { question: "Does M’Brace LB Nagar have a NICU and PICU?", answer: "Yes. As a Child Care Hospital in LB Nagar, M’Brace offers paediatrics, neonatology, a NICU with neonatal ventilation support, PICU, paediatric surgery and paediatric emergency care." },
        { question: "Can I bring my child without an appointment?", answer: "Yes, for urgent concerns. Children with urgent symptoms can be brought in directly at any hour. For routine check-ups, book ahead on +91 70362 70362." },
        { question: "Does M’Brace LB Nagar assess a child’s growth and development?", answer: "Yes. Developmental paediatrics here assesses growth, milestones, speech and behaviour when parents or doctors have concerns, and helps decide whether further support is needed." },
        { question: "What happens if my newborn needs intensive care after delivery?", answer: "Babies who need closer care move to the NICU in the same hospital, so mother and baby stay at one location. Neonatologists lead care in the NICU." },
        { question: "Is paediatric surgery available at LB Nagar?", answer: "Yes. Every child is assessed first, and the surgeon explains whether surgery is needed and what recovery involves." },
      ] },
      { label: "Pregnancy & Birth Support", items: [
        { question: "Does M’Brace LB Nagar handle both routine and high-risk pregnancies?", answer: "Yes. M’Brace is a Pregnancy & Birth Support Hospital in LB Nagar offering antenatal check-ups, fetal medicine, 4D ultrasound, high-risk pregnancy support and advanced LDR rooms for labour and delivery." },
        { question: "How do I choose the best women and child care hospital in LB Nagar for delivery?", answer: "Look for 24/7 emergency support, a NICU in the same building, fetal medicine for higher-risk pregnancies and LDR rooms for labour. M’Brace LB Nagar offers each of these on Inner Ring Road." },
        { question: "When should I start antenatal check-ups at a maternity hospital in LB Nagar?", answer: "Ideally soon after a positive pregnancy test. Early check-ups confirm the pregnancy, estimate the due date and identify any risk that needs closer monitoring." },
        { question: "Is 4D ultrasound at M’Brace only for keepsake images?", answer: "No. 4D ultrasound shows real-time moving images and is used when your specialist needs a clearer view of the baby, not only for keepsake pictures." },
        { question: "Does this pregnancy care hospital in LB Nagar offer nutrition advice?", answer: "Yes. Nutrition guidance is part of pregnancy care here, with advice based on your stage of pregnancy, weight and any conditions such as diabetes or anaemia." },
      ] },
      { label: "Fertility Care", items: [
        { question: "Which fertility treatments are available at M’Brace LB Nagar?", answer: "As a Fertility Hospital in LB Nagar, M’Brace offers fertility evaluation, ovulation tracking, IUI, IVF, ICSI, egg freezing and embryology support. Treatment is chosen after both partners are assessed." },
        { question: "Does the male partner need tests at a fertility centre in LB Nagar?", answer: "Often, yes. Fertility evaluation may involve both partners, and semen analysis is one of the first tests. Male fertility care at M’Brace includes a private specialist review." },
        { question: "How many visits does ovulation tracking involve?", answer: "Usually several scans within one cycle, timed around ovulation. The number depends on your cycle and treatment plan; for families nearby, the LB Nagar location keeps these visits short." },
        { question: "Will I be started on IVF straight away?", answer: "No. IVF is recommended only when evaluation shows it suits your diagnosis. Some couples need ovulation support or IUI first; others may need IVF or ICSI." },
        { question: "Is egg freezing available at M’Brace LB Nagar?", answer: "Yes. Egg freezing is available for women who want to preserve fertility for later. It does not guarantee a future pregnancy, and suitability depends on age and ovarian reserve." },
      ] },
    ],
  },
  "king-koti": {
    slug: "king-koti",
    name: "King Koti",
    phone: "+91 78159 78159",
    phoneHref: "tel:+917815978159",
    heroLabel: "Women & Child Care Hospital in King Koti",
    heroHeading: "Pregnancy, Newborn & Child Specialists In King Koti, Central Hyderabad",
    about: {
      eyebrow: "About M’Brace | King Koti",
      heading: "Connected Care From Pregnancy to Childhood",
      paragraphs: [
        "M’Brace by Kamineni Hospitals is a hospital for women, mothers, newborns and children in central Hyderabad. At King Koti, a pregnancy can be followed from the first scan through delivery, newborn care and your child’s later check-ups by one connected team.",
        "The M’Brace team includes obstetricians, neonatologists, paediatricians, a paediatric intensivist, laparoscopic and robotic surgeons, infertility specialists and an embryologist. Each treatment plan follows an assessment of your health and test results.",
      ],
      question: "Have a question first? Call +91 78159 78159 for the information.",
    },
    contact: {
      eyebrow: "Address & Contact",
      heading: "Visiting M’Brace King Koti",
      body: "Whether you’re booking a first consultation, coming in for a scan or visiting family after a delivery, these details will help you reach M’Brace King Koti.",
    },
    reach: {
      eyebrow: "How to Reach",
      heading: "Rail, Metro & Bus Access to M’Brace, King Koti",
      body: "M’Brace King Koti is in Bogulkunta, between Abids and Koti, about a kilometre from Nampally railway station and four metro stations on the Red and Green Lines. Families from Abids, Hyderguda, Himayatnagar, Narayanguda, Basheerbagh, Koti, Sultan Bazar, Kachiguda and Barkatpura can reach it by rail, metro, bus or road.",
      items: [
        { title: "Nearest Auto Stand", description: "Abids Circle (Jawaharlal Nehru Statue), About 0.6 km | 3–6 minutes by auto, 8–10 minutes on foot. Also: Koti, about 1.0 km." },
        { title: "Nearest Bus Stop", description: "Abids bus stop, JN Road\nAbout 0.6 km | 8–10 minutes on foot. Also: Koti Bus Terminal for city routes, about 1.0 km (5–8 minutes by auto)." },
        { title: "Nearest Metro Station", description: "Nampally (Red Line)\nAbout 1.0 km | 5–8 minutes by auto, 12–15 minutes on foot. Also: Sultan Bazaar and Narayanaguda (Green Line), about 1.0–1.1 km; Osmania Medical College (Red Line), about 1.15 km." },
        { title: "Nearby Landmarks", description: "King Kothi Palace (about 120 m), Sindhu Sadan (about 0.2 km), Jawaharlal Nehru Statue, Abids Circle (about 0.6 km), Babu Jagjivan Ram Statue, Basheerbagh (about 0.85 km), Nampally Railway Station (about 1.0 km), Moazzam Jahi Market Clock Tower (about 1.1 km)" },
        { title: "Nearby Stays", description: "Taj Mahal Hotel, Abids Road (about 0.3 km), New Hotel Suhail, Troop Bazaar (about 0.7 km), Royalton Hotel, Chirag Ali Lane (about 0.7 km)" },
        { title: "Nearby Eateries", description: "Taj Mahal Hotel and Thalis by TMH, Abids Road (about 0.3 km), Sagar Papaji Ka Dhaba, Hanuman Tekdi (about 0.5 km), Grand Hotel, Abids (about 0.6 km), Cafe Bahar, Himayatnagar (about 0.8 km)" },
      ],
    },
    whyChoose: {
      eyebrow: "Why Choose Us",
      heading: "What Families in Central Hyderabad Trust M’Brace at King Koti?",
      body: "For families in Abids, Himayatnagar and Narayanguda, and for those arriving at Nampally station, specialist pregnancy and child care is about a kilometre away.",
      stats: [
        { value: "34+", label: "Years of Healthcare Experience" },
        { value: "1.1 Lakh+", label: "Babies Delivered" },
        { value: "Lakhs of", label: "Happy Families" },
        { value: "24/7", label: "Emergency Care in LB Nagar" },
      ],
      items: [
        { title: "Mother and Baby Together", description: "LDR rooms and the NICU share one hospital, keeping mother and newborn close." },
        { title: "Critical Care for Children", description: "PICU, paediatric surgery and a paediatric emergency area for children who need urgent treatment." },
        { title: "Specialist Pregnancy Assessment", description: "Fetal medicine and 4D ultrasound help assess pregnancies with medical, obstetric or fetal risk factors." },
        { title: "Multispeciality Hospital Support", description: "NABH- and NABL-accredited Kamineni Hospitals adds diagnostics, surgery and critical care when needed." },
      ],
    },
    services: {
      eyebrow: "Our Services",
      heading: "Specialities Available At M’Brace, King Koti",
      body: "M’Brace King Koti provides 30 services across pregnancy and birth support, child care, women’s care and fertility. You can book any of them directly, with no referral needed.",
      statValue: "1.1 Lakh",
      statLabel: "Babies Delivered",
      items: [
        { title: "Fertility Care", description: "Fertility evaluation, male fertility care, ovulation tracking, embryology support, IVF, IUI, ICSI and egg freezing." },
        { title: "Pregnancy & Birth Support", description: "Antenatal check-ups, nutrition guidance, fetal medicine, 4D ultrasound, advanced LDR rooms, sterile operation theatres, robotic surgery and high-risk pregnancy support." },
        { title: "Women’s Care", description: "Gynaecology, maternity care, high-risk pregnancy care, laparoscopic surgery, menopause care, preventive health packages, preconception counselling and wellness support." },
        { title: "Child Care", description: "Paediatrics and neonatology, developmental paediatrics, NICU, PICU, paediatric surgery and paediatric emergency care." },
      ],
    },
    visit: {
      eyebrow: "Your Visits, Explained",
      heading: "What Happens When You Visit M’Brace King Koti?",
      body: "Here is the outpatient process at M’Brace King Koti, from the first call to what follows your consultation.",
      items: [
        { title: "Schedule Your Visit", description: "Call +91 78159 78159 or book online, selecting King Koti and the care you need." },
        { title: "Carry Your Papers", description: "Bring photo ID, previous reports and scans, current medicines and any insurance card." },
        { title: "Check In at Reception", description: "Complete registration when you arrive; children with urgent concerns can be brought in directly." },
        { title: "Talk to Your Specialist", description: "Raise every concern; your specialist explains the findings and the options open to you." },
        { title: "Understand the Costs", description: "Counsellors help with insurance, TPA approvals and pre-treatment estimates before any procedure." },
        { title: "After Your Consultation", description: "A second opinion is arranged if you have doubts; counsellors handle admission planning." },
      ],
    },
    emergency: {
      eyebrow: "24/7 Emergency Support",
      heading: "Urgent Care During Pregnancy, For Newborns & Children, Day or Night",
      body: "At M’Brace King Koti, pregnancy, newborn and child emergencies are assessed round the clock, every day of the year.",
      urgentTitle: "When to Come Straight In",
      urgentBody: "Call +91 78159 78159 or come in directly for heavy bleeding or leaking fluid in pregnancy, a newborn with fever, or a child having a seizure.",
      plannedTitle: "Planning a Visit Instead?",
      plannedBody: "Schedule a consultation for pregnancy, child health, gynaecology or fertility, Monday to Saturday.",
    },
    faqs: [
      { label: "Women’s Care", items: [
        { question: "What women’s health care can I get at M’Brace King Koti?", answer: "As a Women’s Care Hospital in King Koti, M’Brace provides gynaecology, menopause care, laparoscopic and robotic surgery, preconception counselling, preventive health packages and wellness support, Monday to Saturday." },
        { question: "Can I plan a pregnancy with a specialist at this women’s hospital in King Koti?", answer: "Yes. Preconception counselling reviews your health, medicines, existing conditions and timing before pregnancy. If conception takes longer than expected, fertility evaluation is available at the same location." },
        { question: "How do I book a gynaecology appointment at King Koti?", answer: "Call +91 78159 78159 or book online and choose King Koti. No referral is required. Bring previous reports and a list of current medicines." },
        { question: "Are keyhole procedures for fibroids or cysts done at King Koti?", answer: "Yes. Laparoscopic and robotic-assisted surgery are available here for selected conditions, including fibroids and ovarian cysts. Your specialist confirms suitability after assessment." },
        { question: "Does M’Brace King Koti offer health check-ups for women?", answer: "Yes. Preventive women’s health packages are offered at this location. The tests included depend on your age and history, so call ahead for current details." },
      ] },
      { label: "Child Care", items: [
        { question: "What child care services are available at M’Brace King Koti?", answer: "As a Child Care Hospital in King Koti, M’Brace provides paediatric consultations, neonatology, a NICU, PICU, developmental paediatrics, paediatric surgery and paediatric emergency care." },
        { question: "Is there a paediatric hospital in King Koti that is open at night?", answer: "Yes. M’Brace King Koti assesses paediatric emergencies 24/7. Urgent cases can come in directly; call +91 78159 78159 if you need guidance on the way." },
        { question: "Can a premature baby be cared for at King Koti?", answer: "Yes. The NICU cares for premature, low-birth-weight and unwell newborns, including neonatal ventilation support, led by neonatologists. Care depends on each baby’s condition." },
        { question: "When should I see a developmental paediatrician at M’Brace King Koti?", answer: "If your child is late with milestones such as sitting, walking or speaking, or you notice behaviour concerns. An early assessment helps decide what support is needed." },
        { question: "What is the PICU used for?", answer: "The PICU cares for children who need close monitoring or intensive treatment, such as severe infections or breathing difficulty. Paediatric intensive care is available at this location." },
      ] },
      { label: "Pregnancy & Birth Support", items: [
        { question: "Does M’Brace King Koti support deliveries and high-risk pregnancies?", answer: "Yes. As a Pregnancy & Birth Support Hospital in King Koti, M’Brace provides antenatal check-ups, fetal medicine, 4D ultrasound, high-risk pregnancy support, advanced LDR rooms and sterile operation theatres." },
        { question: "What should I look for in the best women and child care hospital in King Koti?", answer: "Check for round-the-clock emergency cover, a NICU and PICU on site, fetal medicine for complex pregnancies and access to surgery. M’Brace King Koti provides these in Bogulkunta." },
        { question: "Can I continue at this maternity hospital in King Koti if my pregnancy becomes high risk?", answer: "Yes. If a risk develops, monitoring increases, and fetal medicine and specialist support are available at the same location, so care can usually continue without moving hospitals." },
        { question: "How do I make sure I reach M’Brace and not another hospital in Bogulkunta?", answer: "M’Brace is located within Kamineni Hospitals, Boggulakunta. Use this address when travelling: Boggulakunta, King Koti, Abids, Hyderabad 500001." },
        { question: "Does this pregnancy care hospital in King Koti have LDR rooms?", answer: "Yes. Advanced LDR rooms let labour, delivery and early recovery happen in one room, with sterile operation theatres nearby if a caesarean becomes necessary." },
      ] },
      { label: "Fertility Care", items: [
        { question: "Is there a fertility hospital in King Koti that tests both partners?", answer: "Yes. As a Fertility Hospital in King Koti, M’Brace evaluates both partners before treatment, using hormone tests, ultrasound and semen analysis to understand what may be affecting conception." },
        { question: "Which treatments does this IVF hospital in King Koti offer?", answer: "Ovulation tracking, IUI, IVF, ICSI, embryology support and egg freezing are available. The treatment recommended depends on your evaluation, not on a fixed sequence." },
        { question: "When is ICSI recommended at a fertility centre in King Koti?", answer: "ICSI is usually considered for selected male-factor fertility problems or when fertilisation has failed in earlier IVF cycles. Your specialist recommends it only if your results suggest it is needed." },
        { question: "How long should we try before seeing a fertility specialist?", answer: "Couples are generally advised to seek evaluation after 12 months of trying, or after 6 months if the woman is 35 or older, and sooner if there are known concerns. Evaluation at M’Brace King Koti can be booked directly." },
        { question: "Is egg freezing a guarantee of future pregnancy?", answer: "No. Egg freezing preserves mature eggs for possible later use, but pregnancy is not guaranteed. At M’Brace King Koti, your specialist explains suitability based on age and ovarian reserve." },
      ] },
    ],
  },
};

export function findApprovedLocationContent(slug: string) {
  return approvedLocationContent[slug] ?? null;
}
