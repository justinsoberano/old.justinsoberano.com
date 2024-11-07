import * as THREE from "three";

import {useEffect, useState} from 'react';
import {useThree, useFrame} from "@react-three/fiber";

export default function CameraAnimation() {
  const [started, setStarted] = useState(false);
  const vec = new THREE.Vector3();
  const { viewport } = useThree();

  useEffect(() => {
    setTimeout(() => setStarted(true), 2000);
  }, []);

  useFrame(state => {
    if (started) {
      if (viewport.aspect > 1) 
        state.camera.position.lerp(vec.set(0, -3, 7), .025);
      else if (viewport.aspect <= 1) 
        state.camera.position.lerp(vec.set(0, -3, 5), .025);
      }
  });
  return null;
}