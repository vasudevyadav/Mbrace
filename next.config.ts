import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  // Optional portable static output; normal local Next.js development stays unchanged.
  ...(process.env.SITES_STATIC_EXPORT === "1" ? { output: "export" as const, images: { unoptimized: true } } : {}),
};
export default nextConfig;
