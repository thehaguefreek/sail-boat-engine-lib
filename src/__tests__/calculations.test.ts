import { SailBoat } from "../sail_boat";

let SBE = new SailBoat()
SBE.lwl = 36

it("Calculate hullspeed", () => {
    expect(SBE.hullSpeed()).toBeCloseTo(8.04);
});
