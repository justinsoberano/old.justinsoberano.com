import { useRef } from "react";
import { Icosahedron } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Asteroid = ({ radius, angle, yOffset, scale, initialRotation }) => {
  const meshRef = useRef();
  const orbitRef = useRef(angle);

  const rotationSpeed = {
    x: (Math.random() - 0.5) * 0.02,
    y: (Math.random() - 0.5) * 0.02,
    z: (Math.random() - 0.5) * 0.02
  };

  useFrame(({ clock }) => {
    if (meshRef.current) {
      orbitRef.current += 0.001;
      const x = Math.cos(orbitRef.current) * radius;
      const z = Math.sin(orbitRef.current) * radius;
      
      meshRef.current.position.x = x;
      meshRef.current.position.z = z;

      meshRef.current.rotation.x += rotationSpeed.x;
      meshRef.current.rotation.y += rotationSpeed.y;
      meshRef.current.rotation.z += rotationSpeed.z;
    }
  });

  const initialX = Math.cos(angle) * radius;
  const initialZ = Math.sin(angle) * radius;

  return (
    <Icosahedron
      ref={meshRef}
      args={[1, 0]} 
      position={[initialX, yOffset, initialZ]}
      rotation={[initialRotation.x, initialRotation.y, initialRotation.z]}
      scale={scale}
    >
      <meshStandardMaterial
        color="#666666"
        roughness={0.8}
        metalness={0.2}
        flatShading={true}
      />
    </Icosahedron>
  );
};

export const AsteroidBelt = ({ 
  radius = 20,       
  asteroidCount = 100,
  yOffset = 0,        
  width = 4,       
  minScale = 0.2,      
  maxScale = 0.6,      
  tilt = Math.PI / 5.14 
}) => {
  const beltRef = useRef();

  return (
    <group 
      ref={beltRef}
      rotation={[0, 0, tilt]}
    >
      {Array.from({ length: asteroidCount }).map((_, i) => {
        const angle = (i / asteroidCount) * Math.PI * 2;
        const radiusVariation = radius + (Math.random() - 0.5) * width;
        const scale = minScale + Math.random() * (maxScale - minScale);
        
        const initialRotation = {
          x: Math.random() * Math.PI * 2,
          y: Math.random() * Math.PI * 2,
          z: Math.random() * Math.PI * 2
        };

        return (
          <Asteroid
            key={i}
            radius={radiusVariation}
            angle={angle}
            yOffset={yOffset}
            scale={scale}
            initialRotation={initialRotation}
          />
        );
      })}
    </group>
  );
};