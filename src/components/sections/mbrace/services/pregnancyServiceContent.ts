import type { BlogBlock } from "../blog/blogContent";
import type { DynamicPageSection } from "../dynamicPageContent";

type Card = { title: string; description: string };
type Pathway = {
  label: string;
  intro: string;
  firstTitle: string;
  firstDescription: string;
  secondTitle: string;
  secondDescription: string;
  cta: string;
};
type FaqGroup = { heading: string; faqs: { question: string; answer: string }[] };

type PregnancyServicePage = {
  name: string;
  description: string;
  hero: {
    pageTitle: string;
    highlight: string;
    rest: string;
    description: string;
    cta: string;
  };
  process: { eyebrow: string; heading: string; body: string; cards: Card[] };
  whyChoose: { heading: string; body: string };
  concerns: { eyebrow: string; heading: string; body: string; notes: string[]; cards: Card[] };
  pathway: { heading: string; lead: string; cta: string; items: Pathway[] };
  tools: { eyebrow: string; heading: string; body: string; items: Array<Card & { label: string }> };
  team: { heading: string; principleLead: string; principle: string; description: string };
  faqDescription: string;
  faqs: FaqGroup[];
  appointmentLabel: string;
  appointmentDescription: string;
};

export const pregnancyPages: Record<string, PregnancyServicePage> = {
  "antenatal-check-ups": {
    name: "Antenatal Check-Ups",
    description: "Regular visits to track your health, your baby's growth and your due date.",
    hero: {
      pageTitle: "Antenatal Check-Ups in Hyderabad",
      highlight: "Wondering What Each",
      rest: "Pregnancy Visit Checks?",
      description: "Blood pressure, weight, urine, blood tests, scans and vaccines are spread across your pregnancy in a planned schedule. At M’Brace, obstetricians explain why each check matters and what the result means for you and your baby.",
      cta: "Book Your Antenatal Check-up",
    },
    process: {
      eyebrow: "How M’Brace Plans Your Check-Ups",
      heading: "From 1st Visit to Due Date\nSchedule You Can Plan Around!",
      body: "Routine antenatal care follows national and international guidance, adjusted for your health and history. Knowing the schedule early helps you plan work, travel and family support.",
      cards: [
        { title: "Book Early", description: "The first visit, ideally before 10 weeks, sets your due date and baseline health record." },
        { title: "Follow a Timetable", description: "Visits are spaced monthly at first, then closer together as your due date approaches." },
        { title: "Track Results", description: "Each visit compares blood pressure, weight and growth with your earlier readings." },
        { title: "Act on Changes", description: "Any unusual result leads to extra tests or closer monitoring without delay." },
      ],
    },
    whyChoose: {
      heading: "Specialist Antenatal Check-ups in Hyderabad!",
      body: "Your check-ups are led by senior consultant obstetricians, with 4D ultrasound, fetal monitoring and laboratory tests in the same hospital, so many checks can be completed in one visit.\n\nIf a check-up shows a concern, care steps up without a change of hospital. As an antenatal clinic in Hyderabad within M’Brace, it links directly to the Fetal Medicine Unit, high-risk pregnancy care and NICU support, backed by NABH- and NABL-accredited Kamineni Hospitals.",
    },
    concerns: {
      eyebrow: "What Gets Checked",
      heading: "What Does Each Check-up Look For?",
      body: "Each routine check screens for a specific problem that is easier to manage when found early. These eight areas are covered across your pregnancy.",
      notes: ["Results compared visit to visit", "Abnormal findings acted on early", "Every test explained in plain words"],
      cards: [
        { title: "Blood Pressure", description: "Early signs of pregnancy hypertension or pre-eclampsia." },
        { title: "Weight", description: "Healthy gain for your starting BMI." },
        { title: "Urine", description: "Protein, sugar and infection checks." },
        { title: "Haemoglobin", description: "Anaemia, common in Indian pregnancies." },
        { title: "Blood Sugar", description: "Screening for gestational diabetes." },
        { title: "Baby’s Growth", description: "Fundal height and growth scans." },
        { title: "Baby’s Heartbeat", description: "Heart rate checked at each visit." },
        { title: "Infections", description: "HIV, hepatitis B, syphilis and rubella screening." },
      ],
    },
    pathway: {
      heading: "What Is Included In Your Visits?",
      lead: "Antenatal care in Hyderabad at M’Brace combines six types of checks across pregnancy. Select one to see when it is done and what it shows.",
      cta: "Speak to an Obstetrician",
      items: [
        { label: "Physical Checks", intro: "At Every Appointment", firstTitle: "Blood Pressure and Weight", firstDescription: "Readings are compared with your first visit to spot rising blood pressure or unexpected weight change early.", secondTitle: "Abdominal Examination", secondDescription: "From around 24 weeks, the height of the womb is measured and the baby’s position is checked.", cta: "Book a Check-up" },
        { label: "Blood Tests", intro: "Screening Through Pregnancy", firstTitle: "First Visit Bloods", firstDescription: "Blood group, Rh factor, haemoglobin, thyroid, sugar and infection screening are done at the start.", secondTitle: "Later Bloods", secondDescription: "Haemoglobin is checked again in later months, and a glucose tolerance test between 24 and 28 weeks looks for pregnancy-related diabetes.", cta: "Ask About Blood Tests" },
        { label: "Urine Tests", intro: "Simple but Important", firstTitle: "Protein and Sugar", firstDescription: "A dipstick test at each visit checks for protein, an early sign of pre-eclampsia, and for sugar.", secondTitle: "Infection Screening", secondDescription: "A urine culture early in pregnancy detects infections that may cause no symptoms but still need treatment.", cta: "Book Your Visit" },
        { label: "Scans", intro: "Key Ultrasound Milestones", firstTitle: "Early and 11-14 Week Scans", firstDescription: "An early scan fixes your due date, and a nuchal translucency scan at 11-14 weeks, combined with a blood test, estimates chromosomal risk.", secondTitle: "Anomaly and Growth Scans", secondDescription: "A detailed anomaly scan at 18–20 weeks checks the baby’s structure, with growth scans later if needed.", cta: "Book Your Scan" },
        { label: "Vaccines & Supplements", intro: "Protection for You and Your Baby", firstTitle: "Vaccines", firstDescription: "The Td vaccine protects against tetanus, and your obstetrician may advise flu vaccination depending on the season.", secondTitle: "Supplements", secondDescription: "Folic acid in early pregnancy, then iron and calcium from the second trimester, as recommended in India.", cta: "Discuss Supplements" },
        { label: "Warning Signs", intro: "When Not to Wait for Your Next Visit", firstTitle: "Come In Promptly", firstDescription: "Bleeding, leaking fluid, a severe headache, blurred vision, severe abdominal pain or reduced movements need same-day review.", secondTitle: "24/7 Support", secondDescription: "M’Brace has 24/7 emergency and transport support through Kamineni Hospitals, so you can be assessed at any hour.", cta: "Save the Emergency Number" },
      ],
    },
    tools: {
      eyebrow: "Diagnostics & Tests",
      heading: "Tests Through Your Pregnancy",
      body: "Your obstetrician schedules tests according to your pregnancy stage and risk factors, if any.",
      items: [
        { label: "BLOOD", title: "Antenatal Blood Profile", description: "Blood group, haemoglobin, thyroid and infection screening." },
        { label: "SUGAR", title: "Glucose Tolerance Test", description: "Screens for gestational diabetes in mid-pregnancy." },
        { label: "IMAGING", title: "Dating, NT & Anomaly Scans", description: "Confirm the due date and check development." },
        { label: "MONITORING", title: "Fetal Heart Checks", description: "Confirm the baby’s heartbeat at each visit." },
      ],
    },
    team: {
      heading: "Your Antenatal Team",
      principleLead: "Every visit follows one principle:",
      principle: "Checked Carefully. Explained Clearly.",
      description: "Each pregnancy check-up in Hyderabad at M’Brace is carried out by senior consultant obstetricians, who also plan your delivery, so your history shapes your birth plan.",
    },
    faqDescription: "What women most often ask about routine pregnancy check-ups.",
    faqs: [
      { heading: "Schedule", faqs: [
        { question: "How many antenatal check-ups will I have?", answer: "Usually around 8 to 12 across a routine pregnancy, more often in the third trimester. Your obstetrician may add visits if a concern is found." },
        { question: "What happens at the first antenatal visit?", answer: "Your history is taken, your due date is estimated, blood and urine tests are sent, and you are advised on folic acid, diet and when to come next." },
      ] },
      { heading: "Tests", faqs: [
        { question: "Are all these blood tests necessary?", answer: "Each one screens for a condition that can affect you or your baby, such as anaemia, diabetes, thyroid problems or infections. Most are recommended for every pregnancy." },
        { question: "Why is my urine tested at every visit?", answer: "A quick urine test detects protein, which can be an early sign of pre-eclampsia, as well as sugar or infection, all of which are easier to manage when found early." },
      ] },
      { heading: "Scans & Vaccines", faqs: [
        { question: "How many scans are routine?", answer: "Usually an early dating scan, the 11–14 week scan and the 18–20 week anomaly scan, with growth scans later only if needed." },
        { question: "Which vaccines will I be given?", answer: "The Td vaccine against tetanus is routine in pregnancy in India. Your obstetrician may also suggest flu vaccination, and live vaccines are avoided until after delivery." },
      ] },
      { heading: "About M’Brace", faqs: [
        { question: "Are antenatal check-ups available in LB Nagar and King Koti?", answer: "Yes. M’Brace offers antenatal check-ups in LB Nagar and antenatal check-ups in King Koti, with scans, lab tests and consultations at both Kamineni Hospitals units." },
        { question: "Can my partner come to check-ups?", answer: "Yes. Partners and family members are welcome at check-ups and scans, and can ask questions too." },
      ] },
    ],
    appointmentLabel: "Just Found Out You’re Pregnant?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to fix your first antenatal check-up at LB Nagar or King Koti.",
  },

  "nutrition-guidance": {
    name: "Nutrition Guidance",
    description: "Advice on healthy eating, weight gain and what to avoid during pregnancy.",
    hero: {
      pageTitle: "Pregnancy Nutrition Guidance in Hyderabad",
      highlight: "Unsure What to Eat During",
      rest: "Each Trimester of Pregnancy!",
      description: "Eating for two is a myth, because your needs rise gradually. M’Brace obstetricians give practical diet advice for each trimester, based on your weight, blood tests and any condition such as anaemia or gestational diabetes.",
      cta: "Discuss Your Diet",
    },
    process: {
      eyebrow: "How M’Brace Plans Your Nutrition",
      heading: "Everything From 1st Blood\nTest to Final Trimester!",
      body: "Pregnancy diet advice starts with your starting weight, blood results and food habits, including vegetarian or regional diets, so recommendations fit what you actually eat.",
      cards: [
        { title: "Assess Your Starting Point", description: "BMI, haemoglobin, sugar and vitamin levels show what your diet needs to correct." },
        { title: "Review Your Diet", description: "Your usual meals, cravings, aversions and cultural food habits are discussed." },
        { title: "Set Targets", description: "A weight gain range, key nutrients and supplements are agreed for your stage." },
        { title: "Adjust as You Go", description: "Advice changes with each trimester, test result or new condition." },
      ],
    },
    whyChoose: {
      heading: "Specialist Pregnancy Nutrition Guidance in Hyderabad!",
      body: "Nutrition advice comes from senior consultant obstetricians who read it alongside your blood results and scans, so diet changes address real findings such as low haemoglobin or rising sugar.\n\nA pregnancy diet consultation in Hyderabad at M’Brace connects to the rest of your care. If gestational diabetes or poor growth is found, monitoring, fetal medicine and delivery planning follow within the same system.",
    },
    concerns: {
      eyebrow: "Common Concerns",
      heading: "Which Diet Questions Our Experts Help With?",
      body: "Most women need only small changes, but some situations call for closer nutrition advice. These are the concerns raised most often.",
      notes: ["Advice suited to Indian diets", "Linked to your test results", "No rigid diet charts"],
      cards: [
        { title: "Anaemia", description: "Iron-rich foods and supplements to raise haemoglobin." },
        { title: "Gestational Diabetes", description: "Meal planning to keep sugar in range." },
        { title: "Vegetarian Diets", description: "Protein, iron, B12 and calcium from plant sources." },
        { title: "Morning Sickness", description: "Eating well when nausea limits food." },
        { title: "Weight Gain", description: "Healthy gain for your starting BMI." },
        { title: "Food Safety", description: "Foods to avoid and safe preparation." },
        { title: "Constipation & Acidity", description: "Diet changes for common discomforts." },
        { title: "Twins or More", description: "Higher energy and nutrient needs." },
      ],
    },
    pathway: {
      heading: "What Should You Eat as Pregnancy Progresses?",
      lead: "Nutrition guidance during pregnancy in Hyderabad at M’Brace follows your changing needs. Select the trimester stage to see what is usually advised.",
      cta: "Speak to an Obstetrician",
      items: [
        { label: "First Trimester", intro: "Quality Over Quantity", firstTitle: "No Extra Calories Yet", firstDescription: "Energy needs barely change in the first three months, so the focus is on folic acid, fluids and small, regular meals.", secondTitle: "Managing Nausea", secondDescription: "Dry snacks, small frequent meals and avoiding strong smells help, and severe vomiting needs medical review.", cta: "Discuss Early Pregnancy Diet" },
        { label: "Second & Third Trimesters", intro: "A Steady Increase", firstTitle: "Extra Energy", firstDescription: "Around 350 extra calories a day are needed from the second trimester, mostly from whole grains, pulses, dairy and fruit.", secondTitle: "Protein and Calcium", secondDescription: "Dal, eggs, milk, paneer and nuts help meet higher protein and calcium needs as the baby grows.", cta: "Plan Your Meals" },
        { label: "Iron & Anaemia", intro: "Raising Haemoglobin", firstTitle: "Iron-Rich Foods", firstDescription: "Green leafy vegetables, jaggery, pulses, dates and meat, with vitamin C to improve absorption.", secondTitle: "Supplements", secondDescription: "Iron and folic acid tablets are usually taken daily from the second trimester, avoiding tea or coffee around them.", cta: "Check Your Haemoglobin" },
        { label: "Gestational Diabetes", intro: "Keeping Sugar in Range", firstTitle: "Meal Structure", firstDescription: "Three meals and two or three snacks, with controlled portions of rice, roti and sweets, help prevent sugar spikes.", secondTitle: "Monitoring Results", secondDescription: "Home sugar readings guide changes, and medicines or insulin are added if diet alone is not enough.", cta: "Discuss Sugar Control" },
        { label: "Vegetarian Diets", intro: "Meeting Every Need", firstTitle: "Protein Sources", firstDescription: "Combining pulses with cereals, plus milk, curd and paneer, provides complete protein.", secondTitle: "Vitamin B12", secondDescription: "B12 comes mainly from animal foods, so vegetarians may need a supplement after a blood test.", cta: "Get Vegetarian Advice" },
        { label: "After Delivery", intro: "Nutrition While Breastfeeding", firstTitle: "Extra Needs", firstDescription: "Breastfeeding needs additional calories, fluids and calcium, so a balanced diet continues after birth.", secondTitle: "Supplements Continue", secondDescription: "Iron and calcium are often continued for some months after delivery, as advised.", cta: "Plan Postnatal Nutrition" },
      ],
    },
    tools: {
      eyebrow: "Diagnostics & Tests",
      heading: "Tests That Shape Your Pregnancy Diet",
      body: "The results from these tests show which nutrients need attention.",
      items: [
        { label: "BLOOD", title: "Haemoglobin & Ferritin", description: "Detect anaemia and low iron stores." },
        { label: "SUGAR", title: "Glucose Tolerance Test", description: "Identifies gestational diabetes needing diet changes." },
        { label: "VITAMINS", title: "Vitamin D & B12", description: "Check deficiencies common in Indian diets." },
        { label: "GROWTH", title: "Weight & Growth Scans", description: "Show whether mother and baby are gaining well." },
      ],
    },
    team: {
      heading: "Expert Gynaecologists in Hyderabad",
      principleLead: "Every plan follows one principle:",
      principle: "Real Food. Realistic Goals.",
      description: "Prenatal nutrition counselling in Hyderabad at M’Brace is provided by senior consultant obstetricians and gynaecologists, who link diet advice to your scans and blood results at each visit.",
    },
    faqDescription: "What women most often ask about eating well in pregnancy.",
    faqs: [
      { heading: "Everyday Eating", faqs: [
        { question: "Do I need to eat for two?", answer: "No. Energy needs rise only slightly, by around 350 calories a day from the second trimester. Quality matters more than quantity." },
        { question: "Which foods should I avoid in pregnancy?", answer: "Avoid unpasteurised milk, undercooked meat or eggs, raw fish, alcohol and excess caffeine. Wash fruit and vegetables well, and limit fried and very sugary foods." },
      ] },
      { heading: "Weight & Supplements", faqs: [
        { question: "How much weight should I gain?", answer: "It depends on your weight before pregnancy. Women with a normal BMI usually gain about 11–16 kg, and your obstetrician gives a range suited to you." },
        { question: "Which supplements do I need?", answer: "Folic acid early on, then iron and calcium from the second trimester, are recommended for most women in India. Others, such as vitamin D or B12, depend on your blood tests." },
      ] },
      { heading: "Special Situations", faqs: [
        { question: "Are papaya and pineapple unsafe in pregnancy?", answer: "Ripe papaya and normal servings of pineapple are generally considered safe, but unripe papaya is best avoided. Ask your obstetrician if you are unsure about any food." },
        { question: "What should I eat if I have gestational diabetes?", answer: "Small, regular meals with controlled carbohydrates, more fibre, protein at each meal and limited sweets help. Your plan is adjusted based on your home sugar readings." },
      ] },
      { heading: "About M’Brace", faqs: [
        { question: "Is pregnancy nutrition guidance available in LB Nagar and King Koti?", answer: "Yes. M’Brace offers pregnancy nutrition guidance in LB Nagar and pregnancy nutrition guidance in King Koti, as part of antenatal care at both Kamineni Hospitals units." },
        { question: "Will I get a fixed diet chart?", answer: "Advice is tailored rather than fixed. Your obstetrician suggests meals and portions that suit your tests, food habits and routine, and adjusts them as pregnancy progresses." },
      ] },
    ],
    appointmentLabel: "Questions About Your Pregnancy Diet?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to fix a consultation at LB Nagar or King Koti.",
  },

  "fetal-medicine": {
    name: "Fetal Medicine",
    description: "Specialist checks on your baby's growth and health when a scan or your history raises a question.",
    hero: {
      pageTitle: "Fetal Medicine in Hyderabad",
      highlight: "Scan Raised A Question",
      rest: "About Your Baby?",
      description: "Findings on a routine scan, a high screening result, twins or growth concerns may need a closer look. M’Brace’s Fetal Medicine Unit provides detailed scans and explains what the findings mean for your baby and your pregnancy.",
      cta: "Book a Fetal Medicine Scan",
    },
    process: {
      eyebrow: "How M’Brace Assesses Your Baby",
      heading: "From Referral to a Clear Plan\nFindings Explained, Options Discussed!",
      body: "Fetal medicine focuses on the baby before birth. It confirms whether a finding is significant, how it may affect the baby, and what monitoring or care is needed.",
      cards: [
        { title: "Review the Referral", description: "Earlier scans, screening results and your history are reviewed before the detailed scan." },
        { title: "Detailed Scan", description: "A specialist ultrasound examines the baby’s anatomy, growth, fluid and blood flow." },
        { title: "Explain the Findings", description: "Results are discussed in plain words, including what is certain and what needs follow-up." },
        { title: "Plan Ahead", description: "Monitoring, further tests, delivery planning and newborn care are coordinated as needed." },
      ],
    },
    whyChoose: {
      heading: "Specialist Fetal Medicine in Hyderabad!",
      body: "Assessment takes place in M’Brace’s Fetal Medicine Unit, with senior consultant obstetricians reviewing the findings, so scan results feed directly into your pregnancy and delivery plan.\n\nAs a fetal medicine hospital in Hyderabad within NABH- and NABL-accredited Kamineni Hospitals, M’Brace connects detailed scans to neonatology and NICU support, so a baby who may need care after birth is planned for in advance.",
    },
    concerns: {
      eyebrow: "Reasons for Referral",
      heading: "When Is a Fetal Medicine Assessment Advised?",
      body: "Many referrals end with reassurance, but a closer look gives clear answers either way. These are the most common reasons for referral.",
      notes: ["Detailed, unhurried scans", "Findings explained honestly", "Newborn team involved early"],
      cards: [
        { title: "High Screening Result", description: "An increased chance on the 11-14 week screening." },
        { title: "Anomaly Scan Finding", description: "A structural difference seen on the routine scan." },
        { title: "Growth Concerns", description: "Baby measuring smaller or larger than expected." },
        { title: "Twin Pregnancy", description: "Monitoring growth and placental sharing." },
        { title: "Fluid Problems", description: "Too much or too little amniotic fluid." },
        { title: "Previous Affected Pregnancy", description: "A history of birth defects or genetic conditions." },
        { title: "Maternal Conditions", description: "Diabetes, infection or medicines affecting the baby." },
        { title: "Rh-Negative Mother", description: "Monitoring for antibodies that can affect the baby." },
      ],
    },
    pathway: {
      heading: "Which Assessment Do You Need?",
      lead: "Fetal care in Hyderabad at M’Brace depends on why you were referred. Select an assessment to see what it involves and what happens next.",
      cta: "Speak to an Obstetrician",
      items: [
        { label: "Early Screening", intro: "Assessing Chromosomal Risk", firstTitle: "NT Scan", firstDescription: "At 11-14 weeks, the fluid at the back of the baby’s neck is measured along with early anatomy.", secondTitle: "Combined Result", secondDescription: "Combined with a blood test and your age, it estimates the chance of conditions such as Down syndrome.", cta: "Book an NT Scan" },
        { label: "Detailed Anomaly Scan", intro: "Checking Structure", firstTitle: "Organ-by-Organ Review", firstDescription: "Between 18 and 22 weeks, the brain, face, spine, heart, abdomen, kidneys and limbs are examined.", secondTitle: "If a Difference Is Seen", secondDescription: "The finding is explained, and a repeat scan or further tests may be advised to understand it better.", cta: "Book an Anomaly Scan" },
        { label: "Growth & Doppler", intro: "Is the Baby Growing Well?", firstTitle: "Growth Measurements", firstDescription: "Head, abdomen and thigh bone measurements estimate weight and compare it with expected growth.", secondTitle: "Doppler Blood Flow", secondDescription: "Doppler studies check blood flow in the umbilical cord and the baby’s vessels, showing how well the placenta is working.", cta: "Ask About Growth Scans" },
        { label: "Twin Monitoring", intro: "Two Babies, Closer Watch", firstTitle: "Chorionicity", firstDescription: "An early scan identifies whether the twins have separate placentas or share one.", secondTitle: "Regular Comparison", secondDescription: "Each baby’s growth, fluid and blood flow are compared at every scan to detect imbalances early.", cta: "Plan Twin Scans" },
        { label: "Further Testing", intro: "When More Information Is Needed", firstTitle: "Discussing Options", firstDescription: "Depending on the finding, non-invasive blood tests or diagnostic tests may be discussed, along with their benefits and risks.", secondTitle: "Genetic Counselling", secondDescription: "Where a genetic condition is possible, referral for genetic counselling helps you understand the results and your choices.", cta: "Discuss Further Tests" },
        { label: "Planning for Birth", intro: "Preparing Before Delivery", firstTitle: "Delivery Planning", firstDescription: "Timing, place and type of delivery are planned around the baby’s needs and your health.", secondTitle: "Newborn Team Briefing", secondDescription: "Neonatologists are informed in advance when a baby may need assessment or NICU care after birth.", cta: "Plan Your Delivery" },
      ],
    },
    tools: {
      eyebrow: "Diagnostics & Scans",
      heading: "Fetal Medicine Scans & Tests",
      body: "Your obstetrician recommends tests based on the reason for referral and your stage of pregnancy.",
      items: [
        { label: "SCREENING", title: "NT Scan & Blood Test", description: "Estimates chromosomal risk at 11–14 weeks." },
        { label: "ANATOMY", title: "Detailed Anomaly Scan", description: "Examines the baby’s organs and structure." },
        { label: "DOPPLER", title: "Umbilical & Fetal Doppler", description: "Assesses placental function and blood flow." },
        { label: "HEART", title: "Fetal Echocardiography", description: "A detailed check of the baby’s heart when needed." },
      ],
    },
    team: {
      heading: "Who Will Review Your Scan?",
      principleLead: "Every scan follows one principle:",
      principle: "Look Closely. Explain Honestly.",
      description: "If you have been referred to a fetal medicine specialist in Hyderabad, M’Brace’s senior consultant obstetricians review your scans in the Fetal Medicine Unit and plan your care with the neonatal team.",
    },
    faqDescription: "What parents most often ask when referred for fetal medicine.",
    faqs: [
      { heading: "Referral", faqs: [
        { question: "Why have I been referred to fetal medicine?", answer: "Common reasons include a high screening result, a finding on the anomaly scan, growth concerns, twins or a previous affected pregnancy. Referral means a closer look, not that something is definitely wrong." },
        { question: "Is a fetal medicine scan different from a routine scan?", answer: "Yes. It is more detailed and takes longer, focusing on the specific concern alongside a full review of the baby’s anatomy, growth and blood flow." },
      ] },
      { heading: "The Scan", faqs: [
        { question: "Is the scan safe for my baby?", answer: "Yes. Ultrasound has been used in pregnancy for decades and is considered safe when performed for medical reasons." },
        { question: "How should I prepare?", answer: "No special preparation is usually needed. Bring all previous scan and screening reports, and allow extra time for a detailed scan." },
      ] },
      { heading: "Results", faqs: [
        { question: "What if a problem is found?", answer: "The finding is explained clearly, including what is known and what is uncertain. Further tests, repeat scans, specialist opinions and delivery planning are discussed so you can make informed decisions." },
        { question: "Will my baby need care after birth?", answer: "Not always. If a finding suggests your baby may need assessment or treatment, the neonatal team is informed in advance, and NICU support is available in the same hospital." },
      ] },
      { heading: "About M’Brace", faqs: [
        { question: "Is fetal medicine available in LB Nagar and King Koti?", answer: "Yes. M’Brace offers fetal medicine in LB Nagar and fetal medicine in King Koti, with detailed scans and follow-up at both Kamineni Hospitals units." },
        { question: "Do I need a referral?", answer: "A referral from your obstetrician is helpful because it explains the concern, but you can also book directly and bring your previous reports." },
      ] },
    ],
    appointmentLabel: "Referred for a Detailed Scan?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to fix a fetal medicine scan at LB Nagar or King Koti.",
  },

  "4d-ultrasound": {
    name: "4D Ultrasound",
    description: "Detailed baby scans to check growth, position and development.",
    hero: {
      pageTitle: "4D Ultrasound in Hyderabad",
      highlight: "Real-Time Baby Images",
      rest: "Using 4D Ultrasound",
      description: "4D ultrasound shows moving, three-dimensional images of your baby in real time. At M’Brace, it is used alongside standard scans to help assess the face, limbs, movement and position, not as a keepsake service.",
      cta: "Book a Pregnancy Scan",
    },
    process: {
      eyebrow: "How M’Brace Uses 4D Ultrasound",
      heading: "From Scan Request to Report\nClinical First, Images Second!",
      body: "4D scanning adds movement to 3D images. It does not replace the standard 2D measurements, which remain the main way doctors check growth and anatomy.",
      cards: [
        { title: "Clinical Need First", description: "Your obstetrician advises when a 4D view will add information to routine scans." },
        { title: "Standard Measurements", description: "2D measurements of growth, fluid and anatomy are completed first." },
        { title: "4D Views", description: "Moving images show facial features, limbs and movement more clearly." },
        { title: "Report and Discussion", description: "Findings are explained, and selected images may be shared with you." },
      ],
    },
    whyChoose: {
      heading: "Specialist 4D Ultrasound in Hyderabad!",
      body: "Scans are reviewed with senior consultant obstetricians, so images are read in the context of your pregnancy history and earlier results.\n\nChoosing a 4D scan centre in Hyderabad within a hospital means any finding can be followed up promptly. At M’Brace, the Fetal Medicine Unit and obstetric team are in the same hospital.",
    },
    concerns: {
      eyebrow: "When It Helps",
      heading: "When Is a 4D Scan Useful?",
      body: "4D imaging is most useful when surface features or movement need a clearer view. These are the situations where it can add information.",
      notes: ["Used alongside 2D measurements", "Medical need comes first", "Baby’s gender never disclosed"],
      cards: [
        { title: "Facial Features", description: "Clearer views of the lips and profile." },
        { title: "Limbs and Hands", description: "Checking fingers, feet and limb position." },
        { title: "Fetal Movement", description: "Observing normal movement patterns." },
        { title: "Baby’s Position", description: "Confirming how the baby is lying." },
        { title: "Follow-up of a Finding", description: "A closer look after a routine scan." },
        { title: "Twin Pregnancies", description: "Seeing each baby’s position more clearly." },
        { title: "Surface Differences", description: "Assessing features seen on 2D scans." },
        { title: "Parent Understanding", description: "Helping parents see what a finding means." },
      ],
    },
    pathway: {
      heading: "Which Scan Is Right at Your Stage?",
      lead: "Pregnancy ultrasound in Hyderabad at M’Brace follows set milestones, with 4D views added when helpful. Select a scan to see when it is done and what it shows.",
      cta: "Speak to an Obstetrician",
      items: [
        { label: "Dating Scan", intro: "6 to 10 Weeks", firstTitle: "What It Confirms", firstDescription: "The pregnancy’s location, the heartbeat, the number of babies and an accurate due date.", secondTitle: "How It Is Done", secondDescription: "Early scans are often transvaginal for a clearer picture, and take only a few minutes.", cta: "Book a Dating Scan" },
        { label: "NT Scan", intro: "11 to 14 Weeks", firstTitle: "Neck Measurement", firstDescription: "The nuchal translucency is measured as part of screening for chromosomal conditions.", secondTitle: "Early Anatomy", secondDescription: "Major structures, such as the skull and limbs, can already be checked.", cta: "Book an NT Scan" },
        { label: "Anomaly Scan", intro: "18 to 20 Weeks", firstTitle: "Detailed Check", firstDescription: "The baby’s organs, spine, heart and placental position are examined in detail.", secondTitle: "The Key Routine Scan", secondDescription: "It is the main scan for detecting structural differences, so it is recommended for every pregnancy.", cta: "Book an Anomaly Scan" },
        { label: "4D Scan", intro: "Usually 24 to 32 Weeks", firstTitle: "Best Timing", firstDescription: "Facial features are usually clearest between about 26 and 30 weeks, before the baby becomes crowded.", secondTitle: "What Affects the View", secondDescription: "The baby’s position, the fluid around the face and the mother’s body can limit images, so a repeat view is sometimes needed.", cta: "Book a 4D Scan" },
        { label: "Growth Scan", intro: "Third Trimester", firstTitle: "When It Is Advised", firstDescription: "If the bump measures small or large, or there is a medical condition, growth is checked by scan.", secondTitle: "What It Measures", secondDescription: "Estimated weight, fluid and, when needed, Doppler blood flow are assessed.", cta: "Book a Growth Scan" },
        { label: "Safety & Law", intro: "What You Should Know", firstTitle: "Ultrasound Safety", firstDescription: "Ultrasound uses sound waves, not radiation, and is considered safe when performed for medical reasons.", secondTitle: "PCPNDT Act", secondDescription: "Under Indian law, the sex of the baby cannot be revealed during any scan, and M’Brace strictly follows this.", cta: "Ask About Scan Safety" },
      ],
    },
    tools: {
      eyebrow: "Diagnostics & Scans",
      heading: "Ultrasound Scans in Pregnancy",
      body: "Your obstetrician recommends scans based on your stage and any clinical need.",
      items: [
        { label: "EARLY", title: "Dating Scan", description: "Confirms the due date and heartbeat." },
        { label: "SCREENING", title: "NT Scan", description: "Measures the neck fold for chromosomal screening." },
        { label: "ANATOMY", title: "Anomaly Scan", description: "Checks the baby’s organs and structure." },
        { label: "4D", title: "Real-Time 4D Imaging", description: "Adds moving surface views when helpful." },
      ],
    },
    team: {
      heading: "Your Scan Team",
      principleLead: "Every scan follows one principle:",
      principle: "Medical Need First. Clear Explanation Always.",
      description: "Your 4D pregnancy scan in Hyderabad at M’Brace is reviewed with senior consultant obstetricians, who explain the findings and link them to your antenatal plan.",
    },
    faqDescription: "What parents most often ask about 4D scans.",
    faqs: [
      { heading: "About 4D Scans", faqs: [
        { question: "What is the difference between 2D, 3D and 4D scans?", answer: "2D shows flat cross-sections used for measurements. 3D creates still three-dimensional images, and 4D adds real-time movement to those images." },
        { question: "Is a 4D scan necessary?", answer: "Not for every pregnancy. Standard 2D scans remain essential for checking growth and anatomy, and a 4D view is added when it gives useful extra information." },
      ] },
      { heading: "Timing", faqs: [
        { question: "When is the best time for a 4D scan?", answer: "Usually between 26 and 30 weeks, when the baby has some fat under the skin but still has room to move." },
        { question: "Why couldn’t the baby’s face be seen clearly?", answer: "The baby may be facing away, have hands over the face or have little fluid in front. A short walk or a repeat view later can help." },
      ] },
      { heading: "Safety & Law", faqs: [
        { question: "Is a 4D scan safe?", answer: "Yes. 4D imaging uses the same ultrasound sound waves as routine scans and involves no radiation. Scans are kept to the time needed for medical purposes." },
        { question: "Will you tell us whether it is a boy or a girl?", answer: "No. Revealing the baby’s sex is illegal under India’s PCPNDT Act, and it is not disclosed during any scan at M’Brace." },
      ] },
      { heading: "About M’Brace", faqs: [
        { question: "Is fetal medicine available in LB Nagar and King Koti?", answer: "Yes. M’Brace offers fetal medicine in LB Nagar and fetal medicine in King Koti, with detailed scans and follow-up at both Kamineni Hospitals units." },
        { question: "Do I need a referral?", answer: "A referral from your obstetrician is helpful because it explains the concern, but you can also book directly and bring your previous reports." },
      ] },
    ],
    appointmentLabel: "Due for Your Next Scan?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to schedule your pregnancy scan at LB Nagar or King Koti.",
  },

  "advanced-ldr-rooms": {
    name: "Advanced LDR Rooms",
    description: "Rooms designed for labour, delivery and recovery, all in one place.",
    hero: {
      pageTitle: "LDR Rooms in Hyderabad",
      highlight: "From Labour to Recovery",
      rest: "One Room for Complete Comfort",
      description: "LDR stands for labour, delivery and recovery. In M’Brace’s advanced LDR rooms, you labour, give birth and begin your recovery in the same room, with fetal monitoring and newborn care equipment close at hand.",
      cta: "Plan Your Birth",
    },
    process: {
      eyebrow: "How Birth Works in an LDR Room",
      heading: "From 1st Contractions to 1st Feed\nOne Room, Fewer Disruptions!",
      body: "Traditional care moves a woman from the labour ward to a delivery room and then to a postnatal ward. An LDR room keeps you in one place, which means fewer transfers at the most intense moments.",
      cards: [
        { title: "Admission in Labour", description: "You are assessed and settled in the LDR room once active labour is confirmed." },
        { title: "Monitored Labour", description: "Contractions and your baby’s heart rate are tracked while you move and change position." },
        { title: "Birth in the Same Room", description: "The bed converts for delivery, and the obstetric team attends without moving you." },
        { title: "Recovery and Bonding", description: "Skin-to-skin contact and the first feed happen in the same room after birth." },
      ],
    },
    whyChoose: {
      heading: "Advanced LDR Rooms in Hyderabad!",
      body: "Births in the LDR rooms are managed by senior consultant obstetricians, with neonatologists available when a baby needs assessment, so specialist care comes to you rather than you being moved.\n\nIf labour changes course, M’Brace’s labour delivery recovery rooms in Hyderabad are supported by sterile operation theatres and the NICU in the same hospital, backed by NABH- and NABL-accredited Kamineni Hospitals.",
    },
    concerns: {
      eyebrow: "What the Room Offers",
      heading: "What Is in an LDR Room?",
      body: "Each LDR room brings labour, birth and recovery equipment into one private space. Following are the features that support you and your baby.",
      notes: ["One room throughout birth", "Continuous monitoring when needed", "Theatre and NICU in the same hospital"],
      cards: [
        { title: "Adjustable Birthing Bed", description: "Converts for labour, delivery and recovery." },
        { title: "Fetal Monitoring", description: "CTG tracks the baby’s heart rate in labour." },
        { title: "Freedom to Move", description: "Space to walk and change position in early labour." },
        { title: "Pain Relief Options", description: "Choices discussed and given in the room." },
        { title: "Newborn Care Area", description: "A warmer and equipment for the baby’s first checks." },
        { title: "Privacy", description: "A single room for you and your birth partner." },
        { title: "Early Recovery", description: "The first hours of monitoring in the same room." },
        { title: "Emergency Access", description: "A rapid move to theatre if a caesarean is needed." },
      ],
    },
    pathway: {
      heading: "What Happens in the LDR Room?",
      lead: "Birth in M’Brace’s maternity LDR rooms in Hyderabad follows your labour as it progresses. Select a stage to see what happens and who is with you.",
      cta: "Speak to an Obstetrician",
      items: [
        { label: "Early Labour", intro: "When Contractions Begin", firstTitle: "Coming In", firstDescription: "Regular, painful contractions, waters breaking or bleeding are signs to call and come to hospital.", secondTitle: "Assessment", secondDescription: "Your cervix, contractions and baby’s heart rate are checked to confirm whether labour is established.", cta: "Know When to Come In" },
        { label: "Active Labour", intro: "Progress and Monitoring", firstTitle: "Staying Active", firstDescription: "Walking and changing position, where appropriate, can help labour progress.", secondTitle: "Monitoring", secondDescription: "Your baby’s heart rate is checked regularly or continuously on CTG, depending on your pregnancy.", cta: "Ask About Labour Monitoring" },
        { label: "Pain Relief", intro: "Managing Contractions", firstTitle: "Non-Medical Methods", firstDescription: "Breathing techniques, movement, massage and support from your birth partner help many women cope.", secondTitle: "Medical Options", secondDescription: "Medical pain relief options are discussed with you beforehand and offered in the room as labour progresses.", cta: "Discuss Pain Relief" },
        { label: "Delivery", intro: "Giving Birth", firstTitle: "Pushing Stage", firstDescription: "Your obstetrician and nursing team guide you through pushing in a position that suits you.", secondTitle: "Assisted Birth if Needed", secondDescription: "If the baby needs help to be born, an assisted delivery may be performed in the same room.", cta: "Plan Your Birth" },
        { label: "First Hour", intro: "Meeting Your Baby", firstTitle: "Skin-to-Skin", firstDescription: "Your baby is placed on your chest when both of you are well, supporting warmth and bonding.", secondTitle: "First Feed and Checks", secondDescription: "Breastfeeding begins, and the baby’s first checks are done in the room.", cta: "Ask About Newborn Care" },
        { label: "If Plans Change", intro: "When Extra Care Is Needed", firstTitle: "Caesarean Section", firstDescription: "If a caesarean becomes necessary, you are moved to a sterile operation theatre.", secondTitle: "Baby Needs Support", secondDescription: "A neonatologist attends, and the baby can move to the NICU if needed.", cta: "Discuss Your Birth Plan" },
      ],
    },
    tools: {
      eyebrow: "Monitoring During Labour",
      heading: "What Is Monitored in Labour?",
      body: "Monitoring is matched to your pregnancy and how your labour progresses.",
      items: [
        { label: "FETAL", title: "CTG Monitoring", description: "Records the baby’s heart rate with contractions." },
        { label: "MATERNAL", title: "Vital Signs", description: "Tracks blood pressure, pulse and temperature." },
        { label: "PROGRESS", title: "Labour Assessment", description: "Checks cervical dilation and the baby’s descent." },
        { label: "NEWBORN", title: "Apgar Score", description: "Assesses the baby’s condition at one and five minutes." },
      ],
    },
    team: {
      heading: "Who Will Be With You in Labour?",
      principleLead: "Every birth follows one principle:",
      principle: "Your Wishes Heard. Your Safety Watched.",
      description: "Births in M’Brace’s advanced LDR rooms in Hyderabad are led by senior consultant obstetricians, supported by nursing staff, with neonatologists for your baby’s first checks.",
    },
    faqDescription: "What women most often ask about giving birth in an LDR room.",
    faqs: [
      { heading: "About LDR Rooms", faqs: [
        { question: "What does LDR mean?", answer: "LDR stands for labour, delivery and recovery. All three stages happen in one room, so you are not moved between wards during birth." },
        { question: "Can my partner stay with me?", answer: "Yes. A birth partner can usually stay with you through labour and birth in the LDR room." },
      ] },
      { heading: "During Labour", faqs: [
        { question: "Can I move around during labour?", answer: "Yes, in most cases. Walking and changing position can help, though continuous monitoring may be needed in some pregnancies." },
        { question: "What if I need a caesarean?", answer: "You are moved to a sterile operation theatre, where the obstetric and anaesthesia teams perform the caesarean, and you then return to recovery." },
      ] },
      { heading: "After Birth", faqs: [
        { question: "How soon can I hold my baby?", answer: "Usually straight away, if you and your baby are well. Skin-to-skin contact in the first hour supports warmth and breastfeeding." },
        { question: "How long do I stay in the LDR room?", answer: "Usually for the first few hours after birth, before moving to a postnatal room for the rest of your stay." },
      ] },
      { heading: "About M’Brace", faqs: [
        { question: "Is fetal medicine available in LB Nagar and King Koti?", answer: "Yes. M’Brace offers fetal medicine in LB Nagar and fetal medicine in King Koti, with detailed scans and follow-up at both Kamineni Hospitals units." },
        { question: "Do I need a referral?", answer: "A referral from your obstetrician is helpful because it explains the concern, but you can also book directly and bring your previous reports." },
      ] },
    ],
    appointmentLabel: "Planning Your Birth?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to discuss your birth plan at LB Nagar or King Koti.",
  },

  "sterile-operation-theatres": {
    name: "Sterile Operation Theatres",
    description: "Clean, controlled theatres for surgery when a delivery or procedure needs one.",
    hero: {
      pageTitle: "Sterile Operation Theatres in Hyderabad",
      highlight: "Had to Opt for a Caesarean",
      rest: "Or Gynaecological Surgery?",
      description: "Sterile operation theatres support planned and emergency caesareans and gynaecological procedures at M’Brace. Strict cleaning, sterile instruments and trained teams keep infection risk low, though no surgery is completely free of risk.",
      cta: "Discuss Your Surgery",
    },
    process: {
      eyebrow: "How M’Brace Prepares for Surgery",
      heading: "From Pre-Op Check to Recovery\nSafety Steps at Every Stage!",
      body: "Surgical safety depends on the environment, the equipment and the team. Each operation follows a set sequence of checks before, during and after surgery.",
      cards: [
        { title: "Pre-operative Check", description: "Blood tests, an anaesthetic review and consent are completed before surgery." },
        { title: "Theatre Preparation", description: "The theatre, instruments and drapes are prepared under sterile conditions." },
        { title: "Safety Checklist", description: "The team confirms your identity, procedure and allergies before starting." },
        { title: "Monitored Recovery", description: "Your pulse, blood pressure, pain and bleeding are monitored as you wake." },
      ],
    },
    whyChoose: {
      heading: "Sterile Operation Theatres in Hyderabad!",
      body: "Operations are performed by senior consultant obstetricians and gynaecologists, including laparoscopic and robotics surgeons, with anaesthesia support from Kamineni Hospitals.\n\nFor a caesarean, a maternity operation theatre in Hyderabad with newborn support in the same building matters. At M’Brace, neonatologists can attend the birth, and newborns needing support can move quickly to the NICU.",
    },
    concerns: {
      eyebrow: "Procedures Supported",
      heading: "Which Operations Take Place Here?",
      body: "The theatres support obstetric and gynaecological surgery, both planned and urgent. Here are the most common procedures performed.",
      notes: ["Planned and emergency surgery", "Infection control at every step", "NICU support for newborns"],
      cards: [
        { title: "Planned Caesarean", description: "Scheduled for medical reasons before labour." },
        { title: "Emergency Caesarean", description: "When labour or the baby’s condition changes." },
        { title: "Laparoscopic Surgery", description: "Keyhole treatment of fibroids, cysts and endometriosis." },
        { title: "Robotic Surgery", description: "Robotic-assisted procedures for selected cases." },
        { title: "Hysterectomy", description: "Removal of the uterus when advised." },
        { title: "Hysteroscopy", description: "Procedures inside the uterus through the cervix." },
        { title: "Cervical Cerclage", description: "A stitch to support a weak cervix in pregnancy." },
        { title: "Tubal Ligation", description: "Permanent contraception, sometimes with a caesarean." },
      ],
    },
    pathway: {
      heading: "What Happens On the Day of Surgery?",
      lead: "Every procedure in M’Brace’s obstetric operation theatre in Hyderabad follows the same safety steps. Select a stage to see what happens.",
      cta: "Speak to an Obstetrician",
      items: [
        { label: "Before Surgery", intro: "Preparing for Your Operation", firstTitle: "Tests and Consent", firstDescription: "Blood tests, an ECG if needed and signed consent are completed after the procedure and its risks are explained.", secondTitle: "Fasting", secondDescription: "You are told when to stop eating and drinking, usually six hours for food before a planned operation.", cta: "Prepare for Surgery" },
        { label: "Anaesthesia", intro: "Choosing the Right Type", firstTitle: "Spinal Anaesthesia", firstDescription: "Most caesareans use spinal anaesthesia, so you stay awake and can see your baby soon after birth.", secondTitle: "General Anaesthesia", secondDescription: "General anaesthesia is used for some gynaecological procedures or emergencies, with you fully asleep.", cta: "Ask About Anaesthesia" },
        { label: "Infection Control", intro: "Keeping Risk Low", firstTitle: "Sterile Environment", firstDescription: "Theatres are cleaned between cases, and instruments are sterilised before every operation.", secondTitle: "Preventive Antibiotics", secondDescription: "Antibiotics are often given before surgery to reduce the risk of wound infection.", cta: "Ask About Infection Control" },
        { label: "Caesarean Birth", intro: "Meeting Your Baby in Theatre", firstTitle: "During the Operation", firstDescription: "A screen is placed across your chest, and the baby is usually born within 10–15 minutes of the operation starting.", secondTitle: "Newborn Care", secondDescription: "Your baby is checked by the neonatal team and, if well, placed skin-to-skin with you.", cta: "Plan Your Caesarean" },
        { label: "Recovery Room", intro: "Waking Up Safely", firstTitle: "Close Monitoring", firstDescription: "Blood pressure, pulse, oxygen, pain and bleeding are monitored until you are stable.", secondTitle: "Moving to the Ward", secondDescription: "You move to your room once stable, and early eating and walking are encouraged.", cta: "Ask About Recovery" },
        { label: "After Discharge", intro: "Caring for Your Wound", firstTitle: "Wound Care", firstDescription: "Keep the wound clean and dry, and watch for redness, discharge or fever.", secondTitle: "Follow-up", secondDescription: "A review visit checks healing, with advice on lifting, driving and returning to activity.", cta: "Book a Follow-up Visit" },
      ],
    },
    tools: {
      eyebrow: "Checks & Monitoring",
      heading: "Checks Before and During Surgery",
      body: "These checks confirm you are ready for surgery and monitor you throughout.",
      items: [
        { label: "BLOOD", title: "Pre-operative Blood Tests", description: "Haemoglobin, blood group and clotting checks." },
        { label: "HEART", title: "ECG", description: "Checks heart rhythm before anaesthesia when needed." },
        { label: "MONITORING", title: "Intra-operative Monitoring", description: "Tracks pulse, blood pressure and oxygen during surgery." },
        { label: "NEWBORN", title: "Neonatal Assessment", description: "Checks the baby immediately after a caesarean." },
      ],
    },
    team: {
      heading: "Your Surgical Team",
      principleLead: "Every operation follows one principle:",
      principle: "Checked Before. Watched Throughout.",
      description: "M’Brace’s surgical facilities for maternity in Hyderabad are used by senior consultant obstetricians and gynaecologists, with anaesthesia, nursing and neonatal teams supporting every procedure.",
    },
    faqDescription: "What women most often ask before surgery.",
    faqs: [
      { heading: "Before Surgery", faqs: [
        { question: "What does a “sterile” operation theatre mean?", answer: "The theatre, instruments and drapes are prepared to be free of germs, and staff follow strict hygiene. This keeps infection risk low, though it cannot remove it completely." },
        { question: "How long should I fast before surgery?", answer: "Usually no food for six hours, with clear fluids stopped about two hours before a planned operation. Your team confirms the exact times." },
      ] },
      { heading: "Caesarean", faqs: [
        { question: "Will I be awake during my caesarean?", answer: "Usually, yes. Spinal anaesthesia numbs the lower body so you can stay awake. General anaesthesia is used only in some situations." },
        { question: "Can my partner be in the theatre?", answer: "That depends on the type of caesarean and hospital policy. Ask your obstetrician during your antenatal visits." },
      ] },
      { heading: "Safety", faqs: [
        { question: "What are the risks of surgery?", answer: "Possible risks include bleeding, infection, blood clots and reactions to anaesthesia. Your surgeon explains the risks specific to your operation before you give consent." },
        { question: "What reduces the chance of infection?", answer: "Sterile techniques, preventive antibiotics, careful wound care and early walking all help lower the risk." },
      ] },
      { heading: "About M’Brace", faqs: [
        { question: "Are sterile operation theatres available in LB Nagar and King Koti?", answer: "Yes. M’Brace has sterile operation theatres in LB Nagar and sterile operation theatres in King Koti, supporting obstetric and gynaecological surgery at both Kamineni Hospitals units." },
        { question: "Can emergency surgery be done at night?", answer: "Yes. M’Brace has 24/7 emergency and transport support through Kamineni Hospitals, so urgent caesareans and surgery can be performed at any hour." },
      ] },
    ],
    appointmentLabel: "Advised Surgery?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to discuss your operation with an obstetrician or gynaecologist at LB Nagar or King Koti.",
  },

  "robotic-surgery": {
    name: "Robotic Surgery",
    description: "Robot-assisted operations through small cuts, by surgeons trained in robotic techniques.",
    hero: {
      pageTitle: "Robotic Surgery in Hyderabad",
      highlight: "Complex Fibroids or Severe Endometriosis?",
      rest: "",
      description: "Robotic-assisted surgery gives the surgeon a magnified 3D view and wristed instruments controlled from a console. At M’Brace, it may be used for selected complex gynaecological procedures, once your surgeon confirms it offers a real advantage for you.",
      cta: "Book a Surgical Consultation",
    },
    process: {
      eyebrow: "How M’Brace Plans Robotic Surgery",
      heading: "From Suitability Check to Recovery\nTechnology Used Only Where It Helps!",
      body: "Robotic surgery is a form of keyhole surgery. The surgeon stays in full control throughout, while the robot holds and moves the instruments with greater precision and range of motion.",
      cards: [
        { title: "Confirm Suitability", description: "Scans and your history show whether robotic, standard keyhole or open surgery suits you best." },
        { title: "Plan the Procedure", description: "The surgeon maps the approach using MRI or ultrasound when needed." },
        { title: "Console-Controlled Surgery", description: "Small incisions allow robotic arms to operate under the surgeon’s direct control." },
        { title: "Recovery", description: "Many women walk the same day, with recovery depending on the procedure performed." },
      ],
    },
    whyChoose: {
      heading: "Specialist Robotic Surgery in Hyderabad!",
      body: "Robotic procedures are performed by senior consultants who are both laparoscopic and robotics surgeons and obstetrician-gynaecologists, so fertility and future pregnancy are considered in every surgical plan.\n\nAs a robotic surgery hospital in Hyderabad backed by NABH- and NABL-accredited Kamineni Hospitals, M’Brace combines robotic technology with sterile theatres, anaesthesia support and 24/7 emergency care.",
    },
    concerns: {
      eyebrow: "When It May Be Used",
      heading: "Which Procedures May Use Robotic Assistance?",
      body: "Robotic assistance is considered mainly for complex procedures where precision and access matter. Your surgeon recommends it only when it suits your condition.",
      notes: ["Used only where it adds value", "Surgeon in control throughout", "Standard keyhole option always discussed"],
      cards: [
        { title: "Hysterectomy", description: "Uterus removal, especially when large or scarred." },
        { title: "Myomectomy", description: "Removing fibroids while preserving the uterus." },
        { title: "Severe Endometriosis", description: "Deep or extensive disease needing precise removal." },
        { title: "Complex Ovarian Cysts", description: "Cysts need careful separation from the ovary." },
        { title: "Pelvic Floor Repair", description: "Supporting prolapsed pelvic organs." },
        { title: "Adhesions", description: "Scar tissue from previous surgery." },
        { title: "Higher Body Weight", description: "Better access in women with a higher BMI." },
        { title: "Previous Surgery", description: "Operating carefully around earlier scars." },
      ],
    },
    pathway: {
      heading: "How Is Robotic Surgery Different?",
      lead: "Robotic gynaecology surgery in Hyderabad at M’Brace follows the same safety steps as other operations, with added planning. Select a topic to see how it works.",
      cta: "Speak to a Surgeon",
      items: [
        { label: "How It Works", intro: "The Surgeon at the Console", firstTitle: "Robotic Arms", firstDescription: "Thin instruments and a camera enter through small cuts and are attached to robotic arms.", secondTitle: "Surgeon Control", secondDescription: "The surgeon sits at a console, viewing a magnified 3D image and controlling every movement.", cta: "Learn How It Works" },
        { label: "Compared With Laparoscopy", intro: "What Is Different", firstTitle: "Wristed Instruments", firstDescription: "The instruments bend like a wrist, allowing precise movement in tight spaces where straight laparoscopic tools are limited.", secondTitle: "When Laparoscopy Is Enough", secondDescription: "For many routine procedures, standard laparoscopy gives similar results, so robotic surgery is not always needed.", cta: "Compare Your Options" },
        { label: "Who It Suits", intro: "Assessing Your Case", firstTitle: "Good Candidates", firstDescription: "Women with complex fibroids, severe endometriosis, a large uterus or previous abdominal surgery may benefit.", secondTitle: "When It May Not Suit", secondDescription: "Some heart, lung or other conditions, or very large masses, may make open surgery the better choice.", cta: "Check Your Suitability" },
        { label: "Preparation", intro: "Before the Operation", firstTitle: "Tests and Imaging", firstDescription: "Blood tests, an anaesthetic review and sometimes an MRI help plan the surgery.", secondTitle: "Fasting and Admission", secondDescription: "You are told when to stop eating, and your admission time is confirmed in advance.", cta: "Prepare for Surgery" },
        { label: "The Operation", intro: "In the Theatre", firstTitle: "General Anaesthesia", firstDescription: "Robotic surgery is performed under general anaesthesia, so you are asleep throughout.", secondTitle: "Possible Conversion", secondDescription: "Occasionally the surgeon switches to standard laparoscopy or open surgery if that becomes the safer option.", cta: "Ask About Anaesthesia" },
        { label: "Recovery", intro: "After Robotic Surgery", firstTitle: "In Hospital", firstDescription: "Many women walk the same day and go home within one to two days, depending on the procedure.", secondTitle: "At Home", secondDescription: "Light activities resume within days, with heavier activity usually after a few weeks, as your surgeon advises.", cta: "Plan Your Recovery" },
      ],
    },
    tools: {
      eyebrow: "Diagnostics & Planning",
      heading: "Tests That Plan Robotic Surgery",
      body: "The following tests help confirm that robotic surgery is suitable and plan the approach.",
      items: [
        { label: "IMAGING", title: "Pelvic Ultrasound", description: "Shows the size and position of fibroids or cysts." },
        { label: "ADVANCED IMAGING", title: "Pelvic MRI", description: "Maps deep endometriosis and complex anatomy." },
        { label: "BLOOD", title: "Pre-operative Tests", description: "Check haemoglobin, clotting and fitness for surgery." },
        { label: "ANAESTHESIA", title: "Pre-anaesthetic Review", description: "Confirms you are fit for a longer keyhole procedure." },
      ],
    },
    team: {
      heading: "Meet Your Robotic Surgeons",
      principleLead: "Every operation follows one principle:",
      principle: "Technology Serves the Patient.",
      description: "If you are looking for a robotic gynaecology surgeon in Hyderabad, M’Brace’s senior consultants are trained in both robotic and laparoscopic surgery, so the approach is chosen for your case, not for the technology.",
    },
    faqDescription: "What women most often ask about robotic surgery.",
    faqs: [
      { heading: "About Robotic Surgery", faqs: [
        { question: "Does the robot perform the surgery?", answer: "No. The surgeon controls every movement from a console. The robot holds and moves the instruments as directed, with greater precision." },
        { question: "Is robotic surgery better than laparoscopy?", answer: "Not always. It can help in complex cases, but for many routine procedures standard laparoscopy gives similar results. Your surgeon recommends the approach that suits you." },
      ] },
      { heading: "Suitability", faqs: [
        { question: "Am I a candidate for robotic surgery?", answer: "That depends on your condition, previous surgery, body weight and overall health. Your surgeon reviews your scans and history before recommending it." },
        { question: "Is robotic surgery safe?", answer: "It has a similar safety profile to other keyhole surgery, but all operations carry risks such as bleeding, infection or injury to nearby organs, which your surgeon explains beforehand." },
      ] },
      { heading: "Recovery", faqs: [
        { question: "Will I have scars?", answer: "You will have a few small scars, similar to laparoscopy, which usually fade over several months." },
        { question: "How long is recovery?", answer: "Many women return to light activity within one to two weeks, though recovery varies with the procedure. Your surgeon gives you a personalised timeline." },
      ] },
      { heading: "About M’Brace", faqs: [
        { question: "Are sterile operation theatres available in LB Nagar and King Koti?", answer: "Yes. M’Brace has sterile operation theatres in LB Nagar and sterile operation theatres in King Koti, supporting obstetric and gynaecological surgery at both Kamineni Hospitals units." },
        { question: "Can emergency surgery be done at night?", answer: "Yes. M’Brace has 24/7 emergency and transport support through Kamineni Hospitals, so urgent caesareans and surgery can be performed at any hour." },
      ] },
    ],
    appointmentLabel: "Considering Robotic Surgery?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to fix a consultation with a robotics surgeon at LB Nagar or King Koti.",
  },

  "high-risk-pregnancy-support": {
    name: "High-Risk Pregnancy Support",
    description: "Closer monitoring and specialist care for pregnancies with extra risk, such as diabetes or high blood pressure.",
    hero: {
      pageTitle: "High-Risk Pregnancy Support in Hyderabad",
      highlight: "24/7 Emergency, Theatre",
      rest: "& NICU Backup in Hyderabad",
      description: "Closer monitoring is only part of high-risk pregnancy care. At M’Brace, a Fetal Medicine Unit, advanced LDR rooms, sterile theatres, a NICU with neonatal ventilation and 24/7 emergency support work together around your pregnancy.",
      cta: "Speak to an Obstetrician",
    },
    process: {
      eyebrow: "How the Support Works Together",
      heading: "From Monitoring to Birth and Beyond",
      body: "High-risk care works best when each team knows the plan in advance. Your obstetrician coordinates the fetal medicine, delivery, anaesthesia and newborn teams around your specific risk.",
      cards: [
        { title: "Fetal Medicine Review", description: "Detailed scans assess the baby’s growth and wellbeing at set intervals." },
        { title: "Delivery Planning", description: "Timing, place and type of birth are agreed with your obstetrician." },
        { title: "Team Briefing", description: "Anaesthesia and neonatal teams are informed before your due date when needed." },
        { title: "Postnatal Follow-up", description: "Your condition and your baby’s health are reviewed after birth." },
      ],
    },
    whyChoose: {
      heading: "Specialist High-Risk Pregnancy Support in Hyderabad!",
      body: "Support is built around senior consultant obstetricians, who coordinate the fetal medicine, delivery and neonatal teams so that each step is planned rather than improvised.\n\nM’Brace’s high-risk pregnancy management in Hyderabad draws on NABH- and NABL-accredited Kamineni Hospitals, including physicians for diabetes, thyroid or heart conditions that affect pregnancy.",
    },
    concerns: {
      eyebrow: "Support Services",
      heading: "Which Services Support Your Pregnancy?",
      body: "These services work together around a high-risk pregnancy. Which ones you use depends on your specific risk and how your pregnancy progresses.",
      notes: ["Coordinated by your obstetrician", "Specialist teams in one hospital", "Plans shared before delivery"],
      cards: [
        { title: "Fetal Medicine Unit", description: "Detailed scans for growth and wellbeing." },
        { title: "Fetal Monitoring", description: "CTG and Doppler checks in later pregnancy." },
        { title: "Physician Support", description: "Diabetes, thyroid or heart conditions co-managed." },
        { title: "Nutrition Advice", description: "Diet adjusted for diabetes or anaemia." },
        { title: "Advanced LDR Rooms", description: "Monitored labour in one room." },
        { title: "Sterile Theatres", description: "A planned or emergency caesarean when needed." },
        { title: "NICU", description: "Neonatal ventilation for babies needing support." },
        { title: "24/7 Emergency", description: "Assessment and transport at any hour." },
      ],
    },
    pathway: {
      heading: "How Each High-Risk Pregnancy Care Service Supports You?",
      lead: "Each high-risk pregnancy care service steps in at a different point in your pregnancy. Select one to see when it is used and how it helps.",
      cta: "Plan Your Care",
      items: [
        { label: "Fetal Medicine", intro: "Watching the Baby Closely", firstTitle: "Scheduled Scans", firstDescription: "Growth and Doppler scans are planned at intervals based on your risk.", secondTitle: "Acting on Findings", secondDescription: "Changes in growth or blood flow lead to closer monitoring or a revised delivery plan.", cta: "Book a Fetal Medicine Scan" },
        { label: "Physician Care", intro: "Managing Your Health Condition", firstTitle: "Co-management", firstDescription: "Endocrinology or cardiology teams within Kamineni Hospitals help manage diabetes, thyroid or heart conditions alongside your obstetrician.", secondTitle: "Medication Review", secondDescription: "Medicines are adjusted to keep you well while remaining safe for the baby.", cta: "Discuss Your Condition" },
        { label: "Monitoring Visits", intro: "More Frequent Checks", firstTitle: "Visit Schedule", firstDescription: "Appointments are spaced more closely than in routine care, especially in the third trimester.", secondTitle: "Home Monitoring", secondDescription: "You may be asked to track blood pressure, sugar or the baby’s movements between visits.", cta: "Plan Your Visits" },
        { label: "Birth Setting", intro: "Where and How You Deliver", firstTitle: "Monitored Labour", firstDescription: "Continuous CTG monitoring in an advanced LDR room is often advised for high-risk labour.", secondTitle: "Theatre Readiness", secondDescription: "Sterile theatres and anaesthesia support allow a caesarean to proceed quickly if needed.", cta: "Discuss Your Birth Plan" },
        { label: "Newborn Support", intro: "Care for Your Baby", firstTitle: "Neonatologist at Birth", firstDescription: "A neonatologist can attend the delivery when your baby may need assessment.", secondTitle: "NICU Care", secondDescription: "Babies needing support are cared for in the NICU with high-end neonatal ventilation.", cta: "Ask About the NICU" },
        { label: "Emergency Care", intro: "Help at Any Hour", firstTitle: "24/7 Assessment", firstDescription: "Bleeding, a severe headache, reduced movements or early contractions can be assessed at any time.", secondTitle: "Transport Support", secondDescription: "24/7 transport support through Kamineni Hospitals helps you reach care quickly.", cta: "Save the Emergency Number" },
      ],
    },
    tools: {
      eyebrow: "Monitoring & Tests",
      heading: "Monitoring Behind Your Care",
      body: "Tests are scheduled more often in high-risk pregnancy than in a routine pregnancy, based on risk severity.",
      items: [
        { label: "DOPPLER", title: "Fetal Doppler", description: "Assesses placental blood flow." },
        { label: "MONITORING", title: "CTG", description: "Checks the baby’s heart rate pattern." },
        { label: "BLOOD", title: "Maternal Blood Tests", description: "Track sugar, organ function and pre-eclampsia markers." },
        { label: "IMAGING", title: "Growth Scans", description: "Measure the baby’s size over time." },
      ],
    },
    team: {
      heading: "Your Coordinated Care Team",
      principleLead: "Every plan follows one principle:",
      principle: "Prepared Early. Shared Openly.",
      description: "Your senior consultant obstetrician leads the plan, working with neonatologists and Kamineni Hospitals’ specialist teams, so every service supporting your pregnancy follows the same plan.",
    },
    faqDescription: "What women most often ask about the support behind high-risk care.",
    faqs: [
      { heading: "Coordinated Care", faqs: [
        { question: "Who coordinates high-risk pregnancy care?", answer: "Your obstetrician leads the plan and coordinates the fetal medicine, physician, anaesthesia and neonatal teams, so you have one main point of contact." },
        { question: "Will I see other specialists?", answer: "If you have a condition such as diabetes, thyroid disease or heart disease, a physician within Kamineni Hospitals may co-manage it alongside your obstetrician." },
      ] },
      { heading: "Delivery", faqs: [
        { question: "Can I still have a vaginal birth?", answer: "Often, yes. Many high-risk pregnancies end in a vaginal birth with closer monitoring in labour. Your obstetrician discusses the most suitable option for you and your baby." },
        { question: "What if I go into labour early?", answer: "Come to the hospital promptly. The team can assess you at any hour, give medicines to support the baby’s lungs if appropriate, and prepare the NICU." },
      ] },
      { heading: "Newborn", faqs: [
        { question: "Will my baby need the NICU?", answer: "Not necessarily. Many babies from high-risk pregnancies need only routine care. If support is needed, the NICU is in the same hospital." },
        { question: "Will a neonatologist be at the birth?", answer: "When your baby may need assessment, a neonatologist is informed in advance and can attend the delivery." },
      ] },
      { heading: "About M’Brace", faqs: [
        { question: "Is high-risk pregnancy support available in LB Nagar and King Koti?", answer: "Yes. M’Brace offers high-risk pregnancy support in LB Nagar and high-risk pregnancy support in King Koti, with fetal medicine, delivery and NICU services at both Kamineni Hospitals units." },
        { question: "I was told my pregnancy is high risk elsewhere. What should I do?", answer: "Bring your reports to an obstetrician at M’Brace, who reviews your history and sets up the monitoring and support services your pregnancy needs." },
      ] },
    ],
    appointmentLabel: "Need Extra Support in Pregnancy?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to fix a consultation with an obstetrician at LB Nagar or King Koti.",
  },
};

