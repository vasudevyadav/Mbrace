"use client";

import Image from "next/image";
import type { BookAppointment } from "./types";

type Props = {
  book: BookAppointment;
};

export default function BookingShortcuts({ book }: Props) {

  return (
    <div className="mb-quick-actions grid mb-0 max-[701px]:grid-cols-[repeat(2,1fr)] max-[701px]:gap-3.5 max-[701px]:mt-[25px] min-[701px]:grid-cols-[repeat(4,1fr)] min-[701px]:max-[1001px]:gap-4 min-[701px]:max-[1001px]:mt-[35px] min-[1001px]:max-[1201px]:gap-[25px] min-[1201px]:gap-8.5 min-[1001px]:mt-15.5 max-[1001px]:mr-5 max-[1001px]:ml-5 min-[1001px]:max-[1600px]:mr-[25px] min-[1001px]:max-[1600px]:ml-[25px] min-[1600px]:mr-auto min-[1600px]:ml-auto min-[1600px]:max-w-377.5 [&_button]:flex [&_button]:items-center [&_button]:justify-center [&_button]:flex-col [&_button]:bg-care-purple [&_button]:rounded-[10px] [&_button]:text-white [&_button]:font-bold max-[701px]:[&_button]:gap-2.5 max-[701px]:[&_button]:min-h-[155px] max-[701px]:[&_button]:text-[18px] min-[701px]:[&_button]:gap-[15px] min-[701px]:max-[1001px]:[&_button]:min-h-35 min-[701px]:max-[1001px]:[&_button]:text-[15px] min-[1001px]:[&_button]:min-h-44 min-[1001px]:max-[1201px]:[&_button]:text-[18px] min-[1201px]:[&_button]:text-[22px] [&_button:nth-child(2)]:[background:linear-gradient(90deg,#764b9e,#ca9559)] [&_button:nth-child(3)]:[background:linear-gradient(90deg,#b98b6c,#764b9e)] [&_button:hover]:[transform:translateY(-4px)] max-[1001px]:[&_img]:w-13 max-[1001px]:[&_img]:h-13 min-[1001px]:[&_img]:w-[65px] min-[1001px]:[&_img]:h-[65px] motion-reduce:[&_button:hover]:[transform:none] max-[701px]:[&.mb-quick-actions.mb-mobile-scroll]:auto-cols-[74%] mb-mobile-scroll max-[701px]:[&.mb-mobile-scroll]:grid max-[701px]:[&.mb-mobile-scroll]:grid-cols-[none] max-[701px]:[&.mb-mobile-scroll]:[grid-auto-flow:column] max-[701px]:[&.mb-mobile-scroll]:auto-cols-[min(84%,_320px)] max-[701px]:[&.mb-mobile-scroll]:gap-4 max-[701px]:[&.mb-mobile-scroll]:max-w-full max-[701px]:[&.mb-mobile-scroll]:overflow-x-auto max-[701px]:[&.mb-mobile-scroll]:overscroll-x-contain max-[701px]:[&.mb-mobile-scroll]:[scroll-snap-type:x_mandatory] max-[701px]:[&.mb-mobile-scroll]:[scroll-padding-inline:2px] max-[701px]:[&.mb-mobile-scroll]:pt-1 max-[701px]:[&.mb-mobile-scroll]:pr-0.5 max-[701px]:[&.mb-mobile-scroll]:pb-4.5 max-[701px]:[&.mb-mobile-scroll]:pl-0.5 max-[701px]:[&.mb-mobile-scroll]:[scrollbar-width:thin] max-[701px]:[&.mb-mobile-scroll]:[scrollbar-color:#b59bcf_#eee7f5] max-[701px]:[&>*]:min-w-0 max-[701px]:[&>*]:[scroll-snap-align:start] max-[701px]:[&>:last-child]:[scroll-snap-align:end]" role="region" aria-label="Booking options — swipe to browse" tabIndex={0}>
      {["Book Online Consult", "Book Hospital Visit", "Book Vaccine", "Book Scans"].map((title, i) => <button key={title} type="button" onClick={() => book(i === 2 ? "Child Care" : "", "", title)}>
        <Image src={`/images/figma/booking-${i}.svg`} alt="" width={72} height={72} />
        <span>{title}</span>
      </button>)}
    </div>
  );
}
