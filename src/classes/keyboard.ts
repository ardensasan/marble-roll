import { Key } from "./types";

export class Keyboard {
  state: Array<Key>;
  constructor() {
    this.state = [
      {
        key: 65, //a key
        isPressed: false,
      },
      {
        key: 68, //d key
        isPressed: false,
      },
      {
        key: 87, //w key
        isPressed: false,
      },
      {
        key: 83, //s key
        isPressed: false,
      },
    ];
  }

  keyDown = (key: number) => {
    const index: number = this.state.findIndex(
      (keyState: Key) => keyState.key === key
    );
    if (index >= 0) this.state[index].isPressed = true;
  };

  keyUp = (key: number) => {
    const index: number = this.state.findIndex(
      (keyState: Key) => keyState.key === key
    );
    if (index >= 0) this.state[index].isPressed = false;
  };

  getKeyStatus = (key: number) => {
    return this.state.find((keyState: any) => keyState.key === key);
  };

  getKeys = () => {
    return this.state;
  };
}

export class KeyboardListener {
  keyboard: Keyboard;
  constructor(keyboard: Keyboard) {
    this.keyboard = keyboard;
    window.addEventListener("keydown", ({ keyCode }) => {
      this.keyboard.keyDown(keyCode);
    });
    window.addEventListener("keyup", ({ keyCode }) => {
      keyboard.keyUp(keyCode);
    });
  }

  removeListener = () => {
    window.removeEventListener("keydown", ({ keyCode }) => {
      this.keyboard.keyDown(keyCode);
    });

    window.removeEventListener("keyup", ({ keyCode }) => {
      this.keyboard.keyUp(keyCode);
    });
  };
}
