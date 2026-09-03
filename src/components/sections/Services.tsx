import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/content";
import {
  ToothIcon,
  AlignerIcon,
  ImplantIcon,
  SparklesSmileIcon,
  DropletIcon,
  RootCanalIcon,
  KidsIcon,
  EmergencyIcon,
} from "@/components/icons/icons";
import type { ComponentType } from "react";

const icons: Record<string, ComponentType<{ className?: string }>> = {
  "general-preventive-dentistry": ToothIcon,
  "clear-aligners-braces": AlignerIcon,
  "dental-implants": ImplantIcon,
  "cosmetic-dentistry": SparklesSmileIcon,
  "teeth-whitening": DropletIcon,
  "root-canal-therapy": RootCanalIcon,
  "pediatric-dentistry": KidsIcon,
  "emergency-dental-care": EmergencyIcon,
};

const FEATURED_SLUG = "dental-implants";

export default function Services() {
  return (
    <section id="services" className="bg-cream-50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          label="Our services"
          title="Care for every stage of your smile"
          description="From routine cleanings to full-arch implants, every treatment is planned by the dentist who delivers it — not handed off between departments."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = icons[service.slug] ?? ToothIcon;
            const featured = service.slug === FEATURED_SLUG;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group flex flex-col gap-4 rounded-2xl p-6 transition-shadow hover:shadow-md ${
                  featured ? "bg-brand-700 text-white" : "bg-white text-ink-900"
                }`}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                    featured
                      ? "bg-white/15 text-white"
                      : "bg-accent-100 text-accent-700 group-hover:bg-brand-700 group-hover:text-white"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-display text-lg font-medium">
                    {service.name}
                  </span>
                  <span
                    className={`mt-1.5 block text-sm leading-relaxed ${
                      featured ? "text-brand-100" : "text-ink-500"
                    }`}
                  >
                    {service.shortDescription}
                  </span>
                </span>
                <span
                  className={`mt-auto pt-1 text-sm font-medium underline underline-offset-4 ${
                    featured
                      ? "text-white decoration-white/40"
                      : "text-brand-700 decoration-brand-200 group-hover:decoration-brand-500"
                  }`}
                >
                  Learn more
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
