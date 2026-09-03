import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { trustStats } from "@/lib/content";

const tileStyles = [
  "bg-brand-700 text-white",
  "bg-accent-500 text-ink-900",
  "bg-accent-500 text-ink-900",
  "bg-brand-700 text-white",
];

export default function TrustStats() {
  return (
    <section className="bg-cream-50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          label="Why families trust us"
          title="Why families choose Northstar Dental"
          description="The numbers behind fourteen years of routine, cosmetic, and emergency dental care."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/images/photos/stats-1.jpg"
              alt="Dentist reviewing a patient's chart together at the studio"
              width={700}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>

          {trustStats.slice(0, 2).map((stat, i) => (
            <div
              key={stat.label}
              className={`flex aspect-square flex-col justify-center rounded-2xl p-5 ${tileStyles[i]}`}
            >
              <span className="font-display text-2xl font-medium sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-sm opacity-90">{stat.label}</span>
            </div>
          ))}

          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/images/photos/stats-2.jpg"
              alt="Doctor smiling warmly while talking with a patient"
              width={700}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>

          {trustStats.slice(2, 4).map((stat, i) => (
            <div
              key={stat.label}
              className={`flex aspect-square flex-col justify-center rounded-2xl p-5 ${tileStyles[i + 2]}`}
            >
              <span className="font-display text-2xl font-medium sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-sm opacity-90">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
