import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { PhoneIcon, MapPinIcon, ClockIcon } from "@/components/icons/icons";
import { clinic } from "@/lib/content";

export default function Location() {
  return (
    <section id="location" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          label="Visit us"
          title="Find the studio"
          description="Street parking and a small dedicated lot are available behind the building."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="flex flex-col justify-between rounded-2xl bg-brand-700 p-8 text-white">
            <div className="space-y-6">
              <div className="flex gap-3.5">
                <MapPinIcon className="h-5 w-5 shrink-0 text-accent-300" />
                <div>
                  <p className="text-sm font-medium">{clinic.address.line1}</p>
                  <p className="text-sm text-brand-100">{clinic.address.line2}</p>
                </div>
              </div>
              <div className="flex gap-3.5">
                <PhoneIcon className="h-5 w-5 shrink-0 text-accent-300" />
                <a href={clinic.phoneHref} className="text-sm font-medium hover:text-accent-200">
                  {clinic.phone}
                </a>
              </div>
              <div className="flex gap-3.5">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent-300" />
                <dl className="space-y-1.5">
                  {clinic.hours.map((entry) => (
                    <div key={entry.day} className="flex justify-between gap-6 text-sm">
                      <dt className="text-brand-100">{entry.day}</dt>
                      <dd className="font-medium">{entry.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={clinic.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-brand-800 transition-colors hover:bg-accent-100"
              >
                <PhoneIcon className="h-4 w-4" />
                Call to book
              </a>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clinic.address.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-inset ring-white/25 transition-colors hover:bg-white/20"
              >
                <MapPinIcon className="h-4 w-4" />
                Get directions
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl ring-1 ring-mist-200">
            <iframe
              title={`Map showing ${clinic.name} location`}
              src={clinic.address.mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full lg:h-full lg:min-h-[22rem]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
