import { Lights } from "./utils/Lights";

const gridWithPosition = [
  [ [ '2,0', 'X' ], [ '2,1', 'X' ], [ '2,2', 'X' ] ],
  [ [ '1,0', 'X' ], [ '1,1', 'X' ], [ '1,2', 'X' ] ],
  [ [ '0,0', 'X' ], [ '0,1', 'X' ], [ '0,2', 'X' ] ]
]

const grid = [ [ 'X', 'X', 'X' ], [ 'X', 'X', 'X' ], [ 'X', 'X', 'X' ] ]
describe('christmas-lights-kata', () => {
    test('Grid generator with position', async () => {
      const lights = new Lights()
      lights.generateLightGrid(3,3)
      const lightsGridWithPosition = lights.getGridWithPosition()

      expect(lightsGridWithPosition).toEqual(gridWithPosition)
    });

    test('Grid generator', async () => {
      const lights = new Lights()
      lights.generateLightGrid(3,3)
      const lightsGrid = lights.getGrid()

      expect(lightsGrid).toEqual(grid)
    });
  });
  