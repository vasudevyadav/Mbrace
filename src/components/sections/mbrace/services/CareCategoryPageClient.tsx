"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import type { ServiceItem, ServiceCategory } from "@prisma/client";
import type { HomeData } from "@/lib/queries";
import { submitAppointmentRequestAction } from "@/lib/publicActions";
import { locations } from "../content";
import type { AppointmentStatus, DetailContent } from "../types";
import DoctorsSection from "../DoctorsSection";
import TestimonialsSection from "../TestimonialsSection";
import FaqSection from "../FaqSection";
import LocationSection from "../LocationSection";
import BlogsSection from "../BlogsSection";
import AppointmentSection from "../AppointmentSection";
import HomeFooter from "../HomeFooter";
import DetailsDialog from "../DetailsDialog";
import CareHero from "./CareHero";
import CareJourneySection from "./CareJourneySection";
import TalkToExpertsSection from "./TalkToExpertsSection";
import CareWhyChooseSection from "./CareWhyChooseSection";
import CareExcellenceSection from "./CareExcellenceSection";
import type { CareCategoryContent } from "./careCategoryContent";

type CategoryWithItems = ServiceCategory & { items: ServiceItem[] };

const serviceSectionCopy: Record<string, { line1: string; line2: string }> = {
  "Women's Care": { line1: "Gynaecology, Maternity &", line2: "Menopause Care Under One Team" },
  "Child Care": { line1: "Check-Ups, NICU, PICU", line2: "Surgery & Emergency" },
  "Pregnancy & Birth Support": { line1: "Check-Ups, Scans, Delivery Rooms,", line2: "Surgery and High-Risk Care!" },
  "Fertility Care": { line1: "Tests, Treatment & Lab Support", line2: "All Under One Roof!" },
};

