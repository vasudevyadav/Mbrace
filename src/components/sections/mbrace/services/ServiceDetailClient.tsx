"use client";

import { useRef, useState, type FormEvent } from "react";
import type { ServiceCategory, ServiceItem } from "@prisma/client";
import type { HomeData } from "@/lib/queries";
import { submitAppointmentRequestAction } from "@/lib/publicActions";
import { locations } from "../content";
import type { AppointmentStatus } from "../types";
import DoctorsSection from "../DoctorsSection";
import FaqSection from "../FaqSection";
import LocationSection from "../LocationSection";
import AppointmentSection from "../AppointmentSection";
import HomeFooter from "../HomeFooter";
import ServiceHero from "./ServiceHero";
import GynecologyDetailSections from "./GynecologyDetailSections";
import DynamicPageSections from "../DynamicPageSections";
import type { BlogBlock } from "../blog/blogContent";
import type { DynamicPageSection } from "../dynamicPageContent";

type ServiceWithCategory = ServiceItem & { category: ServiceCategory };

// The service categories in the DB ("Women Care", "Fertility", …) predate and
// don't exactly match the public nav's care categories — map to the closest
// one so the FAQ section shows relevant questions.
function matchCareCategory(categoryLabel: string, careCategories: string[]) {
  const normalized = categoryLabel.toLowerCase();
  return (
    careCategories.find(c => c.toLowerCase().includes(normalized) || normalized.includes(c.toLowerCase().replace("'s", ""))) ??
    careCategories[0]
  );
}

