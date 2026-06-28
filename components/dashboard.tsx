"use client";

import Link from "next/link";

const features = [
  "Real-time donation history",
  "Automated receipts",
  "Recurring gift management",
  "Weekly impact updates",
];

const transactions = [
  { label: "Clean Water Project", amount: "-₵10.00" },
  { label: "Education Fund", amount: "-₵5.00" },
  { label: "Mobile Clinic Support", amount: "-₵25.00" },
];

export default function DashboardPromo() {
  return (
    <section className="bg-[#1e3a2f] px-6 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* Left: copy */}
        <div className="flex-1">
          <h2
            className="text-4xl md:text-5xl font-normal text-white leading-tight mb-5"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Your dashboard,
            <br />
            built for transparency.
          </h2>
          <p className="text-[#a8c0b0] text-sm leading-relaxed mb-8 max-w-sm">
            Track every cent you give. See which projects your funds support and
            receive weekly updates on their progress.
          </p>

          <ul className="flex flex-col gap-3 mb-10">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-white">
                <span className="w-2 h-2 rounded-full bg-[#c8942a] shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          {/* <Link
            href="/authentication/register"
            className="inline-block bg-[#c8942a] hover:bg-[#b07d20] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Create a free account
          </Link> */}
        </div>

        {/* Right: mock dashboard card */}
        <div className="flex-1 w-full max-w-md">
          <div className="bg-[#162e24] rounded-2xl p-7 flex flex-col gap-5">
            {/* Header row */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] tracking-widest text-[#a8c0b0] mb-1">
                  TOTAL IMPACT
                </p>
                <p
                  className="text-4xl font-normal text-[#c8942a]"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  ₵4,290.00
                </p>
              </div>
              <span className="text-[10px] tracking-widest text-[#a8c0b0] border border-[#a8c0b0]/30 rounded-full px-3 py-1">
                ACTIVE DONOR
              </span>
            </div>

            {/* Divider */}
            <hr className="border-[#ffffff10]" />

            {/* Transactions */}
            <div className="flex flex-col gap-4">
              {transactions.map((t) => (
                <div key={t.label} className="flex items-center justify-between">
                  <span className="text-sm text-[#d4e8dc]">{t.label}</span>
                  <span className="text-sm text-[#a8c0b0]">{t.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
