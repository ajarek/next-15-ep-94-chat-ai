"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { ModeToggle } from "./mode-toggle";
import MobileNav from "./MobileNav";

export default function Header() {
  const pathname = usePathname()
  const links = [
    { to: "/", label: "Home" },
    { to:"/contact", label: "Contact" },
    { to:"/ui/generateText", label: "Generate Text" },
    { to:"/ui/streamText", label: "Stream Text" },
    { to:"/ui/multiModalChat", label: "Multi Modal Chat" },
    { to:"/ui/structuredData", label: "Structured Data" },
  ];

  return (
    <div>
      <div className="flex flex-row items-center justify-between px-2 py-1">
        <nav className="flex gap-4 text-lg  max-sm:hidden">
          {links.map(({ to, label }) => {
            return (
              <Link key={to} href={to} className={`hover:underline ${pathname === to ? 'text-blue-500 font-bold' : 'text-foreground'}`}>
                {label}
              </Link>
            );
          })}
        </nav>
          <div className=' sm:hidden'>
          <MobileNav />
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
      <hr />
    </div>
  );
}
