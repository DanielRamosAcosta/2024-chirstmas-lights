import { describe, expect, it } from "vitest";

import { ChristmasLights } from "./ChristmasLights.js";
import { Coordinates } from "./Coordinates.js";

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
})
