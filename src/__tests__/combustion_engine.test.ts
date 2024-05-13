import * as YachtPropulsionMetrics from '../index'

let CE = new YachtPropulsionMetrics.CombustionEngine()

describe('Set and get rated power', function () {
    test("ratedpower should be 10", () => {
        CE.ratedpower = 10
        expect(CE.ratedpower).toBe(10);
    });
});