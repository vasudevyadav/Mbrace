"use client";

import { useId, useState } from "react";
import Container from "@/components/ui/Container";
import { faqs, faqCategories } from "@/lib/content";

export default function FAQ() {
  const id = useId();
  const [activeCategory, setActiveCategory] = useState<string>(faqCategories[0]);
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqs[0]?.question ?? null);
  const visibleFaqs = faqs.filter((faq) => faq.category === activeCategory);

  function selectCategory(category: string) {
    setActiveCategory(category);
    setOpenQuestion(faqs.find((faq) => faq.category === category)?.question ?? null);
  }

  return (
    <section id="faq" aria-labelledby={`${id}-title`} className="scroll-mt-24 bg-white py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.65fr_1fr] lg:gap-24">
          <div>
            <p className="text-sm font-semibold text-[#dba347]">Frequently Asked Questions</p>
            <h2 id={`${id}-title`} className="mt-3 text-3xl font-extrabold leading-[1.3] tracking-tight text-[#292653] sm:text-[42px]">
              Your Queries,
              <span className="block text-[#efb04e]">Answered Simply!</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#494653]">
              From your first visit to treatment and aftercare, find expert answers to all your common questions with us.
            </p>
            <div aria-label="FAQ categories" className="mt-8 flex flex-col gap-2.5 lg:mt-16">
              {faqCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={activeCategory === category}
                  aria-controls={`${id}-questions`}
                  onClick={() => selectCategory(category)}
                  className={`min-h-14 cursor-pointer rounded-lg px-5 py-4 text-left text-sm font-bold transition-colors ${
                    activeCategory === category
                      ? "bg-[#efb04e] text-[#292653]"
                      : "bg-[#f8f6fc] text-[#292653] hover:bg-[#eee8f6]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div id={`${id}-questions`} role="region" aria-label={`${activeCategory} questions`} className="space-y-3 lg:pt-8">
            {visibleFaqs.map((faq, index) => {
              const isOpen = openQuestion === faq.question;
              const questionId = `${id}-question-${index}`;
              const answerId = `${id}-answer-${index}`;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-lg ${
                    isOpen
                      ? "bg-gradient-to-r from-[#efb04e] to-[#715096] text-white"
                      : "bg-[#f8f6fc] text-[#292653]"
                  }`}
                >
                  <h3>
                    <button
                      id={questionId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenQuestion(isOpen ? null : faq.question)}
                      className="flex min-h-16 w-full cursor-pointer items-center justify-between gap-5 px-5 py-5 text-left text-sm font-bold focus-visible:-outline-offset-4"
                    >
                      {faq.question}
                      <span aria-hidden="true" className="relative mr-2 flex h-4 w-4 shrink-0 items-center justify-center">
                        <span className="absolute h-0.5 w-2.5 rounded-full bg-current" />
                        <span className={`absolute h-2.5 w-0.5 rounded-full bg-current transition-transform duration-200 ${isOpen ? "scale-y-0" : "scale-y-100"}`} />
                      </span>
                    </button>
                  </h3>
                  <div id={answerId} aria-labelledby={questionId} hidden={!isOpen}>
                    <p className="px-5 pb-5 text-sm font-medium leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
