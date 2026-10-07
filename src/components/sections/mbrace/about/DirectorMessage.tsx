import Image from "next/image";
import type { HomeData } from "@/lib/queries";
import { directorMessage } from "./content";

type Props = {
  featuredDoctor: HomeData["featuredDoctor"];
};

export default function DirectorMessage({ featuredDoctor }: Props) {
  return (
    <section id="director" className="mb-section max-[701px]:pt-12 max-[701px]:pb-12 min-[701px]:max-[1001px]:pt-15 min-[701px]:max-[1001px]:pb-15 min-[1001px]:pt-20 min-[1001px]:pb-20 [&_p]:leading-[1.65] mb-container max-[701px]:w-[calc(100%_-_40px)] min-[701px]:max-[1001px]:w-[calc(100%_-_48px)] min-[1001px]:max-[1201px]:w-[calc(100%_-_80px)] min-[1201px]:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto">
      <div className="grid items-center max-[1001px]:grid-cols-[1fr] max-[1001px]:gap-9 min-[1001px]:grid-cols-[1.15fr_1fr] min-[1001px]:gap-16">
        <div className="flex flex-col gap-4.5">
          <p className="text-care-gold font-bold text-[14px]">{directorMessage.eyebrow}</p>
          {featuredDoctor && <div>
            <p className="text-care-navy text-[28px] min-[1001px]:text-[36px] font-bold leading-[1.2]">{featuredDoctor.name.replace(/^DR\.?\s*/i, "Dr. ")}</p>
            <p className="text-[#373535] text-[16px] min-[1001px]:text-[18px] mt-1.5">{featuredDoctor.role}</p>
          </div>}
          <div className="text-[#5d6078] text-[15px] min-[1001px]:text-[16px] leading-[1.7] flex flex-col gap-4">
            {directorMessage.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <p className="text-care-navy font-bold text-[18px] mt-1">{directorMessage.subheading}</p>
          <a href="#team" className="mb-button inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] [border:0] text-[13px] font-semibold no-underline [&:hover]:bg-[#603780] w-fit">{directorMessage.cta}</a>
        </div>
        {featuredDoctor && <div className="relative rounded-[32px] overflow-hidden bg-[#fbfbfb] shadow-[0_0_13.4px_2px_rgba(0,0,0,0.06)] min-h-90 min-[1001px]:min-h-140">
          <Image src={featuredDoctor.image} alt={featuredDoctor.name} fill sizes="(max-width: 1000px) 100vw, 45vw" className="object-cover" />
        </div>}
      </div>
    </section>
  );
}
