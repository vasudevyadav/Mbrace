"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Photo from "./Photo";
import Heading from "./Heading";
import { MapPinIcon } from "@/components/icons/icons";
import type { HomeData } from "@/lib/queries";
import type { BookAppointment } from "./types";

type Props = {
  featuredDoctor: HomeData["featuredDoctor"];
  book: BookAppointment;
  homeDoctors: HomeData["doctors"];
  heading?: ReactNode;
  description?: string;
  getProfileHref?: (doctor: { slug: string }) => string;
  layout?: "default" | "service-detail";
};

export default function DoctorsSection({ featuredDoctor, book, homeDoctors, heading, description, getProfileHref, layout = "default" }: Props) {
  const nameLink = (doctor: { slug: string }, children: ReactNode) =>
    getProfileHref ? <Link href={getProfileHref(doctor)} className="hover:underline">{children}</Link> : children;

  if (layout === "service-detail") {
    return (
      <section id="team" className="rounded-[28px] bg-[linear-gradient(110deg,#fff3df_0%,#f8edf1_52%,#f2e8fc_100%)] px-5 py-8 md:px-8 lg:py-[72px]">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:gap-[70px]">
            <div>
              <p className="text-[12px] font-bold uppercase text-care-purple">Our Team</p>
              <h2 className="mt-3 text-[32px] font-semibold leading-[1.2] text-care-navy md:text-[36px] lg:text-[40px]">{heading ?? <>Find Your <em>Gynaecologist</em></>}</h2>
              <div className="mt-5 h-px max-w-[400px] bg-[#d7c2e8]" />
              <p className="mt-5 text-[14px] font-semibold leading-[1.5] text-[#656078]">Every doctor with us works from one principle:<strong className="block text-[16px] font-extrabold">Explain Clearly, Decide Together.</strong></p>
            </div>
            <p className="pt-7 text-[14px] leading-[1.45] text-[#5e6178] lg:max-w-[500px]">{description}</p>
          </div>

          <div className="mt-12 grid grid-flow-col auto-cols-[88%] gap-5 overflow-x-auto pb-2 [scroll-snap-type:x_mandatory] [scrollbar-width:thin] sm:auto-cols-[48%] lg:grid-flow-row lg:auto-cols-auto lg:grid-cols-4 lg:overflow-visible lg:pb-0">
            {homeDoctors.slice(0, 4).map((doctor) => (
              <article key={doctor.name} className="flex min-w-0 flex-col rounded-[12px] bg-white p-[10px] text-center [scroll-snap-align:start]">
                <Photo src={doctor.image} alt={doctor.name} className="mb-4 h-[230px] rounded-[10px] [&_img]:object-top" />
                <h3 className="text-[15px] font-extrabold leading-[1.25] text-care-purple">{nameLink(doctor, doctor.name)}</h3>
                <p className="mt-2 min-h-[48px] text-[11px] leading-[1.35] text-[#595959]">{doctor.qualifications}<br />{doctor.role}</p>
                <ul className="mt-auto flex flex-wrap justify-center gap-x-4 gap-y-2 border-t border-[#e6e1ea] pt-3 text-left text-[10px] text-care-purple">
                  <li className="flex items-center gap-2"><Image src="/images/figma/doctor.svg" width={18} height={18} alt="" /><span className="text-black">{doctor.yearsExperience}</span></li>
                  <li className="flex items-center gap-2"><MapPinIcon /><span className="text-black">{doctor.location}</span></li>
                  <li className="flex w-full items-center justify-center gap-2"><Image src="/images/figma/language.svg" width={18} height={18} alt="" /><span className="text-black">{doctor.languages}</span></li>
                </ul>
                <div className="mt-4 flex gap-2">
                  <button className="min-h-[30px] flex-1 rounded-[3px] bg-care-gold px-2 py-2 text-[10px] font-semibold text-white hover:bg-[#df9726]" onClick={() => book("Women's Care", doctor.name, "Online consultation")}>Book Consultation</button>
                  <button className="min-h-[30px] flex-1 rounded-[3px] bg-care-purple px-2 py-2 text-[10px] font-semibold text-white hover:bg-[#603780]" onClick={() => book("Women's Care", doctor.name, "Hospital visit")}>Visit Hospital</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="team" className="mb-section pt-12 pb-12 md:pt-15 md:pb-15 lg:pt-20 lg:pb-20 [&_p]:leading-[1.65] mb-tinted [background:linear-gradient(110deg,#fff3df,#f3e9fc)] [&_.mb-eyebrow]:text-care-purple [&_h2_em]:not-italic [&_h2_em]:font-extrabold [&_h2_em]:text-care-gold mb-rounded rounded-[20px] md:rounded-[28px]">
      <div className="mb-container w-[calc(100%_-_40px)] md:w-[calc(100%_-_48px)] lg:w-[calc(100%_-_80px)] xl:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto lg:[#services>&]:w-[min(1200px,_calc(100%_-_80px))]">
        <div className="mb-team-intro grid mb-7.5 items-center grid-cols-[1fr] lg:grid-cols-[1fr_1fr] gap-6 xl:gap-[35px] [&>div>p]:text-[15px] [&>div>p]:text-[#5e6178]">
          <div>
            <Heading label="OUR TEAM">{heading ?? <>Meet <em>The Experts</em>
              <br />Behind Your Journey</>}</Heading>
            <p className="font-semibold">{description ?? "Our panel of specialists bring together senior consultants in obstetrics, gynaecology and fertility, paediatricians and neonatologists, and dedicated fertility specialists and embryologists, practised for a decade or more, holding advanced fellowships and specialist training from institutions in India and abroad."}</p>
            <p className="mb-team-principle mt-5.5 pt-4.5 [border-top:1px_solid_#ddd4e2] font-bold text-[16px] [&_strong]:block [&_strong]:font-extrabold [&_strong]:text-[20px] [&_strong]:mt-[5px]">Every doctor with us works from one principle:<strong>Explain Clearly, Decide Together.</strong>
            </p>
          </div>{featuredDoctor && <article className="mb-featured-doctor grid bg-white rounded-[14px] items-center grid-cols-[minmax(100px,_.85fr)_minmax(0,_1fr)] pt-3.5 pr-3.5 pb-3.5 pl-3.5 md:grid-cols-[200px_1fr] lg:grid-cols-[.9fr_1fr] gap-[15px] xl:gap-6 md:pt-4.5 md:pr-4.5 md:pb-4.5 md:pl-4.5 [&>.mb-photo]:h-67.5 md:[&>.mb-photo]:h-65 lg:[&>.mb-photo]:h-78 [&_h3]:text-[15px] md:[&_h3]:text-[18px] lg:[&_h3]:text-[14px] xl:[&_h3]:text-[20px] [&_h3]:leading-[1.3] [&_h3]:font-extrabold [&_h3]:text-care-purple [&_h3]:mb-2.5 [&_p]:text-[10px] md:[&_p]:text-[13px] [&_p]:leading-[1.5] [&_p]:text-[#595959] [&_p]:font-medium [&_.mb-doctor-meta]:grid [&_.mb-doctor-meta]:text-[10px] [&_.mb-doctor-meta]:gap-2 md:[&_.mb-doctor-meta]:text-[12px] [&_.mb-doctor-actions]:max-w-75 [&_.mb-doctor-actions]:flex-col [&_.mb-doctor-actions]:mt-[13px] [&_.mb-doctor-actions]:gap-1.5">
            <Photo src={featuredDoctor.image} alt={featuredDoctor.name} />
            <div>
              <h3>{nameLink(featuredDoctor, featuredDoctor.name)}</h3>
              <p>{featuredDoctor.role}<br />Qualifications: {featuredDoctor.qualifications}</p>
              <ul className="mb-doctor-meta list-none mt-4 pt-3.5 [border-top:1px_solid_#e6e1ea] text-[14px] text-care-purple flex flex-wrap gap-2.5 [&_li]:flex [&_li]:items-center [&_li]:gap-[7px] [&_span]:text-black [&_span]:font-semibold [&_svg]:w-[20px] [&_svg]:h-[20px]">
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
              <div className="mb-doctor-actions flex mt-5 gap-[5px] xl:gap-2 [&_.mb-button]:min-h-11 [&_.mb-button]:whitespace-normal md:[&_.mb-button]:min-h-[27px] md:[&_.mb-button]:whitespace-nowrap [&_.mb-button]:pt-2 [&_.mb-button]:pr-2 [&_.mb-button]:pb-2 [&_.mb-button]:pl-2 [&_.mb-button]:text-[11px] lg:[&_.mb-button]:pt-1.5 lg:[&_.mb-button]:pr-[5px] lg:[&_.mb-button]:pb-1.5 lg:[&_.mb-button]:pl-[5px] lg:[&_.mb-button]:text-[10px] xl:[&_.mb-button]:pt-[7px] xl:[&_.mb-button]:pr-2 xl:[&_.mb-button]:pb-[7px] xl:[&_.mb-button]:pl-2 xl:[&_.mb-button]:text-[11px] [&_.mb-button]:flex-1 [&_.mb-button]:rounded-[2px]">
                <button className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780] mb-gold [&.mb-gold]:bg-care-gold text-white [&.mb-gold:hover]:bg-[#df9726]" onClick={() => book("Women's Care", featuredDoctor.name, "Online consultation")}>Book Consultation</button>
                <button className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780]" onClick={() => book("Women's Care", featuredDoctor.name, "Hospital visit")}>Visit Hospital</button>
              </div>
            </div>
          </article>}</div>
        <div className="mb-doctor-grid grid grid-flow-col auto-cols-[100%] md:auto-cols-[calc(50%-11px)] lg:grid-flow-row lg:auto-cols-auto lg:grid-cols-[repeat(4,1fr)] gap-3.5 md:gap-5.5 overflow-x-auto lg:overflow-visible [scroll-snap-type:x_mandatory] overscroll-x-contain [scrollbar-width:thin] pb-2 lg:pb-0 [&>*]:min-w-0 [&>*]:[scroll-snap-align:start]" role="region" aria-label="Our doctors">{homeDoctors.map(d => <article className="mb-doctor-card [&_h3]:text-[17px] [&_h3]:leading-[1.3] [&_h3]:font-extrabold [&_h3]:text-care-purple [&_h3]:mb-2.5 [&_p]:text-[13px] [&_p]:leading-[1.5] [&_p]:text-[#595959] [&_p]:font-medium [&_p]:min-h-[55px] md:[&_p]:min-h-[45px] lg:[&_p]:min-h-14 pt-[9px] pr-[9px] pb-3.5 pl-[9px] md:pt-3 md:pr-3 md:pb-4.5 md:pl-3 bg-[#fdfdfd] rounded-[13px] text-center flex flex-col [&>.mb-photo]:h-70 lg:[&>.mb-photo]:h-[235px] [&>.mb-photo]:mb-3.5 md:[&>.mb-photo]:mb-5 [&>.mb-photo]:rounded-[12px] [&>.mb-photo_img]:object-[top] [&_.mb-doctor-meta]:mt-auto [&_.mb-doctor-meta]:justify-center [&_.mb-doctor-meta]:text-left [&_.mb-doctor-meta]:text-[13px] [&_.mb-doctor-meta]:gap-[7px] [&_.mb-doctor-meta_li:last-child]:w-full [&_.mb-doctor-meta_li:last-child]:justify-center [&_.mb-doctor-actions]:flex-row [&_.mb-doctor-actions]:gap-1.5 [&_.mb-doctor-actions]:mt-[15px]" key={d.name}>
          <Photo src={d.image} alt={d.name} />
          <h3>{nameLink(d, d.name)}</h3>
          <p>{d.qualifications}<br />{d.role}</p>
          <ul className="mb-doctor-meta list-none mt-4 pt-3.5 [border-top:1px_solid_#e6e1ea] text-[12px] text-care-purple flex flex-wrap gap-2.5 [&_li]:flex [&_li]:items-center [&_li]:gap-[7px] [&_span]:text-black [&_span]:font-medium [&_svg]:w-[20px] [&_svg]:h-[20px]">
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
          <div className="mb-doctor-actions flex mt-5 gap-[5px] xl:gap-2 [&_.mb-button]:min-h-11 [&_.mb-button]:whitespace-normal md:[&_.mb-button]:min-h-[27px] md:[&_.mb-button]:whitespace-nowrap [&_.mb-button]:pt-2 [&_.mb-button]:pr-2 [&_.mb-button]:pb-2 [&_.mb-button]:pl-2 [&_.mb-button]:text-[11px] lg:[&_.mb-button]:pt-1.5 lg:[&_.mb-button]:pr-[5px] lg:[&_.mb-button]:pb-1.5 lg:[&_.mb-button]:pl-[5px] lg:[&_.mb-button]:text-[10px] xl:[&_.mb-button]:pt-[7px] xl:[&_.mb-button]:pr-2 xl:[&_.mb-button]:pb-[7px] xl:[&_.mb-button]:pl-2 xl:[&_.mb-button]:text-[11px] [&_.mb-button]:flex-1 [&_.mb-button]:rounded-[2px]">
            <button className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780] mb-gold [&.mb-gold]:bg-care-gold text-white [&.mb-gold:hover]:bg-[#df9726]" onClick={() => book("Women's Care", d.name, "Online consultation")}>Book Consultation</button>
            <button className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780]" onClick={() => book("Women's Care", d.name, "Hospital visit")}>Visit Hospital</button>
          </div>
        </article>)}</div>
      </div>
    </section>
  );
}
