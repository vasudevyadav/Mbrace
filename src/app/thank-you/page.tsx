import type { Metadata } from "next";
import ThankYouPageClient from "@/components/sections/mbrace/ThankYouPageClient";
import { getHomeData } from "@/lib/queries";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your appointment request has been received.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/thank-you" },
};

export default async function ThankYouPage() {
  const data = await getHomeData();
  return <ThankYouPageClient data={data} />;
}
