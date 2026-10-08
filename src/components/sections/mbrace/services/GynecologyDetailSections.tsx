"use client";

import Image from "next/image";
import { useState } from "react";

const understanding = [
  [
    "Discuss Your Concerns",
    "Share your symptoms, health history, and questions with our specialist in a safe, supportive environment.",
  ],
  [
    "Assess Your Health",
    "Undergo necessary examinations and diagnostics to get a clear picture of your gynaecological health.",
  ],
  [
    "Explore Your Options",
    "Understand all available care pathways — from lifestyle guidance to clinical treatment — tailored to your needs.",
  ],
  [
    "Plan Follow-up Care",
    "Leave with a clear follow-up plan, next steps, and ongoing support from the M'Brace care team.",
  ],
];

const concerns = [
  ["PCOS & Ovulation", "Questions about your cycle, PCOS, or ovulation."],
  ["Period Concerns", "Heavy, painful, irregular, or missed periods."],
  [
    "Fibroids & Ovarian Cysts",
    "Understanding your diagnosis and care options.",
  ],
  ["Pelvic Pain & Endometriosis", "Persistent discomfort or pelvic pain."],
  ["Menopause", "Support with symptoms during this transition."],
  ["Vaginal Health", "Intimate discharge, itching, or discomfort."],
  ["Family Planning", "Honest contraception and pregnancy planning."],
];

const concernIcons = [
  "/Vector.png",
  "/healthicons_doctor-female.png",
  "/healthicons_medical-records-outline.png",
  "/healthicons_medical-records-o.png",
  "/Icon BG.png",
  "/healthicons_syringe.png",
  "/healthicons_child-care.png",
];

const tools = [
  {
    category: "Imaging",
    title: "Pelvic Ultrasound",
    description: "Imaging to assess the uterus and ovaries.",
    image: "/images/figma/asset-21.webp",
  },
  {
    category: "Diagnostics",
    title: "Laboratory Investigations",
    description: "Tests selected for your symptoms and health history.",
    image: "/images/figma/asset-19.webp",
  },
  {
    category: "Endoscopy",
    title: "Hysteroscopy",
    description: "A small camera to examine the inside of the uterus.",
    image: "/images/figma/asset-20.webp",
  },
  {
    category: "Surgery",
    title: "Laparoscopy",
    description: "A surgical approach for selected conditions.",
    image: "/images/figma/location-services-alt.png",
  },
];

const treatmentPlans = [
  {
    label: "Menstrual Health",
    icon: "/icon-3.png",
    journey: "Menstrual Health — Your journey, step by step",
    stages: [
      [
        "Consultation & Menstrual Health Assessment",
        "Discuss heavy, painful, irregular or missed periods, cycle patterns, and your medical history. Your doctor may recommend appropriate examinations or tests based on your symptoms.",
      ],
      [
        "Personalised Treatment & Follow-Up",
        "Discuss suitable options based on your assessment, preferences and health goals. Your doctor will guide you on symptom tracking and plan a follow-up that works for you.",
      ],
    ],
    cta: "Discuss Your Period Concerns",
    overlay: "Care guided by your diagnosis",
  },
  {
    label: "PCOS Care",
    icon: "/healthicons_medical-records-outline.png",
    journey: "PCOS Care — Clarity at every step",
    stages: [
      [
        "PCOS Consultation & Assessment",
        "Review cycle changes, symptoms, health history and previous reports. Your doctor may advise focused examinations or investigations.",
      ],
      [
        "Personalised PCOS Care Plan",
        "Receive guidance for symptom management, lifestyle support and follow-up based on your diagnosis and individual health goals.",
      ],
    ],
    cta: "Discuss Your PCOS Concerns",
    overlay: "PCOS care shaped around you",
  },
  {
    label: "Fibroid & Cyst Care",
    icon: "/gridicons_lo.png",
    journey: "Fibroid & Cyst Care — Informed next steps",
    stages: [
      [
        "Clinical Review & Diagnosis",
        "Discuss pain, bleeding or pressure symptoms. Your specialist will review your history and recommend imaging or tests where appropriate.",
      ],
      [
        "Treatment & Monitoring Plan",
        "Understand suitable medical, monitoring or procedural options, with a clear follow-up plan tailored to your condition.",
      ],
    ],
    cta: "Discuss Fibroid & Cyst Care",
    overlay: "Clear options for confident decisions",
  },
  {
    label: "Endometriosis",
    icon: "/Vector.png",
    journey: "Endometriosis — Support through every stage",
    stages: [
      [
        "Symptoms & Health Assessment",
        "Share your pain patterns, cycle concerns and medical history in a supportive consultation focused on understanding your symptoms.",
      ],
      [
        "Ongoing Endometriosis Care",
        "Explore appropriate treatment and symptom-management options with regular review and follow-up from your care team.",
      ],
    ],
    cta: "Discuss Endometriosis Care",
    overlay: "Care that listens to your symptoms",
  },
  {
    label: "Menopause Care",
    icon: "/Icon BG.png",
    journey: "Menopause Care — Support for your transition",
    stages: [
      [
        "Menopause Health Consultation",
        "Discuss physical and emotional changes, symptoms, lifestyle and health history with an experienced specialist.",
      ],
      [
        "Personalised Symptom Support",
        "Receive practical guidance, suitable treatment options and ongoing monitoring designed around your comfort and wellbeing.",
      ],
    ],
    cta: "Discuss Menopause Care",
    overlay: "Support for every stage of change",
  },
  {
    label: "Fertility Assessment",
    icon: "/healthicons_doctor-female.png",
    journey: "Fertility Assessment — A clear way forward",
    stages: [
      [
        "Fertility Consultation & Review",
        "Your specialist will understand your history, goals and concerns, then recommend the most relevant initial assessments.",
      ],
      [
        "Guidance & Next-Step Planning",
        "Review your results and possible pathways with clear explanations, personalised recommendations and continued support.",
      ],
    ],
    cta: "Book a Fertility Assessment",
    overlay: "Your fertility journey, thoughtfully guided",
  },
];

