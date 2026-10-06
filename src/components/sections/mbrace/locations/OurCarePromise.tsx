import { CalendarIcon, KidsIcon, MapPinIcon, ShieldIcon, SparkleIcon } from "@/components/icons/icons";

type Card = { title: string; description: string };

const promiseIcons = [CalendarIcon, KidsIcon, ShieldIcon, MapPinIcon, SparkleIcon];

export default function OurCarePromise({ locationName, intro, cards }: { locationName: string; intro: string; cards: Card[] }) {
  if (cards.length === 0) return null;

  return (
    <section className="mb-section max-[701px]:pt-12 max-[701px]:pb-12 min-[701px]:max-[1001px]:pt-15 min-[701px]:max-[1001px]:pb-15 min-[1001px]:pt-20 min-[1001px]:pb-20">
      <div className="mb-container max-[701px]:w-[calc(100%_-_40px)] min-[701px]:max-[1001px]:w-[calc(100%_-_48px)] min-[1001px]:max-[1201px]:w-[calc(100%_-_80px)] min-[1201px]:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto">
        <div className="mb-section-intro grid items-center max-[701px]:grid-cols-[1fr] max-[701px]:gap-4 max-[701px]:mb-6.5 min-[701px]:grid-cols-[1.08fr_1fr] min-[701px]:mb-10 min-[701px]:gap-10">
          <div>
            <p className="mb-eyebrow text-[14px] font-bold text-care-gold mb-3">Our Care Promise</p>
            <h2 className="font-bold text-[#1f2b70] max-[701px]:text-[28px] min-[701px]:text-[34px] min-[1001px]:text-[40px] leading-[1.2]">
              What Sets Our Care <span className="text-care-purple">Apart</span> at {locationName}
            </h2>
          </div>
          <p className="text-[15px] leading-[1.65] text-[#5d6078]">{intro}</p>
        </div>
        <div className="grid gap-5 max-[701px]:grid-cols-1 min-[701px]:grid-cols-2 min-[1001px]:grid-cols-4">
          {cards.map((card, i) => {
            const Icon = promiseIcons[i % promiseIcons.length];
            return (
            <div key={card.title} className={`rounded-[16px] p-7 min-h-[298px] ${i >= 4 ? "min-[1001px]:col-span-2 min-[1001px]:min-h-[200px]" : ""} ${i === 1 || i === 5 ? "bg-care-purple text-white" : i % 3 === 2 ? "bg-[#f8f1fa]" : "bg-[#fff8ec]"}`}>
              <span className={`mb-4 flex size-13 items-center justify-center rounded-full ${i === 1 ? "bg-white/15 text-care-gold" : i % 2 === 0 ? "bg-care-gold text-white" : "bg-care-purple text-care-gold"}`}><Icon className="size-6" /></span>
              <p className={`mb-2 text-[17px] font-bold ${i === 1 || i === 5 ? "text-white" : "text-[#1f2b70]"}`}>{card.title}</p>
              <p className={`text-[14px] leading-[1.6] ${i === 1 || i === 5 ? "text-white/80" : "text-[#5d6078]"}`}>{card.description}</p>
            </div>
            );
          })}
          <div className="flex min-h-[200px] flex-col items-start justify-center rounded-[16px] bg-care-purple p-7 text-white min-[1001px]:col-span-2">
            <h3 className="max-w-[430px] text-[22px] font-bold leading-[1.3]">Ready to experience the M&apos;Brace difference?</h3>
            <p className="mt-3 max-w-[500px] text-[14px] leading-[1.6] text-white/80">Book your consultation today and meet the specialist who is right for your family&apos;s needs — in person, at {locationName}.</p>
            <a href="#appointment" className="mt-5 inline-flex rounded-[6px] bg-care-gold px-7 py-3 text-[14px] font-semibold text-white hover:bg-[#e99c26]">Book Appointment</a>
          </div>
        </div>
      </div>
    </section>
  );
}
