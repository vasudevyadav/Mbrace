"use client";

import Photo from "./Photo";
import Heading from "./Heading";
import { CheckIcon } from "@/components/icons/icons";

export default function ExcellenceSection() {

  return (
    <section id="excellence" className="mb-excellence [&.mb-excellence]:pb-0 lg:[&.mb-excellence]:pb-0 overflow-hidden [&>.mb-container]:grid [&>.mb-container]:[align-items:end] [&>.mb-container]:grid-cols-[1fr] [&>.mb-container]:gap-5 md:[&>.mb-container]:grid-cols-[1.07fr_1fr] md:[&>.mb-container]:gap-[5px] [&_.mb-container>div:first-child]:pb-0 lg:[&_.mb-container>div:first-child]:pb-[55px] [&_.mb-container>div:first-child]:relative [&_.mb-container>div:first-child]:z-[1] [&_.mb-photo]:aspect-[3/2] [&_.mb-photo]:ml-0 [&_.mb-photo]:mr-0 md:[&_.mb-photo]:h-107.5 md:[&_.mb-photo]:ml-[-75px] lg:[&_.mb-photo]:h-127.5 lg:[&_.mb-photo]:ml-[-45px] md:[&_.mb-photo]:mr-[-40px] xl:[&_.mb-photo]:mr-[-130px] [&_.mb-photo]:rounded-[0] [&_.mb-photo_img]:object-contain [&_.mb-photo_img]:object-[bottom] [&_h3]:text-[18px] [&_h3]:text-care-navy [&_h3]:font-medium [&_h3]:mt-6 [&_h3]:mr-0 [&_h3]:mb-5 [&_h3]:ml-0 mb-section pt-12 pb-12 md:pt-15 md:pb-15 lg:pt-20 lg:pb-20 [&_p]:leading-[1.65]">
      <div className="mb-container w-[calc(100%_-_40px)] md:w-[calc(100%_-_48px)] lg:w-[calc(100%_-_80px)] xl:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto lg:[#services>&]:w-[min(1200px,_calc(100%_-_80px))]">
        <div>
          <Heading label="Centres of Excellence">Advanced Care for Every<br />Stage of <em>Motherhood</em>
          </Heading>
          <p>Real-time fetal monitoring, comprehensive diagnostics and neonatal ventilation support, all built to give your doctor the full picture before any decision.</p>
          <ul className="mb-checks grid gap-2.5 mt-6 mb-6 list-none text-[15px] font-medium text-care-navy [&_li]:flex [&_li]:gap-[7px] [&_li]:items-center [&_svg]:w-[19px] [&_svg]:h-[19px] [&_svg]:shrink-0">{["Sterile Theatres & Diagnostics", "24x7 Emergency & Transport", "High-End Neonatal Ventilation", "Comprehensive Lab Support"].map(x => <li key={x}>
            <CheckIcon />{x}</li>)}</ul>
          <h3>Personalized care for every patient</h3>
          <a className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780]" href="#team">Explore More</a>
        </div>
        <Photo n={5} alt="A mother kisses her smiling young daughter" />
      </div>
    </section>
  );
}
