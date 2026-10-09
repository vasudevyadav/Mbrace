// Approved service and FAQ copy from “MBrace - Website Content”.
export const approvedServiceGroups: Record<string, [string, string][]> = {
  "Women Care": [
    ["Gynaecology", "Irregular, heavy or painful periods, hormonal problems and routine women's health check-ups."],
    ["Preventive Women's Health Packages", "Yearly health check-ups for women, in complete & comprehensive package options."],
    ["Preconception Counselling", "Planning a pregnancy, preparing your health before conceiving and advice on trying."],
    ["Maternity Care", "Regular pregnancy check-ups, scans, delivery and care for you after birth."],
    ["High-Risk Pregnancy Care", "Closer monitoring of mother and baby, specialist doctors and newborn ICU backup."],
    ["Laparoscopic Surgery", "Keyhole and robotic surgery through small cuts, when an operation is needed."],
    ["Menopause Care", "Hot flushes, poor sleep, mood changes and long-term health after menopause."],
    ["Women's Wellness Support", "Everyday health advice, with or without a specific concern, at any age."],
  ],
  "Child Care": [
    ["Paediatrics & Neonatology", "Fevers, infections, feeding concerns, growth check-ups, vaccinations and care for newborn babies."],
    ["Developmental Paediatrics", "Speech, movement, learning and behaviour concerns, with developmental and hearing screening."],
    ["NICU: Neonatal Intensive Care", "Premature or low birth weight babies, newborn jaundice, and breathing, feeding or infection problems."],
    ["PICU: Paediatric Intensive Care", "Severe illness, serious breathing problems, serious infections, injuries and monitoring after surgery."],
    ["Paediatric Surgery", "Hernia, appendicitis, circumcision, bowel and urinary problems and other operations, in a sterile surgical environment."],
    ["Paediatric Emergency", "Sudden illness, breathing difficulty, high fever or injury, with emergency transport support."],
  ],
  "Pregnancy & Birth Support": [
    ["Antenatal Check-ups", "Regular visits to track your health, your baby's growth and your due date."],
    ["Nutrition Guidance", "Advice on healthy eating, weight gain and what to avoid during pregnancy."],
    ["Fetal Medicine", "Specialist checks on your baby's growth and health when a scan or your history raises a question."],
    ["4D Ultrasound", "Detailed baby scans to check growth, position and development."],
    ["Advanced LDR Rooms", "Rooms designed for labour, delivery and recovery, all in one place."],
    ["Sterile Operation Theatres", "Clean, controlled theatres for surgery when a delivery or procedure needs one."],
    ["Robotic Surgery", "Robot-assisted operations through small cuts, by surgeons trained in robotic techniques."],
    ["High-Risk Pregnancy Support", "Closer monitoring and specialist care for pregnancies with extra risk, such as diabetes or high blood pressure."],
  ],
  Fertility: [
    ["Fertility Evaluation", "Tests of ovulation, sperm, fallopian tubes, uterus and hormones, to find why pregnancy has not happened."],
    ["Male Fertility Care", "Semen analysis for sperm count, movement and shape, with treatment guidance."],
    ["Ovulation Tracking", "Scans and hormone tests that follow each cycle and show the best days to conceive."],
    ["Embryology Support", "Embryologists care for eggs, sperm and embryos, up to embryo transfer."],
    ["IVF: In vitro fertilisation", "Egg and sperm meet in a controlled laboratory, and the embryo is placed in the womb."],
    ["IUI: Intrauterine insemination", "Prepared sperm is placed inside the womb around ovulation."],
    ["ICSI: Intracytoplasmic sperm injection", "One sperm is injected into one egg to help fertilisation."],
    ["Egg Freezing", "Eggs are collected and stored now, so you can plan parenthood for later."],
  ],
};

export const approvedCareFaqs: Record<string, { question: string; answer: string }[]> = {
  "Women's Care": [
    ["At what age should a woman first see a gynaecologist?", "There is no fixed age. Anyone with a concern can see a gynaecologist, including teenagers with period problems. Many women also begin routine check-ups in early adulthood. Your doctor will suggest a schedule that suits your age and health."],
    ["How do I book a gynaecologist appointment in Hyderabad?", "Call +91 93906 34074, open 24 hours, 7 days a week, or visit M'Brace at LB Nagar or King Koti. Tell the team your concern, and they will book you with a suitable doctor. Bring any previous reports to your first visit."],
    ["When should I start preconception counselling?", "Start a few months before you plan to conceive. Preconception counselling is a medical talk with your gynaecologist to prepare for pregnancy. You review your health history, current medicines and any concerns, so your doctor can guide your preparation."],
    ["How long should I try before seeing a doctor?", "If you are under 35, see a doctor after a year of trying without pregnancy. If you are 35 or older, see one after six months. Earlier is fine if your periods are irregular or you have known health concerns. Your gynaecologist can start tests or refer you to fertility care."],
    ["At what age does menopause usually start?", "Natural menopause usually happens in the mid-to-late 40s or early 50s. Menopause means your periods have stopped for 12 months in a row. Some women notice irregular periods and other changes for a few years before that."],
    ["When should I see a doctor about menopause symptoms?", "See a doctor when symptoms affect your sleep, mood or daily life. Common symptoms include hot flushes, poor sleep and mood changes. Any bleeding after menopause needs a medical check, even if you feel well. Your gynaecologist can explain your options."],
    ["What is laparoscopic (keyhole) surgery?", "Laparoscopic surgery is an operation done through a few small cuts instead of one large cut. The surgeon uses a thin camera and fine instruments. In robotic-assisted surgery, the surgeon controls those instruments with robotic support. M'Brace offers laparoscopic surgery in Hyderabad, and your doctor decides whether it suits your condition."],
    ["Will I need surgery after a gynaecology consultation?", "Not necessarily. A consultation often starts with questions, an examination and tests, and your doctor may suggest other treatments first. Surgery is advised only when it suits your condition. Before any procedure, your doctor will explain the risks, benefits and alternatives."],
  ].map(([question, answer]) => ({ question, answer })),
  "Child Care": [
    ["Where is M'Brace's child care hospital in Hyderabad?", "M'Brace has a child care hospital in LB Nagar and a child care hospital in King Koti, and every service on this page is available at both. LB Nagar is on Inner Ring Road, Hyderabad 500068. King Koti is at King Koti Rd, Bogulkunta, Abids, Hyderabad 500001."],
    ["How do I book a paediatrician appointment in Hyderabad?", "Call +91 93906 34074 during OPD days and hours, and tell the team your child's age and concern. Bring your child's previous reports, prescriptions and vaccination card."],
    ["Is child vaccination available, and up to what age?", "Yes. Routine childhood vaccines follow the Indian immunisation schedule, for newborns, infants and children up to age 12. Your paediatrician will explain which vaccines are due and when."],
    ["Does M'Brace accept health insurance?", "Yes. M'Brace accepts cashless treatment through 150+ third-party administrators (TPAs), the companies that handle insurance claims. Check with the team before your visit to confirm your plan."],
    ["What is the difference between a NICU and a PICU?", "A NICU is an intensive care unit for newborns, and a PICU is the same for older children. A neonatologist or paediatric intensivist decides when a child needs one, based on breathing, feeding and monitoring needs. M'Brace's NICU has high-end neonatal ventilation support, which helps newborns who cannot breathe well alone."],
    ["When should I speak to a doctor about my child's development?", "Speak to a paediatrician if your child seems behind other children of the same age, loses a skill they had, or you feel something is wrong. You do not need to wait for a routine visit. Your doctor will assess your child and advise the next step."],
    ["Will my child need surgery after a consultation?", "Not necessarily. Your paediatrician first examines your child and may suggest tests or other treatment. Paediatric surgery is advised only when it suits your child's condition. Before any procedure, your doctor will explain the risks, benefits and alternatives."],
    ["Can my child see other specialists, such as heart or kidney doctors?", "M'Brace sits within a multispecialty hospital, so your paediatrician can involve other specialists when needed. Kidney and urinary problems are treated here, and heart defects found in children are referred for specialist care."],
  ].map(([question, answer]) => ({ question, answer })),
  "Pregnancy & Birth Support": [
    ["Where are M'Brace's centres, and how do I book?", "M'Brace has a pregnancy & birth support hospital in LB Nagar and a pregnancy & birth support hospital in King Koti, and every service on this page is available at both. LB Nagar is on Inner Ring Road, Hyderabad 500068. King Koti is at King Koti Rd, Bogulkunta, Abids, Hyderabad 500001. To book, call +91 93906 34074 during [OPD days and hours: pending]."],
    ["What should I bring to my first pregnancy visit?", "Bring your pregnancy test or scan reports, previous prescriptions, a list of your medicines and the date your last period started. If you have been pregnant before, bring records of earlier deliveries or complications."],
    ["How often will I need check-ups?", "Your obstetrician, the doctor who cares for you through pregnancy and childbirth, sets your schedule. Visits usually become more frequent as your due date gets closer, and more frequent still if your pregnancy needs closer watching. Call earlier if something worries you."],
    ["What is a 4D ultrasound, and will I need one?", "A 4D ultrasound is a scan that shows live, moving 3D images of your baby. Not every pregnancy needs one. Your doctor decides which scans you need and when, based on your history and how your baby is growing."],
    ["Will I need a caesarean or other surgery?", "Not necessarily. A caesarean is a delivery through a cut in the lower abdomen, and your obstetrician advises one only when it is medically needed. Before any procedure, your doctor will explain the risks, benefits and alternatives."],
    ["What care do I get after delivery?", "Your obstetrician checks your recovery, bleeding and any wound before you go home, and plans your follow-up visit. How long you stay depends on your delivery and on how you and your baby are doing. Ask about any worry before you leave."],
    ["Does M'Brace accept health insurance for delivery?", "Yes. M'Brace accepts cashless treatment through 150+ third-party administrators (TPAs), the companies that handle insurance claims. Maternity cover differs between policies, so check with the team before your visit to confirm what your plan includes."],
    ["Can my baby's check-ups continue at M'Brace?", "Yes. M'Brace's paediatricians can see your baby for check-ups and vaccinations after you go home, at either centre."],
  ].map(([question, answer]) => ({ question, answer })),
  "Fertility Care": [
    ["Where are M'Brace's centres, and how do I book?", "M'Brace has a fertility hospital in LB Nagar and a fertility hospital in King Koti, and every service on this page is available at both. LB Nagar is on Inner Ring Road, Hyderabad 500068. King Koti is at King Koti Rd, Bogulkunta, Abids, Hyderabad 500001. To book, call +91 93906 34074."],
    ["When should I see a specialist about not getting pregnant?", "See a specialist after a year of trying without pregnancy if you are under 35, or after six months if you are 35 or older. Earlier is fine if your periods are irregular or you have a known health concern."],
    ["Why are both partners tested?", "Difficulty conceiving can involve male factors, female factors or both. Testing both partners finds the cause sooner and avoids treatment you may not need. Your doctor will explain each result in plain words."],
    ["How do doctors decide between IUI and IVF?", "IUI may suit mild sperm concerns or timing issues when the fallopian tubes are open. IVF may be advised for blocked tubes, low sperm count, irregular cycles or when earlier treatment has not worked. Your doctor decides after your tests."],
    ["Is ICSI different from IVF?", "ICSI is done as part of IVF, not instead of it. Doctors suggest it when sperm quality is low, or when an earlier cycle did not work."],
    ["Who may consider egg freezing, and does it guarantee a baby later?", "Women who want to delay pregnancy, or who face a treatment that may affect their ability to have children, may consider it. It does not guarantee a future pregnancy, and egg quality depends strongly on age. A specialist will explain your options."],
    ["What affects the chance of success?", "Many factors affect success, and age matters strongly. Egg quality, sperm quality, embryo quality, the health of the uterus and ovarian reserve all play a part, as do weight, smoking and long-term conditions such as diabetes. Outcomes vary between people, so your doctor will explain what to expect from your own reports."],
    ["Are these treatments safe, and what are the risks?", "Your doctor explains the risks, benefits and alternatives before any treatment starts. Medicines may cause bloating or mood changes, and some treatments raise the chance of twins. Egg collection may cause mild pain or spotting, and most people recover in one to two days."],
  ].map(([question, answer]) => ({ question, answer })),
};

