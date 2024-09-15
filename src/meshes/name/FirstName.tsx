import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated, SpringValue } from "@react-spring/three";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { randFloat, randInt } from "three/src/math/MathUtils";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

const PositionSpring = (
  pX: number,
  pY: number,
  pZ: number,
  newX: number,
  delay: number
): { position: SpringValue<[number, number, number]> } => {
  const { viewport } = useThree();
  const isWide = viewport.aspect >= 1;
  return useSpring({
    from: { position: [0, 0, 7] as [number, number, number] },
    to: isWide ? [{ position: [pX, pY, pZ] as [number, number, number] },
          				{ position: [newX, 0, -1] as [number, number, number] }]: 
								 [{ position: [pX, pY, pZ] as [number, number, number] },
          				{ position: [newX * 2.1, 0, -3] as [number, number, number] }],
    delay: delay,
    config: {mass: 4, tension: isWide ? 200 : 100, friction: isWide ? 70 : 40},
  });
};

const RotationSpring = (
  rX: number,
  rY: number,
  rZ: number,
  mass: number,
  tension: number,
  friction: number,
  delay: number
): { rotation: SpringValue<[number, number, number]> } => {
  return useSpring({
    from: { rotation: [0, 0, 0] as [number, number, number] },
    to: [{ rotation: [rX, rY, rZ] as [number, number, number] },
      	 { rotation: [Math.PI / 2, 0, 0] as [number, number, number] }],
    delay: delay,
    config: { mass, tension, friction },
  });
};

const ScaleSpring = (
  delay: number
): { scale: SpringValue<[number, number, number]> } => {
  const { viewport } = useThree();
  const desktopScale = viewport.aspect;
  const mobileScale = 1.1;
  const isWide = viewport.aspect >= 1;
  return useSpring({
    from: { scale: [0, 1, 0] as [number, number, number] },
    to: { scale: isWide ? [desktopScale, 0.7, desktopScale]: 
													[mobileScale, 0.5, mobileScale],
    } as { scale: [number, number, number] },
    delay: delay,
    config: { mass: 2, tension: 200, friction: 50 },
  });
};

const FloatAnimation = (
  mesh: React.RefObject<THREE.Mesh | undefined>,
  a: (x: number) => number,
  b: (x: number) => number,
  c: (x: number) => number
) => {
  const rotationZ = randInt(0, 5) / 3000;
  const rotationY = randInt(0, 10) / 30000;
  const positionY = randInt(0, 10) / 30000;
  const multiplier = randFloat(0.3, 1);

  return useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.z += a(clock.getElapsedTime()) * rotationZ;
      mesh.current.rotation.y += b(clock.getElapsedTime()) * rotationY;
      mesh.current.position.y +=
        c(clock.getElapsedTime() * multiplier) * positionY;
    }
  });
};

interface LetterProps {
  letter: string;
  gltfPath: string;
  positionParams: [number, number, number, number];
  rotationParams: [number, number, number, number, number, number];
  scaleDelay: number;
  floatParams: [(x: number) => number, (x: number) => number, (x: number) => number];
}

const Letter: React.FC<LetterProps> = ({letter, gltfPath, positionParams, rotationParams, scaleDelay, floatParams}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  const [pX, pY, pZ, newX] = positionParams.map(p => p * viewport.aspect);
  const [rX, rY, rZ, mass, tension, friction] = rotationParams;

  const positionAnimation = PositionSpring(pX, pY, pZ, newX, scaleDelay);
  const rotationAnimation = RotationSpring(rX, rY, rZ, mass, tension, friction, scaleDelay);
  const scale = ScaleSpring(scaleDelay);

  FloatAnimation(meshRef, ...floatParams);

  const { nodes } = useGLTF(gltfPath) as unknown as GLTF & {
    nodes: { [key: string]: { geometry: THREE.BufferGeometry } };
  };

  return (
    <animated.mesh
      castShadow
      receiveShadow
      geometry={nodes[letter].geometry}
      material={new THREE.MeshNormalMaterial()}
      position={positionAnimation.position}
      rotation={rotationAnimation.rotation as unknown as THREE.Euler}
      scale={scale.scale}
      ref={meshRef}
    />
  );
};

export const LetterJ: React.FC = () => (
  <Letter
    letter="J"
    gltfPath="assets/letters/bit_j.gltf"
    positionParams={[-2.5, 0, 0, -2.1]}
    rotationParams={[Math.PI / 2, 0.6, 6, 3.5, 200, 50]}
    scaleDelay={0}
    floatParams={[Math.cos, Math.sin, Math.sin]}
  />
);

export const LetterU: React.FC = () => (
  <Letter
    letter="U"
    gltfPath="assets/letters/bit_u.gltf"
    positionParams={[-1.5, -1.6, 0, -1.2]}
    rotationParams={[Math.PI / 4, -0.4, 3, 3.5, 200, 50]}
    scaleDelay={100}
    floatParams={[Math.cos, Math.cos, Math.cos]}
  />
);

export const LetterS: React.FC = () => (
  <Letter
    letter="S"
    gltfPath="assets/letters/bit_s.gltf"
    positionParams={[-1, 1, -0.5, -1 / 2.8]}
    rotationParams={[Math.PI / 1.5, 0, -1, 3.5, 200, 55]}
    scaleDelay={200}
    floatParams={[Math.cos, Math.cos, Math.cos]}
  />
);

export const LetterT: React.FC = () => (
  <Letter
    letter="T"
    gltfPath="assets/letters/bit_t.gltf"
    positionParams={[1.2, 1.2, 0, 1 / 2.2]}
    rotationParams={[Math.PI / 1.3, 0, 3, 2, 200, 50]}
    scaleDelay={300}
    floatParams={[Math.sin, Math.sin, Math.cos]}
  />
);

export const LetterI: React.FC = () => (
  <Letter
    letter="I"
    gltfPath="assets/letters/bit_i.gltf"
    positionParams={[2, -1, 0, 1.12]}
    rotationParams={[-Math.PI + 0.4, 0, 0, 3.5, 200, 50]}
    scaleDelay={400}
    floatParams={[Math.sin, Math.sin, Math.sin]}
  />
);

export const LetterN: React.FC = () => (
  <Letter
    letter="N"
    gltfPath="assets/letters/bit_n.gltf"
    positionParams={[2.5, 0.1, 0, 1.85]}
    rotationParams={[Math.PI / 2, -0.5, 1.2, 3.5, 200, 50]}
    scaleDelay={500}
    floatParams={[Math.sin, Math.sin, Math.cos]}
  />
);

["j", "u", "s", "t", "i", "n"].forEach(letter => {
  useGLTF.preload(`assets/letters/bit_${letter}.gltf`);
});