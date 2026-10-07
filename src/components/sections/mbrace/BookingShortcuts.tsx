"use client";

import Image from "next/image";
import type { BookAppointment } from "./types";

type Props = {
  book: BookAppointment;
};

export default function BookingShortcuts({ book }: Props) {

  return (
    <div className="mb-quick-actions mx-5 mb-0 mt-[25px] grid grid-cols-2 gap-3.5 md:mt-[35px] md:grid-cols-4 md:gap-4 lg:mx-[25px] lg:mt-15.5 lg:gap-[25px] xl:gap-8.5 2xl:mx-auto 2xl:max-w-377.5 [&_button]:flex [&_button]:items-center [&_button]:justify-center [&_button]:flex-col [&_button]:bg-care-purple [&_button]:rounded-xl [&_button]:text-white [&_button]:font-bold [&_button]:gap-2.5 [&_button]:min-h-[155px] [&_button]:text-[18px] md:[&_button]:gap-[15px] md:[&_button]:min-h-35 md:[&_button]:text-[15px] lg:[&_button]:min-h-44 lg:[&_button]:text-[18px] xl:[&_button]:text-[24px] [&_button:nth-child(2)]:[background:linear-gradient(90deg,#764b9e,#fbad31)] [&_button:nth-child(3)]:[background:linear-gradient(-90deg,#764b9e,#fbad31)] [&_button:hover]:[transform:translateY(-4px)] [&_img]:w-13 [&_img]:h-13 lg:[&_img]:w-[65px] lg:[&_img]:h-[65px] xl:[&_button:nth-child(1)_img]:w-20 xl:[&_button:nth-child(1)_img]:h-20 xl:[&_button:nth-child(2)_img]:w-9.5 xl:[&_button:nth-child(2)_img]:h-9.5 xl:[&_button:nth-child(3)_img]:w-20.5 xl:[&_button:nth-child(3)_img]:h-20.5 xl:[&_button:nth-child(4)_img]:w-18.5 xl:[&_button:nth-child(4)_img]:h-18.5 motion-reduce:[&_button:hover]:[transform:none] [&>*]:min-w-0" role="region" aria-label="Booking options">
      {["Book Online Consult", "Book Hospital Visit", "Book Vaccine", "Book Scans"].map((title, i) => <button key={title} type="button" onClick={() => book(i === 2 ? "Child Care" : "", "", title)}>
        <Image src={`/images/figma/booking-${i}.svg`} alt="" width={72} height={72} />
        <span>{title}</span>
      </button>)}
    </div>
  );
}
