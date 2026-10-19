const womenCareImage = "/images/freepik/women-care.jpg";
const pregnancyCareImage = "/images/freepik/pregnancy-care.jpg";
const childCareImage = "/images/freepik/child-care.jpg";
const fertilityLabImage = "/images/freepik/fertility-lab-landscape.jpg";

// Locally hosted Freepik free-photo assets selected by care area. Keeping the
// mapping here gives every inner page a relevant image without changing its
// approved layout or relying on third-party hotlinks at runtime.
export const serviceHeroImages: Record<string, string> = {
  gynaecology: womenCareImage,
  "laparoscopic-surgery": womenCareImage,
  "menopause-care": womenCareImage,
  "preventive-women-s-health-packages": womenCareImage,
  "women-s-wellness-support": womenCareImage,
  "preconception-counselling": pregnancyCareImage,
  "maternity-care": pregnancyCareImage,
  "high-risk-pregnancy-care": pregnancyCareImage,
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
