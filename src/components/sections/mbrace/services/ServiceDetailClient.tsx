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
  const blocks = (Array.isArray(service.blocks) ? service.blocks : []) as BlogBlock[];

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
      />
      {blocks.length > 0 ? <DynamicPageSections blocks={blocks} /> : <GynecologyDetailSections book={() => book(service.name)} />}

      <DoctorsSection
        featuredDoctor={featuredDoctor}
        book={book}
        homeDoctors={doctors}
        heading={<>Find Your <em>Gynaecologist</em></>}
        description="Our panel of specialists bring together senior consultants in obstetrics, gynaecology and fertility, paediatricians and neonatologists, and dedicated fertility specialists and embryologists, practised for a decade or more, holding advanced fellowships and specialist training from institutions in India and abroad."
        getProfileHref={(d) => `/doctors/${d.slug}`}
        layout="service-detail"
      />
      <FaqSection careCategories={[faqCategory, ...careCategories.filter(c => c !== faqCategory)]} homeFaqs={homeFaqs} />
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
      />
      <HomeFooter
        hospital={hospital}
        serviceGroups={serviceGroups}
        setServiceTab={() => {}}
        setLocation={setLocation}
        mapUrl={mapUrl}
        basePath="/"
      />
    </div>
  );
}
