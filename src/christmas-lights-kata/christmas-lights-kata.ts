import { Lights } from "./utils/Lights";

const lights = new Lights()
lights.generateLightGrid(3,3)
console.log(lights.getGridWithPosition());
