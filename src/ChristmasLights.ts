import { Coordinates } from "./Coordinates.js"

export class ChristmasLights {
  private row = [false, false]

  static create() {
    return new ChristmasLights()
  }

  turnOn(start: Coordinates, end: Coordinates) {
    this.row[0] = true

    if (end.y === 1) {
      this.row[1] = true
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
