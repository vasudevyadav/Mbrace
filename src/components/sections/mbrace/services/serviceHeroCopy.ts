// Per-service hero copy, transcribed word-for-word from the
// “MBrace - Website Content” Google Doc. Keeping the complete hero here avoids
// reusing the shorter service-card description on an inner page.
export type ServiceHeroCopy = {
  pageTitle: string;
  highlight: string;
  rest: string;
  tagline?: string;
  description: string;
  cta: string;
};

export const serviceHeroCopy: Record<string, ServiceHeroCopy> = {
  "high-risk-pregnancy-care": {
    pageTitle: "High-Risk Pregnancy Care in Hyderabad",
    highlight: "Diabetes, BP or Twins?",
    rest: "Pregnancy Complications Watched Closely!",
    description: "Thyroid disorders, anaemia, a past caesarean or conception through IVF calls for extra attention. At M’Brace, senior obstetricians, a Fetal Medicine Unit and NICU support plan your scans, check-ups and delivery around what your reports show.",
    cta: "Book a Specialist Consultation",
  },
  "maternity-care": {
    pageTitle: "Maternity Care in Hyderabad",
    highlight: "Check-Ups, Delivery & New-Born Support",
    rest: "All Under One Roof!",
    description: "Regular antenatal visits, scans at key stages, birth in an advanced LDR room and NICU backup if your baby needs it. Senior obstetricians at M’Brace plan each stage with you, from the first test to going home.",
    cta: "Book a Specialist Consultation",
  },
  "laparoscopic-surgery": {
    pageTitle: "Laparoscopic Surgery in Hyderabad",
    highlight: "Struggling with Fibroids,",
    rest: "Cysts or Endometriosis?",
    description: "Laparoscopy treats many gynaecological conditions through a few small cuts instead of one large incision, which typically means less pain and a quicker return home. At M’Brace, laparoscopic and robotics surgeons confirm suitability after reviewing your scans.",
    cta: "Book a Specialist Consultation",
  },
  "menopause-care": {
    pageTitle: "Menopause Care in Hyderabad",
    highlight: "Hot Flushes, Poor Sleep",
    rest: "Or Mood Changes?",
    description: "Menopause changes often begin in your 40s, during perimenopause, as oestrogen levels fall. At M’Brace, gynaecologists assess your symptoms and long-term health, then explain hormonal and non-hormonal options so you choose what suits you.",
    cta: "Book a Gynaecology Consultation",
  },
  "preventive-women-s-health-packages": {
    pageTitle: "Preventive Women’s Health Packages in Hyderabad",
    highlight: "Feeling Fine But",
    rest: "Due a Fertility Check-up?",
    description: "Cervical changes, breast lumps, thyroid imbalance, diabetes and bone loss often develop without warning signs. M’Brace screening packages are matched to your age and family history, with a gynaecologist reviewing every result with you.",
    cta: "Book Your Health Check-up",
  },
  "preconception-counselling": {
    pageTitle: "Preconception Counselling in Hyderabad",
    highlight: "Planning a Baby Soon?",
    rest: "Get Ready Before You Conceive!",
    description: "A review three to six months before trying can correct anaemia, adjust medicines, update vaccines and check thalassaemia carrier status. M’Brace gynaecologists look at both partners’ health, so pregnancy begins with fewer avoidable risks.",
    cta: "Book a Pre-Pregnancy Consultation",
  },
  "women-s-wellness-support": {
    pageTitle: "Women’s Wellness Support in Hyderabad",
    highlight: "Tired, Stressed or Not Feeling Yourself?",
    rest: "",
    tagline: "Everyday Health Concerns Taken Seriously!",
    description: "Low energy, weight changes, irregular periods, low mood and intimate health worries often go unchecked for years. M’Brace gynaecologists look for the medical cause first, then build a practical plan with you.",
    cta: "Book a Wellness Consultation",
  },
  "paediatrics-neonatology": {
    pageTitle: "Paediatrics and Neonatology in Hyderabad",
    highlight: "Fever, Feeding or Growth Questions?",
    rest: "",
    tagline: "One Team From Birth Through Childhood!",
    description: "Newborn checks, vaccinations, growth reviews and treatment for common illnesses are handled by consultant paediatricians and neonatologists at M’Brace, with NICU and PICU support in the same hospital if your child needs more.",
    cta: "Book a Paediatric Consultation",
  },
  "developmental-paediatrics": {
    pageTitle: "Developmental Paediatrics in Hyderabad",
    highlight: "Baby Not Talking, Walking",
    rest: "Or Playing as Expected?",
    tagline: "Opt for Early Assessment!",
    description: "Every child develops at their own pace, but some delays benefit from early support. M’Brace paediatricians assess movement, speech, social skills and learning, then guide you to the right therapies and next steps.",
    cta: "Book a Developmental Assessment",
  },
  "nicu-neonatal-intensive-care": {
    pageTitle: "NICU in Hyderabad",
    highlight: "Baby Born Early Or",
    rest: "Needing Extra Support?",
    tagline: "24/7 Care for Your Newborn!",
    description: "Premature birth, breathing difficulty, low birth weight, infection or jaundice can mean your baby needs intensive care. M’Brace’s NICU has high-end neonatal ventilation, with neonatologists caring for your baby and keeping you informed at each stage.",
    cta: "Speak to a Neonatologist",
  },
  "picu-paediatric-intensive-care": {
    pageTitle: "PICU in Hyderabad",
    highlight: "Child Seriously Unwell?",
    rest: "",
    tagline: "Expert Care by a Paediatric Intensivist!",
    description: "Severe breathing problems, serious infections, prolonged seizures, major injuries or recovery after a big operation can need intensive care. M’Brace’s PICU provides close monitoring and organ support, led by a paediatric intensivist.",
    cta: "Speak to a Paediatric Intensivist",
  },
  "paediatric-surgery": {
    pageTitle: "PICU in Hyderabad",
    highlight: "Child Seriously Unwell?",
    rest: "",
    tagline: "Expert Care by a Paediatric Intensivist!",
    description: "Severe breathing problems, serious infections, prolonged seizures, major injuries or recovery after a big operation can need intensive care. M’Brace’s PICU provides close monitoring and organ support, led by a paediatric intensivist.",
    cta: "Speak to a Paediatric Intensivist",
  },
  "paediatric-emergency": {
    pageTitle: "Paediatric Emergency in Hyderabad",
    highlight: "High Fever, Breathing Trouble",
    rest: "Or Your Child Suffering From Injury?",
    description: "The paediatric emergency area at M’Brace is open 24/7, with emergency, stabilisation and direct access to the PICU and NICU if your child needs more care.",
    cta: "Call the Emergency Line",
  },
  "fertility-evaluation": {
    pageTitle: "Fertility Evaluation in Hyderabad",
    highlight: "Trying For a Baby,",
    rest: "But No Success?",
    description: "Ovulation, egg reserve, tubes, uterus and sperm health can each affect conception. M’Brace fertility specialists test both partners first, so the next step, whether simple monitoring, medicines, IUI or IVF, is based on what the results show.",
    cta: "Get a Fertility Evaluation",
  },
  "male-fertility-care": {
    pageTitle: "Male Fertility Care in Hyderabad",
    highlight: "Low Sperm Count Or",
    rest: "An Abnormal Semen Report?",
    description: "Sperm count, movement and shape can be affected by hormones, varicocele, infection, medicines or lifestyle. M’Brace specialists explain your semen analysis, look for treatable causes and plan the right path, from lifestyle changes to IUI or ICSI.",
    cta: "Book a Confidential Consultation",
  },
  "ovulation-tracking": {
    pageTitle: "Ovulation Tracking in Hyderabad",
    highlight: "Keep A Sure-Shot Track",
    rest: "On Your Fertile Days!",
    description: "Follicular scans and hormone tests show when an egg is about to be released, so intercourse or IUI can be timed accurately. If you are not ovulating, M’Brace specialists can use medicines to help and track your response.",
    cta: "Book Follicular Monitoring",
  },
  "embryology-support": {
    pageTitle: "Ovulation Tracking in Hyderabad",
    highlight: "Keep A Sure-Shot Track",
    rest: "On Your Fertile Days!",
    description: "Follicular scans and hormone tests show when an egg is about to be released, so intercourse or IUI can be timed accurately. If you are not ovulating, M’Brace specialists can use medicines to help and track your response.",
    cta: "Book Follicular Monitoring",
  },
  "ivf-in-vitro-fertilisation": {
    pageTitle: "IVF Treatment in Hyderabad",
    highlight: "Know Whether IVF Is Right",
    rest: "Or Not For You Before You Begin!",
    description: "IVF is one of several fertility treatments, recommended after evaluation shows it suits your diagnosis. At M’Brace, infertility specialists and an experienced embryologist guide you through stimulation, egg collection, fertilisation and embryo transfer.",
    cta: "Speak to a Fertility Specialist",
  },
  "iui-intrauterine-insemination": {
    pageTitle: "IUI Treatment in Hyderabad",
    highlight: "Prepared Sperm Placed",
    rest: "Closer to the Egg!",
    description: "IUI (intrauterine insemination) places washed sperm directly into the uterus around ovulation. It is less invasive than IVF and suits selected couples, which is why M’Brace specialists confirm open tubes and adequate sperm quality first.",
    cta: "Get a Fertility Evaluation",
  },
  "icsi-intracytoplasmic-sperm-injection": {
    pageTitle: "ICSI Treatment in Hyderabad",
    highlight: "Severe Sperm Issues or Failed Fertilisation?",
    rest: "",
    description: "ICSI (intracytoplasmic sperm injection) is a lab technique used within IVF when sperm count, movement or shape is very low, or when eggs did not fertilise before. At M’Brace, an experienced embryologist performs ICSI under high magnification.",
    cta: "Speak to A ICSI Specialist",
  },
  "egg-freezing": {
    pageTitle: "Egg Freezing in Hyderabad",
    highlight: "Not Ready for a Baby Yet?",
    rest: "Freeze Eggs Now, Decide Later!",
    description: "Egg quality and number fall with age, especially after 35. Freezing mature eggs now keeps the option of using them later, though it does not guarantee a future pregnancy. M’Brace specialists explain your egg reserve and realistic expectations first.",
    cta: "Check Your Egg Reserve",
  },
};
