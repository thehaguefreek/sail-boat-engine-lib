/// <reference path="references.ts" />

/**
 * @class ElectricEngine
 * @example
 * // Add electric engine to your sailboat
 * sailboat.engines['my-electric-engine-name'] = new ElectricEngine()
 */
export class ElectricEngine {
    #ratedpower!: number
    #voltage: number = 48
    #current!: number

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
     * Maximum current in Amps
     * @public
     * @type {number}
     * @desc Should be supplied by manufacturer or given by the fuse.
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
     * Calculates power based on voltage and current
     * @private
     * @type {number}
     */
    private get calculatedpower(): number {
        return ( this.#current * this.#voltage ) / 1000
    }

    /**
     * Maximum power based on voltage, current ánd rated power
     * @public
     * @returns {number} Maximum power in KW
     */
    public maxPower(): number {
        if (isNaN(this.calculatedpower)) {
            return this.#ratedpower
        }
        if (isNaN(this.#ratedpower)) {
            return this.calculatedpower
        }
        if (this.#ratedpower < this.calculatedpower) {
            return this.#ratedpower
        } else {
            return this.calculatedpower
        }
    }

}
