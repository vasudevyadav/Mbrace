import { CalendarIcon, KidsIcon, MapPinIcon, ShieldIcon, SparkleIcon } from "@/components/icons/icons";

type Card = { title: string; description: string };

const promiseIcons = [CalendarIcon, KidsIcon, ShieldIcon, MapPinIcon, SparkleIcon];

export default function OurCarePromise({ locationName, intro, cards }: { locationName: string; intro: string; cards: Card[] }) {
  if (cards.length === 0) return null;

  return (
    <section className="mb-section py-12 md:py-16 lg:py-20">
      <div className="mb-container mx-auto w-full px-5 sm:px-6 lg:max-w-6xl lg:px-8">
        <div className="mb-10 grid items-center gap-4 md:grid-cols-2 md:gap-10">
          <div>
            <p className="mb-eyebrow text-[14px] font-bold text-care-gold mb-3">Our Care Promise</p>
            <h2 className="text-[23px] font-bold leading-[1.25] text-[#1f2b70] md:text-[34px] lg:text-[40px]">
              What Sets Our Care <span className="text-care-purple">Apart</span> at {locationName}
            </h2>
          </div>
          <p className="text-[15px] leading-[1.65] text-[#5d6078]">{intro}</p>
        </div>
        <div className="mb-8 border-t border-[#e8dff5]" />
        <div className="flex snap-x snap-mandatory items-start gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:items-stretch sm:overflow-visible">
          {cards.map((card, i) => {
            const Icon = promiseIcons[i % promiseIcons.length];
            return (
            <div key={card.title} className={`group flex min-h-60 w-[82%] shrink-0 flex-col snap-start rounded-[16px] p-7 transition-colors duration-200 sm:w-auto sm:shrink ${i === 1 || i === 5 ? "bg-white hover:bg-care-purple" : i % 2 === 0 ? "bg-[#f8f1fa]" : "bg-[#fff8ec]"}`}>
              <span className={`mb-4 flex size-13 items-center justify-center rounded-full transition-colors duration-200 ${i === 1 || i === 5 ? "bg-care-purple text-care-gold group-hover:bg-white/15" : i % 2 === 0 ? "bg-care-gold text-white" : "bg-care-purple text-care-gold"}`}><Icon className="size-6" /></span>
              <p className={`mb-2 text-[17px] font-bold text-care-navy transition-colors duration-200 ${i === 1 || i === 5 ? "group-hover:text-white" : ""}`}>{card.title}</p>
              <p className={`text-[14px] leading-[1.6] text-care-copy transition-colors duration-200 ${i === 1 || i === 5 ? "group-hover:text-white/80" : ""}`}>{card.description}</p>
            </div>
            );
          })}
          <div className="flex min-h-60 w-[82%] shrink-0 snap-start flex-col items-start justify-center rounded-[16px] bg-care-purple p-7 text-white sm:w-auto sm:shrink">
            <h3 className="max-w-[430px] text-[22px] font-bold leading-[1.3]">Ready to experience the M&apos;Brace difference?</h3>
            <p className="mt-3 max-w-[500px] text-[14px] leading-[1.6] text-white/80">Book your consultation today and meet the specialist who is right for your family&apos;s needs — in person, at {locationName}.</p>
            <a href="#appointment" className="mt-5 inline-flex rounded-[6px] bg-care-gold px-7 py-3 text-[14px] font-semibold text-white hover:bg-[#e99c26]">Book Appointment</a>
          </div>
        </div>
      </div>
    </section>
  );
}
