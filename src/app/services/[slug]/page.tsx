import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import { CheckIcon } from "@/components/icons/icons";
import { services } from "@/lib/content";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.shortDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <article className="py-20 sm:py-24">
      <Container className="max-w-3xl">
        <Link href="/#services" className="text-sm font-medium text-brand-700 hover:underline">
          ← Back to treatments
        </Link>

        <h1 className="mt-5 font-display text-4xl font-medium tracking-tight text-ink-900">
          {service.name}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-500">
          {service.detail}
        </p>

        <ul className="mt-8 space-y-3">
          {service.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-ink-700">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/#appointment"
          className="mt-10 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-700 px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-brand-800"
        >
          Book this treatment
        </Link>
      </Container>
    </article>
  );
}
