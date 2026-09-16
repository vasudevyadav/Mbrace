import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./mbrace.css";
import { siteOrigin } from "@/lib/site";
import MotionProvider from "@/components/providers/MotionProvider";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: { default: "M’Brace by Kamineni Hospitals | Women’s Care, Child Care & Fertility", template: "%s | M’Brace" },
  description: "Connected care for women, mothers and children. Explore women’s health, pregnancy, paediatrics and fertility care at M’Brace in LB Nagar and King Koti, Hyderabad.",
  openGraph: { title: "M’Brace by Kamineni Hospitals", description: "From planning to newborn care & paediatrics. Everything covered under one roof.", type: "website", images: [{ url: "/og.png", width: 1730, height: 909, alt: "M’Brace — Women’s Care, Child Care, Fertility" }] },
  twitter: { card: "summary_large_image", title: "M’Brace by Kamineni Hospitals", description: "Women’s care, child care and fertility in Hyderabad.", images: ["/og.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full bg-white">
        <MotionProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
          <main id="main-content">{children}</main>
        </MotionProvider>
      </body>
    </html>
  );
}
