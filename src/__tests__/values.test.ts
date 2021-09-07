import { SailBoatEngine } from "..";

it("Check default value of slratio", () => {
    const SBE = new SailBoatEngine()
    expect(SBE.slratio).toEqual(1.34);
});

it("Check setter for slratio", () => {
    const SBE = new SailBoatEngine()
    SBE.slratio = 5.42
    expect(SBE.slratio).toEqual(5.42);
});
