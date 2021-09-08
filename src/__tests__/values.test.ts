import { SailBoatEngine } from "..";

let SBE = new SailBoatEngine()

it("Check default value of slratio", () => {
    expect(SBE.slratio).toEqual(1.34);
});

it("Check set and get slratio", () => {
    SBE.slratio = 5.42
    expect(SBE.slratio).toEqual(5.42);
    SBE.slratio = 1.34
    expect(SBE.slratio).toEqual(5.42);
});
