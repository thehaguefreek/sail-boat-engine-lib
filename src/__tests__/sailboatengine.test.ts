import { SailBoatEngine } from "..";
import { CombustionEngine } from "../combustionengine";
import { ElectricEngine } from "../electricengine";

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

// reset to default values
SBE = new SailBoatEngine()

describe('Set Electric Engine', function () {
    test("engines[name] should be ElectricEngine", () => {
        SBE.engines['electric'] = new ElectricEngine()
        expect(SBE.engines['electric']).toStrictEqual(new ElectricEngine());
    });
});

describe('Set Combustion Engine', function () {
    test("engines[name] should be CombustionEngine", () => {
        SBE.engines['combustion'] = new CombustionEngine()
        expect(SBE.engines['combustion']).toStrictEqual(new CombustionEngine());
    });
});