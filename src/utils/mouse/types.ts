import { Camera } from "@react-three/fiber";
import { Mesh, Scene } from "three";
import Marble from "../../classes/marble";

export interface ListenerParams{
    camera: Camera,
    scene: Scene,
    marble: Marble,
    marbleMesh: Mesh
}