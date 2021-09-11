import { SailBoatEngine } from "../sail_boat_engine";

let SBE = new SailBoatEngine()
SBE.lwl = 36

it("Calculate hullspeed", () => {
    expect(SBE.hullSpeed()).toBeCloseTo(8.04);
});
