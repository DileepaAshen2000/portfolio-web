"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import logo1 from "@/logos/LankaEvPluslogo.png";
import logo2 from "@/logos/cll_logo.jpg";
import logo3 from "@/logos/glsl-logo.png";
import logo4 from "@/logos/mensa_logo.svg";

const baseLogos = [
  { src: logo1, alt: "Lanka EV Plus" },
  { src: logo2, alt: "CLL" },
  { src: logo3, alt: "GLSL" },
  { src: logo4, alt: "Mensa" },
];

// Duplicate base logos to make a longer block so it covers wide screens
const logoBlock = [...baseLogos, ...baseLogos, ...baseLogos, ...baseLogos];

export default function BrandsSection() {
  return (
    <section className="py-20 md:py-28 overflow-hidden relative">
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 mx-auto mb-16 text-center">
        <h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Collaborating with <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-indigo to-accent-cyan">industry leaders</span>
        </h2>
        <p 
          className="text-sm md:text-base text-text-muted max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-body)" }}
        >
          We&apos;re proud to work with forward-thinking companies that share our passion for innovation
        </p>
      </div>

      <div className="relative flex overflow-hidden group w-full">
        {/* Gradients for smooth fade on edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-48 bg-gradient-to-r from-space-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-48 bg-gradient-to-l from-space-900 to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {/* We render exactly 2 identical blocks. Moving to -50% shifts exactly one block left. */}
          {[...Array(2)].map((_, blockIndex) => (
            <div key={blockIndex} className="flex gap-4 md:gap-6 pr-4 md:pr-6">
              {logoBlock.map((logo, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-40 h-20 md:w-48 md:h-24 bg-white/[0.02] border border-white/[0.05] rounded-2xl flex items-center justify-center p-4 hover:bg-white/[0.05] transition-all duration-300 group/card"
                >
                  <div className="relative w-full h-full opacity-50 group-hover/card:opacity-100 transition-opacity filter grayscale group-hover/card:grayscale-0">
                    <Image 
                      src={logo.src} 
                      alt={logo.alt} 
                      fill 
                      className="object-contain" 
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
