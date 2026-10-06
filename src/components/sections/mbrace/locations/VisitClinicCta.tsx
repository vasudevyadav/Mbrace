import Image from "next/image";
import { MapPinIcon } from "@/components/icons/icons";
import type { BookAppointment } from "../types";

type Props = {
  locationName: string;
  image: string;
  phone: string;
  phoneHref: string;
  email: string;
  book: BookAppointment;
};

export default function VisitClinicCta({
  locationName,
  image,
  phone,
  phoneHref,
  email,
  book,
}: Props) {
  return (
    <section className="mb-section py-12 md:py-14 lg:py-16">
      <div className="mb-container mx-auto grid w-full gap-10 px-5 sm:px-6 lg:max-w-6xl lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="mb-3 flex items-center gap-2 text-[14px] font-bold text-care-purple">
            <MapPinIcon className="h-6 w-6" /> VISIT US AT{" "}
            {locationName.toUpperCase()}
          </p>
          <h2 className="mb-5 text-[28px] font-bold leading-[1.2] text-[#1f2b70] md:text-[34px] lg:text-[40px]">
            M&apos;Brace Hospital{" "}
            <span className="text-care-gold">in {locationName}</span>
          </h2>
          <p className="mb-2 text-[15px] leading-[1.65] text-[#5d6078]">
            A visit begins the moment you walk through our doors — with warmth,
            expert care and a team ready to listen. Whether it&apos;s a routine
            check-up, a scan or a specialist consultation, we are here for every
            step of your journey.
          </p>
          <p className="mb-5 text-sm text-[#5d6078]">
            Call <strong className="text-care-purple">{phone}</strong> or{" "}
            <strong className="text-care-purple">{email}</strong> to book your
            visit
          </p>
          <button
            type="button"
            onClick={() => book()}
            className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[8px] border-0 text-[14px] font-semibold no-underline hover:bg-[#603780]"
          >
            Book Appointment
          </button>
          <a
            href={phoneHref}
            className="ml-4 text-sm text-care-purple hover:underline"
          >
            or call {phone}
          </a>
        </div>
        {image && (
          <div className="relative h-72 overflow-hidden rounded-[20px] lg:h-96">
            <Image
              src={image}
              alt={`M'Brace Hospital, ${locationName}`}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
