"use client";

import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { ServiceItem, ServiceCategory } from "@prisma/client";
import type { HomeData } from "@/lib/queries";
import { submitAppointmentRequestAction } from "@/lib/publicActions";
import { locations } from "../content";
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
import ServiceHero from "./ServiceHero";

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

export default function ServiceDetailClient({ service, siblingServices, data }: { service: ServiceWithCategory; siblingServices: ServiceItem[]; data: HomeData }) {
  const { hospital, careCategories, serviceGroups, doctors, featuredDoctor, homeTestimonials, homeFaqs, homeBlogs } = data;
  const router = useRouter();
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
  const faqCategory = matchCareCategory(service.category.label, careCategories);

  function book(serviceName = "", doctorName = "", type = "") {
    setBookingService(serviceName || service.name);
    setBookingDoctor(doctorName);
    if (doctorName) setBookingLocation("LB Nagar");
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
    formData.set("source", "mbrace-service-detail");
    formData.set("doctor", bookingDoctor);
    formData.set("appointmentType", bookingType);
    const result = await submitAppointmentRequestAction(formData);
    setStatus(result.ok ? "success" : "error");
  }

  return (
    <div className="mbrace-home font-sans text-care-copy bg-white text-[15px] leading-[1.6] max-[601px]:[--care-header-height:72px] min-[601px]:max-[1201px]:[--care-header-height:80px] min-[1201px]:[--care-header-height:96px] min-[1201px]:pt-0 max-[1201px]:pt-[var(--care-header-height)] [&_*]:box-border max-[1201px]:[&_section]:scroll-mt-[calc(var(--care-header-height)_+_20px)] min-[1201px]:[&_section]:scroll-mt-[24px] [&_button]:cursor-pointer [&_button]:[transition:background_.2s,color_.2s,transform_.2s] [&_select]:cursor-pointer [&_a]:[transition:background_.2s,color_.2s,transform_.2s] [&_button:disabled]:cursor-wait [&_button:disabled]:opacity-[.6] [&_em]:not-italic [&_em]:text-care-gold [&_em]:font-bold [&_:focus-visible]:[outline:3px_solid_var(--color-care-navy)] [&_:focus-visible]:outline-offset-[4px] motion-reduce:[&_a]:[transition:none] motion-reduce:[&_button]:[transition:none] max-[701px]:[&_.mb-container>*]:min-w-0 max-[1201px]:[&_[id]]:scroll-mt-[calc(var(--care-header-height)_+_20px)] min-[1201px]:[&_[id]]:scroll-mt-[24px]">
      <ServiceHero
        categoryLabel={service.category.label}
        name={service.name}
        description={service.detail || service.description}
        heroImage={service.heroImage}
        book={book}
        goToServices={goToServices}
        careCategories={careCategories}
        hospital={hospital}
      />
      <ExcellenceSection />

      {siblingServices.length > 0 && (
        <section className="mb-section max-[701px]:pt-12 max-[701px]:pb-12 min-[701px]:max-[1001px]:pt-15 min-[701px]:max-[1001px]:pb-15 min-[1001px]:pt-20 min-[1001px]:pb-20">
          <div className="mb-container max-[701px]:w-[calc(100%_-_40px)] min-[701px]:max-[1001px]:w-[calc(100%_-_48px)] min-[1001px]:max-[1201px]:w-[calc(100%_-_80px)] min-[1201px]:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto">
            <p className="mb-eyebrow text-[14px] font-semibold text-care-gold mb-3.5">{service.category.label}</p>
            <h2 className="mb-7 font-semibold text-care-navy max-[701px]:text-[30px] min-[701px]:text-[35px] min-[1201px]:text-[42px] leading-[1.35]">Related Services</h2>
            <div className="grid gap-5 max-[1001px]:grid-cols-2 min-[1001px]:grid-cols-4">
              {siblingServices.map(item => (
                <Link key={item.id} href={`/services/${item.slug}`} className="group flex flex-col rounded-[16px] border border-[#e9e4f0] bg-white p-5 shadow-[0_10px_18px_#33214c12] transition hover:bg-care-purple hover:text-white">
                  <h3 className="text-[16px] font-bold leading-[1.4] text-care-navy group-hover:text-white">{item.name}</h3>
                  <p className="mt-2 text-[13px] leading-[1.5] text-[#595959] group-hover:text-white/90">{item.description}</p>
                  <span className="mt-3 text-[13px] text-care-purple group-hover:text-care-gold">Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <DoctorsSection
        featuredDoctor={featuredDoctor}
        book={book}
        homeDoctors={doctors}
        getProfileHref={(d) => `/doctors/${d.slug}`}
      />
      <TestimonialsSection homeTestimonials={homeTestimonials} />
      <FaqSection careCategories={[faqCategory, ...careCategories.filter(c => c !== faqCategory)]} homeFaqs={homeFaqs} />
      <LocationSection
        location={location}
        setLocation={setLocation}
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
        bookingService={bookingService || service.name}
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
        setLocation={setLocation}
        mapUrl={mapUrl}
        basePath="/"
      />
      <DetailsDialog dialog={dialog} detail={detail} book={book} hospital={hospital} />
    </div>
  );
}