function pathwayBullet(item: Pathway) {
  return `${item.label} — ${item.intro}\nStage 01: ${item.firstTitle}\n${item.firstDescription}\nStage 02: ${item.secondTitle}\n${item.secondDescription}\nCTA: ${item.cta}`;
}

export const pregnancyServiceHeroCopy = Object.fromEntries(
  Object.entries(pregnancyPages).map(([slug, page]) => [slug, page.hero]),
);

export const pregnancyServiceDetailBlocks: Record<string, Array<DynamicPageSection | BlogBlock>> = Object.fromEntries(
  Object.entries(pregnancyPages).map(([slug, page]) => [slug, [
    { kind: "content", eyebrow: page.process.eyebrow, heading: page.process.heading, body: page.process.body, image: "", imageAlt: "", layout: "cards", ctaLabel: "", ctaHref: "", items: page.process.cards.map((item) => ({ ...item, image: "" })) },
    { kind: "content", eyebrow: "Why Choose Us", heading: page.whyChoose.heading, body: page.whyChoose.body, image: "", imageAlt: "", layout: "text", ctaLabel: "", ctaHref: "", items: [] },
    { kind: "content", eyebrow: page.concerns.eyebrow, heading: page.concerns.heading, body: `${page.concerns.body}\n\n${page.concerns.notes.map((note) => `• ${note}`).join("\n")}`, image: "", imageAlt: "", layout: "cards", ctaLabel: "", ctaHref: "", items: page.concerns.cards.map((item) => ({ ...item, image: "" })) },
    { kind: "content", eyebrow: page.tools.eyebrow, heading: page.tools.heading, body: page.tools.body, image: "", imageAlt: "", layout: "cards", ctaLabel: "", ctaHref: "", items: page.tools.items.map((item) => ({ title: item.title, description: `${item.description} (${item.label})`, image: "" })) },
    { kind: "section", heading: page.pathway.heading, lead: page.pathway.lead, bullets: page.pathway.items.map(pathwayBullet), trailing: page.pathway.cta },
  ]]),
);

export const pregnancyServiceFaqs = Object.fromEntries(
  Object.entries(pregnancyPages).map(([slug, page]) => [slug, {
    label: "Frequently Asked Questions",
    heading: "Your Queries",
    highlight: "Answered by Experts.",
    description: page.faqDescription,
    groups: page.faqs,
  }]),
);

export const pregnancyServicePageCopy = Object.fromEntries(
  Object.entries(pregnancyPages).map(([slug, page]) => [slug, {
    teamHeading: page.team.heading,
    teamPrincipleLead: page.team.principleLead,
    teamPrinciple: page.team.principle,
    teamDescription: page.team.description,
    appointmentLabel: page.appointmentLabel,
    appointmentDescription: page.appointmentDescription,
  }]),
);

export const pregnancyServicesBySlug = Object.fromEntries(
  Object.entries(pregnancyPages).map(([slug, page], order) => [slug, {
    slug,
    name: page.name,
    description: page.description,
    order,
    metaTitle: page.hero.pageTitle,
    metaDescription: page.hero.description,
  }]),
);
