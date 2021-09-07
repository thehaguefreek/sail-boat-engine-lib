import { SailBoatEngine } from "../SailBoatEngine";

it("get value of sl ratio", () => {
    const SBE = new SailBoatEngine()
    expect(SBE.slratio).toEqual(1.34);
});