export default function ServiceDetailClient({ service, data }: { service: ServiceWithCategory; data: HomeData }) {
  const { hospital, careCategories, serviceGroups, doctors, featuredDoctor, homeFaqs } = data;
  const [location, setLocation] = useState(locations[0]);
  const [bookingService, setBookingService] = useState("");
  const [bookingLocation, setBookingLocation] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingDoctor, setBookingDoctor] = useState("");
  const [bookingType, setBookingType] = useState("");
  const [status, setStatus] = useState<AppointmentStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const mapQuery = location === "LB Nagar" ? `Mbrace Kamineni Hospitals ${hospital.address}` : "Kamineni Hospitals King Koti Hyderabad";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
  const faqCategory = matchCareCategory(service.category.label, careCategories);
  const blocks = (Array.isArray(service.blocks) ? service.blocks : []) as Array<BlogBlock | DynamicPageSection>;
  const isGynecology = service.slug === "gynaecology";
  const gynecologyFaqs = {
    "Your First Visit": [
      { question: "Do I need a referral to see a gynaecologist?", answer: "No. You can book directly at LB Nagar or King Koti. Bring any earlier scan reports and blood tests, and a note of your cycle dates and symptoms." },
      { question: "Can I see a gynaecologist during my period?", answer: "Yes, for most concerns. If a Pap smear or swab is planned, a mid-cycle appointment is better, but heavy bleeding or pain should be checked at any time." },
      { question: "When should a young woman first see a gynaecologist?", answer: "Whenever period problems, severe pain or other concerns arise. Many girls first visit in their teens, and an internal examination is usually not needed at that age." },
    ],
    "Common Conditions": [
      { question: "Are fibroids dangerous?", answer: "Most fibroids are non-cancerous and cause no symptoms. Treatment is needed only if they cause heavy bleeding, pain, pressure or fertility problems, and the approach depends on their size and position." },
      { question: "Can PCOS be cured?", answer: "PCOS cannot be cured, but its symptoms can be controlled. Regular cycles, ovulation and skin symptoms often improve with lifestyle changes and medicines, and fertility treatment is available if needed." },
      { question: "Is period pain normal?", answer: "Mild cramps are common. Pain that stops daily activities, worsens over time or comes with heavy bleeding may point to endometriosis, fibroids or infection, and should be checked." },
    ],
    Treatment: [
      { question: "Will I need surgery?", answer: "Not necessarily. Many conditions respond to medicines. Surgery is advised only when symptoms persist, a growth is large or a diagnosis needs confirmation, and keyhole methods are preferred where suitable." },
      { question: "Can treatment affect my fertility?", answer: "Your gynaecologist considers your pregnancy plans before choosing treatment. Fertility-sparing options, such as removing fibroids or cysts while keeping the uterus and ovaries, are preferred whenever possible." },
    ],
    "About M’Brace": [
      { question: "Is gynaecology available in LB Nagar and King Koti?", answer: "Yes. M’Brace offers gynaecology in LB Nagar and gynaecology in King Koti, with consultations, ultrasound, lab tests and procedures at both Kamineni Hospitals units." },
      { question: "How do I choose the best gynaecologist in Hyderabad?", answer: "Look for consultant-level qualifications, surgical experience if a procedure may be needed, on-site ultrasound and laboratory facilities, and a clear explanation of your options. M’Brace’s gynaecologists hold DGO, DNB, MD or MS qualifications, with laparoscopic and fertility expertise in the same team." },
      { question: "What should I look for in the best obstetrics & gynecology hospital in Hyderabad?", answer: "Pregnancy care and gynaecology under one roof, with ultrasound, laboratory, theatres and a NICU on site. M’Brace combines these within NABH- and NABL-accredited Kamineni Hospitals, so care continues from gynaecology to pregnancy and delivery." },
    ],
  };

  function book(serviceName = "", doctorName = "", type = "") {
    setBookingService(serviceName || service.name);
    setBookingDoctor(doctorName);
    if (doctorName) setBookingLocation("LB Nagar");
    setBookingType(type);
    setStatus("idle");
    document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
    formRef.current?.querySelector<HTMLInputElement>("input[name=name]")?.focus({ preventScroll: true });
  }
  async function submitAppointment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const formData = new FormData(event.currentTarget);
    formData.set("source", "mbrace-service-detail");
    formData.set("doctor", bookingDoctor);
    formData.set("appointmentType", bookingType);
    const result = await submitAppointmentRequestAction(formData);
    setStatus(result.ok ? "success" : "error");
  }

  return (
    <div className="mbrace-home font-sans text-care-copy bg-white text-[15px] leading-[1.6] [--care-header-height:72px] sm:[--care-header-height:80px] xl:[--care-header-height:96px] xl:pt-0 pt-[var(--care-header-height)] [&_*]:box-border [&_section]:scroll-mt-[calc(var(--care-header-height)_+_20px)] xl:[&_section]:scroll-mt-[24px] [&_button]:cursor-pointer [&_button]:[transition:background_.2s,color_.2s,transform_.2s] [&_select]:cursor-pointer [&_a]:[transition:background_.2s,color_.2s,transform_.2s] [&_button:disabled]:cursor-wait [&_button:disabled]:opacity-[.6] [&_em]:not-italic [&_em]:text-care-gold [&_em]:font-bold [&_:focus-visible]:[outline:3px_solid_var(--color-care-navy)] [&_:focus-visible]:outline-offset-[4px] motion-reduce:[&_a]:[transition:none] motion-reduce:[&_button]:[transition:none] [&_.mb-container>*]:min-w-0 [&_[id]]:scroll-mt-[calc(var(--care-header-height)_+_20px)] xl:[&_[id]]:scroll-mt-[24px]">
      <ServiceHero
        categoryLabel={service.category.label}
        name={service.name}
        description={service.description}
        heroImage={service.heroImage || "/services-details-banner.png"}
        book={book}
        careCategories={careCategories}
        hospital={hospital}
        isGynecology={isGynecology}
      />
      {blocks.length > 0 ? <DynamicPageSections blocks={blocks} /> : <GynecologyDetailSections book={() => book(service.name)} />}

      <DoctorsSection
        featuredDoctor={featuredDoctor}
        book={book}
        homeDoctors={isGynecology && featuredDoctor ? [featuredDoctor, ...doctors.filter((doctor) => doctor.slug !== featuredDoctor.slug)] : doctors}
        heading={<>Find Your <em>Gynaecologist</em></>}
        description={isGynecology ? "Looking for a gynaecologist in Hyderabad? M’Brace’s five senior consultants cover medical gynaecology, laparoscopic and robotic surgery, and fertility, so one team can manage your condition from diagnosis to recovery." : undefined}
        getProfileHref={(d) => `/doctors/${d.slug}`}
        layout="service-detail"
      />
      <FaqSection
        careCategories={isGynecology ? Object.keys(gynecologyFaqs) : [faqCategory, ...careCategories.filter(c => c !== faqCategory)]}
        homeFaqs={isGynecology ? gynecologyFaqs : homeFaqs}
        label={isGynecology ? "Frequently Asked Questions" : undefined}
        heading={isGynecology ? "Your Queries" : undefined}
        highlight={isGynecology ? "Answered by Experts." : undefined}
        description={isGynecology ? "What women most often ask before seeing a gynaecologist." : undefined}
      />
      <LocationSection
        location={location}
        setLocation={setLocation}
        hospital={hospital}
        setBookingLocation={setBookingLocation}
        book={book}
        mapUrl={mapUrl}
      />
      <AppointmentSection
        status={status}
        setStatus={setStatus}
        formRef={formRef}
        submitAppointment={submitAppointment}
        bookingDoctor={bookingDoctor}
        bookingType={bookingType}
        bookingEmail={bookingEmail}
        setBookingEmail={setBookingEmail}
        bookingDate={bookingDate}
        setBookingDate={setBookingDate}
        bookingService={bookingService || service.name}
        setBookingService={setBookingService}
        careCategories={careCategories}
        bookingLocation={bookingLocation}
        setBookingLocation={setBookingLocation}
        hospital={hospital}
        label={isGynecology ? "Have a Gynaecological Concern?" : undefined}
        heading={isGynecology ? "Book Appointment Today" : undefined}
        description={isGynecology ? "Fill in the form and the M’Brace care team will call you to fix a consultation with a gynaecologist in LB Nagar or King Koti." : undefined}
      />
      <HomeFooter
        hospital={hospital}
        serviceGroups={serviceGroups}
        setServiceTab={() => {}}
        setLocation={setLocation}
        mapUrl={mapUrl}
        basePath="/"
        ctaHeading={isGynecology ? "Speak to a Women’s Specialist" : undefined}
        ctaDescription={isGynecology ? "Questions about pregnancy, gynaecology, menopause or preventive health? Share your email and the M’Brace team will contact you to arrange a consultation." : undefined}
      />
    </div>
  );
}
