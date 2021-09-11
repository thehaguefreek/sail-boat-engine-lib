/// <reference path="references.ts" />

/**
 * @class ElectricEngine
 * @example
 * SBE = new ElectricEngine()
 */
export class ElectricEngine {
    #ratedpower = 10
    #maxpower!: number
    #voltage = 12
    #current = 100

    /**
     * Voltage in Volt
     * @public
     * @type {number}
     */
    public set voltage(voltage: number) {
        this.#voltage = voltage
    }

    public get voltage() {
        return this.#voltage
    }

    /**
     * Current in Amps
     * @public
     * @type {number}
     */
    public set current(current: number) {
        this.#current = current
    }

    public get current() {
        return this.#current
    }

    /**
     * Rated power in KW
     * @public
     * @type {number}
     */
    public set ratedpower(ratedpower: number) {
        this.#ratedpower = ratedpower
    }

    public get ratedpower() {
        return this.#ratedpower
    }

    /**
     * Maximum power based on voltage and current
     * @public
     * @returns {number} Maximum power in KW
     */
    public maxPower(): number {
        if (this.#maxpower == undefined) {
            return this.#current * this.#voltage
        } else {
            return this.#maxpower
        }
    }

}
