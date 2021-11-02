import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import Marble from "./Marble";
import Terrain from "./Terrain";

const Set = () => {
  const gl = useThree((state) => state.gl);
  gl.setSize(window.innerWidth, window.innerHeight);
  return null;
};
const Main = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls />
        <Set />
        <ambientLight/>
        <Terrain/>
        <Marble />
      </Suspense>
    </Canvas>
  );
};

export default Main;
