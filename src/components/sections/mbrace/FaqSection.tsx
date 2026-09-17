"use client";

import { useState } from "react";
import Heading from "./Heading";
import type { HomeData } from "@/lib/queries";

type Props = {
  careCategories: HomeData["careCategories"];
  homeFaqs: HomeData["homeFaqs"];
};

export default function FaqSection({ careCategories, homeFaqs }: Props) {
  const [faqCategory, setFaqCategory] = useState<string>(careCategories[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <section id="faq" className="mb-section max-[701px]:pt-12 max-[701px]:pb-12 min-[701px]:max-[1001px]:pt-15 min-[701px]:max-[1001px]:pb-15 min-[1001px]:pt-20 min-[1001px]:pb-20 [&_p]:leading-[1.65] mb-container max-[701px]:w-[calc(100%_-_40px)] min-[701px]:max-[1001px]:w-[calc(100%_-_48px)] min-[1001px]:max-[1201px]:w-[calc(100%_-_80px)] min-[1201px]:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto min-[1001px]:[#services>&]:w-[min(1200px,_calc(100%_-_80px))] mb-faq grid max-[701px]:grid-cols-[1fr] max-[701px]:gap-7 min-[701px]:grid-cols-[420fr_650fr] min-[701px]:max-[1001px]:gap-10 min-[1001px]:max-[1201px]:gap-[65px] min-[1201px]:gap-26 [&>div>p]:text-[15px] [&>div>p]:font-semibold [&>div>p]:leading-[1.6]">
      <div>
        <Heading label="Frequently Asked Questions">Your Queries,<br />
          <em>Answered Simply!</em>
        </Heading>
        <p>From women’s health, to delivery, postpartum and child care, find expert answers to all your common questions with us.</p>
        <div className="mb-faq-categories flex flex-col gap-2.5 max-[701px]:mt-7 min-[701px]:max-[1001px]:mt-[35px] min-[1001px]:mt-[65px] max-[701px]:[&_button]:pt-[15px] max-[701px]:[&_button]:pr-4.5 max-[701px]:[&_button]:pb-[15px] max-[701px]:[&_button]:pl-4.5 max-[701px]:[&_button]:text-[13px] max-[701px]:[&_button]:min-h-12.5 min-[701px]:[&_button]:pt-[17px] min-[701px]:[&_button]:pr-5.5 min-[701px]:[&_button]:pb-[17px] min-[701px]:[&_button]:pl-5.5 min-[701px]:[&_button]:text-[16px] min-[701px]:[&_button]:min-h-14 [&_button]:rounded-[8px] [&_button]:bg-care-soft [&_button]:text-care-navy [&_button]:font-extrabold [&_button]:text-left [&_button]:[transition:background_.2s,_color_.2s] [&_button:hover]:bg-[#efe7f8] [&_button[aria-pressed=true]]:bg-care-gold [&_button[aria-pressed=true]]:text-white [&_button[aria-pressed=true]:hover]:bg-care-gold [&_button:focus-visible]:[outline:2px_solid_var(--color-care-purple)] [&_button:focus-visible]:outline-offset-[2px]" aria-label="FAQ categories">{careCategories.map(x => <button key={x} type="button" aria-pressed={faqCategory === x} aria-controls="faq-questions" onClick={() => {
          setFaqCategory(x);
          setOpenFaq(0);
        }}>{x}</button>)}</div>
      </div>
      <div id="faq-questions" className="mb-faq-list max-[701px]:pt-0 min-[701px]:pt-7" role="region" aria-label={`${faqCategory} questions`}>{homeFaqs[faqCategory].map((faq, i) => <div className={`mb-faq-item rounded-[8px] bg-care-soft text-care-navy mb-3 overflow-hidden [transition:background_.2s,_color_.2s] [&:not(.is-open):hover]:bg-[#efe7f8] [&.is-open]:[background:linear-gradient(105deg,var(--color-care-gold),var(--color-care-purple))] [&.is-open]:text-white [&_h3_button]:flex [&_h3_button]:items-center [&_h3_button]:justify-between [&_h3_button]:gap-5 [&_h3_button]:w-full [&_h3_button]:text-left [&_h3_button]:leading-[1.3] [&_h3_button]:font-bold max-[1001px]:[&_h3_button]:pt-4.5 max-[1001px]:[&_h3_button]:pr-4.5 max-[1001px]:[&_h3_button]:pb-4.5 max-[1001px]:[&_h3_button]:pl-4.5 max-[1001px]:[&_h3_button]:text-[13px] min-[1001px]:[&_h3_button]:pt-5 min-[1001px]:[&_h3_button]:pr-5.5 min-[1001px]:[&_h3_button]:pb-5 min-[1001px]:[&_h3_button]:pl-5.5 min-[1001px]:[&_h3_button]:text-[16px] max-[701px]:[&_h3_button]:min-h-[65px] min-[701px]:[&_h3_button]:min-h-16.5 [&_h3_button:focus-visible]:[outline:2px_solid_var(--color-care-purple)] [&_h3_button:focus-visible]:outline-offset-[-2px] [&_h3_span]:shrink-0 [&_h3_span]:text-[18px] [&_h3_span]:mr-[9px] [&>div>p]:pt-0 [&>div>p]:text-[13px] [&>div>p]:leading-[1.5] max-[701px]:[&>div>p]:pr-4.5 max-[701px]:[&>div>p]:pb-4.5 max-[701px]:[&>div>p]:pl-4.5 min-[701px]:[&>div>p]:pr-5.5 min-[701px]:[&>div>p]:pb-5 min-[701px]:[&>div>p]:pl-5.5 ${openFaq === i ? "is-open" : ""}`} key={faq.question}>
        <h3>
          <button type="button" id={`faq-q-${i}`} aria-expanded={openFaq === i} aria-controls={`faq-a-${i}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>{faq.question}<span aria-hidden="true">{openFaq === i ? "−" : "+"}</span>
          </button>
        </h3>
        <div id={`faq-a-${i}`} aria-labelledby={`faq-q-${i}`} hidden={openFaq !== i}>
          <p>{faq.answer}</p>
        </div>
      </div>)}</div>
    </section>
  );
}
