"use client";

import { useState } from "react";

const amounts = [1, 5, 10, 25];
const CURRENCIES = [
  { symbol: "$", label: "$" },
  { symbol: "€", label: "€" },
  { symbol: "£", label: "£" },
  { symbol: "₵", label: "₵" },
];

const frequencies = ["One-time", "Weekly", "Monthly"];
const paymentMethods = [
  "Visa / Mastercard",
  "Mobile Money (MoMo)",
  "Bank Transfer",
  "Other",
];

export default function DonationForm() {
  const [amount, setAmount] = useState(10);
  const [frequency, setFrequency] = useState("One-time");
  const [activeCurrency, setActiveCurrency] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("Other");

  return (
    <section className="bg-[#F8F7F3] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          {/* LEFT SIDE */}
          <div>
            <div className="text-left mb-4">
              <h1
                className="text-[clamp(2rem,3vw,3rem)]  font-normal italic text-[#1e3a2f] mb-2"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                Make a donation.
              </h1>
              <h2
                className="text-lg  font-light text-[#1e3a2f]"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                Choose your gift. Every unit goes to the field.
              </h2>
            </div>

            <h3 className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#21422D]">
              Currency
            </h3>
            <div className="grid grid-cols-4 gap-3">
              {CURRENCIES.map((c, i) => (
                <button
                  key={c.symbol}
                  onClick={() => setActiveCurrency(i)}
                  className={`rounded-xl border cursor-pointer py-3 font-medium transition${
                    activeCurrency === i
                      ? "border-[#21422D] bg-[#21422D] text-white"
                      : "border-gray-200 bg-white text-[#21422D]"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <h3 className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#21422D]">
              Amount
            </h3>

            <div className="grid grid-cols-4 gap-3">
              {amounts.map((item) => (
                <button
                  key={item}
                  onClick={() => setAmount(item)}
                  className={`rounded-xl border py-3 font-medium transition
                  ${
                    amount === item
                      ? "border-[#D8B44C] bg-white text-[#21422D]"
                      : "border-gray-200 bg-white text-gray-700 hover:border-[#D8B44C]"
                  }`}
                >
                  ${item}
                </button>
              ))}
            </div>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="mt-4 w-full rounded-2xl border border-transparent text-gray-700 bg-[#F3F1EC] px-5 py-4 text-lg outline-none focus:border-[#D8B44C]"
            />

            <h3 className="mt-10 mb-4 text-xs font-semibold uppercase tracking-wider text-[#21422D]">
              Frequency
            </h3>

            <div className="grid grid-cols-3 gap-3">
              {frequencies.map((item) => (
                <button
                  key={item}
                  onClick={() => setFrequency(item)}
                  className={`rounded-xl border py-3 font-medium transition
                  ${
                    frequency === item
                      ? "border-[#21422D] bg-[#21422D] text-white"
                      : "border-gray-200 bg-white text-[#21422D]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Payment Method */}
            <h3 className="mt-10 mb-4 text-xs font-semibold uppercase tracking-wider text-[#21422D]">
              Payment Method
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {paymentMethods.map((item) => (
                <button
                  key={item}
                  onClick={() => setPaymentMethod(item)}
                  className={`rounded-xl border py-3 font-medium transition
                  ${
                    paymentMethod === item
                      ? "border-[#21422D] bg-[#21422D] text-white"
                      : "border-gray-200 bg-white text-[#21422D]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* User Details */}
            <h3 className="mt-10 mb-4 text-xs font-semibold uppercase tracking-wider text-[#21422D]">
              Your Details
            </h3>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-2xl bg-[#F3F1EC] text-black px-5 py-4 outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-2xl bg-[#F3F1EC] text-black px-5 py-4 outline-none"
              />

              <textarea
                placeholder="Add a note (optional)"
                rows={4}
                className="w-full rounded-2xl bg-[#F3F1EC] text-black px-5 py-4 outline-none resize-none"
              />
            </div>

            {/* Donate Button */}
            <button className="mt-10 w-full rounded-2xl bg-[#21422D] py-5 text-lg font-semibold text-white transition hover:bg-[#2D573C]">
              Donate ${amount.toFixed(2)} now
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="h-fit rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="font-serif text-3xl text-[#21422D]">
              Where your gift goes
            </h2>

            <div className="mt-8 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Mission field</span>
                <span className="font-semibold text-[#21422D]">98%</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Operations</span>
                <span className="font-semibold text-[#21422D]">2%</span>
              </div>
            </div>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-gray-200">
              <div className="h-full w-[98%] bg-[#D8B44C]" />
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Secure, encrypted processing. Receipts emailed automatically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
