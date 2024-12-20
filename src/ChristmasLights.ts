import { Coordinates } from "./Coordinates.js"

export class ChristmasLights {
  private isOn = false

  turnOn(arg0: Coordinates, arg1: Coordinates) {
    this.isOn = true
  }
  static create() {
    return new ChristmasLights()
  }

  amountLit() {
    return this.isOn ? 1 : 0
  }
}
