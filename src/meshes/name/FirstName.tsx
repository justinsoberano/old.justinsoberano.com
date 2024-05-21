import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated, SpringValues } from "@react-spring/three";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { randFloat, randInt } from "three/src/math/MathUtils";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

// Function to create a position spring animation
const PositionSpring = (
	pX: number, // Initial X position
	pY: number, // Initial Y position
	pZ: number, // Initial Z position
	newX: number, // Target X position
	delay: number // Delay before the animation starts
): SpringValues<{ position: [number, number, number] }> => {
	// Get the viewport from useThree hook to determine the aspect ratio
	const { viewport } = useThree();
	const isWide = viewport.aspect >= 1; // Check if the viewport is wide (desktop)

	// Create a spring animation for position
	return useSpring({
		from: { position: [0, 0, 7] as [number, number, number] }, // Initial position
		to: isWide
			? [{ position: [pX, pY, pZ] }, { position: [newX, 0, -1] }] // Desktop target positions
			: [{ position: [pX, pY, pZ] }, { position: [newX * 2.1, 0, -3] }], // Mobile target positions
		delay: delay, // Animation delay
		config: {
			mass: 4,
			tension: isWide ? 200 : 100, // Different tension for desktop and mobile
			friction: isWide ? 70 : 40, // Different friction for desktop and mobile
		},
	});
};

// Function to create a rotation spring animation
const RotationSpring = (
	rX: number, // Initial X rotation
	rY: number, // Initial Y rotation
	rZ: number, // Initial Z rotation
	mass: number, // Mass of the spring
	tension: number, // Tension of the spring
	friction: number, // Friction of the spring
	delay: number // Delay before the animation starts
): SpringValues<{ rotation: [number, number, number] }> => {
	// Create a spring animation for rotation
	return useSpring({
		from: { rotation: [0, 0, 0] as [number, number, number] }, // Initial rotation
		to: [{ rotation: [rX, rY, rZ] }, { rotation: [Math.PI / 2, 0, 0] }], // Target rotations
		delay: delay, // Animation delay
		config: { mass: mass, tension: tension, friction: friction }, // Spring configuration
	});
};

// Function to create a scale spring animation
const ScaleSpring = (
	delay: number // Delay before the animation starts
): SpringValues<{ scale: [number, number, number] }> => {
	// Get the viewport from useThree hook to determine the aspect ratio
	const { viewport } = useThree();
	const desktopScale = viewport.aspect; // Scale factor for desktop
	const mobileScale = 1.1; // Scale factor for mobile
	const isWide = viewport.aspect >= 1; // Check if the viewport is wide (desktop)

	// Create a spring animation for scale
	return useSpring({
		from: { scale: [0, 1, 0] as [number, number, number] }, // Initial scale
		to: {
			scale: isWide
				? [desktopScale, 0.7, desktopScale] // Target scale for desktop
				: [mobileScale, 0.5, mobileScale], // Target scale for mobile
		},
		delay: delay, // Animation delay
		config: { mass: 2, tension: 200, friction: 50 }, // Spring configuration
	});
};

// Function to create a floating animation for a 3D mesh
const FloatAnimation = (
	mesh: React.RefObject<THREE.Mesh | undefined>, // Reference to the 3D mesh
	a: (x: number) => number, // Function to control Z rotation
	b: (x: number) => number, // Function to control Y rotation
	c: (x: number) => number // Function to control Y position
) => {
	// Generate random values for rotation and position changes
	const rotationZ = randInt(0, 5) / 3000;
	const rotationY = randInt(0, 10) / 30000;
	const positionY = randInt(0, 10) / 30000;
	const multiplier = randFloat(0.3, 1);

	// Create an animation loop using useFrame
	return useFrame(({ clock }) => {
		if (mesh.current) {
			mesh.current.rotation.z += a(clock.getElapsedTime()) * rotationZ;
			mesh.current.rotation.y += b(clock.getElapsedTime()) * rotationY;
			mesh.current.position.y += c(clock.getElapsedTime() * multiplier) * positionY;
		}
	});
};

