import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CandleBackground } from "@/components/CandleBackground";

const telegraf = localFont({
  src: "../public/fonts/telegraf-regular.otf",
  variable: "--font-telegraf",
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
      className={`${telegraf.variable} ${telegraf.className} antialiased`}
    >
      <body className="bg-[#0A0F0D] text-white">
        {children}
      </body>
    </html>
  );
}
