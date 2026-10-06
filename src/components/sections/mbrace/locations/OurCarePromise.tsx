type Card = { title: string; description: string };

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
        <div className="grid gap-5 max-[1001px]:grid-cols-2 min-[1001px]:grid-cols-3">
          {cards.map((card, i) => (
            <div key={card.title} className={`rounded-[16px] p-7 ${i % 3 === 1 ? "bg-care-purple text-white" : "bg-[#fff8ec]"}`}>
              <span className={`mb-3.5 flex h-13 w-13 items-center justify-center rounded-[26px] text-[18px] ${i % 3 === 1 ? "bg-white/15 text-white" : "bg-care-gold text-white"}`}>●</span>
              <p className={`mb-2 text-[17px] font-bold ${i % 3 === 1 ? "text-white" : "text-[#1f2b70]"}`}>{card.title}</p>
              <p className={`text-[14px] leading-[1.6] ${i % 3 === 1 ? "text-white/80" : "text-[#5d6078]"}`}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
