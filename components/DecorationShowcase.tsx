"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Torus } from "@react-three/drei";
import * as THREE from "three";

interface Particle {
  t: number;
  factor: number;
  speed: number;
  xFactor: number;
  yFactor: number;
  zFactor: number;
  mx: number;
  my: number;
}

export default function DecorationShowcase() {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  // Optimize particle creation
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 100 }, () => ({
      t: Math.random() * 100,
      factor: 20 + Math.random() * 100,
      speed: 0.01 + Math.random() / 200,
      xFactor: -50 + Math.random() * 100,
      yFactor: -50 + Math.random() * 100,
      zFactor: -50 + Math.random() * 100,
      mx: 0,
      my: 0,
    }));
  }, []);

  // Create particle meshes
  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;

    // Create particle geometry and material only once
    const geometry = new THREE.SphereGeometry(0.1, 16, 16);

    const meshes = particles.map(() => {
      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(`hsl(${Math.random() * 360}, 50%, 50%)`),
      });
      return new THREE.Mesh(geometry, material);
    });

    meshes.forEach((mesh) => group.add(mesh));

    // Cleanup function
    return () => {
      meshes.forEach((mesh) => {
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
        group.remove(mesh);
      });
    };
  }, [particles]);

  // Animation frame
  useFrame((state) => {
    const group = groupRef.current;
    const sphere = sphereRef.current;
    const torus = torusRef.current;

    if (!group || !sphere || !torus) return;

    const time = state.clock.getElapsedTime();

    // Update main objects
    group.rotation.y = Math.sin(time / 4) * 0.2;
    group.rotation.z = Math.sin(time / 4) * 0.1;

    sphere.position.y = Math.sin(time) * 0.2;

    torus.rotation.x = time * 0.5;
    torus.rotation.y = time * 0.3;

    // Update particles
    particles.forEach((particle, i) => {
      const particleMesh = group.children[i + 3];
      if (!particleMesh) return;

      particle.t += particle.speed / 2;
      const { t, factor, xFactor, yFactor, zFactor } = particle;

      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      // Mouse interaction
      particle.mx += (state.mouse.x * 1000 - particle.mx) * 0.01;
      particle.my += (state.mouse.y * 1000 - 1 - particle.my) * 0.01;

      // Update particle position
      particleMesh.position.set(
        (particle.mx / 10) * a +
          xFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b +
          yFactor +
          Math.sin((t / 10) * factor) +
          (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b +
          zFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 3) * factor) / 10
      );

      particleMesh.scale.setScalar(s);
    });
  });

  return (
    <group ref={groupRef}>
      <Sphere
        ref={sphereRef}
        args={[1, 32, 32]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#FF69B4"
          metalness={0.5}
          roughness={0.2}
        />
      </Sphere>

      <Torus
        ref={torusRef}
        args={[1.5, 0.3, 16, 100]}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          color="#FFD700"
          metalness={0.5}
          roughness={0.1}
        />
      </Torus>
    </group>
  );
}
