import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { StarIcon } from "@/components/icons/icons";
import { testimonials, trustStats } from "@/lib/content";

const rating = trustStats.find((s) => s.label.includes("rating"))?.value ?? "4.9/5";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-brand-700 py-20 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            label="Patient stories"
            title="What patients say after treatment"
            tone="inverted"
          />
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-brand-100">
            <span className="flex gap-0.5 text-accent-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </span>
            <span className="font-medium text-white">{rating}</span>
            <span>on Google</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex h-full flex-col rounded-2xl bg-white p-6">
              <span className="flex gap-0.5 text-accent-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5" />
                ))}
              </span>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-mist-200 pt-4">
                <p className="text-sm font-medium text-ink-900">{t.name}</p>
                <p className="text-sm text-ink-500">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
