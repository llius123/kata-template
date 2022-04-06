export class Lights {
  private grid: [[string]];
  private gridWithPosition: [[[number, number, string]]];

  constructor() {
    this.grid = [['']];
    this.gridWithPosition = [[[0, 0, 'X']]];
  }

  public generateLightGrid(rows: number, columns: number) {
    for (let indexRows = 0; indexRows < rows; indexRows++) {
      this.grid[indexRows] = [''];
      this.gridWithPosition[indexRows] = [[0, 0, 'X']];
      for (let indexColumns = 0; indexColumns < columns; indexColumns++) {
        this.grid[indexRows][indexColumns] = 'X';
        this.gridWithPosition[indexRows][indexColumns] = [
          indexRows,
          indexColumns,
          'X',
        ];
      }
    }
    this.gridWithPosition.reverse();
  }

  public getGridWithPosition() {
    return this.gridWithPosition;
  }
  public getGrid() {
    return this.grid;
  }

  public toggleLightsFrom(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
  ): void {
    if (startX < endX && startY < endY) {
      endX--;
      endY--;
      for (let indexRows = startX; indexRows <= endX; indexRows++) {
        for (let indexColumns = startY; indexColumns <= endY; indexColumns++) {
          this.grid[indexRows][indexColumns] = 'O';
        }
      }
    }
    if (startX > endX && startY > endY) {
      startX--;
      startY--;
      for (let indexRows = endX; indexRows <= startX; indexRows++) {
        for (let indexColumns = endY; indexColumns <= startY; indexColumns++) {
          this.grid[indexRows][indexColumns] = 'O';
        }
      }
    }
  }
}
