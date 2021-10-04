import { SailBoat } from "../sail_boat";
import { CombustionEngine } from "../combustion_engine";

let CE = new CombustionEngine()

describe('Set and get rated power', function () {
    test("ratedpower should be 10", () => {
        CE.ratedpower = 10
        expect(CE.ratedpower).toBe(10);
    });
});