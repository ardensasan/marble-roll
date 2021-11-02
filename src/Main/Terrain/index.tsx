import { DoubleSide } from "three";

const Terrain = () =>{
    return <mesh rotation={[1.57,0,0]}>
        <planeGeometry args={[100,100]}/>
        <meshBasicMaterial side={DoubleSide}/>
    </mesh>
}

export default Terrain;