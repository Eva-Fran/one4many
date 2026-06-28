"use client";

import Link from "next/link";

const platform = ["Donate", "Impact", "Stories"];
const company = ["About", "Contact", "Privacy", "Terms"];

export default function Footer() {
  return (
    <footer className="bg-[#f5f4f0] border-t border-[#e8e6e0] px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <p
              className="font-serif italic text-2xl text-[#1a1a1a] mb-3"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              One4M
            </p>
            <p className="text-sm text-[#6b6b6b] leading-relaxed">
              A global movement for mission-driven impact, one unit at a time.
              Give from anywhere in the world, starting at $1.
            </p>
          </div>

          {/* Platform */}
          <div>
            <p className="text-[10px] font-semibold tracking-widest text-[#1a1a1a] mb-4">
              PLATFORM
            </p>
            <ul className="flex flex-col gap-3">
              {platform.map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] font-semibold tracking-widest text-[#1a1a1a] mb-4">
              COMPANY
            </p>
            <ul className="flex flex-col gap-3">
              {company.map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-[#e8e6e0] pt-6 gap-3">
          <p className="text-xs text-[#9e9e9e]">
            © 2026 One4M. A simple act of kindness knows no borders.
          </p>
          <p className="text-xs text-[#9e9e9e]">
            Secure 256-bit encryption • GDPR-compliant
          </p>
        </div>
      </div>
    </footer>
  );
}
