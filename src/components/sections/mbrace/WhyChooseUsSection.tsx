"use client";

import Image from "next/image";
import Photo from "./Photo";
import Heading from "./Heading";
import Counter from "./Counter";
import type { HomeData } from "@/lib/queries";

type Props = {
  stats: HomeData["stats"];
};

export default function WhyChooseUsSection({ stats }: Props) {

  return (
    <section id="why-us" className="mb-section max-[701px]:pt-12 max-[701px]:pb-12 min-[701px]:max-[1001px]:pt-15 min-[701px]:max-[1001px]:pb-15 min-[1001px]:pt-20 min-[1001px]:pb-20 [&_p]:leading-[1.65] mb-purple bg-care-purple text-white [&_.mb-heading_h2]:text-white mb-rounded max-[701px]:rounded-[20px] min-[701px]:rounded-[28px]">
      <div className="mb-container max-[701px]:w-[calc(100%_-_40px)] min-[701px]:max-[1001px]:w-[calc(100%_-_48px)] min-[1001px]:max-[1201px]:w-[calc(100%_-_80px)] min-[1201px]:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto min-[1001px]:[#services>&]:w-[min(1200px,_calc(100%_-_80px))]">
        <div className="mb-section-intro grid items-center max-[701px]:grid-cols-[1fr] max-[701px]:gap-4 max-[701px]:mb-6.5 min-[701px]:grid-cols-[1.08fr_1fr] min-[701px]:mb-7.5 min-[701px]:max-[1001px]:gap-7.5 min-[1001px]:max-[1201px]:gap-10 min-[1201px]:gap-[75px] [&_.mb-heading]:mb-0">
          <Heading label="Why Choose M’Brace">One Trusted Destination for<br />
            <em>Women, Mothers</em> &amp; <em>Children</em>
          </Heading>
          <p>Two convenient locations across Hyderabad, compassionate counselling through every hard decision, and treatment recommended only when your diagnosis genuinely needs it.</p>
        </div>
        <div className="mb-trust-grid grid max-[701px]:grid-cols-[1fr_1fr] max-[701px]:gap-3 min-[701px]:grid-cols-[repeat(3,1fr)] min-[701px]:max-[1001px]:gap-4 min-[1001px]:gap-5 max-[701px]:[&>.mb-photo]:min-h-47.5 min-[701px]:max-[1001px]:[&>.mb-photo]:min-h-55 min-[1001px]:[&>.mb-photo]:min-h-[245px] [&>.mb-photo]:rounded-[14px] max-[701px]:[&>.mb-photo:nth-child(3)]:order-[4] max-[701px]:[&>.mb-stat:nth-child(4)]:order-[3] max-[701px]:[&>.mb-photo:nth-child(5)]:order-[5] max-[701px]:[&>.mb-stat:nth-child(6)]:order-[6]">
          <Photo n={7} alt="Mother embracing her newborn" />
          <div className="mb-stat max-[701px]:min-h-47.5 max-[701px]:pt-15 max-[701px]:pr-[15px] max-[701px]:pb-5 max-[701px]:pl-[15px] min-[701px]:max-[1001px]:min-h-55 min-[701px]:max-[1001px]:pr-6 min-[701px]:max-[1001px]:pb-6 min-[701px]:max-[1001px]:pl-6 min-[1001px]:min-h-[245px] min-[1001px]:pr-7.5 min-[1001px]:pb-10 min-[1001px]:pl-7.5 rounded-[14px] flex justify-center flex-col [background:linear-gradient(105deg,#efb24d,#86619c)] relative min-[701px]:pt-17 max-[701px]:[&_strong]:text-[34px] min-[701px]:max-[1001px]:[&_strong]:text-[40px] min-[1001px]:max-[1201px]:[&_strong]:text-[48px] min-[1201px]:[&_strong]:text-[58px] [&_strong]:leading-[1.2] [&_strong]:font-bold [&_strong]:tracking-[-1.5px] max-[701px]:[&_p]:text-[12px] max-[701px]:[&_p]:leading-[1.5] min-[701px]:[&_p]:text-[15px] [&_p]:mt-[13px] [&:nth-child(2)]:[background:linear-gradient(90deg,_#764b9e,_#fbad31)] [&:nth-child(4)]:[background:linear-gradient(90deg,_#fbad31,_#764b9e)] [&:nth-child(6)]:[background:linear-gradient(90deg,_#fbad31,_#764b9e)]">
            <Image className="mb-stat-icon absolute max-[701px]:right-3.5 max-[701px]:top-3 max-[701px]:w-10.5 max-[701px]:h-[45px] min-[701px]:right-6 min-[701px]:top-4.5 min-[701px]:w-15 min-[701px]:h-[65px]" src="/images/figma/trust-0.svg" width={60} height={70} alt="" />
            <Counter value={stats.whyUsFamilies.value} />
            <p>{stats.whyUsFamilies.label}</p>
          </div>
          <Photo n={8} alt="A happy mother and child" />
          <div className="mb-stat max-[701px]:min-h-47.5 max-[701px]:pt-15 max-[701px]:pr-[15px] max-[701px]:pb-5 max-[701px]:pl-[15px] min-[701px]:max-[1001px]:min-h-55 min-[701px]:max-[1001px]:pr-6 min-[701px]:max-[1001px]:pb-6 min-[701px]:max-[1001px]:pl-6 min-[1001px]:min-h-[245px] min-[1001px]:pr-7.5 min-[1001px]:pb-10 min-[1001px]:pl-7.5 rounded-[14px] flex justify-center flex-col [background:linear-gradient(105deg,#efb24d,#86619c)] relative min-[701px]:pt-17 max-[701px]:[&_strong]:text-[34px] min-[701px]:max-[1001px]:[&_strong]:text-[40px] min-[1001px]:max-[1201px]:[&_strong]:text-[48px] min-[1201px]:[&_strong]:text-[58px] [&_strong]:leading-[1.2] [&_strong]:font-bold [&_strong]:tracking-[-1.5px] max-[701px]:[&_p]:text-[12px] max-[701px]:[&_p]:leading-[1.5] min-[701px]:[&_p]:text-[15px] [&_p]:mt-[13px] [&:nth-child(2)]:[background:linear-gradient(90deg,_#764b9e,_#fbad31)] [&:nth-child(4)]:[background:linear-gradient(90deg,_#fbad31,_#764b9e)] [&:nth-child(6)]:[background:linear-gradient(90deg,_#fbad31,_#764b9e)]">
            <Image className="mb-stat-icon absolute max-[701px]:right-3.5 max-[701px]:top-3 max-[701px]:w-10.5 max-[701px]:h-[45px] min-[701px]:right-6 min-[701px]:top-4.5 min-[701px]:w-15 min-[701px]:h-[65px]" src="/images/figma/trust-1.svg" width={60} height={70} alt="" />
            <Counter value={stats.whyUsYears.value} />
            <p>{stats.whyUsYears.label}</p>
          </div>
          <Photo n={9} alt="A mother and baby spending time together" />
          <div className="mb-stat max-[701px]:min-h-47.5 max-[701px]:pt-15 max-[701px]:pr-[15px] max-[701px]:pb-5 max-[701px]:pl-[15px] min-[701px]:max-[1001px]:min-h-55 min-[701px]:max-[1001px]:pr-6 min-[701px]:max-[1001px]:pb-6 min-[701px]:max-[1001px]:pl-6 min-[1001px]:min-h-[245px] min-[1001px]:pr-7.5 min-[1001px]:pb-10 min-[1001px]:pl-7.5 rounded-[14px] flex justify-center flex-col [background:linear-gradient(105deg,#efb24d,#86619c)] relative min-[701px]:pt-17 max-[701px]:[&_strong]:text-[34px] min-[701px]:max-[1001px]:[&_strong]:text-[40px] min-[1001px]:max-[1201px]:[&_strong]:text-[48px] min-[1201px]:[&_strong]:text-[58px] [&_strong]:leading-[1.2] [&_strong]:font-bold [&_strong]:tracking-[-1.5px] max-[701px]:[&_p]:text-[12px] max-[701px]:[&_p]:leading-[1.5] min-[701px]:[&_p]:text-[15px] [&_p]:mt-[13px] [&:nth-child(2)]:[background:linear-gradient(90deg,_#764b9e,_#fbad31)] [&:nth-child(4)]:[background:linear-gradient(90deg,_#fbad31,_#764b9e)] [&:nth-child(6)]:[background:linear-gradient(90deg,_#fbad31,_#764b9e)]">
            <Image className="mb-stat-icon absolute max-[701px]:right-3.5 max-[701px]:top-3 max-[701px]:w-10.5 max-[701px]:h-[45px] min-[701px]:right-6 min-[701px]:top-4.5 min-[701px]:w-15 min-[701px]:h-[65px]" src="/images/figma/trust-2.svg" width={60} height={70} alt="" />
            <Counter value={stats.whyUsBabies.value} />
            <p>{stats.whyUsBabies.label}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
