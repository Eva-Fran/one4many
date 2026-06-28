"use client";
import Link from "next/link";

interface Story {
  id: number;
  category: string;
  location: string;
  title: string;
  description: string;
  initial: string;
  gradientFrom: string;
  gradientTo: string;
}

const stories: Story[] = [
  {
    id: 1,
    category: "EDUCATION",
    location: "ACCRA, GHANA",
    title: "Equipping the New Library at St. Peter's",
    description:
      "Your $1 contributions provided 450 new textbooks and 12 desks this month.",
    initial: "E",
    gradientFrom: "#f0ebe0",
    gradientTo: "#faf7f2",
  },
  {
    id: 2,
    category: "SUSTAINABILITY",
    location: "NAIROBI, KENYA",
    title: "Powering Health: The Solar Initiative",
    description:
      "Transitioning the community clinic to 100% renewable energy for vaccine storage.",
    initial: "S",
    gradientFrom: "#eef0e8",
    gradientTo: "#faf7f2",
  },
  {
    id: 3,
    category: "NUTRITION",
    location: "LAGOS, NIGERIA",
    title: "Vertical Farming for Urban Families",
    description:
      "How $1 seeds are turning rooftops into sustainable community food sources.",
    initial: "N",
    gradientFrom: "#f5ede0",
    gradientTo: "#faf7f2",
  },
];

export default function ImpactStories() {
  return (
    <section className="bg-[#f5f4f0] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header row */}
        <div className="flex items-center justify-between mb-10">
          <h2
            className="text-3xl font-normal text-[#1a1a1a]"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Impact Stories
          </h2>
          <Link
            href="/newsletter"
            className="text-sm text-[#1a1a1a] underline underline-offset-4 hover:opacity-60 transition-opacity"
          >
            View Archive
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col gap-4">
              {/* Image placeholder card */}
              <div
                className="w-full aspect-3/4 rounded-2xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(160deg, ${story.gradientFrom}, ${story.gradientTo})`,
                }}
              >
                <span
                  className="text-[6rem] font-normal text-[#c8b89a]/40 select-none"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  {story.initial}
                </span>
              </div>

              {/* Meta */}
              <div>
                <p className="text-[10px] font-semibold tracking-widest text-[#c8942a] mb-2">
                  {story.category}
                  <span className="text-[#9e9e9e] mx-1">•</span>
                  {story.location}
                </p>
                <h3
                  className="text-lg font-normal text-[#1a1a1a] mb-1 leading-snug"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  {story.title}
                </h3>
                <p className="text-sm text-[#6b6b6b] leading-relaxed">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
