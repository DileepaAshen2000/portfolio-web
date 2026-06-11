"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Html, Line } from "@react-three/drei";
import type { TimelineMilestone } from "./timelineData";

/* ── Single Milestone Node in 3D space ── */
function MilestoneNode({
  milestone,
  index,
  total,
  scrollProgress,
  corridorLength,
  isMobile,
}: {
  milestone: TimelineMilestone;
  index: number;
  total: number;
  scrollProgress: number;
  corridorLength: number;
  isMobile: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const time = useRef(Math.random() * 100);

  // Each milestone is evenly spaced along Z
  const zPos =
    -corridorLength / 2 + 5 + (index / (total - 1)) * (corridorLength - 10);
  const milestoneProgress = index / (total - 1);

  // Side offset (alternate left/right)
  const side = index % 2 === 0 ? 1 : -1;
  const xOffset = isMobile ? side * 2.5 : side * 4.5;
  const yOffset = Math.sin(index * 1.2) * 0.8;

  // How close the astronaut is to this node
  const proximity =
    1 - Math.min(Math.abs(scrollProgress - milestoneProgress) * 3, 1);
  const isActive = proximity > 0.3;

  useFrame((_, delta) => {
    time.current += delta;
    if (groupRef.current) {
      // Pulse scale when active
      const baseScale = isActive ? 1 + proximity * 0.2 : 0.8;
      const pulse = isActive ? Math.sin(time.current * 3) * 0.05 : 0;
      groupRef.current.scale.setScalar(baseScale + pulse);
    }
    if (glowRef.current) {
      const mat = glowRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = isActive
        ? 2 + Math.sin(time.current * 4) * 0.8
        : 0.3;
      mat.opacity = isActive ? 0.85 : 0.3;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.6;
      ringRef.current.rotation.x = Math.sin(time.current * 0.5) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[xOffset, yOffset, zPos]}>
      {/* Central energy sphere */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial
          color={milestone.color}
          emissive={milestone.color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.5}
          depthWrite={false}
        />
      </mesh>

      {/* Outer halo */}
      <mesh>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial
          color={milestone.color}
          emissive={milestone.color}
          emissiveIntensity={isActive ? 0.5 : 0.05}
          transparent
          opacity={isActive ? 0.1 : 0.02}
          depthWrite={false}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Outer ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[0.5, 0.025, 8, 32]} />
        <meshStandardMaterial
          color={milestone.color}
          emissive={milestone.color}
          emissiveIntensity={isActive ? 1.5 : 0.2}
          transparent
          opacity={isActive ? 0.8 : 0.2}
        />
      </mesh>

      {/* Second ring — perpendicular */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.42, 0.018, 8, 32]} />
        <meshStandardMaterial
          color={milestone.color}
          emissive={milestone.color}
          emissiveIntensity={isActive ? 1 : 0.1}
          transparent
          opacity={isActive ? 0.6 : 0.12}
        />
      </mesh>

      {/* Third ring — diagonal */}
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[0.35, 0.012, 8, 32]} />
        <meshStandardMaterial
          color={milestone.color}
          emissive={milestone.color}
          emissiveIntensity={isActive ? 0.8 : 0.05}
          transparent
          opacity={isActive ? 0.4 : 0.08}
        />
      </mesh>

      {/* Connection line to corridor center */}
      <Line
        points={[
          [0, 0, 0],
          [-xOffset, -yOffset, 0],
        ]}
        color={milestone.color}
        transparent
        opacity={isActive ? 0.35 : 0.06}
        lineWidth={1}
      />

      {/* Year label — using Html for crisp text */}
      <Html
        position={[0, 0.85, 0]}
        center
        distanceFactor={isMobile ? 6 : 8}
        style={{
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: isMobile ? "14px" : "18px",
            fontWeight: 700,
            color: milestone.color,
            opacity: isActive ? 1 : 0.35,
            textShadow: isActive ? `0 0 12px ${milestone.color}80` : "none",
            transition: "opacity 0.3s ease",
            letterSpacing: "0.1em",
          }}
        >
          {milestone.year}
        </div>
      </Html>

      {/* Title — using Html */}
      <Html
        position={[0, -0.7, 0]}
        center
        distanceFactor={isMobile ? 6 : 8}
        style={{
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: isMobile ? "10px" : "12px",
            fontWeight: 500,
            color: "#F8FAFC",
            opacity: isActive ? 0.9 : 0.2,
            transition: "opacity 0.3s ease",
            textAlign: "center",
            maxWidth: isMobile ? "120px" : "160px",
          }}
        >
          {milestone.title}
        </div>
      </Html>

      {/* Point light for active glow */}
      <pointLight
        color={milestone.color}
        intensity={isActive ? 4 : 0.3}
        distance={isActive ? 8 : 2}
      />
    </group>
  );
}

/* ── All Milestone Nodes ── */
export default function MilestoneNodes({
  milestones,
  scrollProgress,
  corridorLength,
  isMobile,
}: {
  milestones: TimelineMilestone[];
  scrollProgress: number;
  corridorLength: number;
  isMobile: boolean;
}) {
  return (
    <group>
      {milestones.map((m, i) => (
        <MilestoneNode
          key={`${m.year}-${m.title}`}
          milestone={m}
          index={i}
          total={milestones.length}
          scrollProgress={scrollProgress}
          corridorLength={corridorLength}
          isMobile={isMobile}
        />
      ))}
    </group>
  );
}
