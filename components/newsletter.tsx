"use client";

import { useState } from "react";
import Link from "next/link";

const archives = [
  {
    date: "17/06/2026",
    title: "Equipping the New Library at St. Peter's",
    description: "Your $1 contributions provided 450 new textbooks and 12 desks this month.",
    href: "/stories/library-st-peters",
  },
  {
    date: "17/06/2026",
    title: "Powering Health: The Solar Initiative",
    description: "Transitioning the community clinic to 100% renewable energy for vaccine storage.",
    href: "/stories/solar-initiative",
  },
  {
    date: "17/06/2026",
    title: "Vertical Farming for Urban Families",
    description: "How $1 seeds are turning rooftops into sustainable community food sources.",
    href: "/stories/vertical-farming",
  },
];

export default function NewsletterArchive() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="bg-[#f5f4f0] px-6 py-20">
      <div className="max-w-3xl mx-auto">

        {/* Newsletter */}
        <div className="mb-16">
          <h1
            className="text-4xl font-normal text-[#1a1a1a] mb-3"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Newsletter
          </h1>
          <p className="text-sm text-[#6b6b6b] mb-8">
            Monthly stories of impact, transparency reports, and the people behind the missions.
          </p>

          {subscribed ? (
            <p className="text-sm text-[#2d4a2d] font-medium">
              ✓ You're subscribed! Check your inbox soon.
            </p>
          ) : (
            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="yourmail@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                className="flex-1 bg-white border border-[#e0deda] rounded-xl px-4 py-3 text-sm text-[#1a1a1a] placeholder:text-[#b0ada8] outline-none focus:ring-2 focus:ring-[#2d4a2d]/20 transition"
              />
              <button
                type="button"
                onClick={handleSubscribe}
                className="bg-[#2d4a2d] hover:bg-[#3a5e3a] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          )}
        </div>

        {/* Archive */}
        <div>
          <h2
            className="text-3xl font-normal text-[#1a1a1a] mb-8"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Archive
          </h2>

          <div className="flex flex-col">
            {archives.map((item, i) => (
              <div key={i}>
                <Link href={item.href} className="group block py-6">
                  <p className="text-xs text-[#9e9e9e] mb-2 tracking-wide">
                    {item.date}
                  </p>
                  <h3
                    className="text-lg font-normal text-[#1a1a1a] group-hover:text-[#2d4a2d] transition-colors mb-1"
                    style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6b6b6b]">{item.description}</p>
                </Link>
                {i < archives.length - 1 && (
                  <hr className="border-[#e0deda]" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
