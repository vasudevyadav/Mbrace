"use client";

import Photo from "./Photo";
import Heading from "./Heading";

export default function IvfJourneySection() {

  return (
    <section
      id="ivf-journey"
      className="mb-section bg-care-purple text-white rounded-[20px] py-12 md:rounded-[28px] md:py-15 lg:py-20 xl:pt-[75px] xl:pb-[59px] [&_.mb-heading_h2]:text-white [&_p]:leading-[1.55]"
    >
      <div className="mb-container mx-auto w-[calc(100%_-_40px)] md:w-[calc(100%_-_48px)] lg:w-[calc(100%_-_80px)] xl:w-[min(1130px,calc(100%_-_64px))]">
        <div className="mb-section-intro grid items-start mb-6.5 grid-cols-1 gap-4 md:mb-7.5 md:grid-cols-[1.08fr_1fr] md:gap-7.5 lg:gap-10 xl:mb-[45px] xl:grid-cols-[500px_560px] xl:gap-[65px] [&_.mb-heading]:mb-0 xl:[&_.mb-heading_h2]:text-[44px] xl:[&_.mb-heading_h2]:leading-[1.08] xl:[&_.mb-heading_.mb-eyebrow]:mb-[14px] xl:[&_.mb-heading_.mb-eyebrow]:text-[14px] xl:[&>p]:pt-[34px] xl:[&>p]:text-[15px] xl:[&>p]:font-semibold xl:[&>p]:leading-[1.45] xl:[&>p]:opacity-[.82]">
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
        <div className="mb-location-grid grid items-start grid-cols-1 gap-7.5 md:grid-cols-[1fr_1.1fr] md:gap-[25px] lg:gap-10 xl:grid-cols-[520px_607px] xl:gap-10 [&_h3]:text-[17px] lg:[&_h3]:text-[20px] [&_h3]:font-bold [&_h3]:leading-[1.45] [&_dt]:mt-4 [&_dt]:text-[13px] [&_dt]:font-bold [&_dt]:text-care-gold [&_dd]:mt-1 [&_dd]:text-[15px] [&_dd]:leading-[1.45] [&_dd]:[overflow-wrap:anywhere]">
          <div>
            <div
              className="mb-location-tabs flex gap-3 mb-6 md:mb-8 xl:w-[488px] [&_span]:flex [&_span]:min-h-[49px] [&_span]:w-1/2 [&_span]:items-center [&_span]:justify-center [&_span]:rounded-[8px] [&_span]:text-[14px] [&_span]:font-bold"
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
            <div className="mb-location-actions mt-7 flex flex-wrap gap-2.5 lg:gap-[15px] [&_.mb-button]:text-[12px] md:[&_.mb-button]:text-[11px] [&_.mb-button]:px-[15px] [&_.mb-button]:py-2.5">
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
            className="mb-map block min-w-0 overflow-hidden rounded-[14px] [&>.mb-photo]:h-75 md:[&>.mb-photo]:h-[415px] lg:[&>.mb-photo]:h-[451px] [&>.mb-photo]:rounded-[14px]"
            aria-label="Open directions to Mbrace Hospital, LB Nagar on Google Maps"
          >
            <Photo n={6} alt="Map of Hyderabad showing Mbrace Hospital" />
          </a>
        </div>
      </div>
    </section>
  );
}
