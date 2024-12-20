import { describe, it, expect } from "vitest"

describe("ChristmasLights", () => {
  it("all lights are off when created", () => {
    const christmasLights: ChristmasLights = ChristmasLights.create()

    const amount: number = christmasLights.amountLit()

    expect(amount).toBe(0)
  })
})
