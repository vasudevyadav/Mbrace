"use client";

import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { Location, LocationHighlight } from "@prisma/client";
import type { HomeData } from "@/lib/queries";
import { submitAppointmentRequestAction } from "@/lib/publicActions";
import { locations as toggleLocations } from "../content";
import type { AppointmentStatus, DetailContent } from "../types";
import ExcellenceSection from "../ExcellenceSection";
import DoctorsSection from "../DoctorsSection";
import TestimonialsSection from "../TestimonialsSection";
import FaqSection from "../FaqSection";
import LocationSection from "../LocationSection";
import BlogsSection from "../BlogsSection";
import AppointmentSection from "../AppointmentSection";
import HomeFooter from "../HomeFooter";
import DetailsDialog from "../DetailsDialog";
import LocationHero from "./LocationHero";
import ServicesAtLocation from "./ServicesAtLocation";
import WhatToExpect from "./WhatToExpect";
import OurCarePromise from "./OurCarePromise";
import WhyPatientsChoose from "./WhyPatientsChoose";
import HowToReach from "./HowToReach";
import VisitClinicCta from "./VisitClinicCta";

type LocationWithHighlights = Location & { highlights: LocationHighlight[] };

export default function LocationPageClient({ location, data }: { location: LocationWithHighlights; data: HomeData }) {
  const { hospital, careCategories, serviceGroups, doctors, featuredDoctor, homeTestimonials, homeFaqs, homeBlogs } = data;
  const bysection = (section: string) => location.highlights.filter(h => h.section === section);

  const router = useRouter();
  const [toggleLocation, setToggleLocation] = useState(toggleLocations[0]);
  const [bookingService, setBookingService] = useState("");
  const [bookingLocation, setBookingLocation] = useState(location.name);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingDoctor, setBookingDoctor] = useState("");
  const [bookingType, setBookingType] = useState("");
  const [status, setStatus] = useState<AppointmentStatus>("idle");
  const [detail, setDetail] = useState<DetailContent | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const mapQuery = toggleLocation === "LB Nagar" ? `Mbrace Kamineni Hospitals ${hospital.address}` : "Kamineni Hospitals King Koti Hyderabad";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

  function book(service = "", doctorName = "", type = "") {
    if (service) setBookingService(service);
    setBookingDoctor(doctorName);
    setBookingLocation(location.name);
    setBookingType(type);
    setStatus("idle");
    dialog.current?.close();
    document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
    formRef.current?.querySelector<HTMLInputElement>("input[name=name]")?.focus({ preventScroll: true });
  }
  function showDetails(next: DetailContent) {
    setDetail(next);
    dialog.current?.showModal();
  }
  function goToServices() {
    router.push("/#services");
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
    <div className="mbrace-home font-sans text-care-copy bg-white text-[15px] leading-[1.6] max-[601px]:[--care-header-height:72px] min-[601px]:max-[1201px]:[--care-header-height:80px] min-[1201px]:[--care-header-height:96px] min-[1201px]:pt-0 max-[1201px]:pt-[var(--care-header-height)] [&_*]:box-border max-[1201px]:[&_section]:scroll-mt-[calc(var(--care-header-height)_+_20px)] min-[1201px]:[&_section]:scroll-mt-[24px] [&_button]:cursor-pointer [&_button]:[transition:background_.2s,color_.2s,transform_.2s] [&_select]:cursor-pointer [&_a]:[transition:background_.2s,color_.2s,transform_.2s] [&_button:disabled]:cursor-wait [&_button:disabled]:opacity-[.6] [&_em]:not-italic [&_em]:text-care-gold [&_em]:font-bold [&_:focus-visible]:[outline:3px_solid_var(--color-care-navy)] [&_:focus-visible]:outline-offset-[4px] motion-reduce:[&_a]:[transition:none] motion-reduce:[&_button]:[transition:none] max-[701px]:[&_.mb-container>*]:min-w-0 max-[1201px]:[&_[id]]:scroll-mt-[calc(var(--care-header-height)_+_20px)] min-[1201px]:[&_[id]]:scroll-mt-[24px]">
      <LocationHero
        name={location.name}
        phone={location.phone}
        phoneHref={location.phoneHref}
        heroImage={location.heroImage}
        book={book}
        goToServices={goToServices}
        careCategories={careCategories}
        hospital={hospital}
      />
      <ExcellenceSection />
      <ServicesAtLocation locationName={location.name} intro={location.introParagraph} image={location.servicesImage || location.heroImage} items={bysection("service")} />
      <WhatToExpect locationName={location.name} intro={location.whatToExpectIntro} steps={bysection("step")} />
      <OurCarePromise locationName={location.name} intro={location.carePromiseIntro} cards={bysection("promise")} />
      <WhyPatientsChoose
        locationName={location.name}
        intro={location.whyChooseIntro}
        stats={bysection("stat").map(s => ({ value: s.title, label: s.description }))}
        features={bysection("feature")}
      />
      <DoctorsSection
        featuredDoctor={featuredDoctor}
        book={book}
        homeDoctors={doctors}
        getProfileHref={(d) => `/doctors/${d.slug}`}
      />
      <TestimonialsSection homeTestimonials={homeTestimonials} />
      <FaqSection careCategories={careCategories} homeFaqs={homeFaqs} />
      <HowToReach locationName={location.name} intro={location.reachIntro} cards={bysection("reach")} />
      <VisitClinicCta
        locationName={location.name}
        image={location.clinicImage || location.heroImage}
        phone={location.phone}
        phoneHref={location.phoneHref}
        email={location.email}
        book={book}
      />
      <LocationSection
        location={toggleLocation}
        setLocation={setToggleLocation}
        hospital={hospital}
        setBookingLocation={setBookingLocation}
        book={book}
        mapUrl={mapUrl}
      />
      <BlogsSection homeBlogs={homeBlogs} showDetails={showDetails} />
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
        goToServices={goToServices}
        serviceGroups={serviceGroups}
        setServiceTab={() => {}}
        setLocation={setToggleLocation}
        mapUrl={mapUrl}
        basePath="/"
      />
      <DetailsDialog dialog={dialog} detail={detail} book={book} hospital={hospital} />
    </div>
  );
}
