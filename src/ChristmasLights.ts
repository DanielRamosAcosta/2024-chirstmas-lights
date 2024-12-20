import { Coordinates } from "./Coordinates.js"

export class ChristmasLights {
  private isOn = false
  private isOn2 = false;

  turnOn(start: Coordinates, end: Coordinates) {
    this.isOn = true

    if (end.y === 1) {
      this.isOn2 = true
    }
  }

  static create() {
    return new ChristmasLights()
  }

  amountLit() {
    let lightsAmount = 0;

    if (this.isOn) {
      lightsAmount += 1
    }

    if (this.isOn2) {
      lightsAmount += 1
    }

    return lightsAmount
  }
}
