import { CalendarIcon, EmergencyIcon, KidsIcon, MapPinIcon } from "@/components/icons/icons";

type Card = { title: string; description: string };
type Stat = { value: string; label: string };

const featureIcons = [CalendarIcon, EmergencyIcon, MapPinIcon, KidsIcon];

export default function WhyPatientsChoose({ locationName, intro, stats, features }: { locationName: string; intro: string; stats: Stat[]; features: Card[] }) {
  if (features.length === 0 && stats.length === 0) return null;

  return (
    <section className="mb-section py-12 md:py-16 lg:py-20">
      <div className="mb-container mx-auto w-full px-5 sm:px-6 lg:max-w-6xl lg:px-8">
        <div className="mb-8 grid items-center gap-4 md:grid-cols-2 md:gap-10">
          <div>
            <p className="mb-eyebrow text-[14px] font-bold text-care-gold mb-3">Trusted By Thousands</p>
            <h2 className="text-[28px] font-bold leading-[1.2] text-[#1f2b70] md:text-[34px] lg:text-[40px]">
              Why Patients Choose <span className="text-care-purple">M&apos;Brace</span> at {locationName}
            </h2>
          </div>
          <p className="text-[15px] leading-[1.65] text-[#5d6078]">{intro}</p>
        </div>

        {stats.length > 0 && (
          <div className="mb-8 grid grid-cols-2 gap-y-5 divide-x divide-[#e8dff5] border-y border-[#e8dff5] py-5 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex flex-col items-center gap-1.5 px-2 text-center">
                <p className={`text-[32px] font-extrabold ${index % 2 === 0 ? "text-care-purple" : "text-care-gold"}`}>{stat.value}</p>
                <p className="text-[13px] font-semibold text-[#5d6078]">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {features.length > 0 && (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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
