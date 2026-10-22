import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/site";
import { approvedServiceGroups } from "@/components/sections/mbrace/services/approvedCarePageData";
import { getServiceHref } from "@/lib/serviceLinks";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteOrigin;
  const servicePages = Object.values(approvedServiceGroups)
    .flat()
    .map(([name]) => ({ url: `${siteUrl}${getServiceHref(name)}`, changeFrequency: "monthly" as const, priority: 0.7 }));
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/about-us`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/womens-care`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/child-care`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/pregnancy-birth-support`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/fertility-care`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/doctors`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/locations/lb-nagar`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/locations/king-koti`, changeFrequency: "monthly", priority: 0.8 },
    ...servicePages,
    { url: `${siteUrl}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
