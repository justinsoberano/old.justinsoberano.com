import { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated, SpringValues } from "@react-spring/three";
import { useThree } from "@react-three/fiber";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

/* Turn the functions to ternary notations for cleaner code */
/* possibly create the useSpring functions in a separate global file */

/* In all of the letters, remove the dY position */

const PositionSpring = (
    mX: number,
    mY: number,
    mZ: number,
    dX: number,
    dY: number,
    dZ: number
    ): SpringValues<{ position: [number, number, number]}> => {
    
    const {viewport} = useThree();
    const desktopY = 0.475 - viewport.aspect * 0.75;
    const isWide = viewport.aspect >= 0.7;

    return useSpring({
        to: isWide ? 
            { position: [dX, desktopY, dZ] as [number, number, number]} : 
            { position: [mX, mY, mZ] as [number, number, number]},
        config: {mass: 2, tension: 300, friction: 50},
        delay: 1000
    });
}

const ScaleSpring = () : SpringValues<{ scale: [number, number, number]}> => {
    const {viewport} = useThree();
    const mobileScale = 0.5;
    const desktopScale = (viewport.aspect >= 1.15) ? 1.2 : 0.8 - (viewport.aspect * 0.2);

    const isWide = viewport.aspect >= 0.7;
    return useSpring({
        from: { scale: [0, 0, 0] as [number, number, number]},
        to: isWide ? 
            { scale: [desktopScale, 0.3, desktopScale] as [number, number, number]} :
            { scale: [mobileScale, 0.2, mobileScale] as [number, number, number]},
        config: { mass: 5, tension: 500, friction: 50},
        delay: 2500
    });
}

/* SOBERANO */
export function LastLetterS(props: any) {
    const meshS = useRef<THREE.Mesh>(null);
    const {viewport} = useThree();
    const position = PositionSpring(-viewport.aspect * 3.6, -1.4, -1, 
                                    -viewport.aspect * 2.8, (0.475 - viewport.aspect * 0.5), -3);
    const scale = ScaleSpring();

    const { nodes, materials } = useGLTF("assets/letters/bit_s.gltf") as unknown as GLTF & {nodes: {S: {geometry: THREE.BufferGeometry}}, materials: {White: THREE.MeshStandardMaterial}};

    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.S.geometry}
                material={materials.White}
                position={position.position}
                rotation={[Math.PI/2 , 0 , 0]}
                scale={scale.scale}
                ref={meshS}
            />
        </group>
    );
}

export function LastLetterO1(props: any) {
    const { viewport } = useThree();
    const position = PositionSpring(-viewport.aspect * 2.63, -1.4, -1,
                                    -viewport.aspect * 2, (0.475 - viewport.aspect * 0.3), -3);
    const scale = ScaleSpring();

    const { nodes, materials } = useGLTF("assets/letters/bit_o.gltf") as unknown as GLTF & {nodes: {O: {geometry: THREE.BufferGeometry}}, materials: {White: THREE.MeshStandardMaterial}};

    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.O.geometry}
                material={materials.White}
                position={position.position}
                rotation={[Math.PI / 2, 0, 0]}
                scale={scale.scale}
            />
        </group>
    );
}

export function LastLetterB(props: any) {
    const { viewport } = useThree();
    const position = PositionSpring(-viewport.aspect * 1.65, -1.4, -1,
        -viewport.aspect * 1.2, (0.475 - viewport.aspect * 0.3), -3);
    const scale = ScaleSpring();

    const { nodes, materials } = useGLTF("assets/letters/bit_b.gltf") as unknown as GLTF & { nodes: { B: { geometry: THREE.BufferGeometry } }, materials: { White: THREE.MeshStandardMaterial } };

    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.B.geometry}
                material={materials.White}
                position={position.position}
                rotation={[Math.PI / 2, 0, 0]}
                scale={scale.scale}            
            />
        </group>
    );
}
export function LastLetterE(props: any) {
    const { viewport } = useThree();
    const position = PositionSpring(-viewport.aspect / 1.45, -1.4, -1,
        -viewport.aspect / 2.1, (0.475 - viewport.aspect * 0.3), -3);
    const scale = ScaleSpring();

    const { nodes, materials } = useGLTF("assets/letters/bit_e.gltf") as unknown as GLTF & { nodes: { E: { geometry: THREE.BufferGeometry } }, materials: { White: THREE.MeshStandardMaterial } };

    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.E.geometry}
                material={materials.White}
                position={position.position}
                rotation={[Math.PI / 2, 0, 0]}
                scale={scale.scale}            
            />
        </group>
    );
}
export function LastLetterR(props: any) {
    const { viewport } = useThree();
    const position = PositionSpring(viewport.aspect / 4, -1.4, -1,
        viewport.aspect / 4, (0.475 - viewport.aspect * 0.3), -3);
    const scale = ScaleSpring();

    const { nodes, materials } = useGLTF("assets/letters/bit_r.gltf") as unknown as GLTF & { nodes: { R: { geometry: THREE.BufferGeometry } }, materials: { White: THREE.MeshStandardMaterial } };

    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.R.geometry}
                material={materials.White}
                position={position.position}
                rotation={[Math.PI / 2, 0, 0]}
                scale={scale.scale}            
            />
        </group>
    );
}
export function LastLetterA(props: any) {
    const { viewport } = useThree();
    const position = PositionSpring(viewport.aspect * 1.2, -1.4, -1,
        viewport.aspect, (0.475 - viewport.aspect * 0.3), -3);
    const scale = ScaleSpring();

    const { nodes, materials } = useGLTF("assets/letters/bit_a.gltf") as unknown as GLTF & { nodes: { A: { geometry: THREE.BufferGeometry } }, materials: { White: THREE.MeshStandardMaterial } };

    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.A.geometry}
                material={materials.White}
                position={position.position}
                rotation={[Math.PI / 2, 0, 0]}
                scale={scale.scale}            
            />
        </group>
    );
}
export function LastLetterN(props: any) {
    const { viewport } = useThree();
    const position = PositionSpring(viewport.aspect * 2.2, -1.4, -1,
        viewport.aspect * 1.75, (0.475 - viewport.aspect * 0.3), -3);
    const scale = ScaleSpring();

    const { nodes, materials } = useGLTF("assets/letters/bit_n.gltf") as unknown as GLTF & { nodes: { N: { geometry: THREE.BufferGeometry } }, materials: { White: THREE.MeshStandardMaterial } };

    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.N.geometry}
                material={materials.White}
                position={position.position}
                rotation={[Math.PI / 2, 0, 0]}
                scale={scale.scale}           
            />
        </group>
    );
}

export function LastLetterO2(props: any) {
    const { viewport } = useThree();
    const position = PositionSpring(viewport.aspect * 3.2, -1.4, -1,
        viewport.aspect * 2.5, (0.475 - viewport.aspect * 0.3), -3);
    const scale = ScaleSpring();

    const { nodes, materials } = useGLTF("assets/letters/bit_o.gltf") as unknown as GLTF & { nodes: { O: { geometry: THREE.BufferGeometry } }, materials: { White: THREE.MeshStandardMaterial } };

    return (
        <group {...props} dispose={null}>
            <animated.mesh
                castShadow
                receiveShadow
                geometry={nodes.O.geometry}
                material={materials.White}
                position={position.position}
                rotation={[Math.PI / 2, 0, 0]}
                scale={scale.scale}            
            />
        </group>
    );
}


useGLTF.preload("assets/letters/bit_s.gltf");
useGLTF.preload("assets/letters/bit_o.gltf");
useGLTF.preload("assets/letters/bit_b.gltf");
useGLTF.preload("assets/letters/bit_e.gltf");
useGLTF.preload("assets/letters/bit_r.gltf");
useGLTF.preload("assets/letters/bit_a.gltf");