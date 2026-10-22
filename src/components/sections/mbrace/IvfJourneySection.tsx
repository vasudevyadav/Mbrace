"use client";

import Photo from "./Photo";
import Heading from "./Heading";

export default function IvfJourneySection() {

  return (
    <section
      id="ivf-journey"
      className="mb-section rounded-[20px] bg-care-purple py-12 text-white md:rounded-[28px] md:py-15 lg:py-20 xl:pb-[59px] xl:pt-[75px]"
    >
      <div className="mb-container mx-auto w-[calc(100%_-_40px)] md:w-[calc(100%_-_48px)] lg:w-[calc(100%_-_80px)] xl:w-[min(1130px,calc(100%_-_64px))]">
        <div className="mb-section-intro mb-6.5 grid grid-cols-1 items-start gap-4 md:mb-7.5 md:grid-cols-[1.08fr_1fr] md:gap-7.5 lg:gap-10 xl:mb-[45px] xl:grid-cols-[500px_560px] xl:gap-[65px]">
          <Heading label="Location" className="mb-0!" headingClassName="text-white! xl:text-[44px]! xl:leading-[1.08]!" eyebrowClassName="xl:mb-[14px]! xl:text-[14px]!">
            Our Hospital &amp;
            <br />
            Clinics <em>Locations</em>
          </Heading>
          <p className="leading-[1.55] xl:pt-[34px] xl:text-[15px] xl:font-semibold xl:leading-[1.45] xl:opacity-[.82]">
            M&apos;Brace welcomes you at two locations in Hyderabad, LB Nagar
            and King Koti, each equipped for consultations, diagnostics and
            every stage of care.
          </p>
        </div>
        <div className="mb-location-grid grid grid-cols-1 items-start gap-7.5 md:grid-cols-[1fr_1.1fr] md:gap-[25px] lg:gap-10 xl:grid-cols-[520px_607px] xl:gap-10">
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
            <h3 className="text-[17px] font-bold leading-[1.45] lg:text-[20px]">
              Best Children&apos;s Hospital &amp; Maternity Hospital -<br />
              <em>Mbrace Hospital, Hyderabad</em>
            </h3>
            <dl>
              <dt className="mt-4 text-[13px] font-bold text-care-gold">Address:</dt>
              <dd className="mt-1 text-[15px] leading-[1.45] [overflow-wrap:anywhere]">
                Inner Ring Rd, Suryodaya Colony, Central Bank Colony,
                Bahadurguda, Hyderabad, Telangana 500068.
              </dd>
              <dt className="mt-4 text-[13px] font-bold text-care-gold">Contact No:</dt>
              <dd className="mt-1 text-[15px] leading-[1.45] [overflow-wrap:anywhere]">
                <a href="tel:+917036270362">+91 70362 70362</a>
              </dd>
              <dt className="mt-4 text-[13px] font-bold text-care-gold">Email:</dt>
              <dd className="mt-1 text-[15px] leading-[1.45] [overflow-wrap:anywhere]">
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
