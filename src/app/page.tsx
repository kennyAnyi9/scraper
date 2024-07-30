"use client";

import React from "react";
import {
  AlignCenterHorizontalIcon,
  BoltIcon,
  PlayIcon,
  RocketIcon,
  ShieldCheckIcon,
} from "@/components/landing/icons";
import { Button } from "@/components/ui/button";
import { ExternalLink, HeroSvg } from "@/lib/exports";
import Link from "next/link";

interface ScraperInfo {
  name: string;
  displayName: string;
  icon: React.ElementType;
}

const scrapers: ScraperInfo[] = [
  { name: "oraimo", displayName: "Oraimo Scraper", icon: BoltIcon },
  { name: "scraper2", displayName: "Scraper 2", icon: RocketIcon },
  { name: "scraper3", displayName: "Scraper 3", icon: ShieldCheckIcon },
];

export default function Home() {
  const startScraping = async () => {
    try {
      const response = await fetch(
        `https://scrapely.onrender.com/start-scraping`
      );
      const data = await response.json();

      if (data.message.includes("completed successfully")) {
        alert(
          `Scraping process for completed successfully. Click OK to download the CSV file.`
        );
        window.location.href = `https://scrapely.onrender.com/download-csv/`;
      } else {
        alert(`An error occurred during the  scraping process: ${data.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`An error occurred while trying to start the  scraping process.`);
    }
  };

  const downloadCsv = () => {
    window.location.href = `https://scrapely.onrender.com/download-csv`;
  };

  return (
    <main className="min-h-screen max-w-screen flex-col justify-center items-center relative overflow-x-hidden px-5 py-10 lg:p-20">
      <div className="lg:w-1/2 flex flex-col gap-5">
        <Link href={""} className="border rounded-xl w-fit">
          <span className="text-sm px-2 inline-flex opacity-50 justify-center items-center">
            View on Github <ExternalLink />
          </span>
        </Link>
        <h1 className="font-extrabold text-4xl lg:text-5xl tracking-wider">
          Web Scraping Dashboard
        </h1>
        <p className="text-lg opacity-50 font-normal">
          Start scraping data from various sources with just a click. Choose
          from available scrapers and download the results instantly.
        </p>
        <div className="flex flex-col gap-4">
          {scrapers.map((scraper) => (
            <div key={scraper.name} className="flex gap-2">
              <Button
                variant="default"
                className="w-fit rounded-full py-1 inline-flex gap-2"
                onClick={() => startScraping()}
              >
                {scraper.displayName} <scraper.icon />
              </Button>
              <Button
                variant="outline"
                className="w-fit rounded-full py-1"
                onClick={() => downloadCsv()}
              >
                Download CSV
              </Button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
