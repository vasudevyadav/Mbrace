import { pregnancyServicePageCopy } from "./pregnancyServiceContent";

export type ServicePageCopy = {
  teamHeading: string;
  teamPrincipleLead: string;
  teamPrinciple: string;
  teamDescription: string;
  appointmentLabel: string;
  appointmentDescription: string;
};

// Approved shared-section copy from the “MBrace - Website Content” Google Doc.
export const servicePageCopy: Record<string, ServicePageCopy> = {
  "high-risk-pregnancy-care": {
    teamHeading: "Who Will Look After You?",
    teamPrincipleLead: "Every consultation follows one principle:",
    teamPrinciple: "Risks Explained. Decisions Shared.",
    teamDescription: "Your pregnancy is managed by senior consultant obstetricians, led by Dr K. Vasundhara, Head of Obstetrics & Gynaecology. When delivery planning begins, consultant neonatologists join the discussion, so your baby’s care is planned alongside yours rather than after birth.",
    appointmentLabel: "Ready for First Review?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to fix a consultation time at LB Nagar or King Koti.",
  },
  "maternity-care": {
    teamHeading: "Meet Our Maternity Team",
    teamPrincipleLead: "Every consultation follows one principle:",
    teamPrinciple: "Questions Welcome. Choices Explained.",
    teamDescription: "Senior consultant obstetricians, led by Dr K. Vasundhara, Head of Obstetrics & Gynaecology, oversee your pregnancy and delivery. Consultant paediatricians and neonatologists examine your baby after birth, so mother and newborn are cared for by one connected team.",
    appointmentLabel: "Ready to Plan Your Birth?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to fix your first antenatal visit at our maternity hospital in LB Nagar or King Koti.",
  },
  "laparoscopic-surgery": {
    teamHeading: "Meet Our Laparoscopic Surgeons",
    teamPrincipleLead: "Every operation follows one principle:",
    teamPrinciple: "Options Compared. Risks Explained.",
    teamDescription: "Senior consultants with laparoscopic and robotics expertise perform these procedures. Each is also a consultant obstetrician and gynaecologist, so surgery is planned around your fertility and any future pregnancy plans.",
    appointmentLabel: "Considering Laparoscopy?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to fix a consultation with a laparoscopic surgeon at LB Nagar or King Koti.",
  },
  "menopause-care": {
    teamHeading: "Meet Our Gynaecologists",
    teamPrincipleLead: "Every consultation follows one principle:",
    teamPrinciple: "Symptoms Heard. Options Explained.",
    teamDescription: "If you are looking for a menopause specialist in Hyderabad, M’Brace’s senior consultant gynaecologists see women through perimenopause, menopause and the years after, including those with early or surgical menopause.",
    appointmentLabel: "Discuss Your Symptoms",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to fix a consultation with a gynaecologist at LB Nagar or King Koti.",
  },
  "preventive-women-s-health-packages": {
    teamHeading: "Who Reviews Your Results?",
    teamPrincipleLead: "Every report follows one principle:",
    teamPrinciple: "Results Explained. Next Steps Clear.",
    teamDescription: "Your screening results are interpreted by senior consultant gynaecologists, who also carry out follow-up procedures such as colposcopy when a test needs a closer look.",
    appointmentLabel: "Due for Your Check-up?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to suggest a package and fix a date at LB Nagar or King Koti.",
  },
  "preconception-counselling": {
    teamHeading: "Who Will Guide Your Planning?",
    teamPrincipleLead: "Every review follows one principle:",
    teamPrinciple: "Prepare Early. Conceive Informed.",
    teamDescription: "Preconception care in Hyderabad at M’Brace is led by senior consultant gynaecologists, including fertility and infertility specialists, so the same team can continue into fertility evaluation or antenatal care when you are ready.",
    appointmentLabel: "Planning to Conceive?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to fix a pre-pregnancy review at LB Nagar or King Koti. Your partner is welcome to attend.",
  },
  "women-s-wellness-support": {
    teamHeading: "Who Will Support You?",
    teamPrincipleLead: "Every consultation follows one principle:",
    teamPrinciple: "No Concern Too Small. No Judgement.",
    teamDescription: "For women’s health and wellness in Hyderabad, M’Brace’s senior consultant gynaecologists see women from their teens onwards, addressing concerns that are often overlooked in routine visits.",
    appointmentLabel: "Ready to Discuss Your Concerns?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to fix a confidential consultation at LB Nagar or King Koti.",
  },
  gynaecology: {
    teamHeading: "Find Your Gynaecologist",
    teamPrincipleLead: "Every doctor with us works from one principle:",
    teamPrinciple: "Explain Clearly. Decide Together.",
    teamDescription: "Looking for a gynaecologist in Hyderabad? M’Brace’s five senior consultants cover medical gynaecology, laparoscopic and robotic surgery, and fertility, so one team can manage your condition from diagnosis to recovery.",
    appointmentLabel: "Have a Gynaecological Concern?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to fix a consultation with a gynaecologist in LB Nagar or King Koti.",
  },
  "paediatrics-neonatology": {
    teamHeading: "Meet Our Child Doctors",
    teamPrincipleLead: "Every visit follows one principle:",
    teamPrinciple: "Parents Heard. Children Comforted.",
    teamDescription: "If your newborn needs a neonatologist in Hyderabad, M’Brace’s neonatologists work alongside consultant paediatricians, so care continues from the first days into childhood.",
    appointmentLabel: "Due for a Check-up or Feeling Unwell?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to fix a paediatric consultation at LB Nagar or King Koti.",
  },
  "developmental-paediatrics": {
    teamHeading: "Meet Our Child Doctors",
    teamPrincipleLead: "Every visit follows one principle:",
    teamPrinciple: "Strengths Noted. Needs Supported.",
    teamDescription: "If you are looking for a developmental paediatrician in Hyderabad, M’Brace’s consultant paediatricians assess development alongside growth and nutrition, and coordinate therapy and specialist referrals.",
    appointmentLabel: "Noticed a Delay?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to fix a developmental assessment at LB Nagar or King Koti.",
  },
  "nicu-neonatal-intensive-care": {
    teamHeading: "Meet the NICU Team",
    teamPrincipleLead: "Every shift follows one principle:",
    teamPrinciple: "Gentle Care. Honest Updates.",
    teamDescription: "Choosing a NICU hospital in Hyderabad means knowing who is responsible for your baby. At M’Brace, consultant neonatologists lead care, with paediatric intensive care expertise available when needed.",
    appointmentLabel: "Planning Ahead or Following Up?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to fix a developmental assessment at LB Nagar or King Koti.",
  },
  "picu-paediatric-intensive-care": {
    teamHeading: "Meet the PICU Team",
    teamPrincipleLead: "Every decision follows one principle:",
    teamPrinciple: "Your Child’s Comfort. Your Full Understanding.",
    teamDescription: "When choosing a PICU hospital in Hyderabad, ask who leads intensive care. At M’Brace, a paediatric intensivist leads the PICU, supported by senior paediatricians across the department.",
    appointmentLabel: "Following Up After a PICU Stay?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to fix a developmental assessment at LB Nagar or King Koti.",
  },
  "paediatric-emergency": {
    teamHeading: "Who Will See Your Child?",
    teamPrincipleLead: "Every emergency follows one principle:",
    teamPrinciple: "Fast Action. Calm Explanation.",
    teamDescription: "If you need an emergency paediatrician in Hyderabad, M’Brace’s consultant paediatricians, paediatric intensivist and neonatologists cover the emergency area, with senior support available day and night.",
    appointmentLabel: "Following Up After an Emergency Visit?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to fix a developmental assessment at LB Nagar or King Koti.",
  },
  "fertility-evaluation": {
    teamHeading: "Meet Your Fertility Specialists",
    teamPrincipleLead: "Every evaluation follows one principle:",
    teamPrinciple: "Your Diagnosis Decides Your Treatment.",
    teamDescription: "Infertility evaluation in Hyderabad at M’Brace is led by consultant infertility specialists and gynaecologists with fertility expertise, supported by an experienced embryologist.",
    appointmentLabel: "Ready to Find Answers?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to fix a fertility evaluation for you and your partner at LB Nagar or King Koti.",
  },
  "male-fertility-care": {
    teamHeading: "Male Fertility Specialists",
    teamPrincipleLead: "Every consultation follows one principle:",
    teamPrinciple: "Private. Respectful. Evidence-Led.",
    teamDescription: "If you are looking for a male fertility specialist in Hyderabad, M’Brace’s infertility specialists and embryologist assess and treat male factors as part of the couple’s plan, never as an afterthought.",
    appointmentLabel: "Ready for Your Semen Analysis?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to fix a confidential consultation or semen analysis at LB Nagar or King Koti.",
  },
  "ovulation-tracking": {
    teamHeading: "Who Will Monitor Your Cycle?",
    teamPrincipleLead: "Every cycle follows one principle:",
    teamPrinciple: "Measured, Not Guessed.",
    teamDescription: "Ovulation scans and medicine adjustments are handled by consultant infertility specialists and gynaecologists with fertility expertise, so each cycle is reviewed by the doctor planning your care.",
    appointmentLabel: "Ready to Track Your Cycle?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to plan your first scan at LB Nagar or King Koti. If possible, call on the first day of your period.",
  },
  "ivf-in-vitro-fertilisation": {
    teamHeading: "Meet Your IVF Team",
    teamPrincipleLead: "Every cycle follows one principle:",
    teamPrinciple: "Honest Expectations. Personalised Care.",
    teamDescription: "Your IVF specialist in Hyderabad at M’Brace works with gynaecologists experienced in fertility and an embryologist, so your treatment is planned and delivered by one team.",
    appointmentLabel: "Considering IVF?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to fix a consultation at our IVF hospital in LB Nagar or King Koti.",
  },
  "iui-intrauterine-insemination": {
    teamHeading: "Meet Your IUI Team",
    teamPrincipleLead: "Every cycle follows one principle:",
    teamPrinciple: "Right Couple. Right Timing.",
    teamDescription: "IUI cycles are planned and monitored by consultant infertility specialists, with an experienced embryologist preparing the sperm on the day of insemination.",
    appointmentLabel: "Ready to Start IUI?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to plan your IUI cycle at the IUI centre in LB Nagar or King Koti. If possible, call on the first day of your period.",
  },
  "icsi-intracytoplasmic-sperm-injection": {
    teamHeading: "Meet Your ICSI Team",
    teamPrincipleLead: "Every injection follows one principle:",
    teamPrinciple: "Precision in the Lab. Clarity for You.",
    teamDescription: "At M’Brace, an ICSI hospital in Hyderabad, an experienced embryologist performs each injection, while consultant infertility specialists plan stimulation and explain every result.",
    appointmentLabel: "Advised ICSI?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to fix a consultation for you and your partner at LB Nagar or King Koti.",
  },
  "egg-freezing": {
    teamHeading: "Egg Freezing Experts in Hyderabad",
    teamPrincipleLead: "Every plan follows one principle:",
    teamPrinciple: "Realistic Advice. Your Choice.",
    teamDescription: "At M’Brace, an egg freezing centre in Hyderabad, consultant infertility specialists plan your stimulation, and an experienced embryologist freezes and stores your eggs.",
    appointmentLabel: "Thinking About Egg Freezing?",
    appointmentDescription: "Fill in the form and the M’Brace care team will call you to fix a confidential consultation and egg reserve check at LB Nagar or King Koti.",
  },
};

servicePageCopy["paediatric-surgery"] = servicePageCopy["picu-paediatric-intensive-care"];
servicePageCopy["embryology-support"] = servicePageCopy["ovulation-tracking"];
Object.assign(servicePageCopy, pregnancyServicePageCopy);
