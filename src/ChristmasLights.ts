import { Coordinates } from "./Coordinates.js"

export class ChristmasLights {
  private grid: boolean[][] = [new Array(), new Array(), new Array()]

  static create() {
    return new ChristmasLights()
  }

  private turnOnRow(row: boolean[], a: number, b: number) {
    for (let i = a; i <= b; i++) {
      row[i] = true
    }
  }

  turnOn(start: Coordinates, end: Coordinates) {
    this.turnOnRow(this.grid[0], start.x, end.x)

    if (end.y === 1) {
      this.turnOnRow(this.grid[1], start.x, end.x)
    }

    if (end.y === 2) {
      this.turnOnRow(this.grid[1], start.x, end.x)
      this.turnOnRow(this.grid[2], start.x, end.x)
    }
  }

  private countLitLights(row: boolean[]) {
    return row.reduce((acc, current) => {
      if (current) {
        return acc + 1
      }
      return acc
    }, 0)
  }

  amountLit() {
    let row1Amount = this.countLitLights(this.grid[0])
    let row2Amount = this.countLitLights(this.grid[1])
    let row3Amount = this.countLitLights(this.grid[2])

    return row1Amount + row2Amount + row3Amount
  }
}
