import React, { useRef } from "react";
import { Box, Sphere, Torus, useGLTF } from "@react-three/drei";
import { useSpring, animated, Spring } from "@react-spring/three";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const pointLightSpring = () => {
    return new useSpring({
        from: { intensity: 0 },
        to: { intensity: 1 },
        delay: 2300,
        config: {mass :4, tension: 200, friction: 70}
    })
}

export function Sphere_one() {

    const sphereRef = useRef();

    useFrame((state, delta) => {
      sphereRef.current.rotation.x += 0.003;
      sphereRef.current.rotation.y += 0.003;
    });

    const sphereRefMini = useRef();

    useFrame((state, delta) => {
      sphereRefMini.current.rotation.x += 0.001;
      sphereRefMini.current.rotation.y += 0.001;
    });

    const sphereRefTwo = useRef();

    useFrame((state, delta) => {
      sphereRefTwo.current.rotation.x += 0.003;
      sphereRefTwo.current.rotation.y += 0.004;
    });

    const pointLightRef = useRef();
    const pointLightSpringAnimation = pointLightSpring();

    const ringRef = useRef();
    useFrame((state, delta) => {
      ringRef.current.rotation.z += 0.003;
    });

    return (
        <group>

            <animated.pointLight position={[0, 10, -40]} intensity={pointLightSpringAnimation.intensity} distance={200}/>
            <Sphere args={[1, 12, 8]} position={[15, -10, -30]} scale={10} wireframe ref={sphereRef}>
                <meshStandardMaterial attach="material" color={"yellow"}/>
                {/* <meshNormalMaterial /> */}
            </ Sphere>

            <Sphere args={[1, 8, 6]} position={[18, -6, -20]} scale={3} wireframe ref={sphereRefMini}>
                <meshStandardMaterial attach="material" color={"aqua"}/>
                {/* <meshNormalMaterial /> */}
            </ Sphere>

            <Sphere args={[1, 12, 8]} position={[15, -10, -30]} scale={10} wireframe ref={sphereRef}>
                <meshStandardMaterial attach="material" color={"orange"}/>
                {/* <meshNormalMaterial /> */}
            </ Sphere>

            <Sphere args={[1, 8, 6]} position={[18, -6, -20]} scale={3} wireframe ref={sphereRefMini}>
                <meshStandardMaterial attach="material" color={"blue"}/>
                {/* <meshNormalMaterial /> */}
            </ Sphere>

            <Sphere args={[1, 12, 8]} position={[-10, -20, -20]} scale={10} wireframe>
                <meshStandardMaterial attach="material" color={"hotpink"}/>
                {/* <meshNormalMaterial /> */}
            </ Sphere>

            <Torus args={[1, 0.1, 10, 10]} rotation={[2, 2.6, 0]} position={[15, -10, -30]} scale={15} ref={ringRef}>
                <meshStandardMaterial attach="material" color={"purple"}/>
            </Torus>

            <Sphere args={[1, 12, 8]} position={[-10, -20, -20]} scale={10} wireframe ref={sphereRefTwo}> 
                <meshStandardMaterial attach="material" color={"purple"}/>
            </ Sphere>

        </group>
    )
} 
