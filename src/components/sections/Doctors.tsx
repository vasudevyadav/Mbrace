import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { doctors } from "@/lib/content";

export default function Doctors() {
  const featured = doctors.find((d) => d.featured) ?? doctors[0];
  const rest = doctors.filter((d) => d !== featured);

  return (
    <section id="team" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          label="Our team"
          title="Meet the dentists behind your care"
          description="Every treatment plan is built and delivered by the specialist you meet — not passed along a chain of referrals."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 overflow-hidden rounded-3xl bg-cream-50 sm:grid-cols-2">
          <div className="relative aspect-4/5 sm:aspect-auto">
            <Image
              src={featured.photo}
              alt={`${featured.name}, ${featured.role}`}
              width={700}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-600">
              {featured.role}
            </p>
            <h3 className="mt-2 font-display text-2xl font-medium text-ink-900">
              {featured.name}, {featured.credentials}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">{featured.bio}</p>
            <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-mist-200 pt-5">
              <div>
                <dt className="text-xs text-ink-500">Experience</dt>
                <dd className="mt-0.5 text-sm font-medium text-ink-900">{featured.experience}</dd>
              </div>
              <div>
                <dt className="text-xs text-ink-500">Languages</dt>
                <dd className="mt-0.5 text-sm font-medium text-ink-900">{featured.languages}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((doctor) => (
            <div key={doctor.name}>
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl">
                <Image
                  src={doctor.photo}
                  alt={`${doctor.name}, ${doctor.role}`}
                  width={700}
                  height={700}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 font-display text-lg font-medium text-ink-900">
                {doctor.name}, {doctor.credentials}
              </h3>
              <p className="mt-1 text-sm font-medium text-brand-700">{doctor.role}</p>
              <p className="text-sm text-ink-500">{doctor.specialty}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
