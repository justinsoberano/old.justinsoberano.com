// React and related hooks
import React, { Suspense, useEffect, useState } from "react";

// three.js and @react-three/fiber
import * as THREE from "three";
import { Canvas, extend, useThree, useFrame, Node } from "@react-three/fiber";
import { Effects, Stars } from "@react-three/drei";

// Post-processing effects from three.js
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass.js";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

// Local components and utilities
import { LoadingScreen } from "../LoadingScreen";
import { Buttons } from "../Buttons";
import { Planets } from "../../meshes/geometries/BackgroundPlanets";
import { LetterI, LetterJ, LetterU, LetterS, LetterT, LetterN } from "../../meshes/name/FirstName";
import { LastLetterO1, LastLetterS, LastLetterA, LastLetterB, LastLetterE, LastLetterN, LastLetterO2, LastLetterR } from "../../meshes/name/LastName";

// Styles
import "../styles/canvas_stylesheet.css";
import "../styles/global_stylesheet.css";


extend({ FilmPass, GlitchPass, UnrealBloomPass })

declare global {
    namespace JSX {
        interface IntrinsicElements {
            unrealBloomPass: Omit<Node<UnrealBloomPass, typeof UnrealBloomPass>, 'args'> & {
                attachArray?: string;
                args?: [number | undefined, number, number, number];
              };
              filmPass: Omit<Node<FilmPass, typeof FilmPass>, 'args'> & {
                attachArray?: string;
                args?: [number, number, number, boolean];
              };
        }
    }
}

const CameraAnimation: React.FC = () => {
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
                state.camera.position.lerp(vec.set(0, -3, 5), .025);
        }
    });
    return null;
}

const audio = new Audio("https://github.com/justinsoberano/portfolio-data/raw/main/audio/terraria_space.mp3");
audio.loop = true;

const Background: React.FC = () =>{

    const [start, setStart] = useState(false)
    const [showSound, setShowSound] = useState(true)

    const pauseAudio = () => {
        audio.pause();
    }
    const startAudio = () => {
        audio.play();
    }

    useEffect(() => {
        if(start) {
            audio.play();
        }
    }, [start]);

    return (
        <>
            <Canvas dpr={1}>
                <Stars radius={0.1} depth={30} count={2000} factor={0.7} saturation={2} fade speed={2} />
                <Suspense fallback={null}> {start && 
                    <>
                        <color attach={"background"} args={["rgb(0, 0, 0)"]} />
                        {/* <gridHelper args={[100, 100, 100]} rotation-x={Math.PI / 2} /> */}
                        <Lighting />
                        <FirstName />
                        <LastName />
                        <Planets />
                        <CameraAnimation />
                    </>
                } </Suspense>
                <EffectsComposer />
            </Canvas>
            {start && <Buttons />}
            {start && showSound && <p className={'soundtext'}
            onClick={() => {pauseAudio(); setShowSound(false)}}> PAUSE MUSIC </p>}
            {start && !showSound && <p className={'soundtext'}
            onClick={() => {startAudio(); setShowSound(true)}}> UNPAUSE MUSIC </p>}
            <LoadingScreen started={start} onStarted={() => setStart(true)} />
        </>
    );  
}

const FirstName: React.FC = () => {
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

const LastName: React.FC = () => {
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

const Lighting: React.FC = () => {
    return (
        <group>
            <ambientLight intensity={0} />
            <pointLight position={[0, 0, 0]} intensity={1} distance={15} />
        </group>
    )
}
const EffectsComposer: React.FC = () => {
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

export default Background;