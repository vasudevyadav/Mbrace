"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MbraceHeader from "@/components/layout/MbraceHeader";
import HomeFooter from "../HomeFooter";
import type { HomeData } from "@/lib/queries";
import { AlertTriangleIcon } from "@/components/icons/icons";
import { blogCategories, slugifyHeading, type BlogArticle } from "./blogContent";

const categoryIcons: Record<string, string> = {
  "Women’s Health": "/images/figma/service-0.svg",
  "Child Care": "/images/figma/service-1.svg",
  "Pregnancy & Birth": "/images/figma/service-2.svg",
  "Fertility Care": "/images/figma/service-3.svg",
};

export default function BlogDetailClient({ article, relatedArticles, data }: { article: BlogArticle; relatedArticles: BlogArticle[]; data: HomeData }) {
  const { hospital, social, careCategories, serviceGroups } = data;
  const router = useRouter();
  const [location, setLocation] = useState("LB Nagar");

  const mapQuery = location === "LB Nagar" ? `Mbrace Kamineni Hospitals ${hospital.address}` : "Kamineni Hospitals King Koti Hyderabad";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
  const book = () => router.push("/#appointment");

  const tocHeadings = article.blocks.filter((block) => block.kind === "section").map((block) => block.heading);

  return (
    <div className="mbrace-home bg-white pt-[var(--care-header-height)] font-sans text-[15px] leading-[1.6] text-care-copy [--care-header-height:72px] sm:[--care-header-height:80px] xl:pt-0 xl:[--care-header-height:96px] [&_*]:box-border [&_button]:cursor-pointer [&_em]:not-italic [&_em]:font-bold [&_em]:text-care-gold [&_:focus-visible]:outline-offset-4 [&_:focus-visible]:[outline:3px_solid_var(--color-care-navy)]">
      <section className="relative m-3 mb-4 min-h-[370px] overflow-hidden rounded-[20px] bg-[linear-gradient(110deg,#fff3df,#f3e9fc)] sm:mb-5 sm:rounded-[30px] lg:mx-8 lg:mb-8 lg:mt-4.5 2xl:mx-auto 2xl:max-w-[1480px] xl:[&_.mb-header]:relative xl:[&_.mb-header]:inset-auto xl:[&_.mb-header]:h-30 xl:[&_.mb-header]:border-0 xl:[&_.mb-header]:bg-transparent xl:[&_.mb-header]:px-10 xl:[&_.mb-header]:py-6 xl:[&_.mb-header]:shadow-none xl:[&_.mb-header]:backdrop-blur-none">
        <Image src="/blog-banner.png" alt="" fill priority sizes="100vw" className="object-cover" />
        <MbraceHeader onBook={book} careCategories={careCategories} hospital={hospital} basePath="/" />
        <div className="relative z-[1] mx-auto flex max-w-[900px] flex-col items-center px-5 pb-12 pt-28 text-center xl:pb-11 xl:pt-8">
          <span className="rounded-full bg-care-gold px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[.04em] text-white">Mbrace Health Blog</span>
          <h1 className="mt-4 text-[28px] font-extrabold leading-tight text-care-purple sm:text-[38px]">{article.title}</h1>
          <p className="mt-8 flex flex-wrap items-center justify-center gap-3 text-[12px] text-care-purple">
            <Link href="/">Home</Link><span className="text-[#a99eaf]">/</span>
            <Link href="/blog">Blog</Link><span className="text-[#a99eaf]">/</span>
            <strong>{article.category}</strong>
          </p>
        </div>
      </section>

      <main className="mx-auto w-[calc(100%_-_40px)] max-w-[1280px] py-12 md:w-[calc(100%_-_64px)] lg:py-16">
        <p className="mb-8 text-[12px] font-semibold text-[#8b8591]">
          <Link href="/blog" className="text-care-purple">Blog</Link>
          <span className="mx-2 text-[#c7c0cd]">/</span>
          <span className="text-care-purple">{article.category}</span>
          <span className="mx-2 text-[#c7c0cd]">/</span>
          <span>{article.title}</span>
        </p>

        <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-[38px]">
          <aside className="order-2 space-y-8 lg:order-1">
            {tocHeadings.length > 0 && (
              <div className="rounded-[12px] bg-[#f8f3fb] p-5">
                <h2 className="mb-3 text-[15px] font-extrabold text-[#302e33]">In This Article</h2>
                <nav className="grid gap-2.5">
                  {tocHeadings.map((heading) => (
                    <a key={heading} href={`#${slugifyHeading(heading)}`} className="flex items-start gap-2.5 text-[12px] font-semibold leading-[1.4] text-[#56516b] hover:text-care-purple">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-[2px] bg-care-gold" aria-hidden="true" />
                      {heading}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            <div>
              <h2 className="mb-4 text-[15px] font-extrabold text-[#302e33]">Categories</h2>
              <div className="grid gap-3">
                {blogCategories.map((name) => {
                  const active = name === article.category;
                  return (
                    <Link
                      key={name}
                      href={`/blog?category=${encodeURIComponent(name)}`}
                      className={`flex min-h-[58px] items-center gap-3 rounded-[7px] border px-4 text-left text-[12px] font-bold text-care-navy ${active ? "border-transparent bg-[#f1e4fb]" : "border-[#e5dfe9]"}`}
                    >
                      <Image src={categoryIcons[name]} width={22} height={22} alt="" />
                      <span>{name}<small className="block text-[9px] font-medium text-[#99939f]">Explore topics</small></span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {relatedArticles.length > 0 && (
              <div>
                <h2 className="mb-4 text-[15px] font-extrabold text-[#302e33]">Related Articles</h2>
                <div className="grid gap-3">
                  {relatedArticles.map((related) => (
                    <Link key={related.slug} href={`/blog/${related.slug}`} className="grid grid-cols-[62px_1fr] gap-3">
                      <div className="relative h-[52px] overflow-hidden rounded-[6px]"><Image src={related.image} alt="" fill sizes="62px" className="object-cover" /></div>
                      <div><span className="rounded bg-[#f1e4fb] px-1.5 py-0.5 text-[8px] font-bold text-care-purple">{related.category}</span><h3 className="mt-1 line-clamp-2 text-[10px] font-bold leading-[1.35] text-[#302e33]">{related.title}</h3></div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-[16px] bg-[linear-gradient(180deg,#764b9e,#ffae2b)] p-6 text-white">
              <Image src="/images/figma/doctor.svg" width={34} height={34} alt="" className="brightness-0 invert" />
              <h2 className="mt-4 text-[18px] font-extrabold">Need Expert Guidance?</h2>
              <p className="mt-3 text-[12px] leading-[1.6]">Our care team is here to answer your questions and help you plan your health journey with confidence.</p>
              <button type="button" onClick={book} className="mt-5 rounded-[6px] bg-white px-5 py-3 text-[11px] font-extrabold text-care-purple">Book a Consultation</button>
            </div>

            <div className="text-[12px] leading-[1.8]"><h2 className="mb-2 font-extrabold text-[#302e33]">Contact Us</h2><p>📍 LB Nagar &amp; King Koti, Hyderabad</p><p>☎ <a href={hospital.phoneHref}>{hospital.phone}</a></p><p>✉ <a href={`mailto:${hospital.email}`}>{hospital.email}</a></p></div>
          </aside>

          <article className="order-1 min-w-0 lg:order-2">
            <span className="inline-flex rounded-[7px] bg-[#f1e4fb] px-3.5 py-1.5 text-[11px] font-bold text-care-purple">{article.category}</span>
            <h2 className="mt-5 text-[26px] font-extrabold leading-[1.3] text-[#302e33] sm:text-[32px]">{article.title}</h2>

            <div className="relative mt-6 h-[260px] overflow-hidden rounded-[14px] sm:h-[420px]">
              <Image src={article.image} alt={article.title} fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
              <span className="absolute left-4 top-4 rounded-full bg-care-purple px-3 py-1 text-[9px] font-extrabold text-white">{article.category}</span>
            </div>

            <p className="mt-8 text-[14px] leading-[1.8] text-[#56516b]">{article.intro}</p>

            {article.blocks.map((block, index) => {
              if (block.kind === "section") {
                return (
                  <section key={index} id={slugifyHeading(block.heading)} className="mt-10 scroll-mt-28">
                    <h3 className="text-[20px] font-extrabold text-care-purple">{block.heading}</h3>
                    {block.lead && <p className="mt-3 text-[14px] leading-[1.8] text-[#56516b]">{block.lead}</p>}
                    {block.bullets && (
                      <ul className="mt-3 grid gap-2 pl-5 text-[14px] leading-[1.7] text-[#56516b] marker:text-care-gold [&>li]:list-disc">
                        {block.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
                      </ul>
                    )}
                    {block.trailing && <p className="mt-3 text-[14px] leading-[1.8] text-[#56516b]">{block.trailing}</p>}
                  </section>
                );
              }
              if (block.kind === "alert") {
                return (
                  <div key={index} className="mt-10 rounded-[12px] border border-[#f3cf8f] bg-[#fff8ec] p-6">
                    <p className="flex items-center gap-2.5 text-[15px] font-extrabold text-[#a9681c]">
                      <AlertTriangleIcon className="size-5 shrink-0" />
                      {block.heading}
                    </p>
                    <p className="mt-3 text-[13px] leading-[1.7] text-[#7a5a2c]">{block.body}</p>
                  </div>
                );
              }
              return (
                <div key={index} className="mt-10 rounded-[12px] bg-[#f8f3fb] p-6">
                  <p className="text-[14px] font-semibold leading-[1.8] text-[#45405a]">{block.body}</p>
                  <p className="mt-3 text-[11px] italic text-[#9b93a8]">Key takeaway</p>
                </div>
              );
            })}
          </article>
        </div>

        <p className="mt-14 border-t border-[#ede8f0] pt-6 text-[12px] leading-[1.6] text-[#8b8591]">This article is for educational information only and does not constitute personal medical advice. Always consult a qualified healthcare professional about your individual circumstances.</p>
      </main>

      <section className="bg-[linear-gradient(90deg,#fff3df,#f3e9fc)] px-5 py-11">
        <div className="mx-auto flex max-w-[1130px] flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><h2 className="text-[22px] font-extrabold text-care-purple">Have a health question? <span className="text-[#302e33]">Talk to our specialists.</span></h2><p className="mt-2 max-w-[650px] text-[12px] text-[#6c6671]">Our multidisciplinary team covers women’s health, pregnancy, fertility and child care—book a consultation and get the guidance you need.</p></div><div className="flex gap-3"><button onClick={book} className="rounded-[6px] bg-care-purple px-6 py-3 text-[12px] font-bold text-white">Book Appointment</button><a href={hospital.phoneHref} className="rounded-[6px] border border-care-purple bg-white px-6 py-3 text-[12px] font-bold text-care-purple">Call Us Now</a></div></div>
      </section>

      <HomeFooter hospital={hospital} social={social} serviceGroups={serviceGroups} setServiceTab={() => {}} setLocation={setLocation} mapUrl={mapUrl} basePath="/" />
    </div>
  );
}
