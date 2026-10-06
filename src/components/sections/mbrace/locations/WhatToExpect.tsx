type Step = { title: string };

export default function WhatToExpect({ locationName, intro, steps }: { locationName: string; intro: string; steps: Step[] }) {
  if (steps.length === 0) return null;

  return (
    <section className="mb-section max-[701px]:pt-12 max-[701px]:pb-12 min-[701px]:max-[1001px]:pt-15 min-[701px]:max-[1001px]:pb-15 min-[1001px]:pt-20 min-[1001px]:pb-20 bg-care-purple text-white mb-rounded max-[701px]:rounded-[20px] min-[701px]:rounded-[28px]">
      <div className="mb-container max-[701px]:w-[calc(100%_-_40px)] min-[701px]:max-[1001px]:w-[calc(100%_-_48px)] min-[1001px]:max-[1201px]:w-[calc(100%_-_80px)] min-[1201px]:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto text-center">
        <p className="mb-eyebrow text-[14px] font-bold text-care-gold mb-3">Your Visit, Step By Step</p>
        <h2 className="mx-auto mb-5 max-w-175 font-bold max-[701px]:text-[28px] min-[701px]:text-[34px] min-[1001px]:text-[40px] leading-[1.2]">
          What to Expect During Your <span className="text-care-gold">Visit to M&apos;Brace</span>, {locationName}?
        </h2>
        <p className="mx-auto mb-10 max-w-165 text-[15px] leading-[1.65] text-white/90">{intro}</p>
        <div className="grid gap-4 min-[701px]:grid-cols-2 text-left">
          {steps.map((step, i) => (
            <div key={step.title} className="flex items-center gap-4 rounded-[12px] border border-white/15 bg-white/10 p-5">
              <span className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-[19px] bg-care-gold text-[16px] font-extrabold text-white">{i + 1}</span>
              <p className="text-[15px] font-semibold text-white">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
