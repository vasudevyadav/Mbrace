import { MapPinIcon } from "@/components/icons/icons";

type Card = { title: string; description: string };

export default function HowToReach({ locationName, intro, cards }: { locationName: string; intro: string; cards: Card[] }) {
  if (cards.length === 0) return null;

  return (
    <section className="mb-section mb-rounded rounded-[20px] bg-care-purple py-12 text-white md:rounded-[28px] md:py-16 lg:py-20">
      <div className="mb-container mx-auto w-full px-5 text-center sm:px-6 lg:max-w-6xl lg:px-8">
        <p className="mb-eyebrow text-[13px] font-bold text-care-gold mb-3">How To Reach Us</p>
        <h2 className="mx-auto mb-5 max-w-3xl text-[28px] font-bold leading-[1.2] md:text-[34px] lg:text-[40px]">
          Reach <span className="text-care-gold">M&apos;Brace Hospital</span>, {locationName}
        </h2>
        <p className="mx-auto mb-10 max-w-165 text-[15px] leading-[1.65] text-white/90">{intro}</p>
        <div className="grid gap-6 text-left md:grid-cols-3">
          {cards.map((card, i) => (
            <div key={card.title} className={`rounded-[16px] p-7 ${i === 1 ? "bg-care-gold" : "bg-white"}`}>
              <div className="mb-3 flex items-center gap-3">
                <span className={`flex h-11 w-11 items-center justify-center rounded-[22px] ${i === 1 ? "bg-care-purple text-white" : "bg-care-gold text-white"}`}>
                  <MapPinIcon className="h-5.5 w-5.5" />
                </span>
                <p className={`text-[17px] font-bold ${i === 1 ? "text-white" : "text-[#1f2b70]"}`}>{card.title}</p>
              </div>
              <p className={`text-[14px] leading-[1.65] ${i === 1 ? "text-white" : "text-[#5d6078]"}`}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
