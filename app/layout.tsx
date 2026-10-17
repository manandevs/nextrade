import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CandleBackground } from "@/components/CandleBackground";

const lokanova = localFont({
  src: "../public/fonts/ppneuemontreal-book.otf",
  variable: "--font-neue",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEXTRADE – Trading Education & Community",
  description:
    "A premium subscription trading-education and community platform for retail traders.",
  icons: ["/brand/icon.svg"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${lokanova.variable} ${lokanova.className} h-full antialiased bg-[#0A0F0D]`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0F0D] text-white relative">
        {/* Fixed Animated Candlestick Background */}
        <CandleBackground />

        {/* Page Content Wrapper with z-index 1 */}
        <div className="relative z-10 flex flex-col flex-1">{children}</div>
      </body>
    </html>
  );
}
