import Photo from "../Photo";
import Counter from "../Counter";
import type { HomeData } from "@/lib/queries";

export default function CareExcellenceSection({ eyebrow, heading, highlight, body, stats }: { eyebrow: string; heading: string; highlight: string; body: string; stats: HomeData["stats"] }) {
  return (
    <section className="mb-section pt-12 pb-12 md:pt-15 md:pb-15 lg:pt-20 lg:pb-20">
      <div className="mb-container w-[calc(100%_-_40px)] md:w-[calc(100%_-_48px)] lg:w-[calc(100%_-_80px)] xl:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto grid items-center grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16">
        <div>
          <p className="mb-eyebrow text-[14px] font-semibold text-care-gold mb-3.5">{eyebrow}</p>
          <h2 className="font-semibold text-care-navy text-[28px] md:text-[32px] xl:text-[38px] leading-[1.3]">{heading} <span className="text-care-gold">{highlight}</span></h2>
          <p className="mt-5 text-[14px] leading-[1.75] text-[#5d6078]">{body}</p>
          <a className="mb-button mt-6 inline-flex items-center justify-center min-h-11.5 pt-3 pr-6 pb-3 pl-6 bg-care-purple text-white rounded-[5px] border-0 text-[13px] font-semibold no-underline hover:bg-[#603780]" href="#team">Know More</a>
        </div>
        <div className="relative max-w-115">
          <Photo src="/images/figma/portrait-unused.png" alt="A smiling M'Brace patient" className="h-85 md:h-100" />
          <Photo src="/images/figma/asset-4.webp" alt="A mother lovingly holds her baby" className="mb-excellence-inset [&.mb-excellence-inset]:absolute left-[-20px] bottom-[-25px] w-37.5 h-30 border-7 border-white md:w-45 md:h-35 md:left-[-30px]" />
          <div className="mb-years mb-excellence-badge [&.mb-excellence-badge]:absolute left-5 top-[-20px] md:left-7.5 w-25 h-25 md:w-27.5 md:h-27.5 rounded-[50%] bg-care-gold border-5 border-double border-white outline-2 outline-care-gold flex items-center justify-center flex-col text-white text-center [&_strong]:text-[28px] md:[&_strong]:text-[33px] [&_strong]:leading-[1.15] [&_span]:text-[10px] md:[&_span]:text-[11px]">
            <Counter value={stats.yearsOfCare.value} />
            <span>YEARS OF CARE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
