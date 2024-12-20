import { Coordinates } from "./Coordinates.js"

export class ChristmasLights {
  private isOn = false
  private isOn2 = false;

  private row = [false, false]

  turnOn(start: Coordinates, end: Coordinates) {
    this.isOn = true

    this.row[0] = true

    if (end.y === 1) {
      this.row[1] = true
    }
  }

  static create() {
    return new ChristmasLights()
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
