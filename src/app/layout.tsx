import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { HeroSvg, Navbar } from "@/lib/exports";

export const metadata: Metadata = {
  title: "Scrapely",
  description: "High level web scraper",
};
export const gothic = localFont({
  src: "../../public/YDGothic 130 Pro.ttf",
  variable: "--font-gothic",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gothic.className} max-w-screen`}>
        <Navbar />
        <HeroSvg />
        {children}
      </body>
    </html>
  );
}
