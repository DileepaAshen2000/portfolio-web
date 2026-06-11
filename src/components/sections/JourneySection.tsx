"use client";

import dynamic from "next/dynamic";

const JourneyTesseract = dynamic(
  () => import("./journey/JourneyTesseract"),
  {
    ssr: false,
    loading: () => (
      <section
        id="journey"
        className="relative z-10 min-h-screen flex items-center justify-center"
      >
        <div className="flex flex-col items-center gap-4">
          <div
            className="w-16 h-16 rounded-2xl border border-accent-cyan/20 flex items-center justify-center"
            style={{
              animation: "pulse-glow 2s ease-in-out infinite",
              background: "rgba(0, 217, 255, 0.05)",
            }}
          >
            <i className="fa-solid fa-cube text-accent-cyan/50 text-2xl" />
          </div>
          <span
            className="text-xs text-white/25 tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Loading Temporal Corridor...
          </span>
        </div>
      </section>
    ),
  }
);

export default function JourneySection() {
  return <JourneyTesseract />;
}
