import { Lights } from './utils/Lights';

const lights = new Lights();
lights.generateLightGrid(3, 3);
// WHEN
lights.toggleLightsFrom(3, 3, 0, 0);
// THEN
// console.log(lights.getGrid());
// console.log(lights.getGridWithPosition());
