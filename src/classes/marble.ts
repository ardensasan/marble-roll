import { Vector3 } from "three";

class Marble {
  #moveSpeed = 0.01;
  #distance = 0;
  #position = new Vector3(0, 0, 0);
  setDistance = (distance: number) => (this.#distance = distance);
  resetDistance = () => (this.#distance = 0);
  updateDistance = () => (this.#distance -= this.#moveSpeed);
  setPosition = (position: Vector3) => (this.#position = position);
  getMoveSpeed = () => this.#moveSpeed;
  getDistance = () => this.#distance;
  getPosition = () => this.#position;
}

export default Marble;
