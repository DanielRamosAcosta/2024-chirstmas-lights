import { Coordinates } from "./Coordinates.js"

export class ChristmasLights {
  private row: boolean[] = []
  private row2: boolean[] = []

  static create() {
    return new ChristmasLights()
  }

  turnOn(start: Coordinates, end: Coordinates) {
    for (let i = start.x; i <= end.x; i++) {
      this.row[i] = true
    }

    if (end.y === 1) {
      for (let i = start.x; i <= end.x; i++) {
        this.row2[i] = true
      }
    }
  }

  countLitLights(row: boolean[]) {
    return row.reduce((acc, current) => {
      if (current) {
        return acc + 1
      }
      return acc
    }, 0);
  }

  amountLit() {
    let row1Amount = this.countLitLights(this.row)
    let row2Amount = this.countLitLights(this.row2)

    return row1Amount + row2Amount
  }
}
