import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useThree, useFrame } from "@react-three/fiber";
import { useColorContext } from "../../context/ColorContext";

const PositionSpring = (mX, mY, mZ, dX, dZ) => {
  const { viewport } = useThree();
  const desktopY = 0.475 - viewport.aspect * 0.75;
  const isWide = viewport.aspect >= 1;

  return useSpring({
    to: isWide
      ? { position: [dX, desktopY, dZ] }
      : { position: [mX, mY, mZ] },
    config: { mass: 2, tension: 300, friction: 50 },
    delay: 1000,
  });
};

const ScaleSpring = (delayScale) => {
  const { viewport } = useThree();
  const mobileScale = 0.5;
  const desktopScale = viewport.aspect >= 1.15 ? 1.2 : 0.8 - viewport.aspect * 0.2;
  const isWide = viewport.aspect >= 1;

  return useSpring({
    from: { scale: [0, 0, 0] },
    to: isWide
      ? { scale: [desktopScale, 0.3, desktopScale] }
      : { scale: [mobileScale, 0.2, mobileScale] },
    config: { mass: 5, tension: 500, friction: 50 },
    delay: isWide ? 2500 : 3000 + delayScale,
  });
};

const Letter = ({ letter, mX, dX, delayScale }) => {
  const { viewport } = useThree();
  const { activeColor, hoverColor } = useColorContext();
  const materialRef = useRef();
  const targetColor = useRef(new THREE.Color(0xffffff));
  const currentColor = useRef(new THREE.Color(0xffffff));
  
  const position = PositionSpring(
    -viewport.aspect * mX,
    -1.4,
    -1,
    -viewport.aspect * dX,
    -3
  );
  const scale = ScaleSpring(delayScale);

  const { nodes, materials } = useGLTF(
    `assets/letters/bit_${letter.toLowerCase()}.gltf`
  );
  
  useEffect(() => {
    const createPastelColor = (hexColor) => {
      if (!hexColor) return null;
      
      const color = new THREE.Color(hexColor);
      color.lerp(new THREE.Color(0xffffff), 0.3);
      return color;
    };
    
    if (hoverColor) {
      targetColor.current = createPastelColor(hoverColor);
    } else if (activeColor) {
      targetColor.current = createPastelColor(activeColor);
    } else {
      targetColor.current = new THREE.Color(0xffffff);
    }
    
    materialRef.current = materials.White;
    materialRef.current.emissiveIntensity = hoverColor ? 0.4 : (activeColor ? 0.3 : 0.2);
  }, [activeColor, hoverColor, materials.White]);

  useFrame(() => {
    if (materialRef.current) {
      const lerpFactor = hoverColor ? 0.15 : 0.05;
      currentColor.current.lerp(targetColor.current, lerpFactor);
      
      materialRef.current.emissive.copy(currentColor.current);
      materialRef.current.needsUpdate = true;
    }
  });

  return (
    <animated.mesh
      castShadow
      receiveShadow
      geometry={nodes[letter].geometry}
      material={materials.White}
      position={position.position}
      rotation={[Math.PI / 2, 0, 0]}
      scale={scale.scale}
    />
  );
};

export function LastName() {
  return (
    <>
      <Letter letter="S" mX={3.6} dX={2.8} delayScale={0} />
      <Letter letter="O" mX={2.63} dX={2} delayScale={40} />
      <Letter letter="B" mX={1.65} dX={1.2} delayScale={80} />
      <Letter letter="E" mX={0.7} dX={0.5} delayScale={120} />
      <Letter letter="R" mX={-0.25} dX={-0.25} delayScale={160} />
      <Letter letter="A" mX={-1.2} dX={-1} delayScale={200} />
      <Letter letter="N" mX={-2.2} dX={-1.75} delayScale={240} />
      <Letter letter="O" mX={-3.2} dX={-2.5} delayScale={280} />
    </>
  );
}

["s", "o", "b", "e", "r", "a", "n", "o"].forEach((letter) => {
  useGLTF.preload(`assets/letters/bit_${letter}.gltf`);
});
