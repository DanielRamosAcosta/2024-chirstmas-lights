import { Coordinates } from "./Coordinates.js"

export class ChristmasLights {
  private isOn = false

  turnOn(start: Coordinates, end: Coordinates) {
    this.isOn = true
  }

  static create() {
    return new ChristmasLights()
  }

  amountLit() {
    return this.isOn ? 1 : 0
  }
}
