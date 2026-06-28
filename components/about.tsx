// components/AboutSection.tsx

import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-[#F7F5F2] py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}
        <h1 className="mb-10 text-center font-serif text-5xl md:text-6xl leading-tight">
          <span className="text-[#1E3A2E]">One unit.</span>{" "}
          <span className="italic text-[#D6B75F]">
            Multiplied by many.
          </span>
        </h1>

        {/* Intro Text */}
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-8 text-gray-600">
          <p>
            One4M was born from a simple conviction: the smallest gift,
            multiplied across thousands of generous hearts, can move mountains.
            We exist to remove every barrier between you and the mission work
            you want to support.
          </p>

          <p>
            Whether you are in Accra, Atlanta, Auckland or anywhere else, you
            can give $1, €1, £1 or ¢1 — and watch it become part of something
            larger than yourself.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-5xl text-[#D6B75F]">98%</h3>
            <p className="mt-3 text-gray-600">
              of every donation reaches the field
            </p>
          </div>

          <div>
            <h3 className="font-serif text-5xl text-[#D6B75F]">4</h3>
            <p className="mt-3 text-gray-600">
              currencies supported worldwide
            </p>
          </div>

          <div>
            <h3 className="font-serif text-5xl text-[#D6B75F]">100%</h3>
            <p className="mt-3 text-gray-600">
              transparent, audited reporting
            </p>
          </div>
        </div>

        {/* Promise */}
        <div className="mt-24 max-w-3xl">
          <h2 className="font-serif text-4xl text-[#1E3A2E]">
            Our promise
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every donation is recorded, every project is tracked, and every
            quarter we publish a transparency report. We believe that radical
            generosity deserves radical honesty.
          </p>

           <Link href="/donate" className="underline">
       <button className="mt-10 rounded-full bg-[#1E3A2E] px-8 py-4 font-medium text-white transition cursor-pointer hover:bg-[#284937]">
            Make your first gift
          </button>
      </Link>

          
        </div>
      </div>
    </section>
  );
}