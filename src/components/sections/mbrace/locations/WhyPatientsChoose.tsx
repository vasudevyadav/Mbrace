import { CalendarIcon, EmergencyIcon, KidsIcon, MapPinIcon } from "@/components/icons/icons";

type Card = { title: string; description: string };
type Stat = { value: string; label: string };

const featureIcons = [CalendarIcon, EmergencyIcon, MapPinIcon, KidsIcon];

export default function WhyPatientsChoose({ locationName, intro, stats, features }: { locationName: string; intro: string; stats: Stat[]; features: Card[] }) {
  if (features.length === 0 && stats.length === 0) return null;

  return (
    <section className="mb-section max-[701px]:pt-12 max-[701px]:pb-12 min-[701px]:max-[1001px]:pt-15 min-[701px]:max-[1001px]:pb-15 min-[1001px]:pt-20 min-[1001px]:pb-20">
      <div className="mb-container max-[701px]:w-[calc(100%_-_40px)] min-[701px]:max-[1001px]:w-[calc(100%_-_48px)] min-[1001px]:max-[1201px]:w-[calc(100%_-_80px)] min-[1201px]:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto">
        <div className="mb-section-intro grid items-center max-[701px]:grid-cols-[1fr] max-[701px]:gap-4 max-[701px]:mb-6.5 min-[701px]:grid-cols-[1.08fr_1fr] min-[701px]:mb-7.5 min-[701px]:gap-10">
          <div>
            <p className="mb-eyebrow text-[14px] font-bold text-care-gold mb-3">Trusted By Thousands</p>
            <h2 className="font-bold text-[#1f2b70] max-[701px]:text-[28px] min-[701px]:text-[34px] min-[1001px]:text-[40px] leading-[1.2]">
              Why Patients Choose <span className="text-care-purple">M&apos;Brace</span> at {locationName}
            </h2>
          </div>
          <p className="text-[15px] leading-[1.65] text-[#5d6078]">{intro}</p>
        </div>

        {stats.length > 0 && (
          <div className="mb-8 grid divide-x divide-[#e8dff5] border-y border-[#e8dff5] py-5 max-[701px]:grid-cols-2 max-[701px]:gap-y-5 min-[701px]:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex flex-col items-center gap-1.5 px-2 text-center">
                <p className={`text-[32px] font-extrabold ${index % 2 === 0 ? "text-care-purple" : "text-care-gold"}`}>{stat.value}</p>
                <p className="text-[13px] font-semibold text-[#5d6078]">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {features.length > 0 && (
          <div className="grid gap-5 max-[1001px]:grid-cols-2 min-[1001px]:grid-cols-4">
            {features.map((feature, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
              <div key={feature.title} className={`min-h-[262px] rounded-[16px] p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_-16px_rgba(31,43,112,.35)] ${i === 1 ? "bg-care-purple text-white" : i === 2 ? "bg-[#fff8ec]" : "bg-[#f8f1fa]"}`}>
                <span className={`mb-4 flex size-13 items-center justify-center rounded-full ${i === 1 ? "bg-white/15 text-care-gold" : i === 2 ? "bg-care-gold text-white" : "bg-care-purple text-care-gold"}`}><Icon className="size-6" /></span>
                <p className={`mb-2 text-[16px] font-bold ${i === 1 ? "text-white" : "text-[#1f2b70]"}`}>{feature.title}</p>
                <p className={`text-[13px] leading-[1.6] ${i === 1 ? "text-white/80" : "text-[#5d6078]"}`}>{feature.description}</p>
              </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
