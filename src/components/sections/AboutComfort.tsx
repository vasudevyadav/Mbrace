import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckIcon } from "@/components/icons/icons";
import { about } from "@/lib/content";

export default function AboutComfort() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-4xl">
              <Image
                src="/images/photos/team-wide.jpg"
                alt="The Northstar Dental Studio clinical team standing together in the studio hallway"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-lg ring-1 ring-mist-200 sm:left-10">
              <span className="font-display text-2xl font-medium text-brand-700">
                {about.badge.value}
              </span>
              <span className="max-w-[8rem] text-xs leading-snug text-ink-500">
                {about.badge.label}
              </span>
            </div>
          </div>

          <div>
            <SectionHeading
              label={about.label}
              title={about.title}
              description={about.description}
            />

            <ul className="mt-6 space-y-3">
              {about.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-teal-600">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#team"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-800"
            >
              Meet the team
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
