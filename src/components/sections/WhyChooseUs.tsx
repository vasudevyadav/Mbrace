import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckIcon, ShieldIcon, MapPinIcon } from "@/components/icons/icons";
import { facilities } from "@/lib/content";
import type { ComponentType } from "react";

const groupIcons: ComponentType<{ className?: string }>[] = [
  MapPinIcon,
  ShieldIcon,
  CheckIcon,
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          label="Why choose us"
          title="Standards you can see, before you're ever in the chair"
          description={facilities.intro}
        />

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-3">
          {facilities.groups.map((group, index) => {
            const Icon = groupIcons[index % groupIcons.length];
            return (
              <div key={group.title}>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-700 text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-lg font-medium text-ink-900">
                    {group.title}
                  </h3>
                </div>
                <ul className="mt-5 space-y-3.5 border-l border-mist-200 pl-5">
                  {group.items.map((entry) => (
                    <li key={entry} className="flex gap-2.5 text-sm leading-relaxed text-ink-700">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                      <span>{entry}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
