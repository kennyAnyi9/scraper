"use client";
import React, { useState } from "react";
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
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Toast } from "@/components/ui/toast";

interface ScraperInfo {
  name: string;
  displayName: string;
  icon: React.ElementType;
}

const scrapers: ScraperInfo[] = [
  { name: "oraimo", displayName: "Oraimo Scraper", icon: BoltIcon },
];

export default function Home() {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    {}
  );
  const { toast } = useToast();
  const startScraping = async (scraperName: string) => {
    setLoadingStates((prev) => ({ ...prev, [scraperName]: true }));
    try {
      const response = await fetch(
        `https://scrapely.onrender.com/start-scraping`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const text = await response.text();
      console.log("Response text:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.log("Failed to parse JSON. Using text as is.");
        data = { message: text };
      }

      if (data.message && data.message.includes("completed successfully")) {
        toast({
          title: "Scraping Completed",
          description: `Scraping process for ${scraperName} completed successfully. You can now download the CSV file.`,
          duration: 5000,
        });
      } else {
        console.log("Unexpected response:", data);
        toast({
          title: "Scraping Status",
          description: `Scraping process for ${scraperName} finished, but with an unexpected response. You may still be able to download the CSV file.`,
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Error during scraping:", error);
      toast({
        title: "Scraping Status",
        description: `An error occurred during the ${scraperName} scraping process, but the CSV file might still be available. Try downloading it.`,
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setLoadingStates((prev) => ({ ...prev, [scraperName]: false }));
    }
  };

  const downloadCsv = () => {
    window.location.href = `https://scrapely.onrender.com/download-csv`;
  };

  return (
    <main className="min-h-screen max-w-screen flex-col justify-center items-center relative overflow-x-hidden px-5 py-10 lg:p-20">
      <div className="lg:w-1/2 flex flex-col gap-5 group">
        <Link
          href={"https://github.com/kennyAnyi9/scrapely"}
          className="border rounded-xl w-fit"
        >
          <span className="text-sm px-2 inline-flex opacity-50 justify-center items-center">
            View on Github <ExternalLink />
          </span>
        </Link>
        <h1 className="font-extrabold text-4xl lg:text-5xl tracking-wider">
          High level web scraper
        </h1>
        <p className="text-lg opacity-50 font-normal">
          Start scraping data from various sources with just a click. Choose
          from available scrapers and download the results instantly. Try an
          example scraper below.
        </p>
        <div className="flex flex-col gap-4">
          {scrapers.map((scraper) => (
            <div key={scraper.name} className="flex gap-2">
              <Button
                variant="default"
                className="w-fit rounded-full py-1 inline-flex gap-2"
                onClick={() => startScraping(scraper.name)}
                disabled={loadingStates[scraper.name]}
              >
                {loadingStates[scraper.name] ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading
                  </>
                ) : (
                  <>
                    {scraper.displayName} <scraper.icon />
                  </>
                )}
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
