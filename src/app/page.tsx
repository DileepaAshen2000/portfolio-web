"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ResearchSection from "@/components/sections/ResearchSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

const Starfield = dynamic(() => import("@/components/Starfield"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background layers */}
      <Starfield />

      {/* Fixed nebula ambient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full opacity-8"
          style={{
            background:
              "radial-gradient(circle, rgba(0,217,255,0.04) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(108,99,255,0.03) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.03) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <HeroSection />

      <AboutSection />

      <SkillsSection />

      <div className="section-divider" />
      <ProjectsSection />

      <ResearchSection />

      <LeadershipSection />

      <ContactSection />

      <Footer />
    </main>
  );
}
