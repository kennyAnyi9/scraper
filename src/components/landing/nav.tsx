import { Menu, Webhook } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <header className="max-w-screen h-20 border-b flex justify-between items-center px-5 lg:px-20">
      <span className="inline-flex justify-center items-center gap-2">
        <Webhook className="text-[#9900FF]" />
        <h1 className="font-bold text-xl">Scapely</h1>
      </span>
      <Link href="/multiscraper">
        <Button
          variant="default"
          className="w-fit rounded-full py-1 inline-flex gap-2"
        >
          dashboard
        </Button>
      </Link>
    </header>
  );
}
