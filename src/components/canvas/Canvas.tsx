import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { LoadingScreen } from "../utils/LoadingScreen";
import { Menu } from "../Menu";
import { Planets } from "../../meshes/geometries/BackgroundPlanets";

import CameraAnimation from "./helpers/CameraAnimation";
import FirstName from "./helpers/FirstName";
import LastName from "./helpers/LastName";
import EffectsComposer from "./helpers/EffectsComposer";

import { Sound } from "./styles/CanvasStyles";

const main = new Audio("assets/audio/main.mp3");
main.loop = true;

const Background: React.FC = () => {
  const [start, setStart] = useState(false);
  const [showSound, setShowSound] = useState(true);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  const pauseAudio = () => {
    main.pause();
    setShowSound(false);
  };
  const startAudio = () => {
    main.play();
    setShowSound(true);
  };
  const handleShowLoadingScreen = () => {
    setStart(true);
    setTimeout(() => {
      setShowLoadingScreen(false);
    }, 250);
  };
  useEffect(() => {
    if (start) {
      main.play();
    }
  }, [start]);
  return (
    <>
      <Canvas dpr={1} shadows>
        <Stars radius={0.1} depth={30} count={2000} factor={0.7} saturation={2} fade speed={2} />
        <Suspense fallback={null}>
          {start && (
            <>
              <FirstName />
              <LastName />
              <Planets />
              <CameraAnimation />
            </>
          )}
        </Suspense>
        <EffectsComposer />
      </Canvas>
      {start && <Menu />}
      {start && showSound ? (
        <Sound onClick={() => {pauseAudio()}}> PAUSE MUSIC </Sound>
      ) : (
        <Sound onClick={() => {startAudio()}}> PLAY MUSIC</Sound>
      )}
      {showLoadingScreen && <LoadingScreen started={start} onStarted={handleShowLoadingScreen} />}
    </>
  );
};
export default Background;