import { describe, expect, it } from "vitest"

import { ChristmasLights } from "./ChristmasLights.js"
import { Coordinates } from "./Coordinates.js"

describe("ChristmasLights", () => {
  it("all lights are off when created", () => {
    const christmasLights = ChristmasLights.create()

    const amount = christmasLights.amountLit()

    expect(amount).toBe(0)
  })

  it("turns on a single light", () => {
    const christmasLights = ChristmasLights.create()

    christmasLights.turnOn(new Coordinates(0, 0), new Coordinates(0, 0))

    expect(christmasLights.amountLit()).toBe(1)
  })

  it("turns on two lights in the same row", () => {
    const christmasLights = ChristmasLights.create()

    christmasLights.turnOn(new Coordinates(0, 0), new Coordinates(1, 0))

    expect(christmasLights.amountLit()).toBe(2)
  })

  it("turns on all the lights in a row", () => {
    const christmasLights = ChristmasLights.create()

    christmasLights.turnOn(new Coordinates(0, 0), new Coordinates(999, 0))

    expect(christmasLights.amountLit()).toBe(1000)
  })

  it("turns on all the lights in a row from custom origin", () => {
    const christmasLights = ChristmasLights.create()

    christmasLights.turnOn(new Coordinates(1, 0), new Coordinates(999, 0))

    expect(christmasLights.amountLit()).toBe(999)
  })

  it("turns on two lights in the same column", () => {
    const christmasLights = ChristmasLights.create()

    christmasLights.turnOn(new Coordinates(0, 0), new Coordinates(0, 1))

    expect(christmasLights.amountLit()).toBe(2)
  })

  it("turns on all lights in the same column", () => {
    const christmasLights = ChristmasLights.create()

    christmasLights.turnOn(new Coordinates(0, 0), new Coordinates(0, 999))

    expect(christmasLights.amountLit()).toBe(1000)
  })
})
