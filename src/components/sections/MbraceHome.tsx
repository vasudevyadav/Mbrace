"use client";

import { useRef, useState, type FormEvent } from "react";
import type { HomeData } from "@/lib/queries";
import { submitAppointmentRequestAction } from "@/lib/publicActions";
import { locations } from "./mbrace/content";
import type { AppointmentStatus, DetailContent } from "./mbrace/types";
import HeroSection from "./mbrace/HeroSection";
import BookingShortcuts from "./mbrace/BookingShortcuts";
import AboutSection from "./mbrace/AboutSection";
import ServicesSection from "./mbrace/ServicesSection";
import ExcellenceSection from "./mbrace/ExcellenceSection";
import WhyChooseUsSection from "./mbrace/WhyChooseUsSection";
import DoctorsSection from "./mbrace/DoctorsSection";
import AwardsSection from "./mbrace/AwardsSection";
import TestimonialsSection from "./mbrace/TestimonialsSection";
import FaqSection from "./mbrace/FaqSection";
import LocationSection from "./mbrace/LocationSection";
import BlogsSection from "./mbrace/BlogsSection";
import AppointmentSection from "./mbrace/AppointmentSection";
import HomeFooter from "./mbrace/HomeFooter";
import DetailsDialog from "./mbrace/DetailsDialog";

export default function MbraceHome({ data }: { data: HomeData }) {
  const { hospital, careCategories, serviceGroups, doctors: homeDoctors, homeTestimonials, homeFaqs, homeBlogs, featuredDoctor, hero, stats } = data;
  const [serviceTab, setServiceTab] = useState("Women Care");
  const [location, setLocation] = useState(locations[0]);
  const [bookingService, setBookingService] = useState("");
  const [bookingLocation, setBookingLocation] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingDoctor, setBookingDoctor] = useState("");
  const [bookingType, setBookingType] = useState("");
  const [status, setStatus] = useState<AppointmentStatus>("idle");
  const [detail, setDetail] = useState<DetailContent | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const mapQuery = location === "LB Nagar" ? `Mbrace Kamineni Hospitals ${hospital.address}` : "Kamineni Hospitals King Koti Hyderabad";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
  function book(service = "", doctor = "", type = "") {
    if (service) setBookingService(service);
    setBookingDoctor(doctor);
    if (doctor) setBookingLocation("LB Nagar");
    setBookingType(type);
    setStatus("idle");
    dialog.current?.close();
    document.getElementById("appointment")?.scrollIntoView({
      behavior: "smooth"
    });
    formRef.current?.querySelector<HTMLInputElement>("input[name=name]")?.focus({
      preventScroll: true
    });
  }
  function showDetails(next: DetailContent) {
    setDetail(next);
    dialog.current?.showModal();
  }
  function goToServices(category: string) {
    setServiceTab(category === "Child Care" ? "Child Care" : category === "Fertility Care" ? "Fertility" : "Women Care");
  }
  async function submitAppointment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const formData = new FormData(event.currentTarget);
    formData.set("source", "mbrace-homepage");
    formData.set("doctor", bookingDoctor);
    formData.set("appointmentType", bookingType);
    const result = await submitAppointmentRequestAction(formData);
    setStatus(result.ok ? "success" : "error");
  }

  return (
    <div className="mbrace-home font-sans text-care-copy bg-white text-[15px] leading-[1.6] max-[601px]:[--care-header-height:72px] min-[601px]:max-[1201px]:[--care-header-height:80px] min-[1201px]:[--care-header-height:96px] min-[1201px]:pt-0 max-[1201px]:pt-[var(--care-header-height)] [&_*]:box-border max-[1201px]:[&_section]:scroll-mt-[calc(var(--care-header-height)_+_20px)] min-[1201px]:[&_section]:scroll-mt-[24px] [&_button]:cursor-pointer [&_button]:[transition:background_.2s,color_.2s,transform_.2s] [&_select]:cursor-pointer [&_a]:[transition:background_.2s,color_.2s,transform_.2s] [&_button:disabled]:cursor-wait [&_button:disabled]:opacity-[.6] [&_em]:not-italic [&_em]:text-care-gold [&_em]:font-bold [&_:focus-visible]:[outline:3px_solid_var(--color-care-navy)] [&_:focus-visible]:outline-offset-[4px] motion-reduce:[&_a]:[transition:none] motion-reduce:[&_button]:[transition:none] max-[701px]:[&_.mb-container>*]:min-w-0 max-[1201px]:[&_[id]]:scroll-mt-[calc(var(--care-header-height)_+_20px)] min-[1201px]:[&_[id]]:scroll-mt-[24px]">
      <HeroSection
        book={book}
        goToServices={goToServices}
        careCategories={careCategories}
        hospital={hospital}
        hero={hero}
        stats={stats}
        bookingService={bookingService}
        setBookingService={setBookingService}
        bookingLocation={bookingLocation}
        setBookingLocation={setBookingLocation}
        bookingDate={bookingDate}
        setBookingDate={setBookingDate}
      />
      <BookingShortcuts
        book={book}
      />
      <AboutSection
        stats={stats}
      />
      <ServicesSection
        serviceGroups={serviceGroups}
        serviceTab={serviceTab}
        setServiceTab={setServiceTab}
        showDetails={showDetails}
      />
      <ExcellenceSection />
      <WhyChooseUsSection
        stats={stats}
      />
      <DoctorsSection
        featuredDoctor={featuredDoctor}
        book={book}
        homeDoctors={homeDoctors}
      />
      <AwardsSection
        stats={stats}
      />
      <TestimonialsSection
        homeTestimonials={homeTestimonials}
      />
      <FaqSection
        careCategories={careCategories}
        homeFaqs={homeFaqs}
      />
      <LocationSection
        location={location}
        setLocation={setLocation}
        hospital={hospital}
        setBookingLocation={setBookingLocation}
        book={book}
        mapUrl={mapUrl}
      />
      <BlogsSection
        homeBlogs={homeBlogs}
        showDetails={showDetails}
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
        setServiceTab={setServiceTab}
        setLocation={setLocation}
        mapUrl={mapUrl}
      />
      <DetailsDialog
        dialog={dialog}
        detail={detail}
        book={book}
        hospital={hospital}
      />
    </div>
  );
}
