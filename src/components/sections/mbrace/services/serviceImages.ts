const pregnancyCareImage = "/images/freepik/pregnancy-care.jpg";
const childCareImage = "/images/freepik/child-care.jpg";
const fertilityLabImage = "/images/freepik/fertility-lab-landscape.jpg";

// Approved named banners take precedence. Remaining pages use locally hosted
// care-area imagery so no page depends on a third-party hotlink at runtime.
export const serviceHeroImages: Record<string, string> = {
  gynaecology: "/images/banners/gynaecology-hero-banner.jpg",
  "laparoscopic-surgery": "/images/banners/laparoscopic-surgery-hero-banner.jpg",
  "menopause-care": "/images/banners/menopause-care-hero-banner.jpg",
  "preventive-women-s-health-packages": "/images/banners/preventive-womens-health-hero-banner.jpg",
  "women-s-wellness-support": "/images/banners/womens-wellness-support-hero-banner.jpg",
  "preconception-counselling": "/images/banners/preconception-counselling-hero-banner.jpg",
  "maternity-care": "/images/banners/maternity-care-hero-banner.jpg",
  "high-risk-pregnancy-care": "/images/banners/high-risk-pregnancy-care-hero-banner.jpg",
  "antenatal-check-ups": pregnancyCareImage,
  "nutrition-guidance": pregnancyCareImage,
  "fetal-medicine": pregnancyCareImage,
  "4d-ultrasound": pregnancyCareImage,
  "advanced-ldr-rooms": pregnancyCareImage,
  "sterile-operation-theatres": pregnancyCareImage,
  "robotic-surgery": pregnancyCareImage,
  "high-risk-pregnancy-support": pregnancyCareImage,
  "paediatrics-neonatology": childCareImage,
  "developmental-paediatrics": childCareImage,
  "nicu-neonatal-intensive-care": childCareImage,
  "picu-paediatric-intensive-care": childCareImage,
  "paediatric-surgery": childCareImage,
  "paediatric-emergency": childCareImage,
  "fertility-evaluation": fertilityLabImage,
  "male-fertility-care": fertilityLabImage,
  "ovulation-tracking": fertilityLabImage,
  "embryology-support": fertilityLabImage,
  "ivf-in-vitro-fertilisation": fertilityLabImage,
  "iui-intrauterine-insemination": fertilityLabImage,
  "icsi-intracytoplasmic-sperm-injection": fertilityLabImage,
  "egg-freezing": fertilityLabImage,
};
