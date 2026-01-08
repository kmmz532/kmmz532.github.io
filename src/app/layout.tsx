import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Header from "@/components/Header";
import Options from "@/components/Options";

import { motion } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kmmz1127",
  description: "上中野 瑞人のポートフォリオ/プロフィール",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {/* <div className="contents"> */}
          {children}
        {/* </div> */}
        <Options />
        <div className="footer">
          &copy; 2025-2026 上中野 瑞人 - All Rights Reserved. | mizuto1127no01@gmail.com - Osaka, Japan
        </div>
      </body>
    </html>
  );
}
