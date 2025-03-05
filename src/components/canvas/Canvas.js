import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { LoadingScreen } from "../utils/LoadingScreen";
import { Menu } from "../Menu";
import { Planets } from "../../meshes/geometries/BackgroundPlanets";
import CameraAnimation from "./helpers/CameraAnimation";
import MouseParallax from "./helpers/MouseParallax";
import EffectsComposer from "./helpers/EffectsComposer";
import { Sound } from "./styles/CanvasStyles";
import FirstName from "../../meshes/name/FirstName";
import { LastName } from "../../meshes/name/LastName";
import { Spaceship } from "../../meshes/geometries/Spaceship";
import FrameRateLimit from "./helpers/FrameRateLimit";

const backgroundMusic = new Audio("assets/audio/main.mp3");
backgroundMusic.loop = true;

const ThreeDEnvironment = ({ cameraAnimationComplete, setCameraAnimationComplete }) => {
  return (
    <>
      <FirstName />
      <LastName />
      <Planets />
      <Spaceship />
      <CameraAnimation 
        onAnimationComplete={() => setCameraAnimationComplete(true)} 
      />
      <MouseParallax enabled={cameraAnimationComplete} />
      <FrameRateLimit fps={60} />
    </>
  );
};

const SceneCanvas = () => {
  const [sceneStarted, setSceneStarted] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [cameraAnimationComplete, setCameraAnimationComplete] = useState(false);
  
  const toggleAudio = () => {
    const newAudioState = !audioEnabled;
    newAudioState ? backgroundMusic.play() : backgroundMusic.pause();
    setAudioEnabled(newAudioState);
  };
  
  const startScene = () => {
    setSceneStarted(true);
    backgroundMusic.play();
    setTimeout(() => setShowLoadingScreen(false), 200);
  };

  return (
    <>
      <Canvas dpr={1} shadows frameloop="demand">
        <EffectsComposer />
        <Stars 
          radius={0.1} 
          depth={30} 
          count={2000} 
          factor={0.7} 
          saturation={2} 
          fade 
          speed={2} 
        />
        <Suspense fallback={null}>
          {sceneStarted && (
            <ThreeDEnvironment 
              cameraAnimationComplete={cameraAnimationComplete}
              setCameraAnimationComplete={setCameraAnimationComplete}
            />
          )}
        </Suspense>
      </Canvas>
      
      {sceneStarted && (
        <>
          <Menu />
          <Sound onClick={toggleAudio}>
            {audioEnabled ? "PAUSE MUSIC" : "PLAY MUSIC"}
          </Sound>
        </>
      )}
      
      {showLoadingScreen && (
        <LoadingScreen 
          started={sceneStarted} 
          onStarted={startScene} 
        />
      )}
    </>
  );
};

export default SceneCanvas;