import { SailBoatEngine } from "..";

let SBE = new SailBoatEngine()

describe('Check default value of slratio', function () {
    test("slratio should be 1.34", () => {
        expect(SBE.slratio).toBe(1.34);
    });
});

describe('Check set and get slratio', function () {
    test("slratio should be 5.42", () => {
        SBE.slratio = 5.42
        expect(SBE.slratio).toBe(5.42);
    });
});

