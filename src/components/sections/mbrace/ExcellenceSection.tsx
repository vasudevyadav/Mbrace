"use client";

import Photo from "./Photo";
import Heading from "./Heading";
import { CheckIcon } from "@/components/icons/icons";

export default function ExcellenceSection() {

  return (
    <section id="excellence" className="mb-excellence mb-section overflow-hidden pb-0 pt-12 md:pt-15 lg:pb-0 lg:pt-20 [&>.mb-container]:grid [&>.mb-container]:grid-cols-[1fr] [&>.mb-container]:items-end [&>.mb-container]:gap-5 md:[&>.mb-container]:grid-cols-[1.07fr_1fr] md:[&>.mb-container]:gap-[5px] [&_.mb-container>div:first-child]:relative [&_.mb-container>div:first-child]:z-[1] [&_.mb-container>div:first-child]:pb-0 lg:[&_.mb-container>div:first-child]:pb-[55px] [&_.mb-photo]:ml-0 [&_.mb-photo]:mr-0 [&_.mb-photo]:aspect-[3/2] [&_.mb-photo]:rounded-none md:[&_.mb-photo]:mr-[-40px] md:[&_.mb-photo]:ml-[-75px] md:[&_.mb-photo]:h-107.5 lg:[&_.mb-photo]:ml-[-45px] lg:[&_.mb-photo]:h-127.5 xl:[&_.mb-photo]:mr-[-130px] [&_.mb-photo_img]:object-contain [&_.mb-photo_img]:object-bottom">
      <div className="mb-container w-[calc(100%_-_40px)] md:w-[calc(100%_-_48px)] lg:w-[calc(100%_-_80px)] xl:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto lg:[#services>&]:w-[min(1200px,_calc(100%_-_80px))]">
        <div>
          <Heading label="Centres of Excellence">Advanced Care for Every<br />Stage of <em>Motherhood</em>
          </Heading>
          <p className="leading-[1.65]">Real-time fetal monitoring, comprehensive diagnostics and neonatal ventilation support, all built to give your doctor the full picture before any decision.</p>
          <ul className="mb-checks mb-6 mt-6 grid list-none gap-2.5 text-[16px] font-semibold text-care-navy [&_svg]:h-[19px] [&_svg]:w-[19px] [&_svg]:shrink-0">{["Sterile Theatres & Diagnostics", "24x7 Emergency & Transport", "High-End Neonatal Ventilation", "Comprehensive Lab Support"].map(x => <li className="flex items-center gap-[7px]" key={x}>
            <CheckIcon />{x}</li>)}</ul>
          <h3 className="mb-5 mt-6 text-[18px] font-bold text-care-navy">Personalized care for every patient</h3>
          <a className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[6px] [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780]" href="#team">Explore More</a>
        </div>
        <Photo n={5} alt="A mother kisses her smiling young daughter" />
      </div>
    </section>
  );
}
