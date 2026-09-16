import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/site";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  const siteUrl = siteOrigin;
  return { rules: { userAgent: "*", allow: "/" }, ...(siteUrl ? { sitemap: `${siteUrl}/sitemap.xml` } : {}) };
}
