import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Appointment from "@/components/sections/Appointment";
import { ClockIcon, PhoneIcon, MapPinIcon } from "@/components/icons/icons";
import { clinic } from "@/lib/content";

export default function AppointmentSection() {
  return (
    <section id="appointment" className="bg-cream-50 py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="hidden lg:block">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-4xl">
              <Image
                src="/images/photos/appointment.jpg"
                alt="Patient smiling at her reflection after a dental visit"
                width={700}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            <dl className="mt-8 space-y-5">
              <div className="flex gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                  <PhoneIcon className="h-4 w-4" />
                </span>
                <div>
                  <dt className="text-sm font-medium text-ink-900">Call the studio</dt>
                  <dd className="mt-0.5 text-sm text-ink-500">
                    <a href={clinic.phoneHref} className="hover:text-brand-700">
                      {clinic.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                  <ClockIcon className="h-4 w-4" />
                </span>
                <div>
                  <dt className="text-sm font-medium text-ink-900">Studio hours</dt>
                  <dd className="mt-0.5 text-sm text-ink-500">
                    {clinic.hours[0].day}: {clinic.hours[0].time}
                  </dd>
                </div>
              </div>
              <div className="flex gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                  <MapPinIcon className="h-4 w-4" />
                </span>
                <div>
                  <dt className="text-sm font-medium text-ink-900">Location</dt>
                  <dd className="mt-0.5 text-sm text-ink-500">{clinic.address.line1}</dd>
                </div>
              </div>
            </dl>
          </div>

          <div>
            <SectionHeading
              label="Book a visit"
              title="Tell us what you need — we'll take it from there"
              description="Share a few details and our front desk will confirm a time that works for you. For same-day emergencies, please call the studio directly."
            />
            <div className="mt-8">
              <Appointment />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
