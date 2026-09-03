"use client";

import Link from "next/link";
import Image from "next/image";
import { m, type Variants } from "framer-motion";
import { PhoneIcon } from "@/components/icons/icons";
import { clinic, trustStats, about } from "@/lib/content";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-50 pb-24 sm:pb-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-8 lg:pt-24">
        <m.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <m.p
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-brand-700 ring-1 ring-inset ring-brand-100"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Now accepting new patients
          </m.p>

          <m.h1
            variants={item}
            className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink-900 sm:text-5xl"
          >
            <span className="text-accent-600">Helping you</span> build a{" "}
            <span className="text-brand-700">confident smile</span> for life
          </m.h1>

          <m.p variants={item} className="mt-5 text-lg leading-relaxed text-ink-500">
            {clinic.name} offers general, cosmetic, and specialist dental
            care in a calm studio built around one idea: you should always
            understand what&apos;s happening in your own mouth, and why.
          </m.p>

          <m.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#appointment"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink-900 px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-ink-900/90"
            >
              Book an appointment
            </Link>
            <a
              href={clinic.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-medium text-ink-900 ring-1 ring-inset ring-ink-900/15 transition-colors hover:bg-white"
            >
              <PhoneIcon className="h-4 w-4 text-brand-700" />
              Call {clinic.phone}
            </a>
          </m.div>

          <m.dl
            variants={item}
            className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-ink-900/10 pt-8 sm:grid-cols-4"
          >
            {trustStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-medium text-ink-900">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-sm text-ink-500">{stat.label}</dd>
              </div>
            ))}
          </m.dl>
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-accent-100" />
          <div className="relative aspect-9/10 w-full overflow-hidden rounded-4xl shadow-xl shadow-ink-900/10">
            <Image
              src="/images/photos/hero-primary.jpg"
              alt="Dentist giving a young patient a thumbs up after a checkup at Mbrace Dental Studio"
              width={900}
              height={1000}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-8 -left-8 hidden w-36 overflow-hidden rounded-2xl border-4 border-cream-50 shadow-lg sm:block">
            <Image
              src="/images/photos/hero-inset.jpg"
              alt="Patient smiling at her reflection after a visit"
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -right-4 top-8 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-brand-700 text-center text-white shadow-lg sm:-right-6">
            <span className="font-display text-xl font-medium leading-none">
              {about.badge.value}
            </span>
            <span className="mt-1 px-2 text-[10px] leading-tight">
              {about.badge.label}
            </span>
          </div>
        </m.div>
      </div>
    </section>
  );
}
