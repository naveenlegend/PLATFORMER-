import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import _ from "./_/_.js";
import _2 from "./_2/_2.js";
import _3 from "./_3/_3.js";
import _4 from "./_4/_4.js";
import Next from "./Next/Next.js";
import _1 from "./_1/_1.js";
import _5 from "./_5/_5.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  _: new _({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6,
  }),
  _2: new _2({
    x: 0,
    y: -0.0010704357695294705,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 20,
    size: 100,
    visible: false,
    layerOrder: 3,
  }),
  _3: new _3({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 53,
    size: 9.383095409240108,
    visible: false,
    layerOrder: 2,
  }),
  _4: new _4({
    x: 0,
    y: -0.0010704357695294705,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 20,
    size: 100,
    visible: false,
    layerOrder: 1,
  }),
  Next: new Next({
    x: 365,
    y: 0.4281136117560891,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 9,
    size: 100,
    visible: false,
    layerOrder: 5,
  }),
  _1: new _1({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7,
  }),
  _5: new _5({
    x: -189.0000000000001,
    y: -61,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.LEFT_RIGHT,
    costumeNumber: 1,
    size: 65,
    visible: false,
    layerOrder: 4,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
