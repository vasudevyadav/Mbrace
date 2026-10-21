import { approvedCareFaqs, approvedServiceGroups } from "@/components/sections/mbrace/services/approvedCarePageData";
import { approvedDoctors } from "@/components/sections/mbrace/doctors/doctorContent";

// Homepage fallback content.
export const careCategories = ["Women's Care", "Child Care", "Pregnancy & Birth Support", "Fertility Care"] as const;
export const hospital = {
  phone: "+91 93906 34074",
  phoneHref: "tel:+919390634074",
  email: "mbrace@kaminenihospitals.com",
  address: "Inner Ring Rd, Suryodaya Colony, Central Bank Colony, Bahadurguda, Hyderabad, Telangana 500068."
};
export const serviceGroups = approvedServiceGroups;
export const homeDoctors = approvedDoctors.filter(doctor => !doctor.isFeatured);
export const featuredDoctor = approvedDoctors.find(doctor => doctor.isFeatured)!;
export const homeTestimonials = [{
  name: "Ananya & Vivek",
  quote: "The team made us feel heard and supported throughout every appointment. Today, we are grateful parents."
}, {
  name: "Riya Sharma",
  quote: "Clear guidance, warm care and constant encouragement gave us confidence through the entire journey."
}, {
  name: "Meera & Arjun",
  quote: "Every question was answered honestly. The experience felt personal, respectful and reassuring."
}];
export const homeFaqs = approvedCareFaqs;
export const homeBlogs = [{
  title: "When Should You See a Gynaecologist? A Guide for Every Life Stage",
  date: "May 08, 2026",
  image: 19
}, {
  title: "NICU vs PICU: What Every Parent Should Know",
  date: "May 12, 2026",
  image: 20
}, {
  title: "High-Risk Pregnancy: Signs to Watch For and When to See a Specialist",
  date: "May 18, 2026",
  image: 21
}, {
  title: "Fertility Evaluation: What It Is and When to Consider One",
  date: "May 22, 2026",
  image: 22
}];
