import React, { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { Effects, Sphere, Stars, Plane, Fisheye, Hud, Cloud } from "@react-three/drei";
import { LetterI, LetterJ, LetterU, 
         LetterS, LetterT, LetterN } from "../../meshes/name/FirstName";
import { LastLetterO1, LastLetterS, LastLetterA, 
         LastLetterB, LastLetterE, LastLetterN, 
         LastLetterO2, LastLetterR } from "../../meshes/name/LastName";
import { FilmPass } from "/node_modules/three/examples/jsm/postprocessing/FilmPass.js";
import { GlitchPass } from "/node_modules/three/examples/jsm/postprocessing/GlitchPass.js";
import { UnrealBloomPass } from "/node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js";
import {LoadingScreen} from "../LoadingScreen"
import { Buttons } from "../Buttons";
import { Sphere_one } from "../../meshes/geometries/shapes";
import "../styles/canvas_stylesheet.css";

extend({ FilmPass, GlitchPass, UnrealBloomPass })

const CameraAnimation = () => {
    const [started, setStarted] = useState(false)
    const vec = new THREE.Vector3();
    const { viewport } = useThree();
    useEffect(() => {
        setTimeout(() => setStarted(true), 2000);
    });
    useFrame(state => {
        if (started) {
            if(viewport.aspect > 0.7) 
                state.camera.position.lerp(vec.set(0, -3, 7), .025);
            else if (viewport.aspect <= 0.7) 
                state.camera.position.lerp(vec.set(0, -4, 6), .025);
        }
    })
}

const audio = new Audio("/assets/audio/before_the_night.mp3");

export default function Background() {

    const [start, setStart] = useState(false)
    const [showSound, setShowSound] = useState(true)

    const pauseAudio = () => {
        audio.pause();
    }

    useEffect(() => {
        if(start) {
            audio.play();
        }
    }, [start]);

    return (
        <>
            <Canvas dpr={1}>
                <Stars radius={0.1} depth={30} count={2000} factor={0.7} saturation={2} fade speed={4} />
                <Suspense fallback={null}> {start && 
                    <>
                        <color attach={"background"} args={["rgb(0, 0, 0)"]} />
                        {/* <gridHelper args={[100, 100, 100]} rotation-x={Math.PI / 2} /> */}
                        <Lighting />
                        <FirstName />
                        <LastName />
                        <Sphere_one />
                        <CameraAnimation />
                    </>
                } </Suspense>
                <EffectsComposer />
            </Canvas>
            {start && <Buttons />}
            {start && showSound && <p className={'soundtext'}
            onClick={() => {pauseAudio(); setShowSound(false)}}> TURN SOUND OFF </p>}
            <LoadingScreen started={start} onStarted={() => setStart(true)} />
        </>
    );  
}

const FirstName = () => {
    return (
        <group>
            <LetterJ />
            <LetterU />
            <LetterS />
            <LetterT />
            <LetterI />
            <LetterN />
        </group>
    );
}

const LastName = () => {
    return(
        <group>
            <LastLetterS />
            <LastLetterO1 />
            <LastLetterB />
            <LastLetterE />
            <LastLetterR />
            <LastLetterA />
            <LastLetterN />
            <LastLetterO2 />
        </group>
    )
}

const Lighting = () => {
    return (
        <group>
            <ambientLight intensity={0} />
            <pointLight position={[0, 0, 0]} intensity={1} distance={20} />
        </group>
    )
}
const EffectsComposer = () => {
    const {viewport} = useThree();
    let bloom = viewport.aspect >= 0.7 ? 0.5 : 0.8;
    return (
        <group>
            <Effects>
                <unrealBloomPass attachArray={"passes"} args={[undefined, bloom, 2.2, 0.7]} />
                <filmPass attachArray={"passes"} args={[0.7, 0.5, 1024, false]} />
            </Effects>
        </group>
    )
}