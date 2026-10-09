"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { HomeData } from "@/lib/queries";
import AboutHero from "./AboutHero";
import MissionVisionValues from "./MissionVisionValues";
import DirectorMessage from "./DirectorMessage";
import AboutSection from "../AboutSection";
import WhyChooseUsSection from "../WhyChooseUsSection";
import DoctorsSection from "../DoctorsSection";
import HomeFooter from "../HomeFooter";
import FaqSection from "../FaqSection";
import { aboutFaqs } from "./content";

export default function AboutPageClient({ data }: { data: HomeData }) {
  const { hospital, careCategories, serviceGroups, doctors: homeDoctors, featuredDoctor, hero, stats } = data;
  const router = useRouter();
  const [bookingService, setBookingService] = useState("");
  const [bookingLocation, setBookingLocation] = useState("");
  const [bookingDate, setBookingDate] = useState("");

  function book(service = "") {
    if (service) setBookingService(service);
    router.push("/#appointment");
  }
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Mbrace Kamineni Hospitals ${hospital.address}`)}`;

  return (
    <div className="mbrace-home font-sans text-care-copy bg-white text-[15px] leading-[1.6] [--care-header-height:72px] sm:[--care-header-height:80px] xl:[--care-header-height:96px] xl:pt-0 pt-[var(--care-header-height)] [&_*]:box-border [&_section]:scroll-mt-[calc(var(--care-header-height)_+_20px)] xl:[&_section]:scroll-mt-[24px] [&_button]:cursor-pointer [&_button]:[transition:background_.2s,color_.2s,transform_.2s] [&_select]:cursor-pointer [&_a]:[transition:background_.2s,color_.2s,transform_.2s] [&_button:disabled]:cursor-wait [&_button:disabled]:opacity-[.6] [&_em]:not-italic [&_em]:text-care-gold [&_em]:font-bold [&_:focus-visible]:[outline:3px_solid_var(--color-care-navy)] [&_:focus-visible]:outline-offset-[4px] motion-reduce:[&_a]:[transition:none] motion-reduce:[&_button]:[transition:none] [&_.mb-container>*]:min-w-0 [&_[id]]:scroll-mt-[calc(var(--care-header-height)_+_20px)] xl:[&_[id]]:scroll-mt-[24px]">
      <AboutHero
        book={book}
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
      <AboutSection stats={stats} />
      <MissionVisionValues />
      <WhyChooseUsSection stats={stats} />
      <DirectorMessage featuredDoctor={featuredDoctor} />
      <DoctorsSection
        featuredDoctor={featuredDoctor}
        book={book}
        homeDoctors={homeDoctors}
        heading={<>Meet the Doctors<br />Behind Your Care</>}
        description="Our team brings together obstetricians, gynaecologists, infertility specialists, an embryologist, paediatricians and neonatologists. Among them are laparoscopic and robotic surgeons, a paediatric intensivist and senior consultants with qualifications including MD, MS, DNB and specialist fellowships."
      />
      <FaqSection
        careCategories={["About Us"]}
        homeFaqs={{ "About Us": aboutFaqs }}
        label="FAQ"
        heading=""
        highlight=""
        description=""
        showCategories={false}
      />
      <HomeFooter
        hospital={hospital}
        serviceGroups={serviceGroups}
        setServiceTab={() => {}}
        setLocation={() => {}}
        mapUrl={mapUrl}
        basePath="/"
      />
    </div>
  );
}
