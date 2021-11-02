import { Raycaster, Vector2 } from "three";
import { ListenerParams } from "./types";

export const addMouseEventListener = ({
  camera,
  scene,
  marble,
  marbleMesh,
}: ListenerParams) => {
  const raycaster = new Raycaster();
  const mouse = new Vector2();
  window.addEventListener("mousedown", (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length > 0 && intersects[0].object.userData.name !== "Marble") {
      const distance = marble.getPosition().distanceTo(intersects[0].point)
      marble.setDistance(distance);
      marbleMesh.lookAt(intersects[0].point);
    }
  });
};

export const removeMouseEventListener = ({
  camera,
  scene,
  marble,
}: ListenerParams) => {
  const raycaster = new Raycaster();
  const mouse = new Vector2();
  window.addEventListener("mousedown", (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length > 0) {
    }
  });
};
