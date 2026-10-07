"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Doctor } from "@prisma/client";
import type { HomeData } from "@/lib/queries";
import { locations } from "../content";
import FaqSection from "../FaqSection";
import LocationSection from "../LocationSection";
import HomeFooter from "../HomeFooter";
import DoctorProfileHero from "./DoctorProfileHero";

export default function DoctorProfileClient({ doctor, data }: { doctor: Doctor; data: HomeData }) {
  const { hospital, careCategories, serviceGroups, homeFaqs } = data;

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
    <div className="mbrace-home font-sans text-care-copy bg-white text-[15px] leading-[1.6] [--care-header-height:72px] sm:[--care-header-height:80px] xl:[--care-header-height:96px] xl:pt-0 pt-[var(--care-header-height)] [&_*]:box-border [&_section]:scroll-mt-[calc(var(--care-header-height)_+_20px)] xl:[&_section]:scroll-mt-[24px] [&_button]:cursor-pointer [&_button]:[transition:background_.2s,color_.2s,transform_.2s] [&_select]:cursor-pointer [&_a]:[transition:background_.2s,color_.2s,transform_.2s] [&_button:disabled]:cursor-wait [&_button:disabled]:opacity-[.6] [&_em]:not-italic [&_em]:text-care-gold [&_em]:font-bold [&_:focus-visible]:[outline:3px_solid_var(--color-care-navy)] [&_:focus-visible]:outline-offset-[4px] motion-reduce:[&_a]:[transition:none] motion-reduce:[&_button]:[transition:none] [&_.mb-container>*]:min-w-0 [&_[id]]:scroll-mt-[calc(var(--care-header-height)_+_20px)] xl:[&_[id]]:scroll-mt-[24px]">
      <DoctorProfileHero doctor={doctor} hospital={hospital} careCategories={careCategories} book={book} goToServices={goToServices} />
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
