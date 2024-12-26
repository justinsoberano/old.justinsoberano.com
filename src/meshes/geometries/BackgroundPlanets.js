import { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { AsteroidBelt } from "./AsteroidBelt";

const PointLightSpring = (delay, intensityTo) => {
  return useSpring({
    from: { intensity: 0 },
    to: { intensity: intensityTo },
    delay,
    config: { mass: 4, tension: 200, friction: 70 },
  });
};

const useRotation = (mesh, speed = { x: 0.0005, y: 0.001 }) => {
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += speed.x;
      mesh.current.rotation.y += speed.y;
      mesh.current.rotation.z += speed.z || 0;
    }
  });
};

const Planet = ({ modelPath, position, scale, rotation, rotationSpeed }) => {
  const { scene } = useGLTF(modelPath);
  const rotatingGroupRef = useRef();
  
  useRotation(rotatingGroupRef, rotationSpeed);

  return (
    <group position={position} rotation={rotation}>
      <group ref={rotatingGroupRef}>
        <primitive
          object={scene}
          scale={scale}
        />
      </group>
    </group>
  );
};

export function Planets() {
  const { viewport } = useThree();
  const isWide = viewport.aspect >= 1;
  const pointLightSpringAnimation = PointLightSpring(2300, 1);
  const secondPointLightSpringAnimation = PointLightSpring(2300, isWide ? 0 : 1);
  
  return (
    <group>
      <animated.pointLight 
        position={[0, 10, -40]} 
        intensity={pointLightSpringAnimation.intensity} 
        distance={200} 
        castShadow 
      />
      <animated.pointLight 
        position={[0, 0, -10]} 
        intensity={secondPointLightSpringAnimation.intensity} 
        distance={10} 
      />
      
      <AsteroidBelt 
        radius={25} 
        asteroidCount={isWide ? 150 : 75} 
        yOffset={isWide ? 2 : 3} 
        width={isWide ? 25 : 20}
        minScale={0.25}
        maxScale={isWide ? 0.75 : 2}
        tilt={Math.PI / 7} 
      />

      <Planet
        modelPath="assets/planets/Earth.glb"
        position={[-9, -19, -20]}
        rotation={[0, -0.4, 0.1]}
        scale={1}
        rotationSpeed={{ x: 0.0002, y: 0.001, z: 0 }}
      />
      
      <Planet
        modelPath="assets/planets/Saturn.glb"
        position={[15, -10, -30]}
        scale={15}
        rotation={[0.4, 0, -0.4]}
        rotationSpeed={{ x: 0, y: 0.001, z: 0 }}
      />
      
      <Planet
        modelPath="assets/planets/Mars.glb"
        position={isWide ? [-10, 0, -5] : [-4, 2, -5]}
        scale={0.1}
        rotation={[0, 1, 0]}
        rotationSpeed={{ x: 0.0003, y: 0.0008 }}
      />

      <Planet
        modelPath="assets/planets/Moon.glb"
        position={isWide ? [-20, -16, -25] : [-10, -12, -25]}
        scale={0.075}
        rotationSpeed={{ x: 0.0005, y: 0.0004 }}
      />  

      <Planet
        modelPath="assets/planets/Neptune.glb"
        position={isWide ? [16, 16, -24] : [11, 18, -26]}
        scale={0.2}
        rotationSpeed={{ x: 0.0001, y: 0.0004 }}
      />  
    </group>
  );
}

const planetModels = [
  "Earth", "Jupiter", "Mars", "Moon", "Neptune", "Saturn"
];

planetModels.forEach(planet => {
  useGLTF.preload(`assets/planets/${planet}.glb`);
});