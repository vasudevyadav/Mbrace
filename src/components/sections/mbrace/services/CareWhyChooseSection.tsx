import Image from "next/image";
import { CalendarIcon, MapPinIcon, ShieldIcon, StethoscopeIcon } from "@/components/icons/icons";

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="m5 8 7 5 7-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CareWhyChooseSection({ heading, highlight, body }: { heading: string; highlight: string; body: string }) {
  const cards = [
    { icon: StethoscopeIcon, title: "Lakhs of Happy Families", body: "Families trust us from routine check-ups through to their children's health." },
    { icon: ShieldIcon, title: "34+ Years of Expertise", body: "Specialist consultants across gynaecology, obstetrics, paediatrics, neonatology and fertility care.", featured: true },
    { icon: CalendarIcon, title: "Easy Appointment Booking", body: "Located at LB Nagar & King Koti, call +91 93906 34074. Open 24 hours, 7 days a week." },
    { icon: EnvelopeIcon, title: "1,10,000+ Healthy Babies", body: "Babies delivered by our teams, with newborn ICU care on hand." },
  ];

  return (
    <section className="mb-section mx-auto w-[calc(100%_-_28px)] overflow-hidden rounded-[22px] bg-care-purple p-0 text-white md:rounded-[24px]">
      <div className="grid lg:min-h-[540px] lg:grid-cols-[45%_55%]">
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-[7.3%] lg:py-14">
            <p className="mb-eyebrow mb-8 text-[11px] font-bold text-care-gold before:mr-3 before:inline-block before:h-[2px] before:w-8 before:align-middle before:bg-care-gold before:content-['']">Why Choose M&rsquo;Brace</p>
            <h2 className="max-w-[360px] text-[27px] font-semibold leading-[1.45] sm:text-[31px] lg:text-[25px] xl:text-[28px]">{heading}<br /><span className="text-care-gold">{highlight}</span></h2>
            <p className="mt-7 max-w-[360px] text-[13px] leading-[1.65] text-white/95">{body}</p>
            <div className="mt-10 inline-flex items-center gap-2.5 self-start text-[11px] font-semibold">
              <span className="grid size-7 place-items-center rounded-[8px] bg-white text-care-purple [&_svg]:size-4">
                <MapPinIcon />
              </span>
              2 Locations across Hyderabad
            </div>
        </div>
        <div className="relative min-h-[620px] lg:min-h-0">
            <Image src="/images/figma/location-services-alt.png" alt="" fill sizes="(max-width: 1023px) 100vw, 55vw" className="object-cover object-center" />
            <div className="absolute inset-x-4 inset-y-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:bottom-[67px] lg:left-[-53px] lg:right-[5%] lg:top-[67px] lg:gap-[14px]">
              {cards.map(card => (
                <div key={card.title} className={`flex min-h-[188px] flex-col justify-center rounded-[14px] p-5 shadow-[0_2px_6px_rgba(31,43,112,0.08)] lg:p-[21px] ${card.featured ? "[background:linear-gradient(120deg,#fbad31_0%,#d88a6d_49%,#764b9e_100%)]" : "bg-white text-[#211d49]"}`}>
                  <div className={`mb-3 grid size-9 place-items-center rounded-[9px] ${card.featured ? "bg-white/20" : "bg-care-purple text-white"}`}>
                    <card.icon className="size-5" />
                  </div>
                  <p className={`text-[17px] font-bold leading-[1.3] ${card.featured ? "text-white" : "text-[#211d49]"}`}>{card.title}</p>
                  <p className={`mt-3 text-[11px] leading-[1.55] ${card.featured ? "text-white/90" : "text-[#68637f]"}`}>{card.body}</p>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
