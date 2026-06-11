"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function Astronaut({
  scrollProgress,
  totalMilestones,
  corridorLength,
  isMobile,
}: {
  scrollProgress: number;
  totalMilestones: number;
  corridorLength: number;
  isMobile: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const time = useRef(0);

  // Load the external 3D model
  const { scene } = useGLTF("/models/astronaut.glb");
  
  // Clone the scene to ensure isolated mutations
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  /* Astronaut's Z position maps scroll to corridor */
  const zStart = -corridorLength / 2 + 5;
  const zEnd = corridorLength / 2 - 5;

  useFrame((_, delta) => {
    time.current += delta;
    if (groupRef.current) {
      // Move along Z based on scroll
      const targetZ = THREE.MathUtils.lerp(zStart, zEnd, scrollProgress);
      groupRef.current.position.z = THREE.MathUtils.lerp(
        groupRef.current.position.z,
        targetZ,
        0.06
      );

      // Floating animation — zero-g drift
      groupRef.current.position.y =
        Math.sin(time.current * 0.7) * 0.4 + Math.sin(time.current * 1.3) * 0.1;
      groupRef.current.position.x =
        Math.sin(time.current * 0.4) * 0.2;

      // Subtle rotation — tumbling in space
      groupRef.current.rotation.y =
        Math.sin(time.current * 0.25) * 0.2;
      groupRef.current.rotation.z =
        Math.sin(time.current * 0.35) * 0.08;
      groupRef.current.rotation.x =
        Math.sin(time.current * 0.2) * 0.1;
    }
  });

  const visorColor = "#00D9FF";
  // The scale has been increased to properly fit the imported .glb file.
  const scale = isMobile ? 1.8 : 2.5;

  return (
    <group ref={groupRef} scale={[scale, scale, scale]}>
      {/* ── Render the provided GLB Model ── */}
      <primitive object={clonedScene} position={[0, -1, 0]} />

      {/* ── Astronaut lighting to highlight details ── */}
      <pointLight
        position={[0, 1.6, 1.5]}
        color={visorColor}
        intensity={2}
        distance={6}
      />
      <pointLight
        position={[0, 0, 1]}
        color="#ffffff"
        intensity={0.5}
        distance={3}
      />
    </group>
  );
}

// Preload the model to ensure it loads quickly
useGLTF.preload("/models/astronaut.glb");
