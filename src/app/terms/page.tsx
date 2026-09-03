import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { clinic } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing use of the ${clinic.name} website.`,
};

export default function TermsPage() {
  return (
    <article className="py-20 sm:py-24">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-medium tracking-tight text-ink-900">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-ink-500">Last updated: January 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-700">
          <p>
            This website is provided by {clinic.name} for informational
            purposes and to allow prospective and existing patients to
            request appointments online. Submitting the appointment form is a
            request only — it does not confirm a scheduled visit until you
            hear back from our front desk team.
          </p>
          <p>
            Content on this site, including treatment descriptions, is
            general information and does not replace an in-person diagnosis
            or consultation. If you are experiencing a dental or medical
            emergency, call the studio directly or seek emergency care.
          </p>
          <p>
            For questions about these terms, contact us at{" "}
            <a href={`mailto:${clinic.email}`} className="font-medium text-brand-700 hover:underline">
              {clinic.email}
            </a>
            .
          </p>
        </div>
      </Container>
    </article>
  );
}
