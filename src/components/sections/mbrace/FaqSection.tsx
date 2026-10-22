"use client";

import { useState } from "react";
import Heading from "./Heading";
import type { HomeData } from "@/lib/queries";

type Props = {
  careCategories: HomeData["careCategories"];
  homeFaqs: HomeData["homeFaqs"];
  heading?: string;
  highlight?: string;
  description?: string;
  showCategories?: boolean;
  label?: string;
};

export default function FaqSection({ careCategories, homeFaqs, heading = "Your Queries,", highlight = "Answered Simply!", description = "From women’s health, to delivery, postpartum and child care, find expert answers to all your common questions with us.", showCategories = true, label = "Frequently Asked Questions" }: Props) {
  const [faqCategory, setFaqCategory] = useState<string>(careCategories[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <section
      id="faq"
      className="mb-section mb-container mb-faq mx-auto grid w-[calc(100%_-_40px)] grid-cols-[1fr] gap-7 pb-8 pt-8 md:w-[calc(100%_-_48px)] md:grid-cols-[420fr_650fr] md:gap-10 lg:w-[calc(100%_-_80px)] lg:gap-[65px] lg:pb-20 lg:pt-20 lg:[#services>&]:w-[min(1200px,_calc(100%_-_80px))] xl:w-[min(1130px,calc(100%_-_64px))] xl:gap-26"
    >
      <div className="text-center md:text-left">
        <Heading label={label}>
          {heading}{highlight && <><br /><em className="not-italic text-care-gold font-extrabold">{highlight}</em></>}
        </Heading>
        {description && <p className="mx-auto max-w-[520px] text-[15px] font-semibold leading-[1.6] md:mx-0">{description}</p>}
        {showCategories && <div
          className="mb-faq-categories flex flex-col gap-2.5 mt-7 md:mt-[35px] lg:mt-[65px] [&_button]:pt-[15px] [&_button]:pr-4.5 [&_button]:pb-[15px] [&_button]:pl-4.5 [&_button]:text-[13px] [&_button]:min-h-12.5 md:[&_button]:pt-[17px] md:[&_button]:pr-5.5 md:[&_button]:pb-[17px] md:[&_button]:pl-5.5 md:[&_button]:text-[16px] md:[&_button]:min-h-14 [&_button]:rounded-[8px] [&_button]:bg-care-soft [&_button]:text-care-navy [&_button]:font-extrabold [&_button]:text-left [&_button]:[transition:background_.2s,_color_.2s] [&_button:hover]:bg-[#efe7f8] [&_button[aria-pressed=true]]:bg-care-gold [&_button[aria-pressed=true]]:text-white [&_button[aria-pressed=true]:hover]:bg-care-gold [&_button:focus-visible]:[outline:2px_solid_var(--color-care-purple)] [&_button:focus-visible]:outline-offset-[2px]"
          aria-label="FAQ categories"
        >
          {careCategories.map((x) => (
            <button
              key={x}
              type="button"
              aria-pressed={faqCategory === x}
              aria-controls="faq-questions"
              onClick={() => {
                setFaqCategory(x);
                setOpenFaq(0);
              }}
            >
              {x}
            </button>
          ))}
        </div>}
      </div>
      <div
        id="faq-questions"
        className="mb-faq-list pt-0 md:pt-7"
        role="region"
        aria-label={`${faqCategory} questions`}
      >
        {homeFaqs[faqCategory].map((faq, i) => (
          <div
            className="mb-faq-item mb-3 overflow-hidden rounded-lg bg-care-soft text-care-navy transition-colors [&:not([data-expanded=true]):hover]:bg-[#efe7f8] data-[expanded=true]:bg-[linear-gradient(105deg,var(--color-care-gold),var(--color-care-purple))] data-[expanded=true]:text-white"
            data-expanded={openFaq === i}
            key={faq.question}
          >
            <h3 className="m-0">
              <button
                className="flex min-h-[65px] w-full items-center justify-between gap-5 px-4.5 py-4.5 text-left text-[13px] font-bold leading-[1.3] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-care-purple md:min-h-16.5 lg:px-5.5 lg:py-5 lg:text-[16px] [&_span]:mr-[9px] [&_span]:shrink-0 [&_span]:text-[18px]"
                type="button"
                id={`faq-q-${i}`}
                aria-expanded={openFaq === i}
                aria-controls={`faq-a-${i}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                {faq.question}
                <span aria-hidden="true">{openFaq === i ? "−" : "+"}</span>
              </button>
            </h3>
            <div
              id={`faq-a-${i}`}
              aria-labelledby={`faq-q-${i}`}
              hidden={openFaq !== i}
            >
              <p className="px-4.5 pb-4.5 pt-0 text-[13px] leading-[1.5] md:px-5.5 md:pb-5">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
