import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated, SpringValues } from "@react-spring/three";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { randFloat, randInt } from "three/src/math/MathUtils";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

const PositionSpring = (
	pX: number,
	pY: number,
	pZ: number,
	newX: number,
	delay: number
): SpringValues<{ position: [number, number, number] }> => {
	const { viewport } = useThree();
	const isWide = viewport.aspect >= 1;

	return useSpring({
		from: { position: [0, 0, 7] as [number, number, number] },
		to: isWide
			? [{ position: [pX, pY, pZ] }, { position: [newX, 0, -1] }]
			: [{ position: [pX, pY, pZ] }, { position: [newX * 2.1, 0, -3] }],
		delay: delay,
		config: {
			mass: 4,
			tension: isWide ? 200 : 100,
			friction: isWide ? 70 : 40,
		},
	});
};

const RotationSpring = (
	rX: number,
	rY: number,
	rZ: number,
	mass: number,
	tension: number,
	friction: number,
	delay: number
): SpringValues<{ rotation: [number, number, number] }> => {
	return useSpring({
		from: { rotation: [0, 0, 0] as [number, number, number] },
		to: [{ rotation: [rX, rY, rZ] }, { rotation: [Math.PI / 2, 0, 0] }],
		delay: delay,
		config: { mass: mass, tension: tension, friction: friction },
	});
};

const ScaleSpring = (
	delay: number
): SpringValues<{ scale: [number, number, number] }> => {
	const { viewport } = useThree();
	const desktopScale = viewport.aspect;
	const mobileScale = 1.1;
	const isWide = viewport.aspect >= 1;

	return useSpring({
		from: { scale: [0, 1, 0] as [number, number, number] },
		to: {
			scale: isWide
				? [desktopScale, 0.7, desktopScale]
				: [mobileScale, 0.5, mobileScale],
		},
		delay: delay,
		config: { mass: 2, tension: 200, friction: 50 },
	});
};

const FloatAnimation = (
	mesh: React.RefObject<THREE.Mesh | undefined>,
	a: (x: number) => number,
	b: (x: number) => number,
	c: (x: number) => number
) => {
	const rotationZ = randInt(0, 5) / 3000;
	const rotationY = randInt(0, 10) / 30000;
	const positionY = randInt(0, 10) / 30000;
	const multiplier = randFloat(0.3, 1);

	return useFrame(({ clock }) => {
		if (mesh.current) {
			mesh.current.rotation.z += a(clock.getElapsedTime()) * rotationZ;
			mesh.current.rotation.y += b(clock.getElapsedTime()) * rotationY;
			mesh.current.position.y +=
				c(clock.getElapsedTime() * multiplier) * positionY;
		}
	});
};

export function LetterJ(props: any) {
	const JMesh = useRef<THREE.Mesh>(null);
	const { viewport } = useThree();

	const positionAnimation = PositionSpring(
		-viewport.aspect * 2.5,
		0,
		0,
		-viewport.aspect * 2.1,
		0
	);

	const rotationAnimation = RotationSpring(
		Math.PI / 2,
		0.6,
		6,
		3.5,
		200,
		50,
		0
	);

	const scale = ScaleSpring(0);

	FloatAnimation(JMesh, Math.cos, Math.sin, Math.sin);

	const { nodes } = useGLTF("assets/letters/bit_j.gltf") as unknown as GLTF & {
		nodes: { J: { geometry: THREE.BufferGeometry } };
	};

	return (
		<group {...props} dispose={null}>
			<animated.mesh
				castShadow
				receiveShadow
				geometry={nodes.J.geometry}
				material={new THREE.MeshNormalMaterial()}
				position={positionAnimation.position}
				rotation={rotationAnimation.rotation as unknown as THREE.Euler}
				ref={JMesh}
				scale={scale.scale}
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
