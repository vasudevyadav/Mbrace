"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import MbraceHeader from "@/components/layout/MbraceHeader";
import HomeFooter from "../HomeFooter";
import type { HomeData } from "@/lib/queries";
import { blogCategories, type BlogArticle } from "./blogContent";

const categories = ["All Articles", ...blogCategories] as const;

function isBlogCategory(value: string | null): value is (typeof categories)[number] {
  return categories.includes(value as (typeof categories)[number]);
}

export default function BlogPageClient({ data, articles }: { data: HomeData; articles: BlogArticle[] }) {
  const { hospital, social, careCategories, serviceGroups } = data;
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>(() => {
    const requested = searchParams.get("category");
    return isBlogCategory(requested) ? requested : "All Articles";
  });
  const [location, setLocation] = useState("LB Nagar");

  const visibleArticles = useMemo(() => {
    const search = query.trim().toLowerCase();
    return articles.filter((article) => {
      const categoryMatches = category === "All Articles" || article.category === category;
      const searchMatches = !search || `${article.title} ${article.summary}`.toLowerCase().includes(search);
      return categoryMatches && searchMatches;
    });
  }, [articles, category, query]);

  const mapQuery = location === "LB Nagar" ? `Mbrace Kamineni Hospitals ${hospital.address}` : "Kamineni Hospitals King Koti Hyderabad";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
  const book = () => router.push("/#appointment");

  return (
    <div className="mbrace-home bg-white pt-[var(--care-header-height)] font-sans text-[15px] leading-[1.6] text-care-copy [--care-header-height:72px] sm:[--care-header-height:80px] xl:pt-0 xl:[--care-header-height:96px] [&_*]:box-border [&_button]:cursor-pointer [&_em]:not-italic [&_em]:font-bold [&_em]:text-care-gold [&_:focus-visible]:outline-offset-4 [&_:focus-visible]:[outline:3px_solid_var(--color-care-navy)]">
      <section id="home" className="relative m-3 mb-4 min-h-[370px] overflow-hidden rounded-[20px] bg-[linear-gradient(110deg,#fff3df,#f3e9fc)] sm:mb-5 sm:rounded-[30px] lg:mx-8 lg:mb-8 lg:mt-4.5 2xl:mx-auto 2xl:max-w-[1480px] xl:[&_.mb-header]:relative xl:[&_.mb-header]:inset-auto xl:[&_.mb-header]:h-30 xl:[&_.mb-header]:border-0 xl:[&_.mb-header]:bg-transparent xl:[&_.mb-header]:px-10 xl:[&_.mb-header]:py-6 xl:[&_.mb-header]:shadow-none xl:[&_.mb-header]:backdrop-blur-none">
        <Image src="/blog-banner.png" alt="" fill priority sizes="100vw" className="object-cover" />
        <MbraceHeader onBook={book} careCategories={careCategories} hospital={hospital} basePath="/" />
        <div className="relative z-[1] mx-auto flex max-w-[900px] flex-col items-center px-5 pb-12 pt-28 text-center xl:pb-11 xl:pt-8">
          <span className="rounded-full bg-care-gold px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[.04em] text-white">Mbrace Health Blog</span>
          <h1 className="mt-4 text-[36px] font-extrabold leading-tight text-care-purple sm:text-[48px]">Health <em>Insights</em></h1>
          <p className="mt-2 text-[16px] font-medium text-[#4e4c55]">Expert guidance for every stage of life</p>
          <p className="mt-8 text-[12px] text-care-purple"><Link href="/">Home</Link><span className="mx-3 text-[#a99eaf]">/</span><strong>Blog</strong></p>
        </div>
      </section>

      <main className="mx-auto grid w-[calc(100%_-_40px)] max-w-[1280px] gap-10 py-12 md:w-[calc(100%_-_64px)] lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-[38px] lg:py-16">
        <aside className="space-y-8">
          <label className="flex overflow-hidden rounded-[7px] border border-[#dfd8e6] bg-white">
            <span className="sr-only">Search articles</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search articles..." className="min-w-0 flex-1 px-4 py-3 text-[13px] outline-none" />
            <span className="grid w-12 place-items-center bg-care-purple text-white" aria-hidden="true">⌕</span>
          </label>

          <div>
            <h2 className="mb-4 text-[15px] font-extrabold text-[#302e33]">Categories</h2>
            <div className="grid gap-3">
              {categories.slice(1).map((name, index) => (
                <button key={name} type="button" onClick={() => setCategory(name)} aria-pressed={category === name} className="flex min-h-[58px] items-center gap-3 rounded-[7px] border border-[#e5dfe9] px-4 text-left text-[12px] font-bold text-care-navy aria-pressed:border-transparent aria-pressed:bg-[#f1e4fb]">
                  <Image src={`/images/figma/service-${index}.svg`} width={22} height={22} alt="" />
                  <span>{name}<small className="block text-[9px] font-medium text-[#99939f]">Explore topics</small></span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-[15px] font-extrabold text-[#302e33]">Recent Articles</h2>
            <div className="grid gap-3">
              {articles.slice(0, 3).map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`} className="grid grid-cols-[62px_1fr] gap-3">
                  <div className="relative h-[52px] overflow-hidden rounded-[6px]"><Image src={article.image} alt="" fill sizes="62px" className="object-cover" /></div>
                  <div><span className="rounded bg-[#f1e4fb] px-1.5 py-0.5 text-[8px] font-bold text-care-purple">{article.category}</span><h3 className="mt-1 line-clamp-2 text-[10px] font-bold leading-[1.35] text-[#302e33]">{article.title}</h3></div>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[16px] bg-[linear-gradient(180deg,#764b9e,#ffae2b)] p-6 text-white">
            <Image src="/images/figma/doctor.svg" width={34} height={34} alt="" className="brightness-0 invert" />
            <h2 className="mt-4 text-[18px] font-extrabold">Need Expert Guidance?</h2>
            <p className="mt-3 text-[12px] leading-[1.6]">Our care team is here to answer your questions and help plan your health journey.</p>
            <button type="button" onClick={book} className="mt-5 rounded-[6px] bg-white px-5 py-3 text-[11px] font-extrabold text-care-purple">Book a Consultation</button>
          </div>

          <div className="text-[12px] leading-[1.8]"><h2 className="mb-2 font-extrabold text-[#302e33]">Contact Us</h2><p>📍 LB Nagar &amp; King Koti, Hyderabad</p><p>☎ <a href={hospital.phoneHref}>{hospital.phone}</a></p><p>✉ <a href={`mailto:${hospital.email}`}>{hospital.email}</a></p></div>
        </aside>

        <section aria-labelledby="all-articles-heading">
          <div className="mb-6 flex items-center justify-between gap-4"><h2 id="all-articles-heading" className="text-[23px] font-extrabold text-[#302e33]">{category}</h2><span className="text-[11px] font-bold text-care-purple">{visibleArticles.length} Articles</span></div>
          {visibleArticles.length ? (
            <div className="grid gap-6 md:grid-cols-2">
              {visibleArticles.map((article, index) => (
                <article key={article.slug} className="overflow-hidden rounded-[12px] border border-[#ded9e2] bg-white">
                  <Link href={`/blog/${article.slug}`} className="relative block h-[210px] overflow-hidden">
                    <Image src={article.image} alt={article.title} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover transition-transform duration-500 hover:scale-[1.03]" />
                    <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[9px] font-extrabold text-white ${index % 2 ? "bg-care-gold" : "bg-care-purple"}`}>{article.category}</span>
                  </Link>
                  <div className="p-5">
                    <h3 className="text-[17px] font-extrabold leading-[1.35] text-[#302e33]"><Link href={`/blog/${article.slug}`}>{article.title}</Link></h3>
                    <p className="mt-3 text-[12px] leading-[1.65] text-[#77717f]">{article.summary}</p>
                    <Link href={`/blog/${article.slug}`} className="mt-4 inline-block text-[11px] font-extrabold text-care-purple">▧ &nbsp; Read More →</Link>
                  </div>
                </article>
              ))}
            </div>
          ) : <p className="rounded-[12px] bg-[#f8f3fb] p-8 text-center text-[#77717f]">No articles found. Try a different search.</p>}
          <nav className="mt-10 flex gap-2" aria-label="Blog pagination"><button className="size-10 rounded-[6px] bg-care-purple text-white">1</button><button className="size-10 rounded-[6px] border border-[#ded9e2]">2</button><button className="size-10 rounded-[6px] border border-[#ded9e2]">3</button><button className="size-10 rounded-[6px] border border-[#ded9e2]">→</button></nav>
        </section>
      </main>

      <section className="bg-[linear-gradient(90deg,#fff3df,#f3e9fc)] px-5 py-11">
        <div className="mx-auto flex max-w-[1130px] flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><h2 className="text-[22px] font-extrabold text-care-purple">Have a health question? <span className="text-[#302e33]">Talk to our specialists.</span></h2><p className="mt-2 max-w-[650px] text-[12px] text-[#6c6671]">Our multidisciplinary team covers women’s health, pregnancy, fertility and child care—book a consultation and get the guidance you need.</p></div><div className="flex gap-3"><button onClick={book} className="rounded-[6px] bg-care-purple px-6 py-3 text-[12px] font-bold text-white">Book Appointment</button><a href={hospital.phoneHref} className="rounded-[6px] border border-care-purple bg-white px-6 py-3 text-[12px] font-bold text-care-purple">Call Us Now</a></div></div>
      </section>

      <HomeFooter hospital={hospital} social={social} serviceGroups={serviceGroups} setServiceTab={() => {}} setLocation={setLocation} mapUrl={mapUrl} basePath="/" />
    </div>
  );
}