// Export a functional component to render the letter "J"
export function LetterJ(props: any) {
	const JMesh = useRef<THREE.Mesh>(null); // Create a reference to the "J" mesh
	const { viewport } = useThree(); // Get the viewport from useThree hook to determine the aspect ratio

	// Define position animation for the "J" mesh
	const positionAnimation = PositionSpring(
		-viewport.aspect * 2.5, // Initial X position
		0, // Initial Y position
		0, // Initial Z position
		-viewport.aspect * 2.1, // Target X position
		0 // Delay before the animation starts
	);

	// Define rotation animation for the "J" mesh
	const rotationAnimation = RotationSpring(
		Math.PI / 2, // Initial X rotation
		0.6, // Initial Y rotation
		6, // Initial Z rotation
		3.5, // Mass of the spring
		200, // Tension of the spring
		50, // Friction of the spring
		0 // Delay before the animation starts
	);

	// Define scale animation for the "J" mesh
	const scale = ScaleSpring(0); // Delay before the scale animation starts

	// Apply floating animation to the "J" mesh
	FloatAnimation(JMesh, Math.cos, Math.sin, Math.sin);

	// Load the geometry for the letter "J" from a GLTF file
	const { nodes } = useGLTF("assets/letters/bit_j.gltf") as unknown as GLTF & {
		nodes: { J: { geometry: THREE.BufferGeometry } };
	};

	return (
		// Return a group containing the animated "J" mesh
		<group {...props} dispose={null}>
			<animated.mesh
				castShadow
				receiveShadow
				geometry={nodes.J.geometry} // Use the loaded geometry for the "J" mesh
				material={new THREE.MeshNormalMaterial()} // Apply a normal material to the mesh
				position={positionAnimation.position} // Apply position animation
				rotation={rotationAnimation.rotation as unknown as THREE.Euler} // Apply rotation animation
				ref={JMesh} // Attach the reference to the mesh
				scale={scale.scale} // Apply scale animation
			/>
		</group>
	);
}

export function LetterU(props: any) {
	const UMesh = useRef<THREE.Mesh>(null);
	const { viewport } = useThree();
	const positionAnimation = PositionSpring(
		-viewport.aspect * 1.5,
		-viewport.aspect * 1.6,
		0,
		-viewport.aspect * 1.2,
		100
	);
	const rotationAnimation = RotationSpring(
		Math.PI / 4,
		-0.4,
		3,
		3.5,
		200,
		50,
		100
	);
	const scale = ScaleSpring(100);
	FloatAnimation(UMesh, Math.cos, Math.cos, Math.cos);

	const { nodes } = useGLTF("assets/letters/bit_u.gltf") as unknown as GLTF & {
		nodes: { U: { geometry: THREE.BufferGeometry } };
	};
	return (
		<group {...props} dispose={null}>
			<animated.mesh
				castShadow
				receiveShadow
				geometry={nodes.U.geometry}
				material={new THREE.MeshNormalMaterial()}
				position={positionAnimation.position}
				rotation={rotationAnimation.rotation as unknown as THREE.Euler}
				scale={scale.scale}
				ref={UMesh}
			/>
		</group>
	);
}

export function LetterS(props: any) {
	const SMesh = useRef<THREE.Mesh>(null);
	const { viewport } = useThree();
	const positionAnimation = PositionSpring(
		-viewport.aspect,
		viewport.aspect,
		-0.5,
		-viewport.aspect / 2.8,
		200
	);
	const rotationAnimation = RotationSpring(
		Math.PI / 1.5,
		0,
		-1,
		3.5,
		200,
		55,
		0
	);
	const scale = ScaleSpring(200);
	FloatAnimation(SMesh, Math.cos, Math.cos, Math.cos);

	const { nodes } = useGLTF("assets/letters/bit_s.gltf") as unknown as GLTF & {
		nodes: { S: { geometry: THREE.BufferGeometry } };
	};
	return (
		<group {...props} dispose={null}>
			<animated.mesh
				castShadow
				receiveShadow
				geometry={nodes.S.geometry}
				material={new THREE.MeshNormalMaterial()}
				position={positionAnimation.position}
				rotation={rotationAnimation.rotation as unknown as THREE.Euler}
				scale={scale.scale}
				ref={SMesh}
			/>
		</group>
	);
}

export function LetterT(props: any) {
	const TMesh = useRef<THREE.Mesh>(null);
	const { viewport } = useThree();
	const positionAnimation = PositionSpring(
		viewport.aspect * 1.2,
		viewport.aspect * 1.2,
		0,
		viewport.aspect / 2.2,
		300
	);
	const rotationAnimation = RotationSpring(
		Math.PI / 1.3,
		0,
		1,
		2,
		200,
		50,
		200
	);
	const scale = ScaleSpring(200);
	FloatAnimation(TMesh, Math.sin, Math.sin, Math.cos);

	const { nodes } = useGLTF("assets/letters/bit_t.gltf") as unknown as GLTF & {
		nodes: { T: { geometry: THREE.BufferGeometry } };
	};
	return (
		<group {...props} dispose={null}>
			<animated.mesh
				castShadow
				receiveShadow
				geometry={nodes.T.geometry}
				material={new THREE.MeshNormalMaterial()}
				position={positionAnimation.position}
				rotation={rotationAnimation.rotation as unknown as THREE.Euler}
				scale={scale.scale}
				ref={TMesh}
			/>
		</group>
	);
}

export function LetterI(props: any) {
	const IMesh = useRef<THREE.Mesh>(null);
	const { viewport } = useThree();
	const positionAnimation = PositionSpring(
		viewport.aspect * 2,
		-viewport.aspect,
		0,
		viewport.aspect * 1.12,
		400
	);
	const rotationAnimation = RotationSpring(
		Math.PI / 3,
		0.4,
		1,
		3.5,
		200,
		50,
		430
	);
	const scale = ScaleSpring(300);
	FloatAnimation(IMesh, Math.sin, Math.sin, Math.sin);

	const { nodes } = useGLTF("assets/letters/bit_i.gltf") as unknown as GLTF & {
		nodes: { I: { geometry: THREE.BufferGeometry } };
	};
	return (
		<group {...props} dispose={null}>
			<animated.mesh
				castShadow
				receiveShadow
				geometry={nodes.I.geometry}
				material={new THREE.MeshNormalMaterial()}
				position={positionAnimation.position}
				rotation={rotationAnimation.rotation as unknown as THREE.Euler}
				scale={scale.scale}
				ref={IMesh}
			/>
		</group>
	);
}

export function LetterN(props: any) {
	const NMesh = useRef<THREE.Mesh>(null);
	const { viewport } = useThree();
	const positionAnimation = PositionSpring(
		viewport.aspect * 2.5,
		0.1,
		0,
		viewport.aspect * 1.85,
		500
	);
	const rotationAnimation = RotationSpring(
		Math.PI / 2,
		-0.5,
		1.2,
		3.5,
		200,
		50,
		550
	);
	const scale = ScaleSpring(400);
	FloatAnimation(NMesh, Math.sin, Math.sin, Math.cos);

	const { nodes } = useGLTF("assets/letters/bit_n.gltf") as unknown as GLTF & {
		nodes: { N: { geometry: THREE.BufferGeometry } };
	};
	return (
		<group {...props} dispose={null}>
			<animated.mesh
				castShadow
				receiveShadow
				geometry={nodes.N.geometry}
				material={new THREE.MeshNormalMaterial()}
				position={positionAnimation.position}
				rotation={rotationAnimation.rotation as unknown as THREE.Euler}
				scale={scale.scale}
				ref={NMesh}
			/>
		</group>
	);
}

useGLTF.preload("assets/letters/bit_j.gltf");
useGLTF.preload("assets/letters/bit_u.gltf");
useGLTF.preload("assets/letters/bit_s.gltf");
useGLTF.preload("assets/letters/bit_t.gltf");
useGLTF.preload("assets/letters/bit_i.gltf");
useGLTF.preload("assets/letters/bit_n.gltf");
