import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import { randFloat, randInt } from "three/src/math/MathUtils";

const FloatAnimation = (mesh, a, b, c) => {
  const rotationZ = randInt(0, 5) / 2750;
  const rotationY = randInt(0, 10) / 30000;
  const positionY = randInt(0, 10) / 3000;
  const multiplier = randFloat(0.3, 2);

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.z += a(clock.getElapsedTime()) * rotationZ;
      mesh.current.rotation.y += b(clock.getElapsedTime()) * rotationY;
      mesh.current.position.y += c(clock.getElapsedTime() * multiplier) * positionY;
    }
  });
};

export const Spaceship = () => {
  const { scene } = useGLTF("assets/ship.glb");
  const spaceshipRef = useRef();

  // Initial animation spring
  const spring = useSpring({
    from: {
      position: [-20, 15, 20], // Start from far left and below
      rotation: [0.05, Math.PI - 1, -0.3],
      scale: 0,
    },
    to: {
      position: [3, -7, -6],
      rotation: [0.05, Math.PI, -0.3],
      scale: 0.15,
    },
    config: {
      mass: 5,
      tension: 20,
      friction: 40,
    },

    delay: 2500,
  });

  FloatAnimation(
    spaceshipRef,
    (time) => Math.sin(time),
    (time) => Math.cos(time),
    (time) => Math.sin(time)
  );

  return (
    <animated.primitive
      ref={spaceshipRef}
      object={scene}
      position={spring.position}
      rotation={spring.rotation}
      scale={spring.scale}
    />
  );
};

useGLTF.preload("assets/ship.glb");