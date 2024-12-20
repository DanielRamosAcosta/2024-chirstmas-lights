import { Coordinates } from "./Coordinates.js"

export class ChristmasLights {
  private row: boolean[] = []
  private row2: boolean[] = []
  private row3: boolean[] = []

  static create() {
    return new ChristmasLights()
  }

  private turnOnRow(row: boolean[], a: number, b: number) {
    for (let i = a; i <= b; i++) {
      row[i] = true
    }
  }

  turnOn(start: Coordinates, end: Coordinates) {
    this.turnOnRow(this.row, start.x, end.x)

    if (end.y === 1) {
      this.turnOnRow(this.row2, start.x, end.x)
    }

    if (end.y === 2) {
      this.turnOnRow(this.row2, start.x, end.x)
      this.turnOnRow(this.row3, start.x, end.x)
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
    let row1Amount = this.countLitLights(this.row)
    let row2Amount = this.countLitLights(this.row2)
    let row3Amount = this.countLitLights(this.row3)

    return row1Amount + row2Amount + row3Amount
  }
}
