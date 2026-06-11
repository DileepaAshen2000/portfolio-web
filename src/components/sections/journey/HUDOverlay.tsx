"use client";

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timelineMilestones, type TimelineMilestone } from "./timelineData";

/* ── Current active milestone based on scroll ── */
function getActiveMilestone(
  scrollProgress: number,
  milestones: TimelineMilestone[]
) {
  const index = Math.round(scrollProgress * (milestones.length - 1));
  return { milestone: milestones[index], index };
}

/* ── Status badge color ── */
function statusColor(status: string) {
  switch (status) {
    case "Active":
      return "#10B981";
    case "In Progress":
      return "#F59E0B";
    default:
      return "#64748B";
  }
}

/* ── Category label ── */
function categoryLabel(cat: string) {
  switch (cat) {
    case "education":
      return "EDUCATION";
    case "competition":
      return "COMPETITIONS";
    case "work":
      return "PROFESSIONAL";
    case "startup":
      return "ENTREPRENEURSHIP";
    case "research":
      return "RESEARCH";
    default:
      return cat.toUpperCase();
  }
}

/* ── HUD Overlay ── */
export default function HUDOverlay({
  scrollProgress,
  isMobile,
}: {
  scrollProgress: number;
  isMobile: boolean;
}) {
  const { milestone, index } = useMemo(
    () => getActiveMilestone(scrollProgress, timelineMilestones),
    [scrollProgress]
  );

  const total = timelineMilestones.length;
  const progressPercent = Math.round(scrollProgress * 100);

  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {/* ── Top-left: Temporal Coordinates ── */}
      <div
        className="absolute top-4 left-4 md:top-8 md:left-8"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <motion.div
          className="flex flex-col gap-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="text-[10px] md:text-xs text-accent-cyan/50 tracking-widest uppercase">
            Temporal Position
          </span>
          <span className="text-lg md:text-2xl font-bold text-accent-cyan tabular-nums">
            {milestone.year}
          </span>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-20 md:w-32 h-[2px] bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: milestone.color }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <span className="text-[10px] text-white/30 tabular-nums">
              {progressPercent}%
            </span>
          </div>
        </motion.div>
      </div>

      {/* ── Top-right: Timeline index ── */}
      <div
        className="absolute top-4 right-4 md:top-8 md:right-8"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <motion.div
          className="flex flex-col items-end gap-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <span className="text-[10px] md:text-xs text-white/30 tracking-widest uppercase">
            Node
          </span>
          <span className="text-lg md:text-2xl font-bold text-white/60 tabular-nums">
            {String(index + 1).padStart(2, "0")}{" "}
            <span className="text-white/20">/</span>{" "}
            <span className="text-white/40">
              {String(total).padStart(2, "0")}
            </span>
          </span>
        </motion.div>
      </div>

      {/* ── Left-bottom: Active milestone card ── */}
      <div className="absolute bottom-6 md:bottom-10 left-4 md:left-8 w-[90%] max-w-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${milestone.year}-${milestone.title}`}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Card */}
            <div
              className="rounded-2xl p-4 md:p-6 backdrop-blur-xl pointer-events-auto"
              style={{
                background: "rgba(5, 8, 22, 0.75)",
                border: `1px solid ${milestone.color}20`,
                boxShadow: `0 0 40px ${milestone.color}08, inset 0 1px 0 rgba(255,255,255,0.04)`,
              }}
            >
              {/* Category + Status */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase px-2 py-0.5 rounded"
                  style={{
                    color: milestone.color,
                    background: `${milestone.color}10`,
                    border: `1px solid ${milestone.color}20`,
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {categoryLabel(milestone.category)}
                </span>
                <span
                  className="flex items-center gap-1.5 text-[9px] md:text-[10px] uppercase tracking-wider"
                  style={{
                    color: statusColor(milestone.status),
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: statusColor(milestone.status),
                      boxShadow: `0 0 6px ${statusColor(milestone.status)}`,
                    }}
                  />
                  {milestone.status}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-base md:text-xl font-semibold text-text-primary mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {milestone.title}
              </h3>

              {/* Subtitle */}
              <p
                className="text-xs md:text-sm mb-2"
                style={{
                  color: `${milestone.color}CC`,
                  fontFamily: "var(--font-body)",
                }}
              >
                {milestone.subtitle}
              </p>

              {/* Description */}
              <p
                className="text-xs md:text-sm text-text-muted leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {milestone.description}
              </p>

              {/* Bottom line accent */}
              <div
                className="absolute bottom-0 left-4 right-4 h-[1px] rounded-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${milestone.color}40, transparent)`,
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Scroll hint (fades out after scrolling) ── */}
      {scrollProgress < 0.05 && (
        <motion.div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ bottom: isMobile ? "44%" : "40%" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span
            className="text-[10px] text-white/30 tracking-widest uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Scroll to travel
          </span>
          <motion.div
            className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center p-1"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-accent-cyan/50"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      )}

      {/* ── Side timeline dots ── */}
      <div
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 md:gap-4"
      >
        {timelineMilestones.map((m, i) => {
          const isNodeActive =
            Math.abs(scrollProgress - i / (total - 1)) < 0.1;
          return (
            <motion.div
              key={`dot-${i}`}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
            >
              <div
                className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300"
                style={{
                  background: isNodeActive ? m.color : "rgba(255,255,255,0.1)",
                  boxShadow: isNodeActive ? `0 0 8px ${m.color}80` : "none",
                  transform: isNodeActive ? "scale(1.4)" : "scale(1)",
                }}
              />
              {!isMobile && (
                <span
                  className="text-[9px] tracking-wider transition-all duration-300"
                  style={{
                    color: isNodeActive ? m.color : "rgba(255,255,255,0.15)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {m.year}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
