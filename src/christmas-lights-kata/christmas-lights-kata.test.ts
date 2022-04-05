import { Lights } from "./utils/Lights";

const gridWithPosition = [
  [ [ '2,0', 'X' ], [ '2,1', 'X' ], [ '2,2', 'X' ] ],
  [ [ '1,0', 'X' ], [ '1,1', 'X' ], [ '1,2', 'X' ] ],
  [ [ '0,0', 'X' ], [ '0,1', 'X' ], [ '0,2', 'X' ] ]
]

const grid = [ [ 'X', 'X', 'X' ], [ 'X', 'X', 'X' ], [ 'X', 'X', 'X' ] ]
const gridLightsOn = [ [ 'O', 'O', 'O' ], [ 'O', 'O', 'O' ], [ 'O', 'O', 'O' ] ]

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

    test(`
      GIVEN i have 3,3 grid
      WHEN i turn on 3,3 through 0,0
      THEN every light should be on
    `, () => {
      // GIVEN
      const lights = new Lights()
      lights.generateLightGrid(3,3)
      // WHEN
      lights.toggleLightsFrom(0,0,3,3)
      // THEN
      const grid = lights.getGrid()
      expect(grid).toEqual(gridLightsOn)
    })

    test(`
      GIVEN i have 3,3 grid
      WHEN i turn on 0,0 through 3,3
      THEN every light should be on
    `, () => {
      // GIVEN
      const lights = new Lights()
      lights.generateLightGrid(3,3)
      // WHEN
      lights.toggleLightsFrom(3,3,0,0)
      // THEN
      const grid = lights.getGrid()
      expect(grid).toEqual(gridLightsOn)
  })
});
  