import { Menu, Webhook } from "lucide-react";

export default function Navbar() {
  return (
    <header className="max-w-screen h-20 border-b flex justify-between items-center px-5 lg:px-20">
      <span className="inline-flex justify-center items-center gap-2">
        <Webhook className="text-[#9900FF]" />
        <h1 className="font-bold text-xl">Scapely</h1>
      </span>
      <Menu />
    </header>
  );
}
