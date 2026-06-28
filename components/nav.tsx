"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "HOME", href: "/home" },
  { label: "IMPACT", href: "/impact" },
  { label: "STORIES", href: "/newsletter" },
  { label: "ABOUT", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full bg-[#f5f4f0] border-b border-[#e8e6e0] px-6 h-16 flex items-center">
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif italic text-[1.4rem] text-[#1a1a1a] tracking-tight"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          One4M
        </Link>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-xs font-medium tracking-widest transition-all duration-200
        ${
          pathname === item.href
            ? "text-[#2d4a2d] border-b-2 border-[#c8942a] pb-1"
            : "text-[#1a1a1a] hover:opacity-60"
        }
      `}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <Link
            href="/"
            className="text-sm text-[#1a1a1a] underline underline-offset-4 hover:opacity-60 transition-opacity"
          >
            Sign In
          </Link>
          <Link
            href="/donate"
            className="text-sm font-medium bg-[#2d4a2d] cursor-pointer text-white px-5 py-2 rounded-full hover:bg-[#3a5e3a] transition-colors"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
