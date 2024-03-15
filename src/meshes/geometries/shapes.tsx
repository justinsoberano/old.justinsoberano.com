import React, { useRef } from "react";
import { Box, Sphere, Torus, useGLTF } from "@react-three/drei";
import { useSpring, animated, Spring } from "@react-spring/three";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { BufferGeometry } from "three";

const PointLightSprint = () => {
    return useSpring({
        from: { intensity: 0 },
        to: { intensity: 1 },
        delay: 2300,
        config: {mass :4, tension: 200, friction: 70}
    })
}

export function Planets() {

    const sphereRef = useRef<THREE.Object3D | undefined>();

    useFrame((state, delta) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.x += 0.003;
            sphereRef.current.rotation.y += 0.003;
        }
    });

    const sphereRefMini = useRef<THREE.Object3D | undefined>();

    useFrame((state, delta) => {
        if (sphereRefMini.current) {
            sphereRefMini.current.rotation.x += 0.001;
            sphereRefMini.current.rotation.y += 0.001;
        }
    });

    const sphereRefTwo = useRef<THREE.Object3D | undefined>();

    useFrame((state, delta) => {
        if (sphereRefTwo.current) {
            sphereRefTwo.current.rotation.x += 0.003;
            sphereRefTwo.current.rotation.y += 0.004;
        }
    });
    
    const pointLightSpringAnimation = PointLightSprint();

    const ringRef = useRef<THREE.Object3D | undefined>();
    useFrame((state, delta) => {
        if (ringRef.current) {
            ringRef.current.rotation.z += 0.003;
        }
    });

    return (
        <group>
            <animated.pointLight position={[0, 10, -40]} intensity={pointLightSpringAnimation.intensity} distance={200}/>
            
            <Sphere args={[1, 10, 6]} position={[15, -10, -30]} scale={10}>
                <meshStandardMaterial attach="material" color={"yellow"}/>
            </ Sphere>

            <Sphere args={[1, 8, 6]} position={[18, -6, -20]} scale={3}>
                <meshStandardMaterial attach="material" color={"aqua"}/>
            </ Sphere>

            <Sphere args={[1, 12, 8]} position={[-10, -20, -20]} scale={10}>
                <meshStandardMaterial attach="material" color={"hotpink"}/>
            </ Sphere>

            <Sphere args={[1, 10, 6]} position={[15, -10, -30]} scale={10} ref={
                sphereRef as React.MutableRefObject<THREE.Mesh<BufferGeometry<THREE.NormalBufferAttributes>, 
                THREE.Material | THREE.Material[], THREE.Object3DEventMap> | null>}>
                <meshStandardMaterial attach="material" color={"orange"}/>
            </ Sphere>

            <Sphere args={[1, 8, 6]} position={[18, -6, -20]} scale={3} ref={
                sphereRefMini as React.MutableRefObject<THREE.Mesh<BufferGeometry<THREE.NormalBufferAttributes>, 
                THREE.Material | THREE.Material[], THREE.Object3DEventMap> | null>}>
                <meshStandardMaterial attach="material" color={"blue"}/>
            </ Sphere>

            <Sphere args={[1, 12, 8]} position={[-10, -20, -20]} scale={10} ref={
                sphereRefTwo as React.MutableRefObject<THREE.Mesh<BufferGeometry<THREE.NormalBufferAttributes>, 
                THREE.Material | THREE.Material[], THREE.Object3DEventMap> | null>}>
                <meshStandardMaterial attach="material" color={"purple"}/>
            </ Sphere>

            <Torus args={[1, 0.1, 10, 10]} rotation={[2, 2.6, 0]} position={[15, -10, -30]} scale={15} ref={
                ringRef as React.MutableRefObject<THREE.Mesh<BufferGeometry<THREE.NormalBufferAttributes>, 
                THREE.Material | THREE.Material[], THREE.Object3DEventMap> | null>}>
                <meshStandardMaterial attach="material" color={"purple"}/>
            </Torus>

        </group>
    )
} 
