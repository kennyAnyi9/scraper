"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { ExternalLink } from "@/lib/exports";

interface Scraper {
  name: string;
  displayName: string;
  categories: string[];
}

const scrapers: Scraper[] = [
  {
    name: "oraimo",
    displayName: "Oraimo",
    categories: ["Powerbanks", "Earbuds", "Smartwatches"],
  },
  {
    name: "melcom",
    displayName: "Melcom",
    categories: ["Electronics", "Home & Living", "Fashion"],
  },
  {
    name: "jumia",
    displayName: "Jumia",
    categories: ["Phones & Tablets", "Computing", "Electronics"],
  },
];

export default function MultiScraper(): JSX.Element {
  const [selectedCategories, setSelectedCategories] = useState<
    Record<string, string>
  >({});
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    {}
  );
  const { toast } = useToast();

  const handleCategoryChange = (
    scraperName: string,
    category: string
  ): void => {
    setSelectedCategories((prev) => ({
      ...prev,
      [scraperName]: category,
    }));
  };

  const startScraping = async (scraperName: string): Promise<void> => {
    if (!selectedCategories[scraperName]) {
      toast({
        title: "Category Not Selected",
        description: `Please select a category for ${scraperName} before scraping.`,
        variant: "destructive",
      });
      return;
    }

    setLoadingStates((prev) => ({ ...prev, [scraperName]: true }));
    try {
      // Replace with your actual API endpoint
      const response = await fetch(
        `https://your-api-endpoint.com/start-scraping`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            scraper: scraperName,
            category: selectedCategories[scraperName],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      toast({
        title: "Scraping Started",
        description: `Scraping process for ${scraperName} (${selectedCategories[scraperName]}) has been initiated.`,
      });
    } catch (error) {
      console.error("Error during scraping:", error);
      toast({
        title: "Scraping Error",
        description: `An error occurred while initiating the scraping process for ${scraperName}.`,
        variant: "destructive",
      });
    } finally {
      setLoadingStates((prev) => ({ ...prev, [scraperName]: false }));
    }
  };

  return (
    <main className="min-h-screen max-w-screen flex-col justify-center items-center relative overflow-x-hidden px-5 py-10 lg:p-20">
      <div className="lg:w-2/3 flex flex-col gap-5">
        <Link href={""} className="border rounded-xl w-fit">
          <span className="text-sm px-2 inline-flex opacity-50 justify-center items-center">
            View on Github <ExternalLink />
          </span>
        </Link>
        <h1 className="font-extrabold text-4xl lg:text-5xl tracking-wider">
          Multi-Website Scraper
        </h1>
        <p className="text-lg opacity-50 font-normal">
          Select categories and start scraping data from various e-commerce
          websites.
        </p>
        <div className="flex flex-col gap-8">
          {scrapers.map((scraper) => (
            <div key={scraper.name} className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">{scraper.displayName}</h2>
              <div className="flex gap-4">
                <Select
                  onValueChange={(value: string) =>
                    handleCategoryChange(scraper.name, value)
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {scraper.categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  variant="default"
                  className="w-fit rounded-full py-1 inline-flex gap-2"
                  onClick={() => startScraping(scraper.name)}
                  disabled={
                    loadingStates[scraper.name] ||
                    !selectedCategories[scraper.name]
                  }
                >
                  {loadingStates[scraper.name] ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Scraping...
                    </>
                  ) : (
                    <>Start Scraping</>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
