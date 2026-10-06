import { MapPinIcon } from "@/components/icons/icons";

type Card = { title: string; description: string };

export default function HowToReach({ locationName, intro, cards }: { locationName: string; intro: string; cards: Card[] }) {
  if (cards.length === 0) return null;

  return (
    <section className="mb-section max-[701px]:pt-12 max-[701px]:pb-12 min-[701px]:max-[1001px]:pt-15 min-[701px]:max-[1001px]:pb-15 min-[1001px]:pt-20 min-[1001px]:pb-20 bg-care-purple text-white mb-rounded max-[701px]:rounded-[20px] min-[701px]:rounded-[28px]">
      <div className="mb-container max-[701px]:w-[calc(100%_-_40px)] min-[701px]:max-[1001px]:w-[calc(100%_-_48px)] min-[1001px]:max-[1201px]:w-[calc(100%_-_80px)] min-[1201px]:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto text-center">
        <p className="mb-eyebrow text-[13px] font-bold text-care-gold mb-3">How To Reach Us</p>
        <h2 className="mx-auto mb-5 max-w-175 font-bold max-[701px]:text-[28px] min-[701px]:text-[34px] min-[1001px]:text-[40px] leading-[1.2]">
          Reach <span className="text-care-gold">M&apos;Brace Hospital</span>, {locationName}
        </h2>
        <p className="mx-auto mb-10 max-w-165 text-[15px] leading-[1.65] text-white/90">{intro}</p>
        <div className="grid gap-6 min-[701px]:grid-cols-3 text-left">
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