const IconTile = ({ index }: { index: number }) => {
  const icons = [
    "/icon-3.png",
    "/icon-2.png",
    "/gridicons_lo.png",
    "/Icon BG.png",
  ];

  if (index === 2) {
    return (
      <span className="grid size-12 place-items-center rounded-[10px] bg-care-gold lg:size-[52px]">
        <Image
          src={icons[index]}
          width={48}
          height={48}
          alt=""
          className="size-6 object-contain"
        />
      </span>
    );
  }

  return (
    <Image
      src={icons[index]}
      width={52}
      height={52}
      alt=""
      className="size-12 object-contain lg:size-[52px]"
    />
  );
};

export default function GynecologyDetailSections({
  book,
}: {
  book: () => void;
}) {
  const [activeTreatment, setActiveTreatment] = useState(0);
  const treatment = treatmentPlans[activeTreatment];

  return (
    <>
      <section className="relative mx-3 mt-8 rounded-[24px] bg-care-purple px-5 pb-6 pt-10 text-white md:mx-5 md:px-8 md:pb-8 md:pt-12 lg:mx-8 lg:min-h-[410px] lg:px-[8%] lg:pb-20 lg:pt-16">
        <div className="mx-auto grid max-w-[1320px] gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-[12px] font-bold text-care-gold lg:text-[13px]">
              How M&apos;Brace Works for You
            </p>
            <h2 className="mt-5 text-[28px] font-semibold leading-[1.35] md:text-[32px] lg:text-[36px]">
              Care That Starts With
              <br />
              Understanding You
            </h2>
          </div>
          <p className="max-w-[500px] text-[13px] leading-[1.75] text-white/90 lg:text-[14px]">
            Gynaecology focuses on menstrual and reproductive health through
            different stages of life. A consultation can help you understand
            your symptoms and discuss your next steps — so you feel heard,
            informed, and cared for.
          </p>
        </div>
        <div className="relative z-10 mx-auto mt-8 flex max-w-[1305px] snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:absolute lg:inset-x-[2.5%] lg:top-[calc(100%-135px)] lg:mt-0 lg:grid-cols-4 lg:gap-[18px]">
          {understanding.map((item, index) => (
            <div
              key={item[0]}
              className={`min-h-[225px] w-[86%] shrink-0 snap-start p-[2px] shadow-[0_14px_30px_rgba(41,28,70,.12)] [background:linear-gradient(180deg,#fbad31_0%,#b16c7d_42%,#764b9e_100%)] sm:w-auto lg:min-h-[350px] ${index === 0 ? "rounded-[16px] lg:rounded-r-none" : index === understanding.length - 1 ? "rounded-[16px] lg:rounded-l-none" : "rounded-[16px] lg:rounded-none"}`}
            >
              <article
                className={`h-full bg-white p-5 text-[#343238] lg:p-8 ${index === 0 ? "rounded-[14px] lg:rounded-r-none" : index === understanding.length - 1 ? "rounded-[14px] lg:rounded-l-none" : "rounded-[14px] lg:rounded-none"}`}
              >
                <IconTile index={index} />
                <p className="mt-6 text-[12px] font-bold leading-none text-care-purple lg:text-[14px]">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-[18px] font-semibold leading-[1.35] lg:text-[20px]">
                  {item[0]}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.58] text-[#605d65] lg:text-[17px]">
                  {item[1]}
                </p>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:pb-[92px] lg:pt-[300px]">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-[1fr_520px] lg:gap-[72px]">
          <div>
            <p className="text-[13px] font-semibold text-care-gold">
              Gynaecology Care
            </p>
            <h2 className="mt-4 text-[31px] font-semibold leading-[1.22] text-care-navy md:text-[36px] lg:text-[40px]">
              Expert <span className="text-care-gold">Gynaecology</span>
              <br />
              Treatment in Hyderabad
            </h2>
            <p className="mt-7 max-w-[560px] text-[15px] leading-[1.78] text-[#656078] lg:text-[16px]">
              M&apos;Brace, part of the Kamineni Healthcare Group, offers
              gynaecology care for women at every stage of life. Discuss
              menstrual concerns, hormonal changes and reproductive health
              questions with our specialists.
            </p>
            <p className="mt-6 max-w-[560px] text-[15px] leading-[1.78] text-[#656078] lg:text-[16px]">
              Your consultation includes a review of your symptoms and health
              history, with assessments as needed. Treatment recommendations are
              guided by your diagnosis, with clear explanations of your options
              and follow-up care.
            </p>
            <button
              onClick={book}
              className="mt-7 min-h-[52px] w-full rounded-[6px] bg-care-purple px-7 py-3.5 text-[14px] font-bold text-white transition-colors hover:bg-[#603780] sm:w-auto sm:min-w-[220px]"
            >
              Book a Consultation
            </button>
          </div>
          <div className="relative h-[350px] overflow-visible rounded-[20px] lg:h-[455px]">
            <div className="absolute inset-0 overflow-hidden rounded-[24px]">
              <Image
                src="/services-details-banner.png"
                alt="A patient discussing care with a gynaecology specialist"
                fill
                sizes="(max-width:1023px) 100vw, 625px"
                className="object-cover object-right"
              />
            </div>
            <span className="absolute -bottom-4 left-3 flex size-24 flex-col items-center justify-center rounded-full border-[5px] border-[#eee7f5] bg-care-gold text-center text-[22px] font-extrabold leading-none text-[#28262c] shadow-lg lg:-bottom-6 lg:-left-12 lg:size-[132px] lg:text-[34px]">
              34+
              <small className="mt-2 block text-[10px] font-medium leading-[1.25] lg:text-[12px]">
                YEARS OF
                <br />
                CARE
              </small>
            </span>
          </div>
        </div>
      </section>

      <section className="rounded-[26px] bg-[linear-gradient(110deg,#fff3df_0%,#f8edf1_52%,#f2e8fc_100%)] px-5 py-14 lg:px-8 lg:py-[96px]">
        <div className="mx-auto grid max-w-[1250px] gap-10 lg:grid-cols-[370px_1fr] lg:gap-[76px]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[3px] text-care-gold">
              Our Specialities
            </p>
            <h2 className="mt-5 text-[32px] font-semibold leading-lighr text-care-navy md:text-[36px] lg:text-4xl">
              What Can We
              <br />
              <span className="text-care-gold">Help</span> You With?
            </h2>
            <p className="mt-8 text-[15px] leading-[1.72] text-[#57535d] lg:text-[16px]">
              Every woman&apos;s health journey is unique. Our gynaecology team
              offers compassionate, expert care across a wide range of concerns
              — from everyday questions to complex conditions. We&apos;re here
              to listen, guide, and support you.
            </p>
            <div className="mt-8 h-1 w-12 rounded-full bg-care-gold" />
            <ul className="mt-7 space-y-4 text-[14px] font-medium text-[#56515c]">
              {[
                "Personalised care plans",
                "Care at every life stage",
                "Clear guidance on your options",
              ].map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <span className="size-2 rounded-full bg-care-purple" />
                  {x}
                </li>
              ))}
            </ul>
            <button
              onClick={book}
              className="mt-8 min-h-[52px] w-full rounded-[6px] bg-care-purple px-6 py-3.5 text-[14px] font-bold text-white sm:w-auto sm:min-w-[245px]"
            >
              Discuss Your Concern&nbsp;&nbsp; →
            </button>
          </div>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:hidden">
            {concerns.map((item, index) => (
              <article
                key={item[0]}
                className="flex min-h-[154px] w-[86%] shrink-0 snap-start items-center rounded-[18px] border border-[#d8ddd8] bg-white px-6 py-5 shadow-[0_8px_22px_rgba(41,28,70,.06)]"
              >
                <div>
                  <span
                    className={`grid size-[42px] place-items-center rounded-[11px] ${index % 2 ? "bg-[#fff1d9]" : "bg-[#f1e5fc]"}`}
                  >
                    <Image
                      src={concernIcons[index]}
                      width={28}
                      height={28}
                      alt=""
                      className="size-6 object-contain"
                    />
                  </span>
                  <h3 className="mt-3 text-[17px] font-bold leading-[1.3] text-care-purple">
                    {item[0]}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-[#5f5b63]">
                    {item[1]}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="hidden gap-5 sm:grid sm:grid-cols-2">
            {[
              concerns.filter((_, index) => index % 2 === 0 && index < 6),
              concerns.filter((_, index) => index % 2 === 1 || index === 6),
            ].map((column, columnIndex) => (
              <div
                key={columnIndex}
                className={`space-y-5 ${columnIndex === 0 ? "sm:pt-[86px]" : ""}`}
              >
                {column.map((item) => {
                  const index = concerns.findIndex(
                    (concern) => concern[0] === item[0],
                  );
                  return (
                    <article
                      key={item[0]}
                      className="flex min-h-[154px] items-center rounded-[18px] border border-[#d8ddd8] bg-white px-7 py-6 shadow-[0_8px_22px_rgba(41,28,70,.06)]"
                    >
                      <div>
                        <span
                          className={`grid size-[42px] place-items-center rounded-[11px] ${index % 2 ? "bg-[#fff1d9]" : "bg-[#f1e5fc]"}`}
                        >
                          <Image
                            src={concernIcons[index]}
                            width={28}
                            height={28}
                            alt=""
                            className="size-6 object-contain"
                          />
                        </span>
                        <h3 className="mt-3 text-[17px] font-bold leading-[1.3] text-care-purple lg:text-[18px]">
                          {item[0]}
                        </h3>
                        <p className="mt-2 text-[13px] leading-[1.55] text-[#5f5b63] lg:text-[14px]">
                          {item[1]}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-b-[28px] bg-[#45156d] text-white">
        <div className="bg-care-purple px-5 pb-[74px] pt-14 lg:px-8 lg:pb-[98px] lg:pt-[72px]">
          <div className="mx-auto grid max-w-[1250px] gap-8 lg:grid-cols-[1fr_420px] lg:items-start lg:gap-24">
            <div>
              <p className="text-[13px] font-bold text-care-gold">
                Treatment Pathways
              </p>
              <h2 className="mt-7 text-[30px] font-semibold leading-[1.25] md:text-[36px] lg:text-[40px]">
                Treatment Planned Around
                <br className="hidden sm:block" /> Your Needs
              </h2>
            </div>
            <div>
              <p className="text-[16px] leading-[1.55] text-white/90 lg:text-[17px]">
                Your doctor will explain suitable options based on your
                symptoms, assessment, and health goals — giving you clarity and
                confidence at every step.
              </p>
              <button
                onClick={book}
                className="mt-5 min-h-[52px] w-full rounded-[6px] bg-care-gold px-7 py-3.5 text-[14px] font-bold text-[#21172b] sm:w-auto sm:min-w-[220px]"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-[1180px] px-5 lg:px-0">
          <div className="-mt-[38px] flex gap-[10px] overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {treatmentPlans.map((plan, index) => (
              <button
                key={plan.label}
                type="button"
                onClick={() => setActiveTreatment(index)}
                aria-pressed={activeTreatment === index}
                className={`flex min-h-[64px] shrink-0 items-center justify-center gap-3 rounded-[8px] px-5 text-[13px] font-semibold transition-colors lg:flex-1 lg:px-4 ${activeTreatment === index ? "bg-care-purple text-white" : "bg-[#f4f1ed] text-[#555157] hover:bg-white"}`}
              >
                <Image
                  src={plan.icon}
                  width={28}
                  height={28}
                  alt=""
                  className="size-6 object-contain"
                />
                {plan.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-[1250px] gap-12 px-5 pb-14 pt-14 lg:grid-cols-[1fr_500px] lg:gap-[88px] lg:px-0 lg:pb-[58px] lg:pt-9">
          <div>
            <div className="flex items-center gap-3 text-[13px] font-bold text-care-gold">
              <span className="grid size-9 place-items-center rounded-full bg-white/10">
                <Image
                  src={treatment.icon}
                  width={24}
                  height={24}
                  alt=""
                  className="size-6 object-contain"
                />
              </span>
              {treatment.journey}
            </div>

            <div className="relative mt-8 space-y-9 pl-14 before:absolute before:bottom-7 before:left-[17px] before:top-[14px] before:w-px before:bg-white/15">
              <div className="relative">
                <span className="absolute -left-14 top-0 grid size-6 place-items-center rounded-full border-[3px] border-care-gold bg-[#5b267e]">
                  <span className="size-1.5 rounded-full bg-care-gold" />
                </span>
                <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-care-gold">
                  Stage 01
                </p>
                <h3 className="mt-3 text-[18px] font-bold lg:text-[20px]">
                  {treatment.stages[0][0]}
                </h3>
                <p className="mt-3 max-w-[610px] text-[14px] leading-[1.65] text-white/70">
                  {treatment.stages[0][1]}
                </p>
              </div>
              <div className="relative">
                <span className="absolute -left-14 top-0 grid size-6 place-items-center rounded-full border-[3px] border-care-gold bg-[#5b267e]">
                  <span className="size-1.5 rounded-full bg-care-gold" />
                </span>
                <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-care-gold">
                  Stage 02
                </p>
                <h3 className="mt-3 text-[18px] font-bold lg:text-[20px]">
                  {treatment.stages[1][0]}
                </h3>
                <p className="mt-3 max-w-[610px] text-[14px] leading-[1.65] text-white/70">
                  {treatment.stages[1][1]}
                </p>
              </div>
            </div>

            <button
              onClick={book}
              className="mt-9 min-h-[50px] w-full rounded-[6px] border-2 border-care-gold bg-white px-5 py-3 text-[13px] font-bold text-[#261631] sm:w-auto sm:min-w-[280px] sm:px-6 sm:text-[14px]"
            >
              {treatment.cta}&nbsp;&nbsp; →
            </button>
          </div>

          <div className="relative h-[320px] overflow-hidden rounded-[16px] sm:h-[410px] lg:h-[465px]">
            <Image
              src="/services-details-banner.png"
              alt="A patient discussing treatment options with her doctor"
              fill
              sizes="(max-width:1023px) 100vw, 500px"
              className="object-cover object-right"
            />
            <div className="absolute bottom-8 left-8 right-8 rounded-[12px] bg-[#27143e]/90 px-7 py-6 backdrop-blur-[2px]">
              <h3 className="text-[16px] font-bold text-care-gold">
                {treatment.overlay}
              </h3>
              <p className="mt-3 text-[14px] text-white/75">
                Discuss your options with your doctor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-8 lg:pb-[88px] lg:pt-[86px]">
        <div className="mx-auto max-w-[1250px]">
          <div className="grid gap-4 lg:grid-cols-[1fr_1.15fr_auto] lg:items-center lg:gap-16">
            <div>
              <p className="text-[13px] font-bold uppercase text-care-gold">
                Diagnostics &amp; Procedures
              </p>
              <h2 className="mt-4 text-[32px] font-semibold leading-[1.18] text-care-navy md:text-[36px] lg:text-[40px]">
                Tools That <span className="text-care-gold">Support</span>
                <br />
                Your Care
              </h2>
            </div>
            <p className="max-w-[510px] text-[15px] leading-[1.55] text-[#343238] lg:text-[16px]">
              Your doctor may recommend investigations or procedures based on
              your clinical needs.
            </p>
            <button
              onClick={book}
              className="min-h-12 w-full rounded-full bg-care-gold px-7 py-3 text-[14px] lg:font-bold font-semibold text-[#21172b] sm:w-auto sm:min-w-[190px]"
            >
              Discuss Your Care
            </button>
          </div>
          <div className="mt-8 h-px bg-[#d7c2e8]" />
          <div className="mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4 lg:gap-6">
            {tools.map((tool) => (
              <article
                key={tool.title}
                className="group relative h-[270px] w-[86%] shrink-0 snap-start overflow-hidden rounded-[18px] sm:w-auto lg:h-[350px]"
              >
                <Image
                  src={tool.image}
                  alt={tool.title}
                  fill
                  sizes="(max-width:639px) 100vw, (max-width:1023px) 50vw, 25vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#170228] via-[#26113e]/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-[11px] font-medium uppercase tracking-[2px] text-care-gold">
                    {tool.category}
                  </p>
                  <h3 className="mt-3 text-[21px] font-bold leading-[1.2]">
                    {tool.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.5] text-white/85">
                    {tool.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-2 text-[12px] leading-[1.5] text-[#454149]">
            Service and technology availability to be confirmed by Mbrace before
            publication. Images are illustrative.
          </p>
        </div>
      </section>
    </>
  );
}
