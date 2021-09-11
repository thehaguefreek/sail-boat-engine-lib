import { ElectricEngine } from "../electricengine";

let EE = new ElectricEngine()

describe('Default voltage', function () {
    test("Voltage should be 48", () => {
        expect(EE.voltage).toBe(48);
    });
});

describe('Set and get voltage', function () {
    test("Voltage should be 24", () => {
        EE.voltage = 24
        expect(EE.voltage).toBe(24);
    });
});

describe('Set and get current', function () {
    test("Current should be 200", () => {
        EE.current = 200
        expect(EE.current).toBe(200);
    });
});

describe('Set and get rated power', function () {
    test("ratedpower should be 10", () => {
        EE.ratedpower = 10
        expect(EE.ratedpower).toBe(10);
    });
});

describe('Calculate maximum power from ratedpower', function () {
    test("maxPower() should be 4.8", () => {
        expect(EE.maxPower()).toBe(4.8);
    });
});

describe('Calculate maximum power from voltage current', function () {
    test("maxPower() should be 14.4", () => {
        EE.ratedpower = 2
        expect(EE.maxPower()).toBe(2);
    });
});

