// Homepage content transcribed from Figma: Mbrace Home Page 2, node 118:45.
export const careCategories = ["Women's Care", "Child Care", "Pregnancy & Birth Support", "Fertility Care"] as const;
export const hospital = {
  phone: "+91 93906 34074",
  phoneHref: "tel:+919390634074",
  email: "mbrace@kaminenihospitals.com",
  address: "Inner Ring Rd, Suryodaya Colony, Central Bank Colony, Bahadurguda, Hyderabad, Telangana 500068."
};
export const womenServices = [["Gynaecology", "Personalized IVF programs using advanced reproductive techniques."], ["High-risk pregnancy care", "Egg, sperm and embryo freezing for future family planning."], ["Maternity care", "Supportive, carefully monitored intrauterine insemination care."], ["Laparoscopic surgery", "Complete evaluation and treatment for male fertility concerns."], ["Menopause care", "Diagnosis and tailored care for hormonal and reproductive health."], ["Preventive women's health packages", "Secure cryopreservation with expert laboratory support."], ["Preconception counselling", "Ethical, confidential egg, sperm and embryo donor options."], ["Women's wellness support", "Thorough fertility assessment and one-to-one expert guidance."]];
// Additional tab labels come from the services and introductory copy in the frame.
export const serviceGroups: Record<string, string[][]> = {
  "Women Care": womenServices,
  "Child Care": ["Paediatrics & Neonatology", "Vaccination", "Developmental Paediatrics", "NICU – Neonatal Intensive Care", "Paediatric Surgery", "Nephrology", "Pulmonology", "PICU – Paediatric Intensive Care"].map(name => [name, "Connected child care, backed by a multidisciplinary team and advanced hospital support."]),
  "Fertility": ["IVF", "Fertility preservation", "Intrauterine insemination", "Male fertility care", "Hormonal & reproductive health", "Cryopreservation", "Donor programmes", "Fertility evaluation"].map((name, i) => [name, womenServices[i][1]])
};
export const homeDoctors = [{
  name: "DR. B MENAKA",
  qualifications: "MBBS, MD",
  role: "Consultant Obstetrics Gynecologist",
  image: 10
}, {
  name: "DR. ARCHANA DINESH",
  qualifications: "MBBS, MD, DGO",
  role: "Consultant Obstetrics & Gynaecologist",
  image: 11
}, {
  name: "DR. A PRASANNA LATHA",
  qualifications: "MBBS, DNB, DGO",
  role: "Consultant Obstetrician",
  image: 12
}, {
  name: "DR. VASAVI",
  qualifications: "MBBS, MS (Obstetrics & Gynaecology), FMAS",
  role: "Consultant Obstetrics",
  image: 13
}];
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
export const homeFaqs: Record<string, {
  question: string;
  answer: string;
}[]> = {
  "Women's Care": [{
    question: "What does M'Brace's Women's Care cover?",
    answer: "M'Brace's Women's Care covers gynaecology, high-risk pregnancy support, maternity care, laparoscopic surgery, menopause care and preventive health check-ups for women of all ages."
  }, {
    question: "Do I need a referral to see a gynaecologist at M'Brace?",
    answer: "Please contact our care team to confirm appointment and referral requirements for your consultation."
  }, {
    question: "Does M'Brace offer preconception counselling?",
    answer: "Preconception counselling is included in M'Brace's women's care services. Contact our team to arrange a consultation."
  }, {
    question: "Can M'Brace help with menopause-related concerns?",
    answer: "Menopause care is part of M'Brace's women's care services. Our care team can help you book a consultation."
  }, {
    question: "Is laparoscopic surgery available at M'Brace?",
    answer: "Laparoscopic surgery is listed among M'Brace's women's care services. Discuss your individual needs with a specialist during consultation."
  }],
  "Child Care": [{
    question: "What child care services does M'Brace offer?",
    answer: "Our child care services include paediatrics and neonatology, vaccination, developmental paediatrics, neonatal intensive care and paediatric surgery."
  }, {
    question: "Does M'Brace have NICU and PICU support?",
    answer: "M'Brace's multidisciplinary team is supported by advanced NICU and PICU facilities."
  }, {
    question: "How can I book a vaccination appointment?",
    answer: "Choose Book Vaccine or contact our care team to discuss availability and arrange your child's visit."
  }],
  "Pregnancy & Birth Support": [{
    question: "What pregnancy and birth support is available?",
    answer: "Our team brings together obstetricians, gynaecologists, paediatricians and neonatologists for connected pregnancy, maternity and newborn care."
  }, {
    question: "Does M'Brace provide high-risk pregnancy care?",
    answer: "High-risk pregnancy care is included in our services, backed by advanced hospital and critical care support."
  }, {
    question: "Where can I book a maternity consultation?",
    answer: "M'Brace welcomes you at LB Nagar and King Koti in Hyderabad. Select your preferred location when requesting an appointment."
  }],
  "Fertility Care": [{
    question: "What fertility services are available at M'Brace?",
    answer: "Our fertility services include IVF, fertility evaluation, IUI, fertility preservation and reproductive health support."
  }, {
    question: "Who will guide my fertility journey?",
    answer: "Our panel includes fertility specialists and embryologists. Every doctor works from one principle: explain clearly, decide together."
  }, {
    question: "How do I request a fertility consultation?",
    answer: "Select Fertility Care in the appointment form and choose your preferred location. You can also call our care team."
  }]
};
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
