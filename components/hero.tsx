"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


const CURRENCIES = [
  { symbol: "$", label: "$" },
  { symbol: "€", label: "€" },
  { symbol: "£", label: "£" },
  { symbol: "₵", label: "₵" },
];

const PRESET_AMOUNTS = [1, 5, 10, 25];
const FREQUENCIES = ["ONE-TIME", "WEEKLY", "MONTHLY"];

export default function Hero() {
  const router = useRouter();
    const [username, setUsername] = useState("");
  const [activeCurrency, setActiveCurrency] = useState(0);
  const [activeAmount, setActiveAmount] = useState(10);
  const [customAmount, setCustomAmount] = useState("10");
  const [activeFrequency, setActiveFrequency] = useState("ONE-TIME");

  const handlePreset = (amount: number) => {
    setActiveAmount(amount);
    setCustomAmount(String(amount));
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setActiveAmount(0); 
  };

    useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) {
      setUsername(storedName);
    }
  }, []);

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <section className="min-h-screen bg-[#f5f4f0] flex flex-col items-center justify-center px-4 py-20">
      {/* Headline */}
      <div className="text-center mb-10">
         {/* <div>
      <h1>Welcome, {username}!</h1>
    </div> */}
        <h1
          className="text-[clamp(3rem,8vw,5.5rem)] leading-[1.05] font-normal text-[#1e3a2f] mb-2"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Change lives with
        </h1>
        <h1
          className="text-[clamp(3rem,8vw,5.5rem)] leading-[1.05] italic font-normal text-[#c8942a]"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          just one unit.
        </h1>
        <p className="mt-6 text-[#4a4a4a] text-base max-w-md mx-auto leading-relaxed">
          A global platform making mission support accessible to everyone.
          <br />
          Give $1, €1, £1, or ₵1 and fuel sustainable progress worldwide.
        </p>
      </div>

      {/* Donation card */}
      <div className="!bg-white !rounded-2xl shadow-md w-full max-w-lg p-8 flex flex-col gap-6">
        {/* Currency selector */}
        <div className="flex items-center justify-center gap-3">
          {CURRENCIES.map((c, i) => (
            <button
              key={c.symbol}
              onClick={() => setActiveCurrency(i)}
              className={`w-11 h-11 rounded-full text-base font-semibold border transition-all ${
                activeCurrency === i
                  ? "bg-[#2d4a2d] text-white border-[#2d4a2d]"
                  : "bg-white text-[#1a1a1a] border-[#d0cfc9] hover:border-[#2d4a2d]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Preset amounts */}
        <div className="grid grid-cols-4 gap-3">
          {PRESET_AMOUNTS.map((amount) => (
            <button
              key={amount}
              onClick={() => handlePreset(amount)}
              className={`py-3 rounded-xl text-sm cursor-pointer font-medium border transition-all ${
                activeAmount === amount
                  ? "border-[#c8942a] text-[#c8942a] bg-white"
                  : "border-[#d0cfc9] text-[#1a1a1a] bg-white hover:border-[#2d4a2d]"
              }`}
            >
              {CURRENCIES[activeCurrency].symbol}{amount}
            </button>
          ))}
        </div>

        {/* Custom amount input */}
        <div className="flex items-center gap-2 bg-[#f5f4f0] rounded-xl px-4 py-3">
          <span className="text-[#4a4a4a] font-medium text-base">
            {CURRENCIES[activeCurrency].symbol}
          </span>
          <input
            type="number"
            value={customAmount}
            onChange={handleCustomChange}
            className="flex-1 bg-transparent text-[#1a1a1a] text-base outline-none"
            min={1}
          />
        </div>

        <div className="flex rounded-xl border border-[#d0cfc9] overflow-hidden">
          {FREQUENCIES.map((freq) => (
            <button
              key={freq}
              onClick={() => setActiveFrequency(freq)}
              className={`flex-1 py-3 text-xs font-semibold tracking-wider transition-all ${
                activeFrequency === freq
                  ? "bg-white text-[#1a1a1a] shadow-sm"
                  : "bg-transparent text-[#9e9e9e] hover:text-[#1a1a1a]"
              }`}
            >
              {freq}
            </button>
          ))}
        </div>

        <button
          onClick={handleCheckout}
          className="w-full bg-[#2d4a2d] cursor-pointer hover:bg-[#3a5e3a] text-white font-semibold text-base py-4 rounded-xl transition-colors"
        >
          Continue to checkout
        </button>

        <p className="text-center text-[10px]  text-[#9e9e9e] font-medium">
          VISA · MASTERCARD · MOBILE MONEY · BANK TRANSFER
        </p>
      </div>
    </section>
  );
}
