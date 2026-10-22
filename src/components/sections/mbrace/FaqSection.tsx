"use client";

import { useState } from "react";
import Image from "next/image";
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
  image?: string;
};

export default function FaqSection({
  careCategories,
  homeFaqs,
  heading = "Your Queries,",
  highlight = "Answered Simply!",
  description = "From women’s health, to delivery, postpartum and child care, find expert answers to all your common questions with us.",
  showCategories = true,
  label = "Frequently Asked Questions",
  image,
}: Props) {
  const [faqCategory, setFaqCategory] = useState<string>(careCategories[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <section
      id="faq"
      className="mb-section mb-faq flex flex-col items-center gap-8 rounded-[20px] [background:linear-gradient(110deg,#fff3df,#f3e9fc)] px-5 py-10 md:rounded-[28px] md:px-10 md:py-14 lg:px-16 lg:py-16"
    >
      <div className="mb-container w-[calc(100%_-_40px)] text-center md:w-[calc(100%_-_48px)] lg:w-[calc(100%_-_80px)] lg:[#services>&]:w-[min(1200px,_calc(100%_-_80px))] [&_.mb-heading]:items-center">
        <Heading
          label={label}
          eyebrowClassName="md:text-[14px]!"
          headingClassName="text-[22px]! md:text-[24px]! lg:text-[27px]! xl:text-[29px]! tracking-[-.4px]! md:tracking-[-.6px]!"
        >
          {heading}
          {highlight && (
            <>
              <br />
              <em className="not-italic text-care-gold font-extrabold">
                {highlight}
              </em>
            </>
          )}
        </Heading>
        {description && (
          <p className="mx-auto max-w-[650px] text-[15px] font-semibold leading-[1.6] text-care-copy">
            {description}
          </p>
        )}
      </div>
      {showCategories && (
        <div
          className="mb-faq-categories flex flex-wrap justify-center gap-2.5 [&_button]:pt-[13px] [&_button]:pr-5.5 [&_button]:pb-[13px] [&_button]:pl-5.5 [&_button]:text-[13px] [&_button]:min-h-12 md:[&_button]:pt-[15px] md:[&_button]:pr-6.5 md:[&_button]:pb-[15px] md:[&_button]:pl-6.5 md:[&_button]:text-[15px] md:[&_button]:min-h-13 [&_button]:rounded-full [&_button]:bg-white [&_button]:text-care-navy [&_button]:font-extrabold [&_button]:text-center [&_button]:shadow-[0_2px_8px_rgba(31,43,112,.08)] [&_button]:[transition:background_.2s,_color_.2s,_box-shadow_.2s] [&_button:hover]:bg-[#f1e4fb] [&_button[aria-pressed=true]]:bg-care-purple [&_button[aria-pressed=true]]:text-white [&_button[aria-pressed=true]]:shadow-[0_6px_16px_rgba(118,75,158,.3)] [&_button[aria-pressed=true]:hover]:bg-care-purple [&_button:focus-visible]:[outline:2px_solid_var(--color-care-purple)] [&_button:focus-visible]:outline-offset-[2px]"
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
        </div>
      )}
      <div
        id="faq-questions"
        className="mb-faq-list mx-auto w-full md:max-w-[1100px]"
        role="region"
        aria-label={`${faqCategory} questions`}
      >
        {homeFaqs[faqCategory].map((faq, i) => (
          <div
            className="mb-faq-item mb-3.5 overflow-hidden rounded-2xl bg-white text-care-navy shadow-[0_2px_10px_rgba(31,43,112,.06)] transition-[box-shadow,background,color] [&:not([data-expanded=true]):hover]:shadow-[0_6px_18px_rgba(31,43,112,.1)] data-[expanded=true]:bg-[linear-gradient(105deg,var(--color-care-gold),var(--color-care-purple))] data-[expanded=true]:text-white data-[expanded=true]:shadow-[0_10px_26px_rgba(118,75,158,.25)]"
            data-expanded={openFaq === i}
            key={faq.question}
          >
            <h3 className="m-0">
              <button
                className="flex min-h-[65px] w-full items-center justify-between gap-5 px-4.5 py-4.5 text-left text-[13px] font-bold leading-[1.3] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-care-purple md:min-h-16.5 lg:px-6 lg:py-5 lg:text-[16px] font-semibold"
                type="button"
                id={`faq-q-${i}`}
                aria-expanded={openFaq === i}
                aria-controls={`faq-a-${i}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                {faq.question}
                <span
                  aria-hidden="true"
                  className="grid size-7 shrink-0 place-items-center rounded-full bg-care-soft text-[16px] font-extrabold text-care-purple transition-colors [[data-expanded=true]_&]:bg-white/20 [[data-expanded=true]_&]:text-white"
                >
                  {openFaq === i ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={`faq-a-${i}`}
              aria-labelledby={`faq-q-${i}`}
              hidden={openFaq !== i}
            >
              <p className="px-4.5 pb-4.5 pt-0 text-sm leading-[1.6] md:px-6 md:pb-5.5">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
        {image && (homeFaqs[faqCategory].length <= 3 || !showCategories) && (
          <div className="relative mt-5 h-55 w-full overflow-hidden rounded-2xl shadow-[0_8px_22px_rgba(31,43,112,.1)] md:h-62.5">
            <Image
              src={image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 650px"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
