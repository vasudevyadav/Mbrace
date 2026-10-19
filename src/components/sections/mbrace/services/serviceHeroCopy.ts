// Per-service hero headline copy, transcribed word-for-word from the
// "MBrace - Website Content" Google Doc, keyed by ServiceItem.slug. Used by
// ServiceHero in place of the generic "Gynaecology Care" placeholder headline.
export type ServiceHeroCopy = { highlight: string; rest: string; cta: string };

export const serviceHeroCopy: Record<string, ServiceHeroCopy> = {
  "high-risk-pregnancy-care": { highlight: "Diabetes, BP or Twins?", rest: "Pregnancy Complications Watched Closely!", cta: "Book a Specialist Consultation" },
  "maternity-care": { highlight: "Check-Ups, Delivery &", rest: "New-Born Support, All Under One Roof!", cta: "Book a Specialist Consultation" },
  "laparoscopic-surgery": { highlight: "Struggling with Fibroids,", rest: "Cysts or Endometriosis?", cta: "Book a Specialist Consultation" },
  "menopause-care": { highlight: "Hot Flushes, Poor Sleep", rest: "Or Mood Changes?", cta: "Book a Gynaecology Consultation" },
  "preventive-women-s-health-packages": { highlight: "Feeling Fine But", rest: "Due a Check-up?", cta: "Book Your Health Check-up" },
  "preconception-counselling": { highlight: "Planning a Baby Soon?", rest: "Get Ready Before You Conceive!", cta: "Book a Pre-Pregnancy Consultation" },
  "women-s-wellness-support": { highlight: "Tired, Stressed or", rest: "Not Feeling Yourself?", cta: "Book a Wellness Consultation" },
  "paediatrics-neonatology": { highlight: "Fever, Feeding or", rest: "Growth Questions?", cta: "Book a Paediatric Consultation" },
  "developmental-paediatrics": { highlight: "Baby Not Talking, Walking", rest: "Or Playing as Expected?", cta: "Book a Developmental Assessment" },
  "nicu-neonatal-intensive-care": { highlight: "Baby Born Early Or", rest: "Needing Extra Support?", cta: "Speak to a Neonatologist" },
  "picu-paediatric-intensive-care": { highlight: "Child Seriously", rest: "Unwell?", cta: "Speak to a Paediatric Intensivist" },
  "paediatric-surgery": { highlight: "Child Seriously", rest: "Unwell?", cta: "Speak to a Paediatric Intensivist" },
  "paediatric-emergency": { highlight: "High Fever, Breathing Trouble", rest: "Or Your Child Suffering From Injury?", cta: "Call the Emergency Line" },
  "fertility-evaluation": { highlight: "Trying For a Baby,", rest: "But No Success?", cta: "Get a Fertility Evaluation" },
  "male-fertility-care": { highlight: "Low Sperm Count Or", rest: "An Abnormal Semen Report?", cta: "Book a Confidential Consultation" },
  "ovulation-tracking": { highlight: "Keep A Sure-Shot Track", rest: "On Your Fertile Days!", cta: "Book Follicular Monitoring" },
  "embryology-support": { highlight: "Keep A Sure-Shot Track", rest: "On Your Fertile Days!", cta: "Book Follicular Monitoring" },
  "ivf-in-vitro-fertilisation": { highlight: "Know Whether IVF Is Right", rest: "Or Not For You Before You Begin!", cta: "Speak to a Fertility Specialist" },
  "iui-intrauterine-insemination": { highlight: "Prepared Sperm Placed", rest: "Closer to the Egg!", cta: "Get a Fertility Evaluation" },
  "icsi-intracytoplasmic-sperm-injection": { highlight: "Severe Sperm Issues or", rest: "Failed Fertilisation?", cta: "Speak to an ICSI Specialist" },
  "egg-freezing": { highlight: "Not Ready for a Baby Yet?", rest: "Freeze Eggs Now, Decide Later!", cta: "Check Your Egg Reserve" },
};
