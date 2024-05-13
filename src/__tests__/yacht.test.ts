import * as YachtPropulsionMetrics from '../index'

// Check default values

let sailboat = new YachtPropulsionMetrics.Yacht()
describe('Check default value of slratio', function () {
    test("slratio should be 1.34", () => {
        expect(sailboat.slratio).toBe(1.34);
    });
});

describe('Check set and get slratio', function () {
    test("slratio should be 5.42", () => {
        sailboat.slratio = 5.42
        expect(sailboat.slratio).toBe(5.42);
        // Set back to default
        sailboat.slratio = 1.34
    });
});

describe('Check set and get displacement', function () {
    test("displacement should be 10000", () => {
        sailboat.displacement = 10000
        expect(sailboat.displacement).toBe(10000);
    });
});

describe('Check set and get length water line', function () {
    test("length water line should be 36", () => {
        sailboat.lwl = 36
        expect(sailboat.lwl).toBe(36);
    });
});

// Test hull speed
describe('Calculate hullspeed', function () {
    test("Hull speed of 36ft boat should be 8.04", () => {
        sailboat.lwl = 36
        expect(sailboat.slratio).toBe(1.34);
        expect(sailboat.hullSpeed()).toBeCloseTo(8.04);
    });
});

// Add Engines
sailboat.engines['electric'] = new YachtPropulsionMetrics.ElectricEngine()
sailboat.engines['combustion'] = new YachtPropulsionMetrics.CombustionEngine()

describe('Get Electric Engine', function () {
    test("engines[name] should be ElectricEngine", () => {
        expect(sailboat.engines['electric']).toStrictEqual(new YachtPropulsionMetrics.ElectricEngine());
    });
});

describe('Get Combustion Engine', function () {
    test("engines[name] should be CombustionEngine", () => {
        expect(sailboat.engines['combustion']).toStrictEqual(new YachtPropulsionMetrics.CombustionEngine());
    });
});

// Check default voltage of electric engine
describe('Check default value of sailboat.engines.electric.voltage', function () {
    test("Test change value in sailboat.engines['electric']", () => {
        expect(sailboat.engines.electric.voltage).toBe(48);
    });
});