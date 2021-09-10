/// <reference path="references.ts" />

/**
 * @class ElectricEngine
 * @example
 * SBE = new ElectricEngine()
 */
export class ElectricEngine {
    private _ratedpower = 10
    private _maxpower!: number
    private _voltage = 12
    private _current = 100

    /**
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

    /**
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
        if (this._maxpower == undefined) {
            return this._current * this._voltage
        } else {
            return this._maxpower
        }
    }

}
