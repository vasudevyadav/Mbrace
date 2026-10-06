import Image from "next/image";

type Highlight = { title: string; description: string };

export default function ServicesAtLocation({ locationName, intro, image, items }: { locationName: string; intro: string; image: string; items: Highlight[] }) {
  if (items.length === 0) return null;

  return (
    <section className="mb-section max-[701px]:pt-12 max-[701px]:pb-12 min-[701px]:max-[1001px]:pt-15 min-[701px]:max-[1001px]:pb-15 min-[1001px]:pt-20 min-[1001px]:pb-20 [background:linear-gradient(110deg,#fff3df,#f3e9fc)] mb-rounded max-[701px]:rounded-[20px] min-[701px]:rounded-[28px]">
      <div className="mb-container max-[701px]:w-[calc(100%_-_40px)] min-[701px]:max-[1001px]:w-[calc(100%_-_48px)] min-[1001px]:max-[1201px]:w-[calc(100%_-_80px)] min-[1201px]:w-[min(1130px,calc(100%_-_64px))] ml-auto mr-auto grid gap-10 min-[1001px]:grid-cols-[1.1fr_1fr] min-[1001px]:items-start">
        <div>
          <p className="mb-eyebrow text-[14px] font-bold text-care-purple mb-3">Services Available</p>
          <h2 className="mb-5 font-bold text-[#1f2b70] max-[701px]:text-[28px] min-[701px]:text-[34px] min-[1001px]:text-[40px] leading-[1.2]">
            How M&apos;Brace at <span className="text-care-purple">{locationName}</span> Helps You?
          </h2>
          <p className="mb-7 text-[15px] leading-[1.65] text-[#5d6078] min-[1001px]:hidden">{intro}</p>
          <div className="grid gap-5">
            {items.map(item => (
              <div key={item.title} className="flex gap-4">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-[22px] bg-care-purple text-[18px] text-white">●</span>
                <div>
                  <p className="text-[16px] font-bold text-[#1f2b70]">{item.title}</p>
                  <p className="mt-1 text-[14px] leading-[1.6] text-[#5d6078]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-6">
          <p className="hidden text-[15px] leading-[1.65] text-[#5d6078] min-[1001px]:block">{intro}</p>
          {image && (
            <div className="relative h-67.5 min-[1001px]:h-82.5 overflow-hidden rounded-[20px]">
              <Image src={image} alt={`M'Brace, ${locationName}`} fill className="object-cover" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
