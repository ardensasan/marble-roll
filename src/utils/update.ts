import { Vector3 } from "three";

export const updateMarble = ({ delta, marble, camera, keyboard }: any) =>{
    const keys = keyboard.getKeys();
    const moveDistance = delta / (60 / 0.7);
    const angle = ((Math.PI / 100) * delta) / 60 / 0.7;

    keys.forEach((key: any) => {
      if (!key.isPressed) {
        return;
      }
      if (key.key === 87) {
        marble.translateZ(moveDistance)

      }
      if (key.key === 83) {
        marble.translateZ(-moveDistance);
      }
      if (key.key === 65) {
        marble.rotateOnAxis(new Vector3(0, 1, 0), angle);
      }
      if (key.key === 68) {
        marble.rotateOnAxis(new Vector3(0, 1, 0), -angle);
      }
    });
    //follow marble
    // const cameraOffset = new Vector3(0, 5, -5).applyMatrix4(marble.matrixWorld);
    // camera.position.x = cameraOffset.x;
    // camera.position.y = cameraOffset.y;
    // camera.position.z = cameraOffset.z;
    camera.lookAt(marble.position);
}