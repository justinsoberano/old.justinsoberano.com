import React, { useRef } from "react";
import { Sphere, Torus } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { BufferGeometry } from "three";

// TODO: Reformat and clean file asappp

const PointLightSpring = () => {
	return useSpring({
		from: { intensity: 0 },
		to: { intensity: 1 },
		delay: 2300,
		config: { mass: 4, tension: 200, friction: 70 },
	});
};

const SecondPointLightSpring = () => {
	const { viewport } = useThree();
	const isWide = viewport.aspect >= 1;
	return useSpring({
		from: { intensity: 0 },
		to: isWide ? { intensity: 0 } : { intensity: 1 },
		delay: 2300,
		config: { mass: 4, tension: 200, friction: 70 },
	});
};

export function Planets() {
	const { viewport } = useThree();

	const sphereRef = useRef<THREE.Object3D | undefined>();

	useFrame(() => {
		if (sphereRef.current) {
			sphereRef.current.rotation.x += 0.003;
			sphereRef.current.rotation.y += 0.003;
		}
	});

	const sphereRefMini = useRef<THREE.Object3D | undefined>();

	useFrame(() => {
		if (sphereRefMini.current) {
			sphereRefMini.current.rotation.x += 0.001;
			sphereRefMini.current.rotation.y += 0.001;
		}
	});

	const sphereRefTwo = useRef<THREE.Object3D | undefined>();
	useFrame(() => {
		if (sphereRefTwo.current) {
			sphereRefTwo.current.rotation.x += 0.003;
			sphereRefTwo.current.rotation.y += 0.004;
		}
	});

	const pointLightSpringAnimation = PointLightSpring();
	const secondPointLightSpringAnimation = SecondPointLightSpring();

	const ringRef = useRef<THREE.Object3D | undefined>();
	useFrame(({ clock }) => {
		if (ringRef.current) {
			ringRef.current.rotation.z += 0.003;
			ringRef.current.rotation.y += Math.cos(clock.getElapsedTime()) * 0.0006;
		}
	});

	const ringRef2 = useRef<THREE.Object3D | undefined>();
	const sphereRefThree = useRef<THREE.Object3D | undefined>();
	const sphereRefFour = useRef<THREE.Object3D | undefined>();
	useFrame(({ clock }) => {
		const isWide = viewport.aspect >= 1;

		if (sphereRefThree.current && ringRef2.current && sphereRefFour.current) {
			sphereRefThree.current.rotation.x += 0.002;
			sphereRefThree.current.rotation.y += 0.003;

			ringRef2.current.rotation.z += 0.002;
			ringRef2.current.rotation.y += Math.sin(clock.getElapsedTime()) * 0.0004;

			if (!isWide) {
				sphereRefThree.current.position.x = -6;
				sphereRefFour.current.position.x = -6;
				ringRef2.current.position.x = -6;
			} else {
				sphereRefThree.current.position.x = -15;
				sphereRefFour.current.position.x = -15;
				ringRef2.current.position.x = -15;
			}
		}
	});

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

			<Sphere args={[1, 10, 6]} position={[15, -10, -30]} scale={10} castShadow>
				<meshStandardMaterial attach="material" color={"yellow"} />
			</Sphere>

			<Sphere args={[1, 8, 6]} position={[18, -6, -20]} scale={3}>
				<meshStandardMaterial attach="material" color={"aqua"} />
			</Sphere>

			<Sphere args={[1, 12, 8]} position={[-10, -20, -20]} scale={10}>
				<meshStandardMaterial attach="material" color={"hotpink"} />
			</Sphere>

			{/* <Sphere args={[1, 12, 8]} position={[-16, 5, -14]} scale={2}>
                <meshStandardMaterial attach="material" color={"green"}/>
            </ Sphere> */}

			<Sphere
				args={[1, 12, 8]}
				position={[-15, 5.5, -12]}
				scale={4}
				ref={
					sphereRefFour as React.MutableRefObject<THREE.Mesh<
						BufferGeometry<THREE.NormalBufferAttributes>,
						THREE.Material | THREE.Material[],
						THREE.Object3DEventMap
					> | null>
				}
			>
				<meshStandardMaterial attach="material" color={"lightblue"} />
			</Sphere>

			<Sphere
				args={[1, 12, 4]}
				position={[-15, 5.5, -12]}
				scale={4}
				ref={
					sphereRefThree as React.MutableRefObject<THREE.Mesh<
						BufferGeometry<THREE.NormalBufferAttributes>,
						THREE.Material | THREE.Material[],
						THREE.Object3DEventMap
					> | null>
				}
			>
				<meshStandardMaterial attach="material" color={"darkblue"} />
			</Sphere>

			<Torus
				args={[1, 0.1, 10, 10]}
				rotation={[2, 3.4, 0]}
				position={[-15, 5.5, -12]}
				scale={6}
				ref={
					ringRef2 as React.MutableRefObject<THREE.Mesh<
						BufferGeometry<THREE.NormalBufferAttributes>,
						THREE.Material | THREE.Material[],
						THREE.Object3DEventMap
					> | null>
				}
			>
				<meshStandardMaterial color={"blue"} roughness={1} />
			</Torus>

			{/* <Sphere args={[1, 12, 8]} position={[-12, -4.2, -7]} scale={2}>
                <meshStandardMaterial attach="material" color={"green"}/>
            </ Sphere> */}

			<Sphere
				args={[1, 10, 6]}
				position={[15, -10, -30]}
				scale={10}
				ref={
					sphereRef as React.MutableRefObject<THREE.Mesh<
						BufferGeometry<THREE.NormalBufferAttributes>,
						THREE.Material | THREE.Material[],
						THREE.Object3DEventMap
					> | null>
				}
			>
				<meshStandardMaterial attach="material" color={"orange"} />
			</Sphere>

			<Sphere
				args={[1, 8, 6]}
				position={[18, -6, -20]}
				scale={3}
				ref={
					sphereRefMini as React.MutableRefObject<THREE.Mesh<
						BufferGeometry<THREE.NormalBufferAttributes>,
						THREE.Material | THREE.Material[],
						THREE.Object3DEventMap
					> | null>
				}
			>
				<meshStandardMaterial attach="material" color={"blue"} />
			</Sphere>

			<Sphere
				args={[1, 12, 8]}
				position={[-10, -20, -20]}
				scale={10}
				ref={
					sphereRefTwo as React.MutableRefObject<THREE.Mesh<
						BufferGeometry<THREE.NormalBufferAttributes>,
						THREE.Material | THREE.Material[],
						THREE.Object3DEventMap
					> | null>
				}
			>
				<meshStandardMaterial attach="material" color={"purple"} />
			</Sphere>

			<Torus
				args={[1, 0.1, 10, 10]}
				rotation={[2, 2.6, 0]}
				position={[15, -10, -30]}
				scale={15}
				ref={
					ringRef as React.MutableRefObject<THREE.Mesh<
						BufferGeometry<THREE.NormalBufferAttributes>,
						THREE.Material | THREE.Material[],
						THREE.Object3DEventMap
					> | null>
				}
				receiveShadow
			>
				<meshStandardMaterial
					attach="material"
					color={"purple"}
					roughness={0}
				/>
			</Torus>
		</group>
	);
}
