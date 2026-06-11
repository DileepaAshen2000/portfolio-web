"use client";

import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import TesseractGeometry from "./TesseractGeometry";
import Astronaut from "./Astronaut";
import MilestoneNodes from "./MilestoneNodes";
import CameraController from "./CameraController";
import { timelineMilestones } from "./timelineData";

/* ── Optional Bloom (loaded dynamically to avoid crashes) ── */
function BloomEffect({ isMobile }: { isMobile: boolean }) {
  const [PostFX, setPostFX] = useState<{
    EffectComposer: React.ComponentType<{ children: React.ReactNode }>;
    Bloom: React.ComponentType<{
      intensity: number;
      luminanceThreshold: number;
      luminanceSmoothing: number;
      radius: number;
    }>;
  } | null>(null);

  useEffect(() => {
    import("@react-three/postprocessing")
      .then((mod) => {
        setPostFX({
          EffectComposer: mod.EffectComposer as unknown as React.ComponentType<{
            children: React.ReactNode;
          }>,
          Bloom: mod.Bloom as unknown as React.ComponentType<{
            intensity: number;
            luminanceThreshold: number;
            luminanceSmoothing: number;
            radius: number;
          }>,
        });
      })
      .catch(() => {
        // Bloom not available — fail silently
      });
  }, []);

  if (!PostFX) return null;

  return (
    <PostFX.EffectComposer>
      <PostFX.Bloom
        intensity={isMobile ? 0.4 : 0.7}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.9}
        radius={0.6}
      />
    </PostFX.EffectComposer>
  );
}

/* ── Scene Lighting ── */
function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.4} color="#6080c0" />
      <directionalLight position={[5, 8, 5]} intensity={0.6} color="#ffffff" />
      <directionalLight
        position={[-3, 2, -5]}
        intensity={0.25}
        color="#6C63FF"
      />
      <pointLight
        position={[0, 0, 0]}
        intensity={1.2}
        color="#00D9FF"
        distance={30}
      />
      <pointLight
        position={[0, 5, -15]}
        intensity={0.6}
        color="#6C63FF"
        distance={25}
      />
      <pointLight
        position={[0, -3, 15]}
        intensity={0.4}
        color="#8B5CF6"
        distance={20}
      />
      <pointLight
        position={[5, 0, 0]}
        intensity={0.3}
        color="#00D9FF"
        distance={15}
      />
      <pointLight
        position={[-5, 0, 0]}
        intensity={0.3}
        color="#3B82F6"
        distance={15}
      />
      {/* Fog — pushed far out so tesseract is fully visible */}
      <fog attach="fog" args={["#020617", 25, 80]} />
    </>
  );
}

/* ── Main 3D Scene ── */
export default function TesseractScene({
  scrollProgress,
  isMobile,
}: {
  scrollProgress: number;
  isMobile: boolean;
}) {
  const corridorLength = isMobile ? 60 : 100;

  return (
    <Canvas
      camera={{
        position: [0, 1.5, 10],
        fov: isMobile ? 65 : 55,
        near: 0.1,
        far: 200,
      }}
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        failIfMajorPerformanceCaveat: false,
      }}
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      <Suspense fallback={null}>
        <SceneLighting />

        {/* Star background */}
        <Stars
          radius={80}
          depth={60}
          count={isMobile ? 1500 : 3000}
          factor={3}
          saturation={0.1}
          fade
          speed={0.5}
        />

        {/* Tesseract structure */}
        <TesseractGeometry
          scrollProgress={scrollProgress}
          isMobile={isMobile}
        />

        {/* Astronaut */}
        <Astronaut
          scrollProgress={scrollProgress}
          totalMilestones={timelineMilestones.length}
          corridorLength={corridorLength}
          isMobile={isMobile}
        />

        {/* Milestone nodes */}
        <MilestoneNodes
          milestones={timelineMilestones}
          scrollProgress={scrollProgress}
          corridorLength={corridorLength}
          isMobile={isMobile}
        />

        {/* Camera */}
        <CameraController
          scrollProgress={scrollProgress}
          corridorLength={corridorLength}
          isMobile={isMobile}
        />

        {/* Post-processing bloom (loaded dynamically, fail-safe) */}
        <BloomEffect isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
}
