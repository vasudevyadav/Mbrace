"use client";

import { useRef, useState, type FormEvent } from "react";
import type { Location, LocationHighlight } from "@prisma/client";
import type { HomeData } from "@/lib/queries";
import { submitAppointmentRequestAction } from "@/lib/publicActions";
import { locations as toggleLocations } from "../content";
import type { AppointmentStatus } from "../types";
import TestimonialsSection from "../TestimonialsSection";
import FaqSection from "../FaqSection";
import LocationSection from "../LocationSection";
import AppointmentSection from "../AppointmentSection";
import HomeFooter from "../HomeFooter";
import LocationHero from "./LocationHero";
import ServicesAtLocation from "./ServicesAtLocation";
import WhatToExpect from "./WhatToExpect";
import OurCarePromise from "./OurCarePromise";
import WhyPatientsChoose from "./WhyPatientsChoose";
import VisitClinicCta from "./VisitClinicCta";
import DynamicPageSections from "../DynamicPageSections";
import type { BlogBlock } from "../blog/blogContent";
import type { DynamicPageSection } from "../dynamicPageContent";

type LocationWithHighlights = Location & { highlights: LocationHighlight[] };

export default function LocationPageClient({ location, data }: { location: LocationWithHighlights; data: HomeData }) {
  const { hospital, careCategories, serviceGroups, homeTestimonials, homeFaqs } = data;
  const bysection = (section: string) => location.highlights.filter(h => h.section === section);
  const blocks = (Array.isArray(location.blocks) ? location.blocks : []) as Array<BlogBlock | DynamicPageSection>;

  const [toggleLocation, setToggleLocation] = useState(toggleLocations[0]);
  const [bookingService, setBookingService] = useState("");
  const [bookingLocation, setBookingLocation] = useState(location.name);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingDoctor, setBookingDoctor] = useState("");
  const [bookingType, setBookingType] = useState("");
  const [status, setStatus] = useState<AppointmentStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const mapQuery = toggleLocation === "LB Nagar" ? `Mbrace Kamineni Hospitals ${hospital.address}` : "Kamineni Hospitals King Koti Hyderabad";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

  function book(service = "", doctorName = "", type = "") {
    if (service) setBookingService(service);
    setBookingDoctor(doctorName);
    setBookingLocation(location.name);
    setBookingType(type);
    setStatus("idle");
    document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
    formRef.current?.querySelector<HTMLInputElement>("input[name=name]")?.focus({ preventScroll: true });
  }
  async function submitAppointment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const formData = new FormData(event.currentTarget);
    formData.set("source", "mbrace-location-page");
    formData.set("doctor", bookingDoctor);
    formData.set("appointmentType", bookingType);
    const result = await submitAppointmentRequestAction(formData);
    setStatus(result.ok ? "success" : "error");
  }

  return (
    <div className="mbrace-home bg-white pt-[var(--care-header-height)] font-sans text-[15px] leading-[1.6] text-care-copy [--care-header-height:72px] sm:[--care-header-height:80px] lg:pt-0 lg:[--care-header-height:96px] [&_*]:box-border [&_.mb-container>*]:min-w-0 [&_a]:[transition:background_.2s,color_.2s,transform_.2s] [&_button:disabled]:cursor-wait [&_button:disabled]:opacity-[.6] [&_button]:cursor-pointer [&_button]:[transition:background_.2s,color_.2s,transform_.2s] [&_em]:font-bold [&_em]:not-italic [&_em]:text-care-gold [&_[id]]:scroll-mt-[calc(var(--care-header-height)_+_20px)] [&_section]:scroll-mt-[calc(var(--care-header-height)_+_20px)] [&_select]:cursor-pointer [&_:focus-visible]:outline-offset-[4px] [&_:focus-visible]:[outline:3px_solid_var(--color-care-navy)] motion-reduce:[&_a]:[transition:none] motion-reduce:[&_button]:[transition:none] lg:[&_[id]]:scroll-mt-6 lg:[&_section]:scroll-mt-6">
      <LocationHero
        name={location.name}
        phone={location.phone}
        phoneHref={location.phoneHref}
        heroImage={location.heroImage}
        book={book}
        careCategories={careCategories}
        hospital={hospital}
      />
      {blocks.length > 0 ? (
        <DynamicPageSections blocks={blocks} />
      ) : (
        <>
          <VisitClinicCta
            locationName={location.name}
            image={location.clinicImage || location.heroImage}
            phone={location.phone}
            phoneHref={location.phoneHref}
            email={location.email}
            book={book}
          />
          <WhyPatientsChoose
            locationName={location.name}
            intro={location.whyChooseIntro}
            stats={bysection("stat").map(s => ({ value: s.title, label: s.description }))}
            features={bysection("feature")}
          />
          <ServicesAtLocation locationName={location.name} intro={location.introParagraph} image={location.servicesImage || location.heroImage} items={bysection("service")} />
          <WhatToExpect locationName={location.name} intro={location.whatToExpectIntro} steps={bysection("step")} />
          <OurCarePromise locationName={location.name} intro={location.carePromiseIntro} cards={bysection("promise")} />
        </>
      )}
      <LocationSection
        location={toggleLocation}
        setLocation={setToggleLocation}
        hospital={hospital}
        setBookingLocation={setBookingLocation}
        book={book}
        mapUrl={mapUrl}
      />
      <TestimonialsSection homeTestimonials={homeTestimonials} />
      <FaqSection careCategories={careCategories} homeFaqs={homeFaqs} />
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
        bookingService={bookingService}
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
        setLocation={setToggleLocation}
        mapUrl={mapUrl}
        basePath="/"
      />
    </div>
  );
}
