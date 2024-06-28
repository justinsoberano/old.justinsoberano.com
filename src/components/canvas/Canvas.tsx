import React, {Suspense, useEffect, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {Stars} from "@react-three/drei";
import {LoadingScreen} from "../LoadingScreen";
import {Buttons} from "../Buttons";
import {Planets} from "../../meshes/geometries/BackgroundPlanets";

import CameraAnimation from "./helpers/CameraAnimation";
import FirstName from "./helpers/FirstName";
import LastName from "./helpers/LastName";
import EffectsComposer from "./helpers/EffectsComposer";

import "../styles/canvas_stylesheet.css";
import "../styles/global_stylesheet.css";

const main = new Audio("assets/audio/main.mp3");
main.loop = true;

const Background: React.FC = () =>{
    const [start, setStart] = useState(false)
    const [showSound, setShowSound] = useState(true)
    const pauseAudio = () => {
        main.pause();
    }
    const startAudio = () => {
        main.play();
    }

    useEffect(() => {
        if(start) {
            main.play();
        }
    }, [start]);

    return (
        <>
            <Canvas dpr={1} shadows>
                <Stars radius={0.1} depth={30} count={2000} factor={0.7} saturation={2} fade speed={2} />
                <Suspense fallback={null}> {start && 
                    <>
                        <color attach={"background"} args={["rgb(0, 0, 0)"]} />
                        <FirstName />
                        <LastName />
                        <Planets />
                        <CameraAnimation />
                    </>
                } </Suspense>
                <EffectsComposer />
            </Canvas>
            {start && <Buttons />}
            <div>
                {start && showSound && <p className={'soundtext'}
                onClick={() => {pauseAudio(); setShowSound(false)}}> PAUSE MUSIC </p>}
                {start && !showSound && <p className={'soundtext'}
                onClick={() => {startAudio(); setShowSound(true)}}> UNPAUSE MUSIC </p>}
            </div>
            <LoadingScreen started={start} onStarted={() => setStart(true)} />
        </>
    );  
}

export default Background;