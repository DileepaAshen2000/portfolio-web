"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import HUDOverlay from "./HUDOverlay";

/* ── Lazy-load the 3D scene (no SSR) ── */
const TesseractScene = dynamic(() => import("./TesseractScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-12 h-12 rounded-xl border border-accent-cyan/20 flex items-center justify-center"
          style={{
            animation: "pulse-glow 2s ease-in-out infinite",
            background: "rgba(0, 217, 255, 0.05)",
          }}
        >
          <i className="fa-solid fa-cube text-accent-cyan/60 text-lg" />
        </div>
        <span
          className="text-xs text-white/30 tracking-widest uppercase"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Initializing Tesseract...
        </span>
      </div>
    </div>
  ),
});

/* ── Section Header ── */
function SectionHeader() {
  return (
    <motion.div
      className="relative z-30 flex flex-col items-center text-center px-6 pt-16 pb-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Label */}
      <span className="section-label mb-6">
        <span className="accent-dot" />
        Journey
      </span>

      {/* Main Heading */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 max-w-4xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        <span className="text-text-primary">Get Ready to </span>
        <span className="gradient-text">Time Travel</span>
        <br />
        <span className="text-text-primary">Through My Journey</span>
      </h2>

      {/* Subheading */}
      <p
        className="text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed text-text-muted"
        style={{ fontFamily: "var(--font-body)" }}
      >
        In this universe, time behaves as a{" "}
        <span className="text-accent-cyan/80 font-medium">
          physical dimension
        </span>
        . Scroll through the temporal corridor and explore the milestones that
        shaped my journey — each one a coordinate in spacetime.
      </p>

      {/* Decorative line */}
      <div className="mt-8 w-16 md:w-24 h-[1px] glow-line" />
    </motion.div>
  );
}

/* ── Main Component ── */
export default function JourneyTesseract() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Mobile detection
  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Wheel and Touch interception for isolated timeline progression
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const delta = e.deltaY * 0.001; // Sensitivity
      const next = progressRef.current + delta;
      
      // If we are strictly within the timeline bounds (0 to 1), prevent page scroll
      // This creates a UX where the page pauses scrolling while the user time travels
      if (next > 0 && next < 1) {
        e.preventDefault();
      }
      
      progressRef.current = Math.max(0, Math.min(1, next));
      setScrollProgress(progressRef.current);
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const delta = (touchStartY - touchY) * 0.002;
      const next = progressRef.current + delta;
      
      if (next > 0 && next < 1) {
        e.preventDefault(); // Stop page scroll while time traveling on mobile
      }
      
      touchStartY = touchY;
      progressRef.current = Math.max(0, Math.min(1, next));
      setScrollProgress(progressRef.current);
    };

    // Passive: false is required to be able to call e.preventDefault()
    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: false });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <section id="journey" className="relative z-10 py-12 md:py-20">
      {/* Header */}
      <SectionHeader />

      {/* 3D Tesseract Experience Box */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-6 md:mt-10">
        <div 
          ref={containerRef}
          className="relative w-full rounded-2xl overflow-hidden group shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          style={{
            height: isMobile ? "70vh" : "80vh",
            background: "radial-gradient(ellipse at center, rgba(0,20,40,0.4) 0%, #020617 80%)",
            border: "1px solid rgba(0, 217, 255, 0.15)",
            boxShadow: "0 0 30px rgba(0, 217, 255, 0.05), inset 0 0 40px rgba(108, 99, 255, 0.05)",
          }}
        >
          {/* Instruction overlay - fades out on hover */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-40 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-3 bg-space-900/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-lg">
            <i className="fa-solid fa-arrows-up-down text-accent-cyan text-sm animate-bounce" />
            <span className="text-xs font-mono text-white/90 uppercase tracking-widest">
              Scroll inside to Time Travel
            </span>
          </div>

          {/* 3D Canvas */}
          <div className="absolute inset-0">
            {mounted && (
              <TesseractScene
                scrollProgress={scrollProgress}
                isMobile={isMobile}
              />
            )}
          </div>

          {/* HUD Overlay */}
          <HUDOverlay scrollProgress={scrollProgress} isMobile={isMobile} />

          {/* Top vignette inside the border */}
          <div
            className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-30"
            style={{
              background: "linear-gradient(180deg, rgba(2,6,23,0.9) 0%, transparent 100%)",
            }}
          />
          {/* Bottom vignette inside the border */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-30"
            style={{
              background: "linear-gradient(0deg, rgba(2,6,23,0.95) 0%, transparent 100%)",
            }}
          />
          
          {/* Sci-Fi Decorative Corners */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent-cyan rounded-tl-2xl pointer-events-none z-30 opacity-70" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent-cyan rounded-tr-2xl pointer-events-none z-30 opacity-70" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-accent-indigo rounded-bl-2xl pointer-events-none z-30 opacity-70" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent-indigo rounded-br-2xl pointer-events-none z-30 opacity-70" />
        </div>
      </div>
    </section>
  );
}
