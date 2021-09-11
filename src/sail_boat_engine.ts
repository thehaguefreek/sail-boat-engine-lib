/// <reference path="references.ts" />

import { CombustionEngine } from "./combustion_engine"
import { ElectricEngine } from "./electric_engine"

/**
 * @class SailBoatEngine
 * @example
 * SBE = new SailBoatEngine()
 */
export class SailBoatEngine {
    #slratio = 1.34
    #displacement!: number
    #lwl!: number
    public engines: { [name: string]: ElectricEngine|CombustionEngine } = {}

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
    * SBE.displacement = 9000
    *
    * console.log(SBE.displacement) // returns 9000
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