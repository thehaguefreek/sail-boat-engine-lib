/// <reference path="references.ts" />

/**
 * @class SailBoat
 * @example
 * sailboat = new SailBoat()
 */
export class SailBoat {
    #slratio = 1.34
    #displacement!: number
    #lwl!: number

    /**
     * @namespace
     * @property {string} my_engine_1                   - Name of engine 1
     * @property {object} my_engine_1.ElectricEngine    - Type of engine
     * @property {string} my_engine_2                   - Name of engine 2
     * @property {object} my_engine_2.CombustionEngine  - Type of engine
     * @property {string} my_engine_..
     * @returns {object}                            - Object with engines
     * @example
     * // Add an electric engine to SailBoat#engines
     * sailboat = new Sailboat()
     * sailboat.engines['my-engine-name'] = new ElectricEngine()
     */ 
    public engines: { [name: string|number]: any } = {}

    /**
    * SL Ratio
    * @public
    * @type {number}
    * @default [1.34]
    */
    public set slratio(slratio: number) {
        this.#slratio = slratio
    }

    public get slratio() {
        return this.#slratio
    }

    /**
    * Displacement in LBS
    * @type {number}
    * @example
    * // Sets a displacement of 9000 LBS
    * sailboat.displacement = 9000
    *
    * console.log(sailboat.displacement) // returns 9000
    */
    public set displacement(displacement: number) {
        this.#displacement = displacement
    }

    public get displacement() {
        return this.#displacement
    }

    /**
    * Length water line in ft
    * @type {number}
    */
    public set lwl(lwl: number) {
        this.#lwl = lwl
    }

    public get lwl() {
        return this.#lwl
    }

    /**
    * Returns hull speed in kts
    * @public
    * @function
    * @returns {number} hull speed in knots
    */
    public hullSpeed(): number {
        return this.#slratio * Math.sqrt(this.#lwl);
    }
}