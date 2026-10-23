"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { HomeData } from "@/lib/queries";
import SimplePageHero from "./SimplePageHero";
import HomeFooter from "./HomeFooter";
import { CheckIcon } from "@/components/icons/icons";

export default function ThankYouPageClient({ data }: { data: HomeData }) {
  const { hospital, careCategories, serviceGroups } = data;
  const router = useRouter();

  function book() {
    router.push("/#appointment");
  }

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`M'Brace Kamineni Hospitals ${hospital.address}`)}`;

  return (
    <div className="mbrace-home font-sans text-care-copy bg-white text-[15px] leading-[1.6] [--care-header-height:72px] sm:[--care-header-height:80px] xl:[--care-header-height:96px] xl:pt-0 pt-[var(--care-header-height)] [&_*]:box-border [&_button]:cursor-pointer [&_a]:[transition:background_.2s,color_.2s,transform_.2s]">
      <SimplePageHero
        book={book}
        careCategories={careCategories}
        hospital={hospital}
        titleTop="Thank You!"
        titleBottom="Your appointment request has been received"
        description="Our care team will reach out shortly to confirm your appointment. If it's urgent, please call us directly."
      />
      <section className="mb-section py-14 text-center">
        <div className="mx-auto max-w-120 px-5">
          <span className="mx-auto grid size-16 place-items-center rounded-full bg-care-soft text-care-purple">
            <CheckIcon className="size-8" />
          </span>
          <h2 className="mt-5 text-[22px] font-bold text-care-navy">We&rsquo;ll be in touch soon</h2>
          <p className="mt-3 text-care-copy">
            You can also reach us directly at{" "}
            <a className="font-semibold text-care-purple hover:underline" href={hospital.phoneHref}>
              {hospital.phone}
            </a>
            .
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex min-h-11.5 items-center justify-center rounded-[6px] bg-care-purple px-7 text-[14px] font-extrabold text-white no-underline [&:hover]:bg-[#603780]"
          >
            Back to Home
          </Link>
        </div>
      </section>
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
