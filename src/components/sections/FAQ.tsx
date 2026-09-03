import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs, faqCategories } from "@/lib/content";

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <SectionHeading
              label="Questions"
              title="Answers before you book"
              description="Can't find what you're looking for? Call the studio and our front desk will walk you through it."
            />
            <ul className="mt-8 flex flex-wrap gap-2 lg:flex-col">
              {faqCategories.map((category) => (
                <li
                  key={category}
                  className="rounded-lg bg-cream-100 px-4 py-2.5 text-sm font-medium text-ink-700"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div>
            {faqCategories.map((category) => (
              <div key={category} className="mb-10 last:mb-0">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-600">
                  {category}
                </p>
                <div className="mt-3 divide-y divide-mist-200 border-t border-mist-200">
                  {faqs
                    .filter((faq) => faq.category === category)
                    .map((faq) => (
                      <details key={faq.question} className="group py-5">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-ink-900 marker:content-none [&::-webkit-details-marker]:hidden">
                          {faq.question}
                          <span
                            aria-hidden="true"
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream-100 text-brand-700 transition-transform duration-200 group-open:rotate-45"
                          >
                            +
                          </span>
                        </summary>
                        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-500">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
