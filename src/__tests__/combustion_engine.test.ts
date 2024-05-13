import * as YachtPropulsionMetrics from '../index'

let CE = new YachtPropulsionMetrics.CombustionEngine()

describe('Set and get rated power', function () {
    test("ratedPower should be 10", () => {
        CE.ratedPowerHP = 10
        expect(CE.ratedPowerHP).toBe(10);
    });
});