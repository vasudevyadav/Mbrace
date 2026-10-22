"use client";

import { type RefObject } from "react";
import Photo from "./Photo";
import type { HomeData } from "@/lib/queries";
import type { BookAppointment, DetailContent } from "./types";

type Props = {
  dialog: RefObject<HTMLDialogElement | null>;
  detail: DetailContent | null;
  book: BookAppointment;
  hospital: HomeData["hospital"];
};

export default function DetailsDialog({ dialog, detail, book, hospital }: Props) {

  return (
    <dialog ref={dialog} className="mb-dialog fixed inset-0 m-auto max-h-[85vh] w-[min(560px,calc(100%_-_32px))] overflow-auto rounded-[18px] border-0 px-6 py-7.5 text-care-copy shadow-[0_20px_80px_#0004] backdrop:bg-[#20113099] md:px-9 md:py-9 [&_.mb-photo]:mb-6 [&_.mb-photo]:h-60 [&>.mb-button]:mr-5 [&>a]:mt-4.5 [&>a]:inline-block [&>a]:text-[13px] [&>a]:text-care-purple" aria-labelledby="detail-title">
      <button className="mb-dialog-close absolute right-[15px] top-3 z-[1] h-8 w-8 rounded-full bg-white text-[20px] text-care-purple" onClick={() => dialog.current?.close()} aria-label="Close details">✕</button>{detail?.image !== undefined && <Photo src={detail.image} alt={detail.title} />}<h2 className="pr-[15px] text-[23px] font-semibold leading-[1.4] text-care-navy md:text-[25px]" id="detail-title">{detail?.title}</h2>
      <p className="my-5 text-[15px] leading-[1.65]">{detail?.body}</p>
      <button className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780]" onClick={() => book()}>Book a Consultation</button>
      <a href={hospital.phoneHref}>{hospital.phone}</a>
    </dialog>
  );
}
