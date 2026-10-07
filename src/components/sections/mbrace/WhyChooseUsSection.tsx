"use client";

import Image from "next/image";
import type { HomeData } from "@/lib/queries";
import Counter from "./Counter";
import Heading from "./Heading";
import Photo from "./Photo";

type Props = {
  stats: HomeData["stats"];
};

type Stat = {
  label: string;
  value: string;
};

type StatCardProps = {
  stat: Stat;
  icon: string;
  iconClassName: string;
  reverseGradient?: boolean;
  className?: string;
};

function StatCard({
  stat,
  icon,
  iconClassName,
  reverseGradient = false,
  className = "",
}: StatCardProps) {
  return (
    <div
      className={`relative flex min-h-47.5 flex-col justify-center rounded-[14px] px-[15px] pb-5 pt-15 text-white md:min-h-55 md:px-6 md:pb-6 md:pt-17 lg:min-h-[245px] lg:px-7.5 lg:pb-10 ${
        reverseGradient
          ? "[background:linear-gradient(90deg,#fbad31,#764b9e)]"
          : "[background:linear-gradient(90deg,#764b9e,#fbad31)]"
      } ${className}`}
    >
      <Image
        className={`absolute ${iconClassName}`}
        src={icon}
        width={80}
        height={80}
        alt=""
        aria-hidden="true"
      />
      <div className="[font-family:var(--font-poppins)] [&_strong]:text-[34px] [&_strong]:font-extrabold [&_strong]:leading-[1.2] [&_strong]:tracking-[-1.5px] md:[&_strong]:text-[40px] lg:[&_strong]:text-[48px] xl:[&_strong]:text-[60px]">
        <Counter value={stat.value} />
      </div>
      <p className="mt-[13px] text-[12px] font-semibold leading-[1.5] md:text-[16px] md:leading-[1.65]">
        {stat.label}
      </p>
    </div>
  );
}

export default function WhyChooseUsSection({ stats }: Props) {
  return (
    <section id="why-us" className="py-12 md:py-15 lg:py-20">
      <div className="mx-auto w-full max-w-[1194px] px-5 md:px-6 lg:px-10 xl:px-8">
        <div className="mb-6.5 grid items-center gap-4 md:mb-7.5 md:grid-cols-[1.08fr_1fr] md:gap-7.5 lg:gap-10 xl:gap-[75px] [&_.mb-heading]:mb-0">
          <Heading label="Why Choose M’Brace">
            One Trusted Destination for
            <br />
            <em>Women, Mothers</em> &amp; <em>Children</em>
          </Heading>
          <p className="font-semibold leading-[1.65]">
            Two convenient locations across Hyderabad, compassionate counselling
            through every hard decision, and treatment recommended only when
            your diagnosis genuinely needs it.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:gap-5 [&_.mb-photo]:min-h-47.5 [&_.mb-photo]:rounded-[14px] md:[&_.mb-photo]:min-h-55 lg:[&_.mb-photo]:min-h-[245px]">
          <Photo
            n={7}
            alt="Mother embracing her newborn"
            className="order-1 md:order-none"
          />
          <StatCard
            stat={stats.whyUsFamilies}
            icon="/images/figma/trust-0.svg"
            iconClassName="right-14.75 top-3.75 size-8.75 md:right-21.25 md:top-5.5 md:size-12.5"
            className="order-2 md:order-none"
          />
          <Photo
            n={8}
            alt="A happy mother and child"
            className="order-4 md:order-none"
          />
          <StatCard
            stat={stats.whyUsYears}
            icon="/images/figma/trust-1.svg"
            iconClassName="right-1.25 top-3.75 size-13.75 md:right-1.75 md:top-5.25 md:size-19.75"
            reverseGradient
            className="order-3 md:order-none"
          />
          <Photo
            n={9}
            alt="A mother and baby spending time together"
            className="order-5 md:order-none"
          />
          <StatCard
            stat={stats.whyUsBabies}
            icon="/images/figma/trust-2.svg"
            iconClassName="right-0.5 top-5.5 h-9.75 w-7.25 md:right-0.75 md:top-8 md:h-14 md:w-10.5"
            reverseGradient
            className="order-6 md:order-none"
          />
        </div>
      </div>
    </section>
  );
}
