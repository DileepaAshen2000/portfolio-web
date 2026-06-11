"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

/* ── Wireframe Cube (edges only) with emissive glow ── */
function WireframeCube({
  size,
  position,
  color,
  opacity,
  rotationSpeed = 0,
  emissive = false,
}: {
  size: number;
  position: [number, number, number];
  color: string;
  opacity: number;
  rotationSpeed?: number;
  emissive?: boolean;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ref.current && rotationSpeed) {
      ref.current.rotation.x += delta * rotationSpeed * 0.3;
      ref.current.rotation.y += delta * rotationSpeed * 0.2;
    }
  });

  const edges = useMemo(() => {
    const geo = new THREE.BoxGeometry(size, size, size);
    return new THREE.EdgesGeometry(geo);
  }, [size]);

  return (
    <group ref={ref} position={position}>
      <lineSegments geometry={edges}>
        <lineBasicMaterial
          color={color}
          transparent
          opacity={opacity}
          linewidth={1}
        />
      </lineSegments>
      {/* Emissive face glow for inner cubes */}
      {emissive && (
        <mesh>
          <boxGeometry args={[size, size, size]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.08}
            transparent
            opacity={0.03}
            side={THREE.BackSide}
            depthWrite={false}
          />
        </mesh>
      )}
    </group>
  );
}

/* ── Diagonal Connector Lines (4D cross-connections between cube vertices) ── */
function HyperCubeConnectors({
  innerSize,
  outerSize,
  color,
  opacity,
}: {
  innerSize: number;
  outerSize: number;
  color: string;
  opacity: number;
}) {
  const connectorLines = useMemo(() => {
    const half1 = innerSize / 2;
    const half2 = outerSize / 2;
    const result: [number, number, number][][] = [];
    for (const x of [-1, 1]) {
      for (const y of [-1, 1]) {
        for (const z of [-1, 1]) {
          result.push([
            [x * half1, y * half1, z * half1],
            [x * half2, y * half2, z * half2],
          ]);
        }
      }
    }
    return result;
  }, [innerSize, outerSize]);

  return (
    <group>
      {connectorLines.map((points, i) => (
        <Line
          key={i}
          points={points}
          color={color}
          transparent
          opacity={opacity}
          lineWidth={1}
        />
      ))}
    </group>
  );
}

/* ── Spatial Grid Plane ── */
function GridPlane({
  size,
  divisions,
  position,
  rotation,
  color,
  opacity,
}: {
  size: number;
  divisions: number;
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  opacity: number;
}) {
  return (
    <group position={position} rotation={rotation}>
      <gridHelper
        args={[size, divisions, color, color]}
        material-transparent={true}
        material-opacity={opacity}
      />
    </group>
  );
}

/* ── Temporal Corridor (glowing path lines along Z) ── */
function TemporalCorridor({
  length,
  spread,
  opacity,
}: {
  length: number;
  spread: number;
  opacity: number;
}) {
  const corridorLines = useMemo(() => {
    const result: { points: [number, number, number][]; color: string }[] = [];
    const count = 16;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = Math.cos(angle) * spread;
      const y = Math.sin(angle) * spread;
      result.push({
        points: [
          [x, y, -length / 2],
          [x, y, length / 2],
        ],
        color: i % 2 === 0 ? "#00D9FF" : "#6C63FF",
      });
    }
    return result;
  }, [length, spread]);

  return (
    <group>
      {corridorLines.map((line, i) => (
        <Line
          key={i}
          points={line.points}
          color={line.color}
          transparent
          opacity={opacity * 0.5}
          lineWidth={1}
        />
      ))}
    </group>
  );
}

/* ── Floating Energy Rings ── */
function EnergyRings({ count, spread }: { count: number; spread: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        child.rotation.x += delta * 0.2 * (i % 2 === 0 ? 1 : -1);
        child.rotation.y += delta * 0.15 * (i % 2 === 0 ? -1 : 1);
      });
    }
  });

  const rings = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread * 0.5,
        (Math.random() - 0.5) * spread * 2,
      ] as [number, number, number],
      radius: Math.random() * 0.8 + 0.3,
      color: ["#00D9FF", "#6C63FF", "#8B5CF6", "#3B82F6"][i % 4],
    }));
  }, [count, spread]);

  return (
    <group ref={groupRef}>
      {rings.map((ring, i) => (
        <mesh key={i} position={ring.position}>
          <torusGeometry args={[ring.radius, 0.01, 8, 32]} />
          <meshStandardMaterial
            color={ring.color}
            emissive={ring.color}
            emissiveIntensity={0.6}
            transparent
            opacity={0.25}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ── Particle Field ── */
function ParticleField({
  count,
  spread,
  depth,
}: {
  count: number;
  spread: number;
  depth: number;
}) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 2] = (Math.random() - 0.5) * depth;
    }
    return pos;
  }, [count, spread, depth]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.015;
      ref.current.rotation.x += delta * 0.008;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#00D9FF"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ── Main Tesseract Structure ── */
export default function TesseractGeometry({
  scrollProgress,
  isMobile,
}: {
  scrollProgress: number;
  isMobile: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);

  const cubeConfig = useMemo(() => {
    if (isMobile) {
      return [
        { size: 3, color: "#00D9FF", opacity: 0.45, speed: 0.2, emissive: true },
        { size: 5, color: "#6C63FF", opacity: 0.25, speed: -0.12, emissive: true },
        { size: 7.5, color: "#8B5CF6", opacity: 0.12, speed: 0.06, emissive: false },
      ];
    }
    return [
      { size: 2.5, color: "#00D9FF", opacity: 0.55, speed: 0.25, emissive: true },
      { size: 4.5, color: "#6C63FF", opacity: 0.35, speed: -0.15, emissive: true },
      { size: 7, color: "#8B5CF6", opacity: 0.2, speed: 0.08, emissive: true },
      { size: 10, color: "#3B82F6", opacity: 0.1, speed: -0.05, emissive: false },
      { size: 13, color: "#00D9FF", opacity: 0.05, speed: 0.025, emissive: false },
    ];
  }, [isMobile]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        scrollProgress * Math.PI * 0.4 + Math.sin(Date.now() * 0.0003) * 0.08;
      groupRef.current.rotation.x =
        Math.sin(scrollProgress * Math.PI * 0.25) * 0.12;
    }
  });

  const particleCount = isMobile ? 400 : 1000;
  const corridorLength = isMobile ? 60 : 100;

  return (
    <group ref={groupRef}>
      {/* Nested wireframe cubes */}
      {cubeConfig.map((c, i) => (
        <WireframeCube
          key={i}
          size={c.size}
          position={[0, 0, 0]}
          color={c.color}
          opacity={c.opacity}
          rotationSpeed={c.speed}
          emissive={c.emissive}
        />
      ))}

      {/* 4D hyper-connections between nested cubes */}
      <HyperCubeConnectors
        innerSize={isMobile ? 3 : 2.5}
        outerSize={isMobile ? 5 : 4.5}
        color="#00D9FF"
        opacity={0.2}
      />
      <HyperCubeConnectors
        innerSize={isMobile ? 5 : 4.5}
        outerSize={isMobile ? 7.5 : 7}
        color="#6C63FF"
        opacity={0.1}
      />

      {/* Temporal corridor lines */}
      <TemporalCorridor
        length={corridorLength}
        spread={isMobile ? 5 : 8}
        opacity={0.6}
      />

      {/* Floating energy rings */}
      <EnergyRings count={isMobile ? 6 : 12} spread={isMobile ? 8 : 15} />

      {/* Spatial grids */}
      <GridPlane
        size={isMobile ? 25 : 40}
        divisions={isMobile ? 20 : 35}
        position={[0, -5, 0]}
        rotation={[0, 0, 0]}
        color="#00D9FF"
        opacity={0.06}
      />
      <GridPlane
        size={isMobile ? 25 : 40}
        divisions={isMobile ? 20 : 35}
        position={[0, 5, 0]}
        rotation={[0, 0, 0]}
        color="#6C63FF"
        opacity={0.04}
      />

      {/* Particle field */}
      <ParticleField
        count={particleCount}
        spread={isMobile ? 30 : 45}
        depth={corridorLength}
      />
    </group>
  );
}
