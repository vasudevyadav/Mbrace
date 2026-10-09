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
    <section id="about" className="mb-section pt-12 pb-12 md:pt-15 md:pb-15 lg:pt-20 lg:pb-20 [&_p]:leading-[1.65] mb-about grid items-center lg:[&.mb-about]:pb-22.5 grid-cols-[1fr] gap-[65px] [&.mb-about]:pt-[55px] md:grid-cols-[1fr_1.12fr] md:gap-[45px] lg:grid-cols-[480px_1fr] lg:gap-20 lg:[&.mb-about]:pt-27.5 [&>div:last-child]:relative [&_.mb-heading_h2]:text-[30px] [&_.mb-heading_h2]:tracking-[-.7px] md:[&_.mb-heading_h2]:text-[31px] lg:[&_.mb-heading_h2]:text-[35px] xl:[&_.mb-heading_h2]:text-[40px] [&_.mb-checks]:mb-[35px] [&_.mb-checks]:text-[13px] mb-container w-[calc(100%_-_40px)] md:w-[calc(100%_-_48px)] lg:w-[calc(100%_-_80px)] xl:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto lg:[#services>&]:w-[min(1200px,_calc(100%_-_80px))]">
      <div className="mb-about-photos relative mr-[35px] max-w-115 md:mr-[25px] lg:ml-[25px] [&>.mb-photo:first-child]:h-100 md:[&>.mb-photo:first-child]:h-102.5 lg:[&>.mb-photo:first-child]:h-[507px]">
        <Photo n={3} alt="A mother and daughter welcome a newborn" />
        <Photo n={4} alt="A mother lovingly holds her baby" className="mb-about-inset [&.mb-about-inset]:absolute [border:7px_solid_white] w-[185px] h-37.5 bottom-[-30px] md:w-45 md:h-35 md:bottom-[-28px] lg:w-[205px] lg:h-57.5 lg:right-[-75px] lg:bottom-15 right-[-35px]" />
      </div>
      <div>
        <Heading label="About M’Brace">Connected Care for<br /><em>Mothers, Newborns &amp; Children</em>
        </Heading>
        <p>M&apos;Brace, a unit of Kamineni Hospitals, was established as a pregnancy and child care hospital in Hyderabad with one purpose: complete, continuous care for mothers and children under one roof.</p>
        <p className="mt-4">During pregnancy, 4D ultrasound and the Fetal Medicine Unit help doctors follow a baby&apos;s development closely. Labour and birth take place in advanced LDR rooms, with sterile operation theatres ready if surgery is needed. Newborns who need extra support are cared for in the NICU, and children who need intensive care in the PICU. Fertility treatment is supported by advanced embryology.</p>
        <ul className="mb-checks grid gap-2.5 mt-6 mb-6 list-none text-[15px] font-medium text-care-navy [&_li]:flex [&_li]:gap-[7px] [&_li]:items-center [&_svg]:w-[19px] [&_svg]:h-[19px] [&_svg]:shrink-0">{["Trusted Multispeciality Care", "Experienced Medical Teams", "Emergency & Critical Care Backup"].map(x => <li key={x}>
          <CheckIcon />{x}</li>)}</ul>
        <a className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780]" href="#excellence">Know More</a>
        <div className="mb-years static w-25 h-25 lg:absolute lg:right-0 lg:bottom-0 rounded-[50%] bg-care-gold [border:5px_double_white] [outline:2px_solid_var(--color-care-gold)] flex items-center justify-center flex-col text-white text-center md:w-27.5 md:h-27.5 xl:w-31.5 xl:h-31.5 mt-[25px] [&_strong]:text-[33px] md:[&_strong]:text-[40px] [&_strong]:leading-[1.15] [&_span]:text-[11px] md:[&_span]:text-[13px]">
          <Counter value={stats.yearsOfCare.value} />
          <span>YEARS OF CARE</span>
        </div>
      </div>
    </section>
  );
}
