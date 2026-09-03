import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { clinic } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${clinic.name} collects, uses, and protects your information.`,
};

export default function PrivacyPage() {
  return (
    <article className="py-20 sm:py-24">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-medium tracking-tight text-ink-900">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-ink-500">Last updated: January 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-700">
          <p>
            {clinic.name} collects only the information needed to schedule
            and provide dental care: your name, contact details, insurance
            information, and clinical records. Information submitted through
            our appointment request form is used solely to contact you about
            scheduling and is never sold to third parties.
          </p>
          <p>
            Clinical records are stored and handled in accordance with HIPAA
            requirements. You may request a copy of your records, or ask us
            to correct or delete contact information you&apos;ve provided through
            this website, by contacting us at{" "}
            <a href={`mailto:${clinic.email}`} className="font-medium text-brand-700 hover:underline">
              {clinic.email}
            </a>
            .
          </p>
          <p>
            This website does not use third-party advertising trackers. A
            functional cookie may be set by our appointment scheduling and
            map providers to enable their features.
          </p>
        </div>
      </Container>
    </article>
  );
}