export type ApprovedCarePageSection = {
  heroCta: string;
  talkCta: string;
  guideItems: string[];
  faqHeading: string;
  faqHighlight: string;
  faqDescription: string;
  teamCta?: string;
};

export const approvedCarePageSections: Record<string, ApprovedCarePageSection> = {
  "Women's Care": {
    heroCta: "Book Women’s Care Appointment",
    talkCta: "Book a Gynaecology Consultation",
    guideItems: [
      "Very heavy bleeding that disrupts your day.",
      "Bleeding between periods.",
      "Pelvic pain that keeps coming back.",
      "Any bleeding after menopause.",
      "For severe pain or bleeding that will not stop, seek emergency care straight away. Book a gynaecology consultation at LB Nagar or King Koti. Pregnant or trying to conceive? See pregnancy and birth support and fertility care.",
    ],
    faqHeading: "Questions Women Ask",
    faqHighlight: "Before Booking!",
    faqDescription: "Clear answers on check-ups, pregnancy planning, menopause and surgery.",
  },
  "Child Care": {
    heroCta: "Book Pediatric Appointment",
    talkCta: "Book a Paediatric Consultation",
    guideItems: [
      "Fast or difficult breathing.",
      "A fit (seizure) or sudden unusual drowsiness.",
      "Blue or very pale lips or skin.",
      "Fever in a baby under three months old.",
      "Very little urine, a dry mouth or refusing all feeds.",
      "A serious injury, such as a fall from a height or a deep cut.",
    ],
    faqHeading: "Questions Parents Ask",
    faqHighlight: "Before Booking!",
    faqDescription: "Clear answers on locations, timings, vaccination, insurance and newborn care.",
    teamCta: "Book a paediatric consultation now.",
  },
  "Pregnancy & Birth Support": {
    heroCta: "Book a Consultation",
    talkCta: "Book a Pregnancy Check-Up",
    guideItems: [
      "Heavy vaginal bleeding.",
      "Severe or constant stomach pain.",
      "Your baby moving much less than usual.",
      "A fit, or a severe headache with blurred vision.",
      "Sudden swelling of your face or hands.",
      "Waters breaking, or regular painful contractions.",
    ],
    faqHeading: "Questions Expecting Parents",
    faqHighlight: "Ask Before Booking!",
    faqDescription: "Clear answers on booking, check-ups, scans, delivery and insurance.",
    teamCta: "Meet Our Obstetricians & Neonatologists.",
  },
  "Fertility Care": {
    heroCta: "Book a Consultation",
    talkCta: "Book a First Visit",
    guideItems: [
      "Evaluation: Your specialist reviews your history and test results with you.",
      "Plan: You agree on a treatment plan based on those results.",
      "Cycle monitoring or IUI: Tried first when they may help.",
      "IVF or ICSI: An IVF cycle usually takes about three weeks.",
      "Embryo transfer: A pregnancy test follows, and your specialist reviews the result with you.",
    ],
    faqHeading: "Questions Couples & Individuals",
    faqHighlight: "Ask Before Booking!",
    faqDescription: "Clear answers on booking, tests, treatment choices, egg freezing and expectations.",
  },
};
