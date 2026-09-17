"use client";

import Photo from "./Photo";
import Heading from "./Heading";
import Counter from "./Counter";
import { CheckIcon } from "@/components/icons/icons";
import type { HomeData } from "@/lib/queries";

type Props = {
  stats: HomeData["stats"];
};

export default function AboutSection({ stats }: Props) {

  return (
    <section id="about" className="mb-section max-[701px]:pt-12 max-[701px]:pb-12 min-[701px]:max-[1001px]:pt-15 min-[701px]:max-[1001px]:pb-15 min-[1001px]:pt-20 min-[1001px]:pb-20 [&_p]:leading-[1.65] mb-about grid items-center min-[1001px]:[&.mb-about]:pb-22.5 max-[701px]:grid-cols-[1fr] max-[701px]:gap-[65px] max-[701px]:[&.mb-about]:pt-[55px] min-[701px]:max-[1001px]:grid-cols-[1fr_1.12fr] min-[701px]:max-[1001px]:gap-[45px] min-[1001px]:grid-cols-[480px_1fr] min-[1001px]:gap-20 min-[1001px]:[&.mb-about]:pt-27.5 [&>div:last-child]:relative max-[701px]:[&_.mb-heading_h2]:text-[30px] max-[701px]:[&_.mb-heading_h2]:tracking-[-.7px] min-[701px]:max-[1001px]:[&_.mb-heading_h2]:text-[31px] min-[1001px]:max-[1201px]:[&_.mb-heading_h2]:text-[35px] min-[1201px]:[&_.mb-heading_h2]:text-[40px] max-[701px]:[&_.mb-checks]:mb-[35px] max-[701px]:[&_.mb-checks]:text-[13px] mb-container max-[701px]:w-[calc(100%_-_40px)] min-[701px]:max-[1001px]:w-[calc(100%_-_48px)] min-[1001px]:max-[1201px]:w-[calc(100%_-_80px)] min-[1201px]:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto min-[1001px]:[#services>&]:w-[min(1200px,_calc(100%_-_80px))]">
      <div className="mb-about-photos relative max-[701px]:mr-[35px] max-[701px]:max-w-115 min-[701px]:mr-[25px] min-[1001px]:ml-[25px] max-[701px]:[&>.mb-photo:first-child]:h-100 min-[701px]:max-[1001px]:[&>.mb-photo:first-child]:h-102.5 min-[1001px]:[&>.mb-photo:first-child]:h-[507px]">
        <Photo n={3} alt="A mother and daughter welcome a newborn" />
        <Photo n={4} alt="A mother lovingly holds her baby" className="mb-about-inset [&.mb-about-inset]:absolute [border:7px_solid_white] max-[701px]:w-[185px] max-[701px]:h-37.5 max-[701px]:bottom-[-30px] min-[701px]:max-[1001px]:w-45 min-[701px]:max-[1001px]:h-35 min-[701px]:max-[1001px]:bottom-[-28px] min-[1001px]:w-[205px] min-[1001px]:h-57.5 min-[1001px]:right-[-75px] min-[1001px]:bottom-15 max-[1001px]:right-[-35px]" />
      </div>
      <div>
        <Heading label="About M’Brace">For Her Health, Her Child,<br />&amp; <em>Her Tomorrow</em>
        </Heading>
        <p>A dedicated unit of Kamineni Hospitals Pvt. Ltd., M’Brace is built to bring women’s health, pregnancy support and child care into single, connected practice. We ensure a family never has to explain their history to a new doctor twice. With us, every consultation starts with listening, not the clock.</p>
        <ul className="mb-checks grid gap-2.5 mt-6 mb-6 list-none text-[15px] font-medium text-care-navy [&_li]:flex [&_li]:gap-[7px] [&_li]:items-center [&_svg]:w-[19px] [&_svg]:h-[19px] [&_svg]:shrink-0">{["Trusted Multispeciality Care", "Advanced Hospital Support", "Emergency & Critical Care Backup"].map(x => <li key={x}>
          <CheckIcon />{x}</li>)}</ul>
        <a className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780]" href="#excellence">Know More</a>
        <div className="mb-years max-[701px]:absolute max-[701px]:right-2.5 max-[701px]:w-25 max-[701px]:h-25 min-[701px]:max-[1001px]:static min-[1001px]:absolute min-[701px]:right-0 bottom-0 rounded-[50%] bg-care-gold [border:5px_double_white] [outline:2px_solid_var(--color-care-gold)] flex items-center justify-center flex-col text-white text-center min-[701px]:max-[1201px]:w-27.5 min-[701px]:max-[1201px]:h-27.5 min-[1201px]:w-31.5 min-[1201px]:h-31.5 max-[1001px]:mt-[25px] max-[701px]:[&_strong]:text-[33px] min-[701px]:[&_strong]:text-[40px] [&_strong]:leading-[1.15] max-[701px]:[&_span]:text-[11px] min-[701px]:[&_span]:text-[13px]">
          <Counter value={stats.yearsOfCare.value} />
          <span>YEARS OF CARE</span>
        </div>
      </div>
    </section>
  );
}
