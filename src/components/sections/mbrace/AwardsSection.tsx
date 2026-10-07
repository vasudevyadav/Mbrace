"use client";

import Photo from "./Photo";
import Heading from "./Heading";
import Counter from "./Counter";
import type { HomeData } from "@/lib/queries";

type Props = {
  stats: HomeData["stats"];
};

export default function AwardsSection({ stats }: Props) {

  return (
    <section id="awards" className="mb-section pt-12 pb-12 md:pt-15 md:pb-15 lg:pt-20 lg:pb-20 [&_p]:leading-[1.65] [&_h2_em]:not-italic [&_h2_em]:font-extrabold [&_h2_em]:text-care-gold mb-container w-[calc(100%_-_40px)] md:w-[calc(100%_-_48px)] lg:w-[calc(100%_-_80px)] xl:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto lg:[#services>&]:w-[min(1200px,_calc(100%_-_80px))] mb-awards grid grid-cols-[1fr] gap-[35px] md:grid-cols-[1fr_1fr] md:gap-10 lg:gap-15 xl:gap-25 [&_.mb-photo]:h-62.5 md:[&_.mb-photo]:h-[270px] [&>div:first-child>.mb-photo]:h-55 md:[&>div:first-child>.mb-photo]:h-[235px] [&>div:first-child>.mb-photo]:mt-5.5 [&_h3]:text-[20px] md:[&_h3]:text-[19px] lg:[&_h3]:text-[24px] [&_h3]:text-care-purple [&_h3]:font-bold [&_h3]:mt-[25px] [&_p:not(.mb-eyebrow)]:text-[14px] lg:[&_p:not(.mb-eyebrow)]:text-[18px] [&_p:not(.mb-eyebrow)]:mt-3.5 [&_p:not(.mb-eyebrow)]:text-care-copy">
      <div>
        <Heading label="Awards & Recognition">Care That Meets<br />
          <em>National Standards</em>
        </Heading>
        <h3>Association of Healthcare Providers India</h3>
        <p>Identifies conditions like glaucoma and cataracts before they cause significant damage.</p>
        <Photo n={16} alt="Healthcare award trophy" />
      </div>
      <div>
        <Photo n={15} alt="Team celebrating an award" />
        <h3>Association of Healthcare Providers India</h3>
        <p>Identifies conditions like glaucoma and cataracts before they cause significant damage.</p>
        <div className="mb-award-stats mt-6.5 grid grid-cols-[repeat(3,1fr)] [background:linear-gradient(90deg,#fbad31,#764b9e)] rounded-[5px] text-white text-left pt-3 pr-5 pb-3 pl-5 [&>div]:flex [&>div]:flex-col [&>div+div]:[border-left:0] [&_strong]:text-[30px] [&_span]:text-[12px]">{[stats.awardsYears, stats.awardsSatisfaction, stats.awardsFamilies].map(s => <div key={s.label}>
          <Counter value={s.value} />
          <span>{s.label}</span>
        </div>)}</div>
      </div>
    </section>
  );
}
