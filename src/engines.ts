/// <reference path="references.ts" />

/**
 * @class ElectricEngine
 * @example
 * SBE = new ElectricEngine()
 */
export abstract class ElectricEngine {
    private _ratedpower = 10
    private _maxpower = 10000
    private _voltage = 12
    private _current = 100

    /*
     * Voltage in Volt
     * @public
     * @type {number}
     */
     public set voltage(voltage: number) {
        this._voltage = voltage
    }

    public get voltage() {
        return this._voltage
    }

    /*
     * Current in Amps
     * @public
     * @type {number}
     */
    public set current(current: number) {
        this._current = current
    }

    public get current() {
        return this._current
    }

    /**
     * Rated power in KW
     * @public
     * @type {number}
     */
    public set ratedpower(ratedpower: number) {
        this._ratedpower = ratedpower
    }

    public get ratedpower() {
        return this._ratedpower
    }

    /**
     * Maximum power based on voltage and current
     * @public
     * @returns {number} Maximum power in KW
     */
    public maxPower(): number {
        return this._current * this._voltage
    }

}

/**
 * @class CombustionEngine
 * @example
 * SBE = new CombustionEngine()
 */
export class CombustionEngine {
    private _ratedpower!: number

    /**
   * Rated power in HP
   * @public
   * @type {number}
   */
    public set ratedpower(ratedpower: number) {
        this._ratedpower = ratedpower
    }

    public get ratedpower() {
        return this._ratedpower
    }
}