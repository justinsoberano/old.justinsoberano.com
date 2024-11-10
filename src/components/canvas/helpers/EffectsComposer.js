import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass.js";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { Effects } from "@react-three/drei";
import { useThree, extend } from "@react-three/fiber";

extend({ FilmPass, GlitchPass, UnrealBloomPass });

export default function EffectsComposer() {
  const { viewport } = useThree();
  let bloom = viewport.aspect >= 1 ? 0.6 : 0.8;
  
  return (
    <group>
      <Effects>
        <unrealBloomPass attachArray="passes" args={[undefined, bloom, 2.2, 0.7]} />
        <filmPass attachArray="passes" args={[0.5, 0.5, 1024, false]} />
      </Effects>
    </group>
  );
}