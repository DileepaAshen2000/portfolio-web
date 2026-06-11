"use client";

import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ── Cinematic Camera Controller ── */
export default function CameraController({
  scrollProgress,
  corridorLength,
  isMobile,
}: {
  scrollProgress: number;
  corridorLength: number;
  isMobile: boolean;
}) {
  const { camera, gl } = useThree();
  const targetPos = useRef(new THREE.Vector3());
  const time = useRef(0);
  const smoothProgress = useRef(0);

  // For mouse drag interaction
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const mouseDragOffset = useRef({ x: 0, y: 0 });
  const targetDragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      isDragging.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
      gl.domElement.style.cursor = "grabbing";
    };

    const handlePointerUp = () => {
      isDragging.current = false;
      gl.domElement.style.cursor = "grab";
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (isDragging.current) {
        const deltaX = e.clientX - previousMousePosition.current.x;
        const deltaY = e.clientY - previousMousePosition.current.y;
        
        // Accumulate drag offset
        targetDragOffset.current.x -= deltaX * 0.006;
        targetDragOffset.current.y += deltaY * 0.006;
        
        // Clamp the offset to prevent extreme flipping angles
        targetDragOffset.current.x = THREE.MathUtils.clamp(targetDragOffset.current.x, -2.5, 2.5);
        targetDragOffset.current.y = THREE.MathUtils.clamp(targetDragOffset.current.y, -1.5, 2);
        
        previousMousePosition.current = { x: e.clientX, y: e.clientY };
      }
    };

    const canvas = gl.domElement;
    canvas.style.cursor = "grab";
    
    canvas.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointermove", handlePointerMove);
      canvas.style.cursor = "default";
    };
  }, [gl.domElement]);

  const zStart = -corridorLength / 2 + 3;
  const zEnd = corridorLength / 2 - 3;

  useFrame((_, delta) => {
    time.current += delta;

    // Smoothly interpolate scroll progress for buttery movement
    smoothProgress.current = THREE.MathUtils.lerp(
      smoothProgress.current,
      scrollProgress,
      0.06
    );

    // Smoothly interpolate drag offset
    mouseDragOffset.current.x = THREE.MathUtils.lerp(
      mouseDragOffset.current.x,
      targetDragOffset.current.x,
      0.05
    );
    mouseDragOffset.current.y = THREE.MathUtils.lerp(
      mouseDragOffset.current.y,
      targetDragOffset.current.y,
      0.05
    );

    // Camera follows astronaut along Z with offset
    const zPos = THREE.MathUtils.lerp(zStart, zEnd, smoothProgress.current);
    const cameraOffset = isMobile ? 5 : 7;

    // Subtle camera drift for cinematic feel
    const driftX = Math.sin(time.current * 0.15) * 0.4;
    const driftY = Math.cos(time.current * 0.12) * 0.25;

    // Camera orbits slightly based on scroll for dramatic reveal
    const baseOrbitX = Math.sin(smoothProgress.current * Math.PI * 2) * 1.5;
    const baseOrbitY = 1.5 + Math.sin(smoothProgress.current * Math.PI) * 0.8;

    targetPos.current.set(
      baseOrbitX + driftX + mouseDragOffset.current.x * 6,
      baseOrbitY + driftY + mouseDragOffset.current.y * 4,
      zPos + cameraOffset
    );

    // Smooth camera position
    camera.position.lerp(targetPos.current, 0.04);

    // Look at a point slightly ahead of the astronaut
    const lookAtZ = zPos - 3;
    // Add slight look offset based on drag to make it feel like looking around
    const lookAtY = 0.3 + Math.sin(time.current * 0.1) * 0.1 - mouseDragOffset.current.y * 0.5;
    const lookAtX = -mouseDragOffset.current.x * 0.5;

    // Smooth look-at via quaternion slerp
    const targetQuat = new THREE.Quaternion();
    const lookMatrix = new THREE.Matrix4();
    lookMatrix.lookAt(
      camera.position,
      new THREE.Vector3(lookAtX, lookAtY, lookAtZ),
      new THREE.Vector3(0, 1, 0)
    );
    targetQuat.setFromRotationMatrix(lookMatrix);
    camera.quaternion.slerp(targetQuat, 0.04);
  });

  return null;
}
