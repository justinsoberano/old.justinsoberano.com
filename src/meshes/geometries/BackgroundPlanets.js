import { useRef } from "react";
import { Sphere, Torus } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useThree, useFrame } from "@react-three/fiber";
import { AsteroidBelt } from "./AsteroidBelt";

const useRotation = (speed) => {
  const ref = useRef(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += speed.x;
      ref.current.rotation.y += speed.y;
    }
  });
  return ref;
};

const PointLightSpring = (delay, intensityTo) => {
  return useSpring({
    from: { intensity: 0 },
    to: { intensity: intensityTo },
    delay,
    config: { mass: 4, tension: 200, friction: 70 },
  });
};

const Planet = ({ position, scale, color, rotationSpeed = { x: 0.003, y: 0.003 }, segments = [12, 8] }) => {
  const ref = useRotation(rotationSpeed);
  return (
    <Sphere args={[1, ...segments]} position={position} scale={scale} ref={ref}>
      <meshStandardMaterial attach="material" color={color} />
    </Sphere>
  );
};

const Ring = ({ position, scale, rotation, color }) => {
  const ref = useRef(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z += 0.003;
      ref.current.rotation.y += Math.cos(clock.getElapsedTime()) * 0.0006;
    }
  });
  return (
    <Torus args={[1, 0.1, 10, 10]} rotation={rotation} position={position} scale={scale} ref={ref}>
      <meshStandardMaterial color={color} roughness={1} />
    </Torus>
  );
};

export function Planets() {
  const { viewport } = useThree();
  const isWide = viewport.aspect >= 1;
  const pointLightSpringAnimation = PointLightSpring(2300, 1);
  const secondPointLightSpringAnimation = PointLightSpring(2300, isWide ? 0 : 1);
  const planetGroupRef = useRef(null);
  
  useFrame(() => {
    if (planetGroupRef.current) {
      planetGroupRef.current.position.x = isWide ? -15 : -6;
    }
  });

  return (
    <group>
      <animated.pointLight position={[0, 10, -40]} intensity={pointLightSpringAnimation.intensity} distance={200} castShadow />
      <animated.pointLight position={[0, 0, -10]} intensity={secondPointLightSpringAnimation.intensity} distance={10} />
      
      <AsteroidBelt 
        radius={25} 
        asteroidCount={isWide ? 150 : 75} 
        yOffset={isWide ? 2 : 3} 
        width={isWide ? 25 : 20}
        minScale={0.25}
        maxScale={isWide ? 0.75 : 2}
        tilt={Math.PI / 7} 
      />
      
      <Planet position={[18, -6, -20]} scale={3} color="aqua" rotationSpeed={{ x: 0.001, y: 0.001 }} segments={[8, 6]} />
      <Planet position={[-10, -20, -20]} scale={10} color="hotpink" rotationSpeed={{ x: 0.001, y: 0.004 }} />
      <Planet position={[15, -10, -30]} scale={10} color="yellow" segments={[10, 6]} />
      
      <group ref={planetGroupRef}> 
        <Planet position={[0, 5.5, -12]} scale={4} color="lightblue" rotationSpeed={{ x: 0.003, y: 0.002 }} />
        <Planet position={[0, 5.5, -12]} scale={4} color="darkblue" segments={[12, 4]} />
        <Ring position={[0, 5.5, -12]} scale={6} rotation={[2, 3.4, 0]} color="blue" />
      </group>
      
      <Planet position={[15, -10, -30]} scale={10} color="orange" />
      <Planet position={[18, -6, -20]} scale={3} color="blue" />
      <Planet position={[-10, -20, -20]} scale={10} color="purple" />
      <Ring position={[15, -10, -30]} scale={15} rotation={[2, 2.6, 0]} color="purple" />

    </group>
  );
}