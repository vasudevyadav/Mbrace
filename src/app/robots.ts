import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  // Crawlers must be able to read each page's `noindex` directive.
  return { rules: { userAgent: "*", allow: "/" } };
}
