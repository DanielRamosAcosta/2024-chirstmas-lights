import { Coordinates } from "./Coordinates.js"

export class ChristmasLights {
  private row: boolean[] = []

  static create() {
    return new ChristmasLights()
  }

  turnOn(start: Coordinates, end: Coordinates) {
    for (let i = start.x; i <= end.x; i++) {
      this.row[i] = true
    }
  }

  amountLit() {
    return this.row.reduce((acc, current) => {
      if (current) {
        return acc + 1
      }
      return acc
    }, 0)
  }
}
