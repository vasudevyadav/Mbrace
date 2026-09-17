"use client";

import Photo from "./Photo";
import Heading from "./Heading";
import { CheckIcon } from "@/components/icons/icons";

export default function ExcellenceSection() {

  return (
    <section id="excellence" className="mb-excellence max-[701px]:[&.mb-excellence]:pb-0 min-[1001px]:[&.mb-excellence]:pb-0 overflow-hidden [&>.mb-container]:grid [&>.mb-container]:[align-items:end] max-[701px]:[&>.mb-container]:grid-cols-[1fr] max-[701px]:[&>.mb-container]:gap-5 min-[701px]:[&>.mb-container]:grid-cols-[1.07fr_1fr] min-[701px]:[&>.mb-container]:gap-[5px] max-[1001px]:[&_.mb-container>div:first-child]:pb-0 min-[1001px]:[&_.mb-container>div:first-child]:pb-[55px] [&_.mb-container>div:first-child]:relative [&_.mb-container>div:first-child]:z-[1] max-[701px]:[&_.mb-photo]:h-[355px] max-[701px]:[&_.mb-photo]:ml-0 max-[701px]:[&_.mb-photo]:mr-0 min-[701px]:max-[1001px]:[&_.mb-photo]:h-107.5 min-[701px]:max-[1001px]:[&_.mb-photo]:ml-[-75px] min-[1001px]:[&_.mb-photo]:h-127.5 min-[1001px]:[&_.mb-photo]:ml-[-45px] min-[701px]:max-[1201px]:[&_.mb-photo]:mr-[-40px] min-[1201px]:[&_.mb-photo]:mr-[-130px] [&_.mb-photo]:rounded-[0] [&_.mb-photo_img]:object-contain [&_.mb-photo_img]:object-[bottom] [&_h3]:text-[18px] [&_h3]:text-care-navy [&_h3]:font-medium [&_h3]:mt-6 [&_h3]:mr-0 [&_h3]:mb-5 [&_h3]:ml-0 mb-section max-[701px]:pt-12 max-[701px]:pb-12 min-[701px]:max-[1001px]:pt-15 min-[701px]:max-[1001px]:pb-15 min-[1001px]:pt-20 min-[1001px]:pb-20 [&_p]:leading-[1.65]">
      <div className="mb-container max-[701px]:w-[calc(100%_-_40px)] min-[701px]:max-[1001px]:w-[calc(100%_-_48px)] min-[1001px]:max-[1201px]:w-[calc(100%_-_80px)] min-[1201px]:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto min-[1001px]:[#services>&]:w-[min(1200px,_calc(100%_-_80px))]">
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