export default function CareCategoryPageClient({
  careCategoryLabel,
  content,
  category,
  data,
}: {
  careCategoryLabel: string;
  content: CareCategoryContent;
  category: CategoryWithItems;
  data: HomeData;
}) {
  const { hospital, careCategories, serviceGroups, doctors, featuredDoctor, homeTestimonials, homeFaqs, homeBlogs, stats } = data;
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
  const servicesCopy = serviceSectionCopy[careCategoryLabel];

  function book(serviceName = "", doctorName = "", type = "") {
    setBookingService(serviceName || careCategoryLabel);
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
  async function submitAppointment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const formData = new FormData(event.currentTarget);
    formData.set("source", "mbrace-care-category");
    formData.set("doctor", bookingDoctor);
    formData.set("appointmentType", bookingType);
    const result = await submitAppointmentRequestAction(formData);
    setStatus(result.ok ? "success" : "error");
  }

  return (
    <div className="mbrace-home font-sans text-care-copy bg-white text-[15px] leading-[1.6] [--care-header-height:72px] sm:[--care-header-height:80px] xl:[--care-header-height:96px] xl:pt-0 pt-[var(--care-header-height)] [&_*]:box-border [&_section]:scroll-mt-[calc(var(--care-header-height)_+_20px)] xl:[&_section]:scroll-mt-[24px] [&_button]:cursor-pointer [&_button]:[transition:background_.2s,color_.2s,transform_.2s] [&_select]:cursor-pointer [&_a]:[transition:background_.2s,color_.2s,transform_.2s] [&_button:disabled]:cursor-wait [&_button:disabled]:opacity-[.6] [&_em]:not-italic [&_em]:text-care-gold [&_em]:font-bold [&_:focus-visible]:[outline:3px_solid_var(--color-care-navy)] [&_:focus-visible]:outline-offset-[4px] motion-reduce:[&_a]:[transition:none] motion-reduce:[&_button]:[transition:none] [&_.mb-container>*]:min-w-0 [&_[id]]:scroll-mt-[calc(var(--care-header-height)_+_20px)] xl:[&_[id]]:scroll-mt-[24px]">
      <CareHero
        content={content}
        book={book}
        careCategories={careCategories}
        hospital={hospital}
        stats={stats}
        bookingService={bookingService}
        setBookingService={setBookingService}
        bookingLocation={bookingLocation}
        setBookingLocation={setBookingLocation}
        bookingDate={bookingDate}
        setBookingDate={setBookingDate}
      />
      <CareJourneySection heading={content.journeyHeading} highlight={content.journeyHighlight} journey={content.journey} />
      <TalkToExpertsSection heading={content.talkToExpertsHeading} body={content.talkToExpertsBody} book={() => book()} />

      {category.items.length > 0 && (
        <section id="services" className="mb-section pt-12 pb-12 md:pt-15 md:pb-15 lg:pt-20 lg:pb-20 [&_p]:leading-[1.65] mb-tinted [background:linear-gradient(110deg,#fff3df,#f3e9fc)] [&_.mb-eyebrow]:text-care-purple mb-rounded rounded-[20px] md:rounded-[28px]">
          <div className="mb-container w-[calc(100%_-_40px)] md:w-[calc(100%_-_48px)] lg:w-[calc(100%_-_80px)] xl:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto">
            <div className="mb-section-intro grid items-center grid-cols-[1fr] gap-4 mb-6.5 md:grid-cols-[1.08fr_1fr] md:mb-7.5 md:gap-7.5 lg:gap-10 xl:gap-[75px] [&_.mb-heading]:mb-0">
              <h2 className="text-[26px] md:text-[31px] lg:text-[35px] font-semibold text-care-navy leading-[1.35]"><span className="mb-eyebrow block text-[14px] font-semibold text-care-gold mb-2">Services We Offer</span>{servicesCopy.line1}<br /><em>{servicesCopy.line2}</em></h2>
            </div>
            <div className="mb-service-grid grid grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(4,1fr)] gap-3 md:gap-4.5 lg:gap-6 [&_article]:flex [&_article]:flex-col [&_article]:bg-[#fff] [&_article]:[border:1px_solid_#e5e7eb] [&_article]:rounded-[16px] [&_article]:[transition:background_.2s,_color_.2s] [&_article]:shadow-[0_14px_14px_rgba(0,0,0,0.07),0_2px_4px_rgba(0,0,0,0.04)] [&_article]:min-h-67.5 [&_article]:pt-4 [&_article]:pr-4 [&_article]:pb-4 [&_article]:pl-4 md:[&_article]:min-h-[245px] md:[&_article]:pt-5 md:[&_article]:pr-5 md:[&_article]:pb-5 md:[&_article]:pl-5 [&_h3]:text-[18px] [&_h3]:font-bold [&_h3]:text-care-navy [&_h3]:leading-[1.45] [&_h3]:mb-3 [&_h3]:[transition:color_.2s] [&_p]:text-[14px] md:[&_p]:text-[13px] [&_p]:[flex:initial] [&_a]:[align-self:start] [&_a]:text-care-purple [&_a]:text-[13px] [&_a]:mt-3 [&_a]:[transition:color_.2s] [&_article:hover]:bg-care-purple [&_article:hover]:text-white [&_article:hover]:[border-color:var(--color-care-purple)] [&_article:hover_h3]:text-white [&_article:hover_a]:text-care-gold [&>*]:min-w-0">
              {category.items.map((item, index) => (
                <article key={item.id}>
                  <Image className="mb-service-icon w-11 h-11 mb-3.5" src={`/images/figma/service-${index % 8}.svg`} width={44} height={44} alt="" />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <Link href={`/services/${item.slug}`}>Learn More <span aria-hidden="true">→</span></Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CareWhyChooseSection heading={content.whyChooseHeading} highlight={content.whyChooseHighlight} body={content.whyChooseBody} />

      <DoctorsSection
        featuredDoctor={featuredDoctor}
        book={book}
        homeDoctors={doctors.slice(0, 4)}
        getProfileHref={(d) => `/doctors/${d.slug}`}
      />

      <CareExcellenceSection eyebrow={content.excellenceEyebrow} heading={content.excellenceHeading} highlight={content.excellenceHighlight} body={content.excellenceBody} stats={stats} />

      <TestimonialsSection homeTestimonials={homeTestimonials} />
      <FaqSection careCategories={[careCategoryLabel, ...careCategories.filter(c => c !== careCategoryLabel)]} homeFaqs={homeFaqs} />
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
        bookingService={bookingService || careCategoryLabel}
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
      <DetailsDialog dialog={dialog} detail={detail} book={book} hospital={hospital} />
    </div>
  );
}
