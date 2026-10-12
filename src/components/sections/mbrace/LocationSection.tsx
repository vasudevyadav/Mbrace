"use client";

import Photo from "./Photo";
import Heading from "./Heading";
import { locations } from "./content";
import { EmergencyIcon, MapPinIcon } from "@/components/icons/icons";
import type { HomeData } from "@/lib/queries";
import type { BookAppointment } from "./types";

type Props = {
  location: string;
  setLocation: (value: string) => void;
  hospital: HomeData["hospital"];
  setBookingLocation: (value: string) => void;
  book: BookAppointment;
  mapUrl: string;
  detailPage?: boolean;
  reachIntro?: string;
};

export default function LocationSection({
  location,
  setLocation,
  hospital,
  setBookingLocation,
  book,
  mapUrl,
  detailPage = false,
  reachIntro,
}: Props) {
  const reachCards = [
    {
      title: "Nearest Auto Stand",
      body: location === "LB Nagar" ? "LB Nagar Auto Stand (approx. 0.8 km). Autos and cabs ply along Inner Ring Road via LB Nagar X Roads and Chaitanyapuri junction. Easily reachable from Dilsukhnagar and Saroor Nagar." : "Autos and cabs are readily available from King Koti, Abids, Koti and the surrounding central Hyderabad neighbourhoods.",
      Icon: MapPinIcon,
    },
    {
      title: "Nearest Bus Stop",
      body: location === "LB Nagar" ? "LB Nagar Bus Stop on Inner Ring Road (approx. 600–900 metres). Served by TSRTC routes from Dilsukhnagar, Uppal, Hayathnagar and Mehdipatnam. Also reachable via Metro feeder buses from LB Nagar Metro Station." : "King Koti and Abids bus stops connect the hospital with Koti, Nampally, Himayatnagar and other parts of Hyderabad.",
      Icon: EmergencyIcon,
    },
    {
      title: "Nearest Landmark",
      body: location === "LB Nagar" ? "LB Nagar Metro Station (approx. 1.2 km), Central Bank Colony and Kamineni Hospitals LB Nagar — directly adjacent. Chaitanyapuri flyover and GHMC Park are visible from the main road." : "Kamineni Hospitals King Koti is centrally located near Abids, Koti and the King Koti Palace area.",
      Icon: MapPinIcon,
    },
  ];
  return (
    <section
      id="location"
      className="mb-section bg-care-purple text-white rounded-[20px] py-8 md:rounded-[28px] md:py-15 lg:py-20 xl:pt-[75px] xl:pb-[59px] [&_.mb-heading_h2]:text-white [&_p]:leading-[1.55]"
    >
      <div className="mb-container mx-auto w-[calc(100%_-_40px)] md:w-[calc(100%_-_48px)] lg:w-[calc(100%_-_80px)] xl:w-[min(1130px,calc(100%_-_64px))]">
        <div className="mb-section-intro grid items-start mb-6.5 grid-cols-1 gap-4 md:mb-7.5 md:grid-cols-[1.08fr_1fr] md:gap-7.5 lg:gap-10 xl:mb-[45px] xl:grid-cols-[500px_560px] xl:gap-[65px] [&_.mb-heading]:mb-0 xl:[&_.mb-heading_h2]:text-[44px] xl:[&_.mb-heading_h2]:leading-[1.08] xl:[&_.mb-heading_.mb-eyebrow]:mb-[14px] xl:[&_.mb-heading_.mb-eyebrow]:text-[14px] xl:[&>p]:pt-[34px] xl:[&>p]:text-[15px] xl:[&>p]:font-semibold xl:[&>p]:leading-[1.45] xl:[&>p]:opacity-[.82]">
          <Heading label="Location">
            {detailPage ? <>Our Hospital in<br /><em>{location === "LB Nagar" ? "L.B. Nagar" : location}</em></> : <>Our Hospital &amp;<br />Clinics <em>Locations</em></>}
          </Heading>
          <p>
            M&apos;Brace welcomes you at two locations in Hyderabad, LB Nagar
            and King Koti, each equipped for consultations, diagnostics and
            every stage of care.
          </p>
        </div>
        <div className="mb-location-grid grid items-start grid-cols-1 gap-7.5 md:grid-cols-[1fr_1.1fr] md:gap-[25px] lg:gap-10 xl:grid-cols-[520px_607px] xl:gap-10 [&_h3]:text-[17px] lg:[&_h3]:text-[20px] [&_h3]:font-bold [&_h3]:leading-[1.45] [&_dt]:mt-4 [&_dt]:text-[13px] [&_dt]:font-bold [&_dt]:text-care-gold [&_dd]:mt-1 [&_dd]:text-[15px] [&_dd]:leading-[1.45] [&_dd]:[overflow-wrap:anywhere]">
          <div>
            {!detailPage && <div
              className="mb-location-tabs flex gap-3 mb-6 md:mb-8 xl:w-[488px] [&_button]:min-h-[49px] [&_button]:w-1/2 [&_button]:rounded-[8px] [&_button]:bg-white [&_button]:text-[14px] [&_button]:font-bold [&_button]:text-[#373535] [&_button[aria-pressed=true]]:bg-care-gold [&_button[aria-pressed=true]]:text-[16px] [&_button[aria-pressed=true]]:font-extrabold [&_button[aria-pressed=true]]:text-white"
              aria-label="Hospital location"
            >
              {locations.map((x) => (
                <button
                  key={x}
                  type="button"
                  aria-pressed={location === x}
                  onClick={() => setLocation(x)}
                >
                  {x.toUpperCase().replace("LB NAGAR", "L.B.NAGAR")}
                </button>
              ))}
            </div>}
            <h3>
              Best Children&apos;s Hospital &amp; Maternity Hospital –<br />
              <em>Mbrace Hospital, Hyderabad</em>
            </h3>
            <dl>
              <dt>Address:</dt>
              <dd>
                {location === "LB Nagar"
                  ? hospital.address
                  : hospital.kingKotiAddress}
              </dd>
              <dt>Contact No:</dt>
              <dd>
                <a href={hospital.phoneHref}>{hospital.phone}</a>
              </dd>
              <dt>Email:</dt>
              <dd>
                <a href={`mailto:${hospital.email}`}>{hospital.email}</a>
              </dd>
            </dl>
            <div className="mb-location-actions mt-7 flex flex-wrap gap-2.5 lg:gap-[15px] [&_.mb-button]:text-[12px] md:[&_.mb-button]:text-[11px] [&_.mb-button]:px-[15px] [&_.mb-button]:py-2.5">
              <button
                className="mb-button inline-flex min-h-[49px] w-[212px] items-center justify-center rounded-[6px] border-0 bg-care-gold px-[26px] py-[14px] text-[14px] font-semibold text-white no-underline hover:bg-[#df9726]"
                onClick={() => {
                  setBookingLocation(location);
                  book();
                }}
              >
                Book An Appointment
              </button>
              <a
                className="mb-button inline-flex min-h-[49px] w-[200px] items-center justify-center rounded-[6px] border-2 border-white bg-transparent px-[26px] py-[14px] text-[14px] font-semibold text-white no-underline hover:bg-white/10"
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                View On Map
              </a>
            </div>
          </div>
          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="mb-map block min-w-0 overflow-hidden rounded-[14px] [&>.mb-photo]:h-75 md:[&>.mb-photo]:h-[415px] lg:[&>.mb-photo]:h-[451px] [&>.mb-photo]:rounded-[14px]"
            aria-label={`Open directions to ${location} on Google Maps`}
          >
            <Photo n={6} alt="Map of Hyderabad showing Mbrace Hospital" />
          </a>
        </div>
        {detailPage && (
          <div className="mt-14 border-t border-white/15 pt-12 lg:mt-16 lg:pt-14">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="text-[12px] font-bold uppercase text-care-gold">How to Reach Us</p>
              <h2 className="mt-3 text-[28px] font-bold leading-[1.2] text-white md:text-[34px] lg:text-[40px]">Reach <span className="text-care-gold">M&apos;Brace Hospital</span>, {location}</h2>
              <p className="mt-3 text-[14px] leading-[1.6] text-white/90 md:text-[15px]">{reachIntro}</p>
            </div>
            <div className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:overflow-visible lg:gap-7">
              {reachCards.map(({ title, body, Icon }, index) => (
                <article key={title} className={`w-[88%] shrink-0 snap-start rounded-[16px] p-6 shadow-[0_4px_10px_rgba(118,64,153,.08)] md:w-auto lg:min-h-[220px] lg:p-8 ${index === 1 ? "bg-care-gold text-white" : "border border-[#e8dff5] bg-white text-[#5d6078]"}`}>
                  <div className="flex items-center gap-3">
                    <span className={`grid size-11 shrink-0 place-items-center rounded-full ${index === 1 ? "bg-care-purple text-white" : "bg-care-gold text-white"}`}><Icon className="size-5" /></span>
                    <h3 className={`text-[17px] font-bold lg:text-[18px] ${index === 1 ? "text-white" : "text-care-navy"}`}>{title}</h3>
                  </div>
                  <p className={`mt-4 text-[13px] leading-[1.65] lg:text-[14px] ${index === 1 ? "text-white" : "text-[#5d6078]"}`}>{body}</p>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
