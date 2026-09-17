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
    <dialog ref={dialog} className="mb-dialog fixed top-0 right-0 bottom-0 left-0 mt-auto mr-auto mb-auto ml-auto w-[min(560px,calc(100%_-_32px))] max-h-[85vh] overflow-auto [border:0] rounded-[18px] text-care-copy shadow-[0_20px_80px_#0004] max-[701px]:pt-7.5 max-[701px]:pr-6 max-[701px]:pb-7.5 max-[701px]:pl-6 min-[701px]:pt-9 min-[701px]:pr-9 min-[701px]:pb-9 min-[701px]:pl-9 [&::backdrop]:bg-[#20113099] [&_.mb-photo]:h-60 [&_.mb-photo]:mb-6 max-[701px]:[&_h2]:text-[23px] min-[701px]:[&_h2]:text-[25px] [&_h2]:leading-[1.4] [&_h2]:text-care-navy [&_h2]:font-semibold [&_h2]:pr-[15px] [&>p]:text-[15px] [&>p]:mt-5 [&>p]:mr-0 [&>p]:mb-5 [&>p]:ml-0 [&>.mb-button]:mr-5 [&>a]:inline-block [&>a]:text-care-purple [&>a]:text-[13px] [&>a]:mt-4.5" aria-labelledby="detail-title">
      <button className="mb-dialog-close absolute right-[15px] top-3 text-care-purple text-[20px] bg-[#fff] rounded-[50%] w-8 h-8 z-[1]" onClick={() => dialog.current?.close()} aria-label="Close details">✕</button>{detail?.image !== undefined && <Photo src={detail.image} alt={detail.title} />}<h2 id="detail-title">{detail?.title}</h2>
      <p>{detail?.body}</p>
      <button className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780]" onClick={() => book()}>Book a Consultation</button>
      <a href={hospital.phoneHref}>{hospital.phone}</a>
    </dialog>
  );
}
