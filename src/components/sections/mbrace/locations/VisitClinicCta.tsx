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

export default function VisitClinicCta({ locationName, image, phone, phoneHref, email, book }: Props) {

  return (
    <section className="mb-section max-[701px]:pt-12 max-[701px]:pb-12 min-[701px]:max-[1001px]:pt-15 min-[701px]:max-[1001px]:pb-15 min-[1001px]:pt-20 min-[1001px]:pb-20">
      <div className="mb-container max-[701px]:w-[calc(100%_-_40px)] min-[701px]:max-[1001px]:w-[calc(100%_-_48px)] min-[1001px]:max-[1201px]:w-[calc(100%_-_80px)] min-[1201px]:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto grid gap-10 min-[1001px]:grid-cols-[1.05fr_1fr] min-[1001px]:items-center">
        <div>
          <p className="mb-3 flex items-center gap-2 text-[14px] font-bold text-care-purple">
            <MapPinIcon className="h-6 w-6" /> VISIT US AT {locationName.toUpperCase()}
          </p>
          <h2 className="mb-5 font-bold text-[#1f2b70] max-[701px]:text-[28px] min-[701px]:text-[34px] min-[1001px]:text-[40px] leading-[1.2]">
            M&apos;Brace Hospital <span className="text-care-gold">in {locationName}</span>
          </h2>
          <p className="mb-2 text-[15px] leading-[1.65] text-[#5d6078]">A visit begins the moment you walk through our doors — with warmth, expert care and a team ready to listen. Whether it&apos;s a routine check-up, a scan or a specialist consultation, we are here for every step of your journey.</p>
          <p className="mb-5 text-[15px] text-[#5d6078]">
            Call <strong className="text-care-purple">{phone}</strong> or <strong className="text-care-purple">{email}</strong> to book your visit
          </p>
          <button type="button" onClick={() => book()} className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[8px] border-0 text-[14px] font-semibold no-underline hover:bg-[#603780]">Book Appointment</button>
          <a href={phoneHref} className="ml-4 text-[13px] text-care-purple hover:underline">or call {phone}</a>
        </div>
        {image && (
          <div className="relative h-67.5 min-[1001px]:h-95 overflow-hidden rounded-[20px]">
            <Image src={image} alt={`M'Brace Hospital, ${locationName}`} fill className="object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
