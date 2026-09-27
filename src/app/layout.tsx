import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Custom Patch America | Your Idea. Our Stitch.",
  description: "High-quality custom patches for businesses, teams, events, and brands across the USA.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="bg-white font-sans text-[14px] text-navy max-[650px]:text-[13px]">{children}</body>
    </html>
  );
}
