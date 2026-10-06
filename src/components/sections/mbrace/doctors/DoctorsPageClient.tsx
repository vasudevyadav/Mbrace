"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { HomeData } from "@/lib/queries";
import { locations } from "../content";
import SimplePageHero from "../SimplePageHero";
import DoctorsSection from "../DoctorsSection";
import FaqSection from "../FaqSection";
import LocationSection from "../LocationSection";
import HomeFooter from "../HomeFooter";
import DoctorTipsSection from "./DoctorTipsSection";

type DoctorTip = { id: number; title: string; doctorName: string; image: string; videoUrl: string };

export default function DoctorsPageClient({ data, tips }: { data: HomeData; tips: DoctorTip[] }) {
  const { hospital, careCategories, serviceGroups, doctors, featuredDoctor, homeFaqs } = data;
  const router = useRouter();
  const [location, setLocation] = useState(locations[0]);
  const mapQuery = location === "LB Nagar" ? `Mbrace Kamineni Hospitals ${hospital.address}` : "Kamineni Hospitals King Koti Hyderabad";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

  function book() {
    router.push("/#appointment");
  }
  function goToServices() {
    router.push("/#services");
  }

  return (
    <div className="mbrace-home font-sans text-care-copy bg-white text-[15px] leading-[1.6] max-[601px]:[--care-header-height:72px] min-[601px]:max-[1201px]:[--care-header-height:80px] min-[1201px]:[--care-header-height:96px] min-[1201px]:pt-0 max-[1201px]:pt-[var(--care-header-height)] [&_*]:box-border max-[1201px]:[&_section]:scroll-mt-[calc(var(--care-header-height)_+_20px)] min-[1201px]:[&_section]:scroll-mt-[24px] [&_button]:cursor-pointer [&_button]:[transition:background_.2s,color_.2s,transform_.2s] [&_select]:cursor-pointer [&_a]:[transition:background_.2s,color_.2s,transform_.2s] [&_button:disabled]:cursor-wait [&_button:disabled]:opacity-[.6] [&_em]:not-italic [&_em]:text-care-gold [&_em]:font-bold [&_:focus-visible]:[outline:3px_solid_var(--color-care-navy)] [&_:focus-visible]:outline-offset-[4px] motion-reduce:[&_a]:[transition:none] motion-reduce:[&_button]:[transition:none] max-[701px]:[&_.mb-container>*]:min-w-0 max-[1201px]:[&_[id]]:scroll-mt-[calc(var(--care-header-height)_+_20px)] min-[1201px]:[&_[id]]:scroll-mt-[24px]">
      <SimplePageHero
        book={book}
        goToServices={goToServices}
        careCategories={careCategories}
        hospital={hospital}
        titleTop="Doctors"
        titleBottom="& Our Specialists"
        description="Multidisciplinary team of specialists, including gynaecologists, obstetricians, paediatricians and neonatologists, working as one team with advanced NICU and PICU support."
        backgroundImage="/images/figma/doctors-hero-bg.png"
      />
      <DoctorsSection
        featuredDoctor={featuredDoctor}
        book={book}
        homeDoctors={doctors}
        getProfileHref={(doctor) => `/doctors/${doctor.slug}`}
      />
      <DoctorTipsSection tips={tips} />
      <LocationSection
        location={location}
        setLocation={setLocation}
        hospital={hospital}
        setBookingLocation={() => {}}
        book={book}
        mapUrl={mapUrl}
      />
      <FaqSection careCategories={careCategories} homeFaqs={homeFaqs} />
      <HomeFooter
        hospital={hospital}
        goToServices={goToServices}
        serviceGroups={serviceGroups}
        setServiceTab={() => {}}
        setLocation={setLocation}
        mapUrl={mapUrl}
        basePath="/"
      />
    </div>
  );
}
