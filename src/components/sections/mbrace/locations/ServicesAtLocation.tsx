import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, KidsIcon, MapPinIcon, ShieldIcon, SparkleIcon } from "@/components/icons/icons";

type Highlight = { title: string; description: string };

const serviceIcons = [ShieldIcon, CalendarIcon, KidsIcon, MapPinIcon, SparkleIcon];

export default function ServicesAtLocation({ locationName, intro, image, items }: { locationName: string; intro: string; image: string; items: Highlight[] }) {
  if (items.length === 0) return null;

  return (
    <section className="mb-section mb-rounded rounded-[20px] bg-[linear-gradient(110deg,#fff3df,#f3e9fc)] py-12 md:rounded-[28px] md:py-16 lg:py-20">
      <div className="mb-container mx-auto grid w-full gap-10 px-5 sm:px-6 lg:max-w-6xl lg:grid-cols-2 lg:items-start lg:px-8">
        <div>
          <p className="mb-eyebrow text-[14px] font-bold text-care-purple mb-3">Services Available</p>
          <h2 className="mb-5 text-[28px] font-bold leading-[1.2] text-[#1f2b70] md:text-[34px] lg:text-[40px]">
            How M&apos;Brace at <span className="text-care-purple">{locationName}</span> Helps You?
          </h2>
          <p className="mb-7 text-[15px] leading-[1.65] text-[#5d6078] lg:hidden">{intro}</p>
          <div className="grid gap-5">
            {items.map((item, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              return (
              <div key={item.title} className="flex gap-4">
                <span className={`mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-full ${index % 2 === 0 ? "bg-care-purple text-care-gold" : "bg-care-gold text-white"}`}><Icon className="size-5.5" /></span>
                <div>
                  <p className="text-[16px] font-bold text-[#1f2b70]">{item.title}</p>
                  <p className="mt-1 text-[14px] leading-[1.6] text-[#5d6078]">{item.description}</p>
                </div>
              </div>
              );
            })}
          </div>
          <Link href="/#services" className="mt-7 inline-flex min-h-[49px] items-center justify-center rounded-[6px] bg-care-purple px-7 text-[14px] font-semibold text-white hover:bg-[#603780]">Explore All Services</Link>
        </div>
        <div className="grid gap-6">
          <p className="hidden text-[15px] leading-[1.65] text-[#5d6078] lg:block">{intro}</p>
          {image && (
            <div className="relative h-80 overflow-hidden rounded-[20px] lg:h-[440px]">
              <Image src={image} alt={`M'Brace, ${locationName}`} fill className="object-cover" />
              <div className="absolute bottom-0 left-12 min-w-[194px] rounded-t-[12px] bg-care-gold px-7 py-4 text-center text-white">
                <strong className="block text-[22px]">35+</strong><span className="text-[13px]">Years of Expert Care</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
