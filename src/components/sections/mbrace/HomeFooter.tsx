"use client";

import Image from "next/image";
import { PhoneIcon } from "@/components/icons/icons";
import { asset } from "./content";
import type { HomeData } from "@/lib/queries";
import type { BookAppointment } from "./types";

type Props = {
  book: BookAppointment;
  bookingEmail: string;
  setBookingEmail: (value: string) => void;
  hospital: HomeData["hospital"];
  goToServices: (category: string) => void;
  serviceGroups: HomeData["serviceGroups"];
  setServiceTab: (value: string) => void;
  setLocation: (value: string) => void;
  mapUrl: string;
  basePath?: string;
};

export default function HomeFooter({ book, bookingEmail, setBookingEmail, hospital, goToServices, serviceGroups, setServiceTab, setLocation, mapUrl, basePath = "" }: Props) {

  return (
    <footer className="mb-footer [background:linear-gradient(180deg,_#764b9e,_#290347)] text-white max-[701px]:pt-12 min-[701px]:pt-[65px] mb-rounded max-[701px]:rounded-[20px] min-[701px]:rounded-[28px]">
      <div className="mb-container max-[701px]:w-[calc(100%_-_40px)] min-[701px]:max-[1001px]:w-[calc(100%_-_48px)] min-[1001px]:max-[1201px]:w-[calc(100%_-_80px)] min-[1201px]:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto min-[1001px]:[#services>&]:w-[min(1200px,_calc(100%_-_80px))]">
        <div className="mb-footer-cta grid items-center pb-9.5 [border-bottom:1px_solid_#ffffff40] max-[701px]:grid-cols-[1fr] max-[701px]:gap-[25px] min-[701px]:max-[1001px]:grid-cols-[1fr_1fr] min-[1001px]:grid-cols-[1.4fr_1fr] min-[701px]:max-[1201px]:gap-7.5 min-[1201px]:gap-[55px] max-[701px]:[&_h2]:text-[28px] min-[701px]:max-[1001px]:[&_h2]:text-[25px] min-[1001px]:max-[1201px]:[&_h2]:text-[27px] min-[1201px]:[&_h2]:text-[30px] [&_h2]:leading-[1.5] [&_h2]:font-medium [&_h2]:tracking-[-.6px] [&_.mb-eyebrow]:text-[13px] [&_.mb-eyebrow]:text-white [&_.mb-eyebrow]:mb-2.5 [&_p:last-child]:text-[13px] [&_p:last-child]:mt-3.5 [&_form]:flex [&_form]:[background:linear-gradient(90deg,_#fff3df,_#f3e9fc)] [&_form]:pt-[7px] [&_form]:pr-[7px] [&_form]:pb-[7px] [&_form]:pl-[7px] [&_form]:rounded-[5px] max-[701px]:[&_form]:max-w-full [&_input]:min-w-0 [&_input]:w-full [&_input]:text-[12px] [&_input]:pt-2.5 [&_input]:pr-2.5 [&_input]:pb-2.5 [&_input]:pl-2.5 [&_input]:text-[#464646] [&_input]:outline-offset-[0] [&_input]:bg-transparent [&_.mb-button]:min-h-9 [&_.mb-button]:pt-2 [&_.mb-button]:pr-4.5 [&_.mb-button]:pb-2 [&_.mb-button]:pl-4.5 [&_.mb-button]:rounded-[2px] [&_.mb-button.mb-gold]:bg-care-purple">
          <div>
            <p className="mb-eyebrow max-[701px]:text-[12px] min-[701px]:text-[14px] font-semibold text-care-gold mb-3.5">Ready to Talk?</p>
            <h2>Schedule Your <em>Consultation</em> Today!</h2>
            <p>Whether you want to know about women&apos;s health, your child&apos;s care, pregnancy or fertility support, our expert multidisciplinary team is ready to assist.</p>
          </div>
          <form onSubmit={e => {
            e.preventDefault();
            book();
          }}>
            <label className="sr-only" htmlFor="footer-email">Email address</label>
            <input id="footer-email" type="email" placeholder="Enter your email address" required value={bookingEmail} onChange={e => setBookingEmail(e.target.value)} />
            <button className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780] mb-gold [&.mb-gold]:bg-care-gold text-white [&.mb-gold:hover]:bg-[#df9726]" type="submit">Send</button>
          </form>
        </div>
        <div className="mb-footer-grid grid pt-[45px] pb-[45px] max-[1001px]:grid-cols-[repeat(2,1fr)] min-[1001px]:grid-cols-[1fr_.8fr_1fr_1.05fr] max-[701px]:gap-[35px_25px] min-[701px]:max-[1001px]:gap-[35px] min-[1001px]:max-[1201px]:gap-[25px] min-[1201px]:gap-10 [&_p]:text-[12px] [&_p]:mt-[17px] [&_p]:leading-[1.8] [&_h3]:text-[16px] [&_h3]:font-semibold [&_h3]:mb-5 [&_ul]:list-none [&_ul]:grid [&_ul]:gap-[9px] [&_ul]:text-[12px] [&_a:hover]:underline max-[701px]:[&>div:first-child]:col-[1_/_-1] max-[701px]:[&>div:first-child]:max-w-87.5 max-[701px]:[&>div:last-child]:col-[1_/_-1]">
          <div>
            <a href={`${basePath}#home`} className="mb-footer-brands flex items-center gap-3.5 [&_img]:w-[44%] [&_img]:h-auto [&>span]:w-[1px] [&>span]:h-11.5 [&>span]:bg-[#fff8]">
              <Image src={asset(1)} width={155} height={45} alt="Kamineni Hospitals" />
              <span />
              <Image src={asset(23)} width={160} height={75} alt="M’Brace by Kamineni Hospitals" className="mb-footer-logo w-47.5 h-22.5 object-contain rounded-[4px] bg-transparent" />
            </a>
            <p>Compassionate fertility care, advanced technology and trusted guidance for every family.</p>
            <a className="mb-footer-phone flex gap-2 items-center text-[12px] mt-5 [&_svg]:w-[17px] [&_svg]:h-[17px]" href={hospital.phoneHref}>
              <PhoneIcon />{hospital.phone}</a>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>{[["Home", "home"], ["About Us", "about"], ["Women’s Care", "services"], ["Child Care", "services"], ["Our Team", "team"], ["Pregnancy & Birth Support", "services"], ["Fertility Care", "services"]].map(([text, href]) => <li key={text}>
              <a href={`${basePath}#${href}`} onClick={() => goToServices(text.replace("’", "'"))}>{text}</a>
            </li>)}</ul>
          </div>
          <div>
            <h3>Services</h3>
            <ul>{serviceGroups["Child Care"].slice(0, 7).map(([name]) => <li key={name}>
              <a href={`${basePath}#services`} onClick={() => setServiceTab("Child Care")}>{name}</a>
            </li>)}</ul>
          </div>
          <div>
            <h3>Location</h3>
            <div className="mb-footer-locations flex gap-4.5 text-[12px] mb-4 [&>a:first-child]:text-care-gold">
              <a href={`${basePath}#location`} onClick={() => setLocation("LB Nagar")}>LB Nagar</a>
              <span>|</span>
              <a href={`${basePath}#location`} onClick={() => setLocation("King Koti")}>King Koti</a>
            </div>
            <a className="mb-footer-map block relative rounded-[8px] overflow-hidden max-[701px]:max-w-87.5 [&_img]:w-full [&_img]:object-cover max-[701px]:[&_img]:h-45 min-[701px]:[&_img]:h-35 [&>span]:absolute [&>span]:right-2 [&>span]:bottom-2 [&>span]:bg-[#fff] [&>span]:text-[#333] [&>span]:pt-[5px] [&>span]:pr-2 [&>span]:pb-[5px] [&>span]:pl-2 [&>span]:rounded-[4px] [&>span]:text-[10px]" href={mapUrl} target="_blank" rel="noreferrer">
              <Image src={asset(6)} width={280} height={140} alt="Hospital location map" />
              <span>View on Map ↗</span>
            </a>
          </div>
        </div>
        <div className="mb-footer-bottom flex items-center [border-top:1px_solid_#ffffff40] pt-[25px] pb-[25px] flex-wrap max-[701px]:[justify-content:start] max-[701px]:gap-[15px] max-[701px]:text-[10px] min-[701px]:justify-between min-[701px]:gap-5 min-[701px]:text-[11px] [&>div]:flex [&>div]:gap-5 max-[701px]:[&_a]:[overflow-wrap:anywhere]">
          <p>© 2026 M’Brace. All rights reserved.</p>
          <div>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms &amp; Conditions</a>
          </div>
          <a href={`mailto:${hospital.email}`}>{hospital.email}</a>
        </div>
      </div>
    </footer>
  );
}
