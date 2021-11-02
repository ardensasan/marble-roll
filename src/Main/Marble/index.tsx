import { useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Fragment, useEffect, useRef } from "react";
import { Mesh } from "three";
import ao from "../../assets/maps/statuario_marble_5/ao.png";
import diffuse from "../../assets/maps/statuario_marble_5/diffuse.png";
import displacement from "../../assets/maps/statuario_marble_5/displacement.png";
import normal from "../../assets/maps/statuario_marble_5/normal.png";
import specular from "../../assets/maps/statuario_marble_5/specular.png";
import { Keyboard, KeyboardListener } from "../../classes/keyboard";
import {
  addMouseEventListener,
  removeMouseEventListener,
} from "../../utils/mouse";
const Marble = () => {
  const keyboard = new Keyboard();
  const marbleRef = useRef<Mesh>();
  const scene = useThree((state) => state.scene);
  const camera = useThree((state) => state.camera);
  const [aoMap, map, displacementMap, normalMap, specularMap] = useTexture([
    ao,
    diffuse,
    displacement,
    normal,
    specular,
  ]);

  useEffect(() => {
    const keyboardListener = new KeyboardListener(keyboard);
    return keyboardListener.removeListener();
  });

  useEffect(() => {
    addMouseEventListener({ camera, scene, marble: marbleRef.current });
    return removeMouseEventListener({
      camera,
      scene,
      marble: marbleRef.current,
    });
  });


  useFrame(()=>{
    marbleRef.current?.translateZ(0.1)
  })
  return (
    <Fragment>
      <mesh ref={marbleRef}>
        <sphereGeometry />
        <meshPhongMaterial
          aoMap={aoMap}
          map={map}
          displacementMap={displacementMap}
          normalMap={normalMap}
          specularMap={specularMap}
          shininess={100}
        />
      </mesh>
    </Fragment>
  );
};

export default Marble;
