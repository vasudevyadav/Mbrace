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
    <section id="awards" className="mb-section max-[701px]:pt-12 max-[701px]:pb-12 min-[701px]:max-[1001px]:pt-15 min-[701px]:max-[1001px]:pb-15 min-[1001px]:pt-20 min-[1001px]:pb-20 [&_p]:leading-[1.65] mb-container max-[701px]:w-[calc(100%_-_40px)] min-[701px]:max-[1001px]:w-[calc(100%_-_48px)] min-[1001px]:max-[1201px]:w-[calc(100%_-_80px)] min-[1201px]:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto min-[1001px]:[#services>&]:w-[min(1200px,_calc(100%_-_80px))] mb-awards grid max-[701px]:grid-cols-[1fr] max-[701px]:gap-[35px] min-[701px]:grid-cols-[1fr_1fr] min-[701px]:max-[1001px]:gap-10 min-[1001px]:max-[1201px]:gap-15 min-[1201px]:gap-25 max-[701px]:[&_.mb-photo]:h-62.5 min-[701px]:[&_.mb-photo]:h-[255px] max-[701px]:[&>div:first-child>.mb-photo]:h-55 min-[701px]:[&>div:first-child>.mb-photo]:h-[235px] [&>div:first-child>.mb-photo]:mt-5.5 max-[701px]:[&_h3]:text-[20px] min-[701px]:max-[1001px]:[&_h3]:text-[19px] min-[1001px]:[&_h3]:text-[22px] [&_h3]:text-care-purple [&_h3]:font-medium [&_h3]:mt-[25px] max-[1001px]:[&_p:not(.mb-eyebrow)]:text-[14px] min-[1001px]:[&_p:not(.mb-eyebrow)]:text-[16px] [&_p:not(.mb-eyebrow)]:mt-3.5">
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
        <div className="mb-award-stats mt-6.5 grid grid-cols-[repeat(3,1fr)] [background:linear-gradient(90deg,#efb04e,#764b9e)] rounded-[9px] text-white text-left pt-3 pr-5 pb-3 pl-5 [&>div]:flex [&>div]:flex-col [&>div+div]:[border-left:0] [&_strong]:text-[29px] [&_span]:text-[10px]">{[stats.awardsYears, stats.awardsSatisfaction, stats.awardsFamilies].map(s => <div key={s.label}>
          <Counter value={s.value} />
          <span>{s.label}</span>
        </div>)}</div>
      </div>
    </section>
  );
}
