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
    for (let i = 0; i <= end.y; i++) {
      this.turnOnRow(this.grid[i], start.x, end.x)
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
    let totalAmount = 0
    for (let i = 0; i < this.grid.length; i++) {
      totalAmount += this.countLitLights(this.grid[i])
    }

    return totalAmount
  }
}
