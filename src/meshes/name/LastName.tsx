import { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated, SpringValues } from "@react-spring/three";
import { useThree } from "@react-three/fiber";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

/* // TODO: Create the useSpring functions in a separate global file for both first
			and last names. */
/* // TODO: In all of the letters, remove the dY position */

// Define a function to create a position spring animation
const PositionSpring = (
	mX: number, // Mobile X position
	mY: number, // Mobile Y position
	mZ: number, // Mobile Z position
	dX: number, // Desktop X position
	dY: number, // Desktop Y position
	dZ: number  // Desktop Z position
): SpringValues<{ position: [number, number, number] }> => {
	const { viewport } = useThree(); // Get the viewport details using useThree hook

	// Calculate desktop Y position based on the aspect ratio
	const desktopY = 0.475 - viewport.aspect * 0.75;
	// Determine if the viewport is wide (aspect ratio >= 1)
	const isWide = viewport.aspect >= 1;

	// Return the useSpring hook to create a spring animation for position
	return useSpring({
		to: isWide
			// If the viewport is wide, use desktop positions
			? { position: [dX, desktopY, dZ] as [number, number, number] }
			// Otherwise, use mobile positions
			: { position: [mX, mY, mZ] as [number, number, number] },
		// Define spring configuration with mass, tension, and friction
		config: { mass: 2, tension: 300, friction: 50 },
		// Add a delay before the animation starts
		delay: 1000,
	});
};

// Define a function to create a scale spring animation
const ScaleSpring = (): SpringValues<{ scale: [number, number, number] }> => {
	const { viewport } = useThree(); // Get the viewport details using useThree hook

	// Define mobile scale
	const mobileScale = 0.5;
	// Calculate desktop scale based on the aspect ratio
	const desktopScale =
		viewport.aspect >= 1.15 ? 1.2 : 0.8 - viewport.aspect * 0.2;

	// Determine if the viewport is wide (aspect ratio >= 1)
	const isWide = viewport.aspect >= 1;

	// Return the useSpring hook to create a spring animation for scale
	return useSpring({
		from: { scale: [0, 0, 0] as [number, number, number] }, // Initial scale
		to: isWide
			// If the viewport is wide, use desktop scale
			? { scale: [desktopScale, 0.3, desktopScale] as [number, number, number] }
			// Otherwise, use mobile scale
			: { scale: [mobileScale, 0.2, mobileScale] as [number, number, number] },
		// Define spring configuration with mass, tension, and friction
		config: { mass: 5, tension: 500, friction: 50 },
		// Add a delay before the animation starts
		delay: 2500,
	});
};

/* SOBERANO */
export function LastLetterS(props: any) {
	const meshS = useRef<THREE.Mesh>(null);
	const { viewport } = useThree();
	const position = PositionSpring(
		-viewport.aspect * 3.6,
		-1.4,
		-1,
		-viewport.aspect * 2.8,
		0.475 - viewport.aspect * 0.5,
		-3
	);
	const scale = ScaleSpring();

	const { nodes, materials } = useGLTF(
		"assets/letters/bit_s.gltf"
	) as unknown as GLTF & {
		nodes: { S: { geometry: THREE.BufferGeometry } };
		materials: { White: THREE.MeshStandardMaterial };
	};

	materials.White.emissive = new THREE.Color(0xffffff);
	materials.White.emissiveIntensity = 0.2;

	return (
		<group {...props} dispose={null}>
			<animated.mesh
				castShadow
				receiveShadow
				geometry={nodes.S.geometry}
				material={materials.White}
				position={position.position}
				rotation={[Math.PI / 2, 0, 0]}
				scale={scale.scale}
				ref={meshS}
			/>
		</group>
	);
}

export function LastLetterO1(props: any) {
	const { viewport } = useThree();
	const position = PositionSpring(
		-viewport.aspect * 2.63,
		-1.4,
		-1,
		-viewport.aspect * 2,
		0.475 - viewport.aspect * 0.3,
		-3
	);
	const scale = ScaleSpring();

	const { nodes, materials } = useGLTF(
		"assets/letters/bit_o.gltf"
	) as unknown as GLTF & {
		nodes: { O: { geometry: THREE.BufferGeometry } };
		materials: { White: THREE.MeshStandardMaterial };
	};

	materials.White.emissive = new THREE.Color(0xffffff);
	materials.White.emissiveIntensity = 0.2;

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
	const position = PositionSpring(
		-viewport.aspect * 1.65,
		-1.4,
		-1,
		-viewport.aspect * 1.2,
		0.475 - viewport.aspect * 0.3,
		-3
	);
	const scale = ScaleSpring();

	const { nodes, materials } = useGLTF(
		"assets/letters/bit_b.gltf"
	) as unknown as GLTF & {
		nodes: { B: { geometry: THREE.BufferGeometry } };
		materials: { White: THREE.MeshStandardMaterial };
	};

	materials.White.emissive = new THREE.Color(0xffffff);
	materials.White.emissiveIntensity = 0.2;

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
	const position = PositionSpring(
		-viewport.aspect / 1.45,
		-1.4,
		-1,
		-viewport.aspect / 2.1,
		0.475 - viewport.aspect * 0.3,
		-3
	);
	const scale = ScaleSpring();

	const { nodes, materials } = useGLTF(
		"assets/letters/bit_e.gltf"
	) as unknown as GLTF & {
		nodes: { E: { geometry: THREE.BufferGeometry } };
		materials: { White: THREE.MeshStandardMaterial };
	};

	materials.White.emissive = new THREE.Color(0xffffff);
	materials.White.emissiveIntensity = 0.2;

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
	const position = PositionSpring(
		viewport.aspect / 4,
		-1.4,
		-1,
		viewport.aspect / 4,
		0.475 - viewport.aspect * 0.3,
		-3
	);
	const scale = ScaleSpring();

	const { nodes, materials } = useGLTF(
		"assets/letters/bit_r.gltf"
	) as unknown as GLTF & {
		nodes: { R: { geometry: THREE.BufferGeometry } };
		materials: { White: THREE.MeshStandardMaterial };
	};

	materials.White.emissive = new THREE.Color(0xffffff);
	materials.White.emissiveIntensity = 0.2;

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
	const position = PositionSpring(
		viewport.aspect * 1.2,
		-1.4,
		-1,
		viewport.aspect,
		0.475 - viewport.aspect * 0.3,
		-3
	);
	const scale = ScaleSpring();

	const { nodes, materials } = useGLTF(
		"assets/letters/bit_a.gltf"
	) as unknown as GLTF & {
		nodes: { A: { geometry: THREE.BufferGeometry } };
		materials: { White: THREE.MeshStandardMaterial };
	};

	materials.White.emissive = new THREE.Color(0xffffff);
	materials.White.emissiveIntensity = 0.2;

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
	const position = PositionSpring(
		viewport.aspect * 2.2,
		-1.4,
		-1,
		viewport.aspect * 1.75,
		0.475 - viewport.aspect * 0.3,
		-3
	);
	const scale = ScaleSpring();

	const { nodes, materials } = useGLTF(
		"assets/letters/bit_n.gltf"
	) as unknown as GLTF & {
		nodes: { N: { geometry: THREE.BufferGeometry } };
		materials: { White: THREE.MeshStandardMaterial };
	};

	materials.White.emissive = new THREE.Color(0xffffff);
	materials.White.emissiveIntensity = 0.2;

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
	const position = PositionSpring(
		viewport.aspect * 3.2,
		-1.4,
		-1,
		viewport.aspect * 2.5,
		0.475 - viewport.aspect * 0.3,
		-3
	);
	const scale = ScaleSpring();

	const { nodes, materials } = useGLTF(
		"assets/letters/bit_o.gltf"
	) as unknown as GLTF & {
		nodes: { O: { geometry: THREE.BufferGeometry } };
		materials: { White: THREE.MeshStandardMaterial };
	};

	materials.White.emissive = new THREE.Color(0xffffff);
	materials.White.emissiveIntensity = 0.2;

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
