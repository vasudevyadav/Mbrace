import Image from "next/image";

function WomenCareIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="size-11 shrink-0 text-white"
    >
      <path
        d="M15.2 11.4c-3.9 0-6.5 2.8-6.5 6.7 0 5 3.8 8.3 8 9.8m16.1-16.5c3.9 0 6.5 2.8 6.5 6.7 0 5-3.8 8.3-8 9.8M15.1 17c.4 5.3 3.4 8.6 8.9 11.2 5.5-2.6 8.5-5.9 8.9-11.2-3.1-.2-5.5 1.3-6.9 4.5-1.4-3.2-3.8-4.7-6.9-4.5Z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.7 27.9c-1 2.7-1.6 5.4-1.6 8.2m16.2-8.2c1 2.7 1.6 5.4 1.6 8.2M12.4 39.2h5.5m12.2 0h5.5"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function TalkToExpertsSection({
  heading,
  body,
  book,
  buttonLabel,
}: {
  heading: string;
  body: string;
  book: () => void;
  buttonLabel: string;
}) {
  return (
    <section className="mb-section pt-0 pb-0 overflow-visible mb-14">
      <div className="mb-container w-[calc(100%_-_40px)] md:w-[calc(100%_-_48px)] lg:w-[calc(100%_-_80px)] xl:w-[min(1300px,calc(100%_-_64px))] ml-auto mr-auto">
        <div className="relative isolate min-h-[166px] overflow-hidden rounded-[10px] [background:linear-gradient(100deg,#76489d_0%,#ac6d84_38%,#fbae2f_100%)] md:overflow-visible">
          <div className="relative z-10 flex min-h-[166px] items-start gap-3.5 px-6 py-8 sm:px-10 md:w-[68%] md:items-center md:py-7 lg:pl-[50px] lg:pr-0">
            <WomenCareIcon />
            <div className="min-w-0 pt-0.5">
              <h2 className="text-[23px] font-bold leading-[1.2] text-white sm:text-[28px] lg:text-[32px]">
                {heading}
              </h2>
              <p className="mt-0.5 text-[13px] leading-[1.45] text-white sm:text-[14px]">{body}</p>

              <button
                type="button"
                onClick={book}
                className="mt-4 inline-flex min-h-[38px] items-center justify-center self-start rounded-[5px] border-0 bg-white px-5 text-[12px] font-bold text-[#252331] no-underline shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:bg-[#f3f0fa]"
              >
                {buttonLabel}
              </button>
            </div>
          </div>
          <div className="relative z-0 mx-auto h-[205px] w-[308px] max-w-full md:absolute md:right-[3.5%] md:bottom-0 md:mx-0 lg:right-[5.5%]">
            <Image
              src="/images/figma/doctors-team-cutout.png"
              alt="A team of M'Brace specialists"
              fill
              priority
              sizes="(max-width: 767px) 308px, 308px"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
