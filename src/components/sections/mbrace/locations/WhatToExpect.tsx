type Step = { title: string };

export default function WhatToExpect({ locationName, intro, steps }: { locationName: string; intro: string; steps: Step[] }) {
  if (steps.length === 0) return null;

  return (
    <section className="mb-section mb-rounded rounded-[20px] bg-care-purple py-12 text-white md:rounded-[28px] md:py-16 lg:py-20">
      <div className="mb-container mx-auto w-full px-5 text-center sm:px-6 lg:max-w-6xl lg:px-8">
        <p className="mb-eyebrow text-[14px] font-bold text-care-gold mb-3">Your Visit, Step By Step</p>
        <h2 className="mx-auto mb-5 max-w-3xl text-[28px] font-bold leading-[1.2] md:text-[34px] lg:text-[40px]">
          What to Expect During Your <span className="text-care-gold">Visit to M&apos;Brace</span>, {locationName}?
        </h2>
        <p className="mx-auto mb-10 max-w-165 text-[15px] leading-[1.65] text-white/90">{intro}</p>
        <div className="grid gap-4 text-left md:grid-cols-2">
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
