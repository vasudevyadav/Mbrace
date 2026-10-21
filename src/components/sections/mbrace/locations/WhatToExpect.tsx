type Step = { title: string };

export default function WhatToExpect({ locationName, intro, steps, phone, phoneHref }: { locationName: string; intro: string; steps: Step[]; phone?: string; phoneHref?: string }) {
  if (steps.length === 0) return null;

  return (
    <section className="mb-section mb-rounded rounded-[20px] bg-care-purple py-12 text-white md:rounded-[28px] md:py-16 lg:py-20">
      <div className="mb-container mx-auto w-full px-5 text-center sm:px-6 lg:max-w-6xl lg:px-8">
        <p className="mb-eyebrow text-[14px] font-bold text-care-gold mb-3">Your Visit, Step By Step</p>
        <h2 className="mx-auto mb-5 max-w-3xl text-[23px] font-bold leading-[1.25] md:text-[34px] lg:text-[40px]">
          What to Expect During Your <span className="text-care-gold">Visit to M&apos;Brace</span>, {locationName}?
        </h2>
        <p className="mx-auto mb-10 max-w-165 text-[15px] leading-[1.65] text-white/90">{intro}</p>
        <div className="flex snap-x snap-mandatory items-start gap-4 overflow-x-auto pb-2 text-left [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:items-start md:overflow-visible">
          {steps.map((step, i) => (
            <div key={step.title} className="flex w-[82%] shrink-0 snap-start items-center gap-4 rounded-[12px] bg-white p-5 text-care-navy transition-colors duration-200 hover:bg-[#fff8ec] md:w-auto md:shrink">
              <span className={`flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-[19px] text-[16px] font-extrabold text-white ${i % 2 === 0 ? "bg-care-purple" : "bg-care-gold"}`}>{i + 1}</span>
              <p className="text-[15px] font-semibold">{step.title}</p>
            </div>
          ))}
        </div>
        {phone && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#appointment" className="inline-flex min-h-[49px] items-center justify-center rounded-[6px] bg-care-gold px-7 text-[14px] font-semibold text-[#2d2037] hover:bg-[#df9726]">Book Your Visit</a>
            <p className="text-[14px] text-white/85">Questions? <a className="font-bold text-care-gold underline" href={phoneHref}>Call {phone}</a></p>
          </div>
        )}
      </div>
    </section>
  );
}
