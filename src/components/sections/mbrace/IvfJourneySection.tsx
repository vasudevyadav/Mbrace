"use client";

import Photo from "./Photo";
import Heading from "./Heading";

export default function IvfJourneySection() {

  return (
    <section
      id="ivf-journey"
      className="mb-section bg-care-purple text-white max-[701px]:rounded-[20px] max-[701px]:py-12 min-[701px]:rounded-[28px] min-[701px]:max-[1001px]:py-15 min-[1001px]:max-[1201px]:py-20 min-[1201px]:pt-[75px] min-[1201px]:pb-[59px] [&_.mb-heading_h2]:text-white [&_p]:leading-[1.55]"
    >
      <div className="mb-container mx-auto max-[701px]:w-[calc(100%_-_40px)] min-[701px]:max-[1001px]:w-[calc(100%_-_48px)] min-[1001px]:max-[1201px]:w-[calc(100%_-_80px)] min-[1201px]:w-[min(1130px,calc(100%_-_64px))]">
        <div className="mb-section-intro grid items-start max-[701px]:mb-6.5 max-[701px]:grid-cols-1 max-[701px]:gap-4 min-[701px]:mb-7.5 min-[701px]:grid-cols-[1.08fr_1fr] min-[701px]:max-[1001px]:gap-7.5 min-[1001px]:max-[1201px]:gap-10 min-[1201px]:mb-[45px] min-[1201px]:grid-cols-[500px_560px] min-[1201px]:gap-[65px] [&_.mb-heading]:mb-0 min-[1201px]:[&_.mb-heading_h2]:text-[44px] min-[1201px]:[&_.mb-heading_h2]:leading-[1.08] min-[1201px]:[&_.mb-heading_.mb-eyebrow]:mb-[14px] min-[1201px]:[&_.mb-heading_.mb-eyebrow]:text-[14px] min-[1201px]:[&>p]:pt-[34px] min-[1201px]:[&>p]:text-[15px] min-[1201px]:[&>p]:font-semibold min-[1201px]:[&>p]:leading-[1.45] min-[1201px]:[&>p]:opacity-[.82]">
          <Heading label="Location">
            Our Hospital &amp;
            <br />
            Clinics <em>Locations</em>
          </Heading>
          <p>
            M&apos;Brace welcomes you at two locations in Hyderabad, LB Nagar
            and King Koti, each equipped for consultations, diagnostics and
            every stage of care.
          </p>
        </div>
        <div className="mb-location-grid grid items-start max-[701px]:grid-cols-1 max-[701px]:gap-7.5 min-[701px]:grid-cols-[1fr_1.1fr] min-[701px]:max-[1001px]:gap-[25px] min-[1001px]:max-[1201px]:gap-10 min-[1201px]:grid-cols-[520px_607px] min-[1201px]:gap-10 max-[1001px]:[&_h3]:text-[17px] min-[1001px]:[&_h3]:text-[20px] [&_h3]:font-bold [&_h3]:leading-[1.45] [&_dt]:mt-4 [&_dt]:text-[13px] [&_dt]:font-bold [&_dt]:text-care-gold [&_dd]:mt-1 [&_dd]:text-[15px] [&_dd]:leading-[1.45] [&_dd]:[overflow-wrap:anywhere]">
          <div>
            <div
              className="mb-location-tabs flex gap-3 max-[701px]:mb-6 min-[701px]:mb-8 min-[1201px]:w-[488px] [&_span]:flex [&_span]:min-h-[49px] [&_span]:w-1/2 [&_span]:items-center [&_span]:justify-center [&_span]:rounded-[8px] [&_span]:text-[14px] [&_span]:font-bold"
              aria-label="Hospital locations"
            >
              <span className="bg-care-gold text-[16px] font-extrabold text-white">
                L.B.NAGAR
              </span>
              <span className="bg-white text-[#373535]">KING KOTI</span>
            </div>
            <h3>
              Best Children&apos;s Hospital &amp; Maternity Hospital -<br />
              <em>Mbrace Hospital, Hyderabad</em>
            </h3>
            <dl>
              <dt>Address:</dt>
              <dd>
                Inner Ring Rd, Suryodaya Colony, Central Bank Colony,
                Bahadurguda, Hyderabad, Telangana 500068.
              </dd>
              <dt>Contact No:</dt>
              <dd>
                <a href="tel:+917036270362">+91 70362 70362</a>
              </dd>
              <dt>Email:</dt>
              <dd>
                <a href="mailto:info@kaminenihospitals.com">
                  info@kaminenihospitals.com
                </a>
              </dd>
            </dl>
            <div className="mb-location-actions mt-7 flex max-[1001px]:flex-wrap max-[1001px]:gap-2.5 min-[1001px]:gap-[15px] max-[701px]:[&_.mb-button]:text-[12px] min-[701px]:max-[1001px]:[&_.mb-button]:text-[11px] max-[1001px]:[&_.mb-button]:px-[15px] max-[1001px]:[&_.mb-button]:py-2.5">
              <a
                className="mb-button inline-flex min-h-[49px] w-[212px] items-center justify-center rounded-[6px] border-0 bg-care-gold px-[26px] py-[14px] text-[14px] font-semibold text-white no-underline [&:hover]:bg-[#df9726]"
                href="#appointment"
              >
                Book An Appointment
              </a>
              <a
                className="mb-button inline-flex min-h-[49px] w-[200px] items-center justify-center rounded-[6px] border-2 border-white bg-transparent px-[26px] py-[14px] text-[14px] font-semibold text-white no-underline [&:hover]:bg-white/10"
                href="https://www.google.com/maps/search/?api=1&query=Kamineni%20Hospitals%20LB%20Nagar%2C%20Inner%20Ring%20Rd%2C%20Suryodaya%20Colony%2C%20Hyderabad%2C%20Telangana%20500068"
                target="_blank"
                rel="noreferrer"
              >
                View On Map
              </a>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Kamineni%20Hospitals%20LB%20Nagar%2C%20Inner%20Ring%20Rd%2C%20Suryodaya%20Colony%2C%20Hyderabad%2C%20Telangana%20500068"
            target="_blank"
            rel="noreferrer"
            className="mb-map block min-w-0 overflow-hidden rounded-[14px] max-[701px]:[&>.mb-photo]:h-75 min-[701px]:max-[1001px]:[&>.mb-photo]:h-[415px] min-[1001px]:[&>.mb-photo]:h-[451px] [&>.mb-photo]:rounded-[14px]"
            aria-label="Open directions to Mbrace Hospital, LB Nagar on Google Maps"
          >
            <Photo n={6} alt="Map of Hyderabad showing Mbrace Hospital" />
          </a>
        </div>
      </div>
    </section>
  );
}
