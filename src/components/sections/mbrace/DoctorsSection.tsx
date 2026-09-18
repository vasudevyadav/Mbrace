"use client";

import Image from "next/image";
import Photo from "./Photo";
import Heading from "./Heading";
import { MapPinIcon } from "@/components/icons/icons";
import type { HomeData } from "@/lib/queries";
import type { BookAppointment } from "./types";

type Props = {
  featuredDoctor: HomeData["featuredDoctor"];
  book: BookAppointment;
  homeDoctors: HomeData["doctors"];
};

export default function DoctorsSection({ featuredDoctor, book, homeDoctors }: Props) {

  return (
    <section id="team" className="mb-section max-[701px]:pt-12 max-[701px]:pb-12 min-[701px]:max-[1001px]:pt-15 min-[701px]:max-[1001px]:pb-15 min-[1001px]:pt-20 min-[1001px]:pb-20 [&_p]:leading-[1.65] mb-tinted [background:linear-gradient(110deg,#fff3df,#f3e9fc)] [&_.mb-eyebrow]:text-care-purple mb-rounded max-[701px]:rounded-[20px] min-[701px]:rounded-[28px]">
      <div className="mb-container max-[701px]:w-[calc(100%_-_40px)] min-[701px]:max-[1001px]:w-[calc(100%_-_48px)] min-[1001px]:max-[1201px]:w-[calc(100%_-_80px)] min-[1201px]:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto min-[1001px]:[#services>&]:w-[min(1200px,_calc(100%_-_80px))]">
        <div className="mb-team-intro grid mb-7.5 items-center max-[1001px]:grid-cols-[1fr] min-[1001px]:grid-cols-[1fr_1fr] max-[1201px]:gap-6 min-[1201px]:gap-[35px] [&>div>p]:text-[14px]">
          <div>
            <Heading label="OUR TEAM">Meet <em>The Experts</em>
              <br />Behind Your Journey</Heading>
            <p>Our panel of specialists bring together senior consultants in obstetrics, gynaecology and fertility, paediatricians and neonatologists, and dedicated fertility specialists and embryologists, practised for a decade or more, holding advanced fellowships and specialist training from institutions in India and abroad.</p>
            <p className="mb-team-principle mt-5.5 pt-4.5 [border-top:1px_solid_#ddd4e2] font-semibold [&_strong]:block [&_strong]:text-care-purple [&_strong]:text-[19px] [&_strong]:mt-[5px]">Every doctor with us works from one principle:<strong>Explain Clearly, Decide Together.</strong>
            </p>
          </div>{featuredDoctor && <article className="mb-featured-doctor grid bg-white rounded-[14px] items-center max-[701px]:grid-cols-[minmax(100px,_.85fr)_minmax(0,_1fr)] max-[701px]:pt-3.5 max-[701px]:pr-3.5 max-[701px]:pb-3.5 max-[701px]:pl-3.5 min-[701px]:max-[1001px]:grid-cols-[200px_1fr] min-[1001px]:grid-cols-[.9fr_1fr] max-[1201px]:gap-[15px] min-[1201px]:gap-6 min-[701px]:pt-4.5 min-[701px]:pr-4.5 min-[701px]:pb-4.5 min-[701px]:pl-4.5 max-[701px]:[&>.mb-photo]:h-67.5 min-[701px]:max-[1001px]:[&>.mb-photo]:h-65 min-[1001px]:[&>.mb-photo]:h-78 max-[701px]:[&_h3]:text-[15px] min-[701px]:max-[1001px]:[&_h3]:text-[18px] min-[1001px]:max-[1201px]:[&_h3]:text-[14px] min-[1201px]:[&_h3]:text-[16px] [&_h3]:leading-[1.3] [&_h3]:font-bold [&_h3]:text-care-purple [&_h3]:mb-2.5 max-[701px]:[&_p]:text-[10px] min-[701px]:[&_p]:text-[12px] [&_p]:leading-[1.5] [&_p]:text-[#595959] [&_.mb-doctor-meta]:grid max-[701px]:[&_.mb-doctor-meta]:text-[10px] max-[701px]:[&_.mb-doctor-meta]:gap-2 min-[701px]:[&_.mb-doctor-meta]:text-[12px] max-[1001px]:[&_.mb-doctor-actions]:max-w-75 max-[701px]:[&_.mb-doctor-actions]:flex-col max-[701px]:[&_.mb-doctor-actions]:mt-[13px] max-[701px]:[&_.mb-doctor-actions]:gap-1.5">
            <Photo src={featuredDoctor.image} alt={featuredDoctor.name} />
            <div>
              <h3>{featuredDoctor.name}</h3>
              <p>{featuredDoctor.role}<br />Qualifications: {featuredDoctor.qualifications}</p>
              <ul className="mb-doctor-meta list-none mt-4 pt-3.5 [border-top:1px_solid_#e6e1ea] text-[13px] text-care-purple flex flex-wrap gap-2.5 [&_li]:flex [&_li]:items-center [&_li]:gap-[7px] [&_span]:text-[#363435] [&_span]:font-medium [&_svg]:w-[17px] [&_svg]:h-[17px]">
                <li>
                  <Image src="/images/figma/doctor.svg" width={20} height={20} alt="" /> <span>{featuredDoctor.yearsExperience}</span>
                </li>
                <li>
                  <Image src="/images/figma/language.svg" width={20} height={20} alt="" /> <span>{featuredDoctor.languages}</span>
                </li>
                <li>
                  <MapPinIcon />
                  <span>{featuredDoctor.location}</span>
                </li>
              </ul>
              <div className="mb-doctor-actions flex mt-5 max-[1201px]:gap-[5px] min-[1201px]:gap-2 max-[701px]:[&_.mb-button]:min-h-11 max-[701px]:[&_.mb-button]:whitespace-normal min-[701px]:[&_.mb-button]:min-h-[27px] min-[701px]:[&_.mb-button]:whitespace-nowrap max-[1001px]:[&_.mb-button]:pt-2 max-[1001px]:[&_.mb-button]:pr-2 max-[1001px]:[&_.mb-button]:pb-2 max-[1001px]:[&_.mb-button]:pl-2 max-[1001px]:[&_.mb-button]:text-[11px] min-[1001px]:max-[1201px]:[&_.mb-button]:pt-1.5 min-[1001px]:max-[1201px]:[&_.mb-button]:pr-[5px] min-[1001px]:max-[1201px]:[&_.mb-button]:pb-1.5 min-[1001px]:max-[1201px]:[&_.mb-button]:pl-[5px] min-[1001px]:max-[1201px]:[&_.mb-button]:text-[10px] min-[1201px]:[&_.mb-button]:pt-[7px] min-[1201px]:[&_.mb-button]:pr-2 min-[1201px]:[&_.mb-button]:pb-[7px] min-[1201px]:[&_.mb-button]:pl-2 min-[1201px]:[&_.mb-button]:text-[11px] [&_.mb-button]:flex-1 [&_.mb-button]:rounded-[2px]">
                <button className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780] mb-gold [&.mb-gold]:bg-care-gold text-white [&.mb-gold:hover]:bg-[#df9726]" onClick={() => book("Women's Care", featuredDoctor.name, "Online consultation")}>Book Consultation</button>
                <button className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780]" onClick={() => book("Women's Care", featuredDoctor.name, "Hospital visit")}>Visit Hospital</button>
              </div>
            </div>
          </article>}</div>
        <div className="mb-doctor-grid grid max-[1001px]:grid-cols-[repeat(2,1fr)] min-[1001px]:grid-cols-[repeat(4,1fr)] max-[701px]:gap-3.5 min-[701px]:gap-5.5 mb-mobile-scroll max-[701px]:[&.mb-mobile-scroll]:grid max-[701px]:[&.mb-mobile-scroll]:grid-cols-[none] max-[701px]:[&.mb-mobile-scroll]:[grid-auto-flow:column] max-[701px]:[&.mb-mobile-scroll]:auto-cols-[min(84%,_320px)] max-[701px]:[&.mb-mobile-scroll]:gap-4 max-[701px]:[&.mb-mobile-scroll]:max-w-full max-[701px]:[&.mb-mobile-scroll]:overflow-x-auto max-[701px]:[&.mb-mobile-scroll]:overscroll-x-contain max-[701px]:[&.mb-mobile-scroll]:[scroll-snap-type:x_mandatory] max-[701px]:[&.mb-mobile-scroll]:[scroll-padding-inline:2px] max-[701px]:[&.mb-mobile-scroll]:pt-1 max-[701px]:[&.mb-mobile-scroll]:pr-0.5 max-[701px]:[&.mb-mobile-scroll]:pb-4.5 max-[701px]:[&.mb-mobile-scroll]:pl-0.5 max-[701px]:[&.mb-mobile-scroll]:[scrollbar-width:thin] max-[701px]:[&.mb-mobile-scroll]:[scrollbar-color:#b59bcf_#eee7f5] max-[701px]:[&>*]:min-w-0 max-[701px]:[&>*]:[scroll-snap-align:start] max-[701px]:[&>:last-child]:[scroll-snap-align:end]" role="region" aria-label="Our doctors — swipe to browse" tabIndex={0}>{homeDoctors.map(d => <article className="mb-doctor-card [&_h3]:text-[17px] [&_h3]:leading-[1.3] [&_h3]:font-bold [&_h3]:text-care-purple [&_h3]:mb-2.5 [&_p]:text-[13px] [&_p]:leading-[1.5] [&_p]:text-[#595959] max-[701px]:[&_p]:min-h-[55px] min-[701px]:max-[1001px]:[&_p]:min-h-[45px] min-[1001px]:[&_p]:min-h-14 max-[701px]:pt-[9px] max-[701px]:pr-[9px] max-[701px]:pb-3.5 max-[701px]:pl-[9px] min-[701px]:pt-3 min-[701px]:pr-3 min-[701px]:pb-4.5 min-[701px]:pl-3 bg-[#ffffffd9] rounded-[13px_13px_0_0] text-center flex flex-col max-[1001px]:[&>.mb-photo]:h-70 min-[1001px]:[&>.mb-photo]:h-[235px] max-[701px]:[&>.mb-photo]:mb-3.5 min-[701px]:[&>.mb-photo]:mb-5 [&>.mb-photo]:rounded-[10px] [&>.mb-photo_img]:object-[top] [&_.mb-doctor-meta]:mt-auto [&_.mb-doctor-meta]:justify-center [&_.mb-doctor-meta]:text-left max-[701px]:[&_.mb-doctor-meta]:text-[13px] max-[701px]:[&_.mb-doctor-meta]:gap-[7px] [&_.mb-doctor-meta_li:last-child]:w-full [&_.mb-doctor-meta_li:last-child]:justify-center max-[701px]:[&_.mb-doctor-actions]:flex-row max-[701px]:[&_.mb-doctor-actions]:gap-1.5 max-[701px]:[&_.mb-doctor-actions]:mt-[15px]" key={d.name}>
          <Photo src={d.image} alt={d.name} />
          <h3>{d.name}</h3>
          <p>{d.qualifications}<br />{d.role}</p>
          <ul className="mb-doctor-meta list-none mt-4 pt-3.5 [border-top:1px_solid_#e6e1ea] text-[13px] text-care-purple flex flex-wrap gap-2.5 [&_li]:flex [&_li]:items-center [&_li]:gap-[7px] [&_span]:text-[#363435] [&_span]:font-medium [&_svg]:w-[17px] [&_svg]:h-[17px]">
            <li>
              <Image src="/images/figma/doctor.svg" width={20} height={20} alt="" /> <span>{d.yearsExperience}</span>
            </li>
            <li>
              <MapPinIcon />
              <span>{d.location}</span>
            </li>
            <li>
              <Image src="/images/figma/language.svg" width={20} height={20} alt="" /> <span>{d.languages}</span>
            </li>
          </ul>
          <div className="mb-doctor-actions flex mt-5 max-[1201px]:gap-[5px] min-[1201px]:gap-2 max-[701px]:[&_.mb-button]:min-h-11 max-[701px]:[&_.mb-button]:whitespace-normal min-[701px]:[&_.mb-button]:min-h-[27px] min-[701px]:[&_.mb-button]:whitespace-nowrap max-[1001px]:[&_.mb-button]:pt-2 max-[1001px]:[&_.mb-button]:pr-2 max-[1001px]:[&_.mb-button]:pb-2 max-[1001px]:[&_.mb-button]:pl-2 max-[1001px]:[&_.mb-button]:text-[11px] min-[1001px]:max-[1201px]:[&_.mb-button]:pt-1.5 min-[1001px]:max-[1201px]:[&_.mb-button]:pr-[5px] min-[1001px]:max-[1201px]:[&_.mb-button]:pb-1.5 min-[1001px]:max-[1201px]:[&_.mb-button]:pl-[5px] min-[1001px]:max-[1201px]:[&_.mb-button]:text-[10px] min-[1201px]:[&_.mb-button]:pt-[7px] min-[1201px]:[&_.mb-button]:pr-2 min-[1201px]:[&_.mb-button]:pb-[7px] min-[1201px]:[&_.mb-button]:pl-2 min-[1201px]:[&_.mb-button]:text-[11px] [&_.mb-button]:flex-1 [&_.mb-button]:rounded-[2px]">
            <button className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780] mb-gold [&.mb-gold]:bg-care-gold text-white [&.mb-gold:hover]:bg-[#df9726]" onClick={() => book("Women's Care", d.name, "Online consultation")}>Book Consultation</button>
            <button className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780]" onClick={() => book("Women's Care", d.name, "Hospital visit")}>Visit Hospital</button>
          </div>
        </article>)}</div>
      </div>
    </section>
  );
}
