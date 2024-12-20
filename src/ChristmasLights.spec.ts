import { describe, expect, it } from "vitest";
import { ChristmasLights } from "./ChristmasLights.js";

describe("ChristmasLights", () => {
  it("all lights are off when created", () => {
    const christmasLights = ChristmasLights.create()

    const amount = christmasLights.amountLit()

    expect(amount).toBe(0)
  })
})
