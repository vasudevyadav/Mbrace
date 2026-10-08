import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { getHomeData } from "@/lib/queries";

export const dynamic = "force-dynamic";

const clinicName = "M’Brace by Kamineni Hospitals";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${clinicName} collects, uses, and protects your information.`,
};

export default async function PrivacyPage() {
  const { hospital } = await getHomeData();
  const clinic = { ...hospital, name: clinicName };

  return (
    <article className="py-20 sm:py-24">
      <Container className="max-w-3xl">
        <Link href="/" className="mb-6 inline-block text-sm text-brand-700">← Back to M’Brace</Link>
        <h1 className="font-display text-4xl font-medium tracking-tight text-ink-900">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-ink-500">Last updated: January 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-700">
          <p>
            {clinic.name} collects only the information needed to schedule
            your consultation: your name, email address, phone number,
            preferred service, location and appointment date. Information submitted through
            our appointment request form is used solely to contact you about
            scheduling and is never sold to third parties.
          </p>
          <p>
            For questions about the contact information you&apos;ve provided through
            this website, contact us at{" "}
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
