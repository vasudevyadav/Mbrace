"use client";

import Photo from "./Photo";
import Heading from "./Heading";
import { MapPinIcon } from "@/components/icons/icons";
import { locations } from "./content";
import type { HomeData } from "@/lib/queries";
import type { BookAppointment } from "./types";

type Props = {
  location: string;
  setLocation: (value: string) => void;
  hospital: HomeData["hospital"];
  setBookingLocation: (value: string) => void;
  book: BookAppointment;
  mapUrl: string;
};

export default function LocationSection({ location, setLocation, hospital, setBookingLocation, book, mapUrl }: Props) {

  return (
    <section id="location" className="mb-section max-[701px]:pt-12 max-[701px]:pb-12 min-[701px]:max-[1001px]:pt-15 min-[701px]:max-[1001px]:pb-15 min-[1001px]:pt-20 min-[1001px]:pb-20 [&_p]:leading-[1.65] mb-purple bg-care-purple text-white [&_.mb-heading_h2]:text-white mb-rounded max-[701px]:rounded-[20px] min-[701px]:rounded-[28px]">
      <div className="mb-container max-[701px]:w-[calc(100%_-_40px)] min-[701px]:max-[1001px]:w-[calc(100%_-_48px)] min-[1001px]:max-[1201px]:w-[calc(100%_-_80px)] min-[1201px]:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto min-[1001px]:[#services>&]:w-[min(1200px,_calc(100%_-_80px))]">
        <div className="mb-section-intro grid items-center max-[701px]:grid-cols-[1fr] max-[701px]:gap-4 max-[701px]:mb-6.5 min-[701px]:grid-cols-[1.08fr_1fr] min-[701px]:mb-7.5 min-[701px]:max-[1001px]:gap-7.5 min-[1001px]:max-[1201px]:gap-10 min-[1201px]:gap-[75px] [&_.mb-heading]:mb-0">
          <Heading label="Location">Our Hospital &amp;<br />Clinics <em>Locations</em>
          </Heading>
          <p>M&apos;Brace welcomes you at two locations in Hyderabad, LB Nagar and King Koti, each equipped for consultations, diagnostics and every stage of care.</p>
        </div>
        <div className="mb-location-grid grid [align-items:start] max-[701px]:grid-cols-[1fr] max-[701px]:gap-7.5 min-[701px]:grid-cols-[1fr_1.1fr] min-[701px]:max-[1001px]:gap-[25px] min-[1001px]:gap-10 max-[1001px]:[&_h3]:text-[17px] min-[1001px]:[&_h3]:text-[19px] [&_h3]:font-semibold [&_h3]:leading-[1.7] [&_dt]:text-care-gold [&_dt]:text-[13px] [&_dt]:mt-4 [&_dd]:text-[14px] [&_dd]:mt-1 [&_dd]:[overflow-wrap:anywhere]">
          <div>
            <div className="mb-location-tabs flex gap-2 max-[701px]:mb-6 min-[701px]:mb-8 [&_button]:w-[50%] [&_button]:min-h-[49px] [&_button]:bg-[#fff] [&_button]:text-[#373535] [&_button]:rounded-[5px] [&_button]:font-semibold [&_button]:text-[14px] [&_button[aria-pressed=true]]:bg-care-gold [&_button[aria-pressed=true]]:text-white" aria-label="Hospital location">{locations.map(x => <button key={x} type="button" aria-pressed={location === x} onClick={() => setLocation(x)}>{x.toUpperCase()}</button>)}</div>
            <h3>Best Children&apos;s Hospital &amp; Maternity Hospital –<br />
              <em>Mbrace Hospital, Hyderabad</em>
            </h3>
            <dl>
              <dt>Address:</dt>
              <dd>{location === "LB Nagar" ? hospital.address : hospital.kingKotiAddress}</dd>
              <dt>Contact No:</dt>
              <dd>
                <a href={hospital.phoneHref}>{hospital.phone}</a>
              </dd>
              <dt>Email:</dt>
              <dd>
                <a href={`mailto:${hospital.email}`}>{hospital.email}</a>
              </dd>
            </dl>
            <div className="mb-location-actions flex mt-7 max-[1001px]:gap-2.5 max-[1001px]:flex-wrap min-[1001px]:gap-4.5 max-[701px]:[&_.mb-button]:text-[12px] min-[701px]:max-[1001px]:[&_.mb-button]:text-[11px] max-[1001px]:[&_.mb-button]:pt-2.5 max-[1001px]:[&_.mb-button]:pr-[15px] max-[1001px]:[&_.mb-button]:pb-2.5 max-[1001px]:[&_.mb-button]:pl-[15px]">
              <button className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780] mb-gold [&.mb-gold]:bg-care-gold text-white [&.mb-gold:hover]:bg-[#df9726]" onClick={() => {
                setBookingLocation(location);
                book();
              }}>Book An Appointment</button>
              <a className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780] mb-outline [&.mb-outline]:bg-transparent [&.mb-outline]:[border:1px_solid_#ddd0e9] text-white" href={mapUrl} target="_blank" rel="noreferrer">View On Map</a>
            </div>
          </div>
          <a href={mapUrl} target="_blank" rel="noreferrer" className="mb-map relative block rounded-[14px] overflow-hidden min-w-0 max-[701px]:[&>.mb-photo]:h-75 min-[701px]:[&>.mb-photo]:h-[415px] [&>.mb-photo]:rounded-[14px] [&>span]:absolute [&>span]:bottom-3.5 [&>span]:left-3.5 [&>span]:right-3.5 [&>span]:flex [&>span]:gap-[7px] [&>span]:items-center [&>span]:pt-3 [&>span]:pr-3 [&>span]:pb-3 [&>span]:pl-3 [&>span]:bg-[#fff] [&>span]:text-care-purple [&>span]:text-[13px] [&>span]:rounded-[8px] [&_svg]:w-4.5 [&_svg]:h-4.5" aria-label={`Open directions to ${location} on Google Maps`}>
            <Photo n={6} alt="Map of Hyderabad showing hospital locations" />
            <span>
              <MapPinIcon />{location} · View on Google Maps ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
