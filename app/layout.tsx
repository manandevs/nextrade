/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CandleBackground } from "@/components/CandleBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXTRADE – Trading Education & Community",
  description: "A premium subscription trading-education and community platform for retail traders.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-[#0A0F0D]`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0F0D] text-white relative">
        {/* Fixed Animated Candlestick Background */}
        <CandleBackground />
        
        {/* Page Content Wrapper with z-index 1 */}
        <div className="relative z-10 flex flex-col flex-1">
          {children}
        </div>
      </body>
    </html>
  );
};
