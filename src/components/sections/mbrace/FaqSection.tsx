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
    <section id="faq" className="mb-section pt-12 pb-12 md:pt-15 md:pb-15 lg:pt-20 lg:pb-20 [&_p]:leading-[1.65] mb-container w-[calc(100%_-_40px)] md:w-[calc(100%_-_48px)] lg:w-[calc(100%_-_80px)] xl:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto lg:[#services>&]:w-[min(1200px,_calc(100%_-_80px))] mb-faq grid grid-cols-[1fr] gap-7 md:grid-cols-[420fr_650fr] md:gap-10 lg:gap-[65px] xl:gap-26 [&>div>p]:text-[15px] [&>div>p]:font-semibold [&>div>p]:leading-[1.6]">
      <div>
        <Heading label="Frequently Asked Questions">Your Queries,<br />
          <em className="not-italic text-care-gold font-extrabold">Answered Simply!</em>
        </Heading>
        <p>From women’s health, to delivery, postpartum and child care, find expert answers to all your common questions with us.</p>
        <div className="mb-faq-categories flex flex-col gap-2.5 mt-7 md:mt-[35px] lg:mt-[65px] [&_button]:pt-[15px] [&_button]:pr-4.5 [&_button]:pb-[15px] [&_button]:pl-4.5 [&_button]:text-[13px] [&_button]:min-h-12.5 md:[&_button]:pt-[17px] md:[&_button]:pr-5.5 md:[&_button]:pb-[17px] md:[&_button]:pl-5.5 md:[&_button]:text-[16px] md:[&_button]:min-h-14 [&_button]:rounded-[8px] [&_button]:bg-care-soft [&_button]:text-care-navy [&_button]:font-extrabold [&_button]:text-left [&_button]:[transition:background_.2s,_color_.2s] [&_button:hover]:bg-[#efe7f8] [&_button[aria-pressed=true]]:bg-care-gold [&_button[aria-pressed=true]]:text-white [&_button[aria-pressed=true]:hover]:bg-care-gold [&_button:focus-visible]:[outline:2px_solid_var(--color-care-purple)] [&_button:focus-visible]:outline-offset-[2px]" aria-label="FAQ categories">{careCategories.map(x => <button key={x} type="button" aria-pressed={faqCategory === x} aria-controls="faq-questions" onClick={() => {
          setFaqCategory(x);
          setOpenFaq(0);
        }}>{x}</button>)}</div>
      </div>
      <div id="faq-questions" className="mb-faq-list pt-0 md:pt-7" role="region" aria-label={`${faqCategory} questions`}>{homeFaqs[faqCategory].map((faq, i) => <div className={`mb-faq-item rounded-[8px] bg-care-soft text-care-navy mb-3 overflow-hidden [transition:background_.2s,_color_.2s] [&:not(.is-open):hover]:bg-[#efe7f8] [&.is-open]:[background:linear-gradient(105deg,var(--color-care-gold),var(--color-care-purple))] [&.is-open]:text-white [&_h3_button]:flex [&_h3_button]:items-center [&_h3_button]:justify-between [&_h3_button]:gap-5 [&_h3_button]:w-full [&_h3_button]:text-left [&_h3_button]:leading-[1.3] [&_h3_button]:font-bold [&_h3_button]:pt-4.5 [&_h3_button]:pr-4.5 [&_h3_button]:pb-4.5 [&_h3_button]:pl-4.5 [&_h3_button]:text-[13px] lg:[&_h3_button]:pt-5 lg:[&_h3_button]:pr-5.5 lg:[&_h3_button]:pb-5 lg:[&_h3_button]:pl-5.5 lg:[&_h3_button]:text-[16px] [&_h3_button]:min-h-[65px] md:[&_h3_button]:min-h-16.5 [&_h3_button:focus-visible]:[outline:2px_solid_var(--color-care-purple)] [&_h3_button:focus-visible]:outline-offset-[-2px] [&_h3_span]:shrink-0 [&_h3_span]:text-[18px] [&_h3_span]:mr-[9px] [&>div>p]:pt-0 [&>div>p]:text-[13px] [&>div>p]:leading-[1.5] [&>div>p]:pr-4.5 [&>div>p]:pb-4.5 [&>div>p]:pl-4.5 md:[&>div>p]:pr-5.5 md:[&>div>p]:pb-5 md:[&>div>p]:pl-5.5 ${openFaq === i ? "is-open" : ""}`} key={faq.question}>
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
