export class Lights {

    private grid: [[string]]
    private gridWithPosition : [[[string, string]]]

    constructor(){
        this.grid = [['']]
        this.gridWithPosition =  [[['', '']]]
    }

    public generateLightGrid(rows: number, columns: number){
        for (let indexRows = 0; indexRows < rows; indexRows++) {
            this.grid[indexRows] = ['']
            this.gridWithPosition[indexRows] = [['', '']]
            for (let indexColumns = 0; indexColumns < columns; indexColumns++) {
                this.grid[indexRows][indexColumns] = 'X'
                this.gridWithPosition[indexRows][indexColumns] = [indexRows + ',' + indexColumns ,'X']
            }
        }
        this.gridWithPosition.reverse()
    }

    public getGridWithPosition(){
        return this.gridWithPosition
    }
    public getGrid(){
        return this.grid
    }

    public toggleLightsFrom(startX: number, startY: number, endX: number, endY: number): void {
    }
}