export type ApprovedDoctor = {
  id: number;
  slug: string;
  name: string;
  qualifications: string;
  role: string;
  image: string;
  yearsExperience: string;
  languages: string;
  location: string;
  isFeatured: boolean;
  order: number;
  designation: string;
  bio: string;
  timing: string;
  phone: string;
  email: string;
  fullAddress: string;
  metaTitle: string;
  metaDescription: string;
};

export const doctorsPageCopy = {
  heroTitleTop: "Gynaecologists & Paediatricians",
  heroTitleBottom: "At M’Brace, Hyderabad",
  heroDescription:
    "Obstetricians, gynaecologists, robotic surgeons, fertility specialists, neonatologists, paediatricians and paediatric sub-specialists at M’Brace LB Nagar. Click on the profile to book a consultation with the expert in Hyderabad directly.",
  teamHeading: "Expert Specialists",
  teamHeadingHighlight: "Grouped By The Care You Need",
  teamDescription:
    "Obstetricians and gynaecologists lead women’s and fertility care, and most of them perform laparoscopic and robotic surgery. Our doctors cover children’s care, from newborns and intensive care to surgery, neurology, development, orthopaedics and ROP eye checks. The expert’s training includes fellowships in neonatology, paediatric critical care and minimal access surgery, with more than 15 or more years of experience.",
} as const;

const contact = {
  phone: "+91 70362 70362",
  email: "info@kaminenihospitals.com",
  fullAddress:
    "M’Brace, Kamineni Hospitals, Inner Ring Road, Suryodaya Colony, Central Bank Colony, L. B. Nagar, Hyderabad, Telangana 500068",
  languages: "English, Hindi, Telugu",
  location: "LB Nagar",
  timing: "",
  metaTitle: "",
  metaDescription: "",
} as const;

export const approvedDoctors: ApprovedDoctor[] = [
  {
    ...contact,
    id: 1,
    slug: "dr-k-vasundhara",
    name: "Dr K Vasundhara",
    qualifications: "MBBS, DGO, DNB",
    role: "Head of Obstetrics & Gynaecology and Medical Director of the Kamineni Fertility Center",
    image: "/images/figma/asset-14.webp",
    yearsExperience: "35+ Years",
    isFeatured: true,
    order: 0,
    designation: "Obstetrician & Gynaecologist in LB Nagar",
    bio: "Dr K Vasundhara is Head of Obstetrics & Gynaecology at M’Brace and Medical Director of the Kamineni Fertility Center, with over 35 years of experience. Her clinical focus is the management of high-risk pregnancies, where a medical, obstetric or fetal factor calls for closer monitoring of mother and baby.\n\nShe consults at M’Brace LB Nagar, where her patients have access to fetal medicine, 4D ultrasound, advanced LDR rooms and NICU support in the same hospital. Women with pregnancy, gynaecological or fertility concerns can book a consultation with her directly.",
  },
  {
    ...contact,
    id: 2,
    slug: "dr-kolluru-vasavi",
    name: "Dr Kolluru Vasavi",
    qualifications: "MBBS, MS (Obstetrics & Gynaecology), FMAS",
    role: "Senior Consultant Obstetrician & Gynaecologist, Laparoscopic & Robotics Surgeon",
    image: "/images/figma/asset-13.webp",
    yearsExperience: "15+ Years",
    isFeatured: false,
    order: 1,
    designation: "Laparoscopic & Robotic Gynaecologist in LB Nagar",
    bio: "Dr Kolluru Vasavi is a Senior Consultant Obstetrician & Gynaecologist at M’Brace, with over 15 years of experience. Her FMAS fellowship in minimal access surgery supports her work in laparoscopic and robotic procedures for gynaecological conditions.\n\nAt M’Brace LB Nagar, she also sees women for antenatal care and routine gynaecology. Patients considering surgery are assessed first, so the approach chosen suits their condition and recovery needs.",
  },
  {
    ...contact,
    id: 3,
    slug: "dr-b-menaka",
    name: "Dr B Menaka",
    qualifications: "MBBS, MD",
    role: "Senior Consultant Obstetrician & Gynaecologist, Laparoscopic & Robotics Surgeon, Fertility Specialist",
    image: "/images/figma/asset-10.webp",
    yearsExperience: "15+ Years",
    isFeatured: false,
    order: 2,
    designation: "Gynaecologist & Fertility Specialist in LB Nagar",
    bio: "Dr B Menaka is a Senior Consultant Obstetrician & Gynaecologist at M’Brace, with over 15 years of experience. Her work spans obstetrics, gynaecology, fertility care and laparoscopic and robotic surgery, with a special interest in robotic procedures.\n\nThis combination means a woman whose fertility is affected by a gynaecological condition can be assessed and, if needed, treated surgically by the same specialist at M’Brace LB Nagar.",
  },
  {
    ...contact,
    id: 4,
    slug: "dr-a-prasanna-latha",
    name: "Dr A Prasanna Latha",
    qualifications: "MBBS, DGO, DNB",
    role: "Senior Consultant Obstetrician & Gynaecologist, Laparoscopic & Robotics Surgeon",
    image: "/images/figma/asset-12.webp",
    yearsExperience: "17+ Years",
    isFeatured: false,
    order: 3,
    designation: "Robotic Gynaecology Surgeon in LB Nagar",
    bio: "Dr A Prasanna Latha is a Senior Consultant Obstetrician & Gynaecologist at M’Brace, with over 17 years of experience. She performs laparoscopic and robotic-assisted gynaecological surgery, with a special interest in robotic procedures where a minimally invasive approach is suitable.\n\nAlongside surgery, she provides pregnancy care and gynaecology consultations at M’Brace LB Nagar. Surgery is recommended only after she has assessed the diagnosis and discussed other treatment options with the patient.",
  },
  {
    ...contact,
    id: 5,
    slug: "dr-archana-dinesh-bidla",
    name: "Dr Archana Dinesh Bidla",
    qualifications: "MBBS, MD, DGO",
    role: "Senior Consultant Obstetrics & Gynaecologist, Infertility Specialist",
    image: "/images/figma/asset-11.webp",
    yearsExperience: "25+ Years",
    isFeatured: false,
    order: 4,
    designation: "Infertility Specialist in LB Nagar",
    bio: "Dr Archana Dinesh Bidla is a Senior Consultant Obstetrics & Gynaecologist at M’Brace, with over 25 years of experience. Her special interest is infertility, including evaluation of both partners and treatment planning based on the cause.\n\nShe also provides pregnancy and gynaecology care, so couples who conceive after fertility treatment can continue antenatal care with her at M’Brace LB Nagar.",
  },
  {
    ...contact,
    id: 6,
    slug: "dr-r-v-soujanya",
    name: "Dr R V Soujanya",
    qualifications: "MBBS, DNB (Paediatrics), FNNF",
    role: "Consultant Paediatrician & Neonatologist",
    image: "/images/figma/asset-27.webp",
    yearsExperience: "15+ Years",
    isFeatured: false,
    order: 5,
    designation: "Neonatologist in LB Nagar",
    bio: "Dr R V Soujanya is a Consultant Paediatrician & Neonatologist at M’Brace, with over 15 years of experience and an FNNF fellowship in neonatology. She cares for newborns from birth, including premature and low-birth-weight babies who need NICU support.\n\nAt M’Brace LB Nagar, she also sees babies and children for paediatric consultations, growth checks and follow-up after NICU discharge.",
  },
  {
    ...contact,
    id: 7,
    slug: "dr-kanchan-s-channawar",
    name: "Dr Kanchan S Channawar",
    qualifications: "MBBS, DNB (Paediatrics), PGPN (Boston), IDPCCM",
    role: "Consultant Paediatrician & Paediatric Intensivist",
    image: "/images/figma/asset-26.webp",
    yearsExperience: "18+ Years",
    isFeatured: false,
    order: 6,
    designation: "Paediatric Intensivist in LB Nagar",
    bio: "Dr Kanchan S Channawar is a Consultant Paediatrician & Paediatric Intensivist at M’Brace, with over 18 years of experience. Her training includes the IDPCCM in paediatric critical care and the PGPN programme in paediatric nutrition from Boston.\n\nShe provides intensive care for critically ill children in the PICU at M’Brace LB Nagar and also sees children for general paediatric consultations, including nutrition and growth concerns.",
  },
  {
    ...contact,
    id: 8,
    slug: "dr-s-narasimha-rao",
    name: "Dr S Narasimha Rao",
    qualifications: "MD (Paediatrics), DCH",
    role: "Professor & HOD, Paediatrics",
    image: "/images/figma/asset-24.webp",
    yearsExperience: "25+ Years",
    isFeatured: false,
    order: 7,
    designation: "Paediatrician in LB Nagar",
    bio: "Dr S Narasimha Rao is Professor and Head of the Department of Paediatrics at M’Brace, with over 25 years of experience. He sees babies and children for illness, growth, development and long-term health concerns.\n\nAs head of department, he works with neonatologists, paediatric intensivists and surgeons at M’Brace LB Nagar when a child needs specialist or hospital care.",
  },
  {
    ...contact,
    id: 9,
    slug: "dr-suresh-r-j-thomas",
    name: "Dr Suresh R J Thomas",
    qualifications: "",
    role: "Senior Consultant Paediatrician",
    image: "/images/figma/asset-25.webp",
    yearsExperience: "25+ Years",
    isFeatured: false,
    order: 8,
    designation: "Senior Paediatrician in LB Nagar",
    bio: "Dr Suresh R J Thomas is a Senior Consultant Paediatrician at M’Brace, with over 25 years of experience. He sees children from infancy to adolescence for common illnesses, infections, growth monitoring and routine check-ups.\n\nAt M’Brace LB Nagar, children who need closer care can be referred within the same hospital to neonatology, PICU or paediatric surgery.",
  },
  {
    ...contact,
    id: 10,
    slug: "dr-j-kavya-rao",
    name: "Dr J Kavya Rao",
    qualifications: "MS, FLCH",
    role: "Vitreoretina, Uvea & ROP Consultant",
    image: "",
    yearsExperience: "11+ Years",
    isFeatured: false,
    order: 9,
    designation: "ROP & Vitreoretina Specialist in LB Nagar",
    bio: "Dr J Kavya Rao is a Vitreoretina, Uvea & ROP Consultant at M’Brace, with over 11 years of experience. Her role includes retinopathy of prematurity (ROP) services, the eye screening that premature babies may need after birth.\n\nBabies in the NICU at M’Brace LB Nagar can be assessed for ROP without moving to another hospital, and parents can discuss follow-up eye checks with her directly.",
  },
  {
    ...contact,
    id: 11,
    slug: "dr-g-satyanarayana",
    name: "Dr G Satyanarayana",
    qualifications: "MS, MCh (Paediatric Surgery), FMAS",
    role: "Consultant Surgical Gastroenterologist",
    image: "",
    yearsExperience: "20+ Years",
    isFeatured: false,
    order: 10,
    designation: "Paediatric Surgeon in LB Nagar",
    bio: "Dr G Satyanarayana is a Consultant Surgical Gastroenterologist at M’Brace, with over 20 years of experience. He holds an MCh in Paediatric Surgery and an FMAS fellowship in minimal access surgery.\n\nAt M’Brace LB Nagar, he provides surgical evaluation and care for children with conditions affecting the abdomen and digestive system, using minimally invasive techniques where suitable.",
  },
  {
    ...contact,
    id: 12,
    slug: "dr-kiranmayee",
    name: "Dr Kiranmayee",
    qualifications: "MBBS, MD (Paediatrics)",
    role: "Consultant Paediatrician",
    image: "",
    yearsExperience: "5+ Years",
    isFeatured: false,
    order: 11,
    designation: "Paediatrician in LB Nagar",
    bio: "Dr Kiranmayee is a Consultant Paediatrician at M’Brace with an MD in Paediatrics. Her special interests are child growth, nutrition and developmental assessment, and she has published in international peer-reviewed journals.\n\nShe diagnoses and manages neonatal and paediatric conditions at M’Brace LB Nagar, with a focus on evidence-based care and helping parents understand their child’s health.",
  },
  {
    ...contact,
    id: 13,
    slug: "dr-keerthi-kundani",
    name: "Dr Keerthi Kundani",
    qualifications: "",
    role: "Paediatric Neurologist",
    image: "",
    yearsExperience: "",
    isFeatured: false,
    order: 12,
    designation: "Paediatric Neurologist in LB Nagar",
    bio: "Dr Keerthi Kundani is a Paediatric Neurologist at M’Brace. She assesses and treats children with conditions affecting the brain and nervous system, such as seizures or delays in development.\n\nAt M’Brace LB Nagar, she works alongside developmental paediatricians and the PICU team when a child needs combined care.",
  },
  {
    ...contact,
    id: 14,
    slug: "dr-vishnu-priya",
    name: "Dr Vishnu Priya",
    qualifications: "",
    role: "Developmental Paediatrician",
    image: "",
    yearsExperience: "",
    isFeatured: false,
    order: 13,
    designation: "Developmental Paediatrician in LB Nagar",
    bio: "Dr Vishnu Priya is a Developmental Paediatrician at M’Brace. She assesses children whose growth, milestones, speech, learning or behaviour raise concerns for parents or doctors.\n\nAt M’Brace LB Nagar, her assessment helps identify what support a child may need and when progress should be reviewed.",
  },
  {
    ...contact,
    id: 15,
    slug: "dr-arjun",
    name: "Dr Arjun",
    qualifications: "",
    role: "Paediatric Orthopaedics",
    image: "",
    yearsExperience: "",
    isFeatured: false,
    order: 14,
    designation: "Paediatric Orthopaedic Specialist in LB Nagar",
    bio: "Dr Arjun is a Paediatric Orthopaedic specialist at M’Brace. He assesses and treats bone, joint and muscle concerns in children, such as fractures, limb alignment or difficulty walking.\n\nAt M’Brace LB Nagar, M’Brace paediatricians can refer children to him when a musculoskeletal concern needs specialist review.",
  },
];

const doctorAliases: Record<string, string> = {
  "dr-vasavi": "dr-kolluru-vasavi",
  "dr-archana-dinesh": "dr-archana-dinesh-bidla",
  "dr-suresh-thomas": "dr-suresh-r-j-thomas",
  "dr-kanchan-s": "dr-kanchan-s-channawar",
};

export function findApprovedDoctor(slug: string) {
  const canonicalSlug = doctorAliases[slug] ?? slug;
  return approvedDoctors.find((doctor) => doctor.slug === canonicalSlug) ?? null;
}
