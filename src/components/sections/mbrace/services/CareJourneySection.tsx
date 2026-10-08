import Image from "next/image";
import type { JourneyItem } from "./careCategoryContent";

export default function CareJourneySection({
  heading,
  highlight,
  journey,
}: {
  heading: string;
  highlight: string;
  journey: JourneyItem[];
}) {
  return (
    <section className="mb-section pt-12 pb-12 md:pt-15 md:pb-15 lg:pt-20 lg:pb-14">
      <div className="mb-container w-[calc(100%_-_40px)] md:w-[calc(100%_-_48px)] lg:w-[calc(100%_-_80px)] xl:w-[min(1300px,calc(100%_-_64px))] ml-auto mr-auto">
        <h2 className="text-center text-[22px] sm:text-[28px] lg:text-[34px] font-bold text-care-navy leading-[1.35]">
          {heading} <span className="text-care-gold">{highlight}</span>
        </h2>
        <div className="mt-9 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {journey.map((item, i) => (
            <div
              key={item.question}
              className={`rounded-t-full rounded-b-[16px] pt-6 pr-4 pb-6 pl-4 text-center ${i % 2 === 0 ? "bg-[#f3f0fa]" : "bg-[#fdf1e4]"}`}
            >
              <div className="relative mx-auto size-24 sm:size-32 lg:size-60 overflow-hidden rounded-full mb-4">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="150px"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-[13px] py-2 lg:text-base font-semibold text-care-navy leading-[1.45]">
                {item.question}
                <br />
                {item.cta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
