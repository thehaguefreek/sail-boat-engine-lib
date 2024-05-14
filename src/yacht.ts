import { CombustionEngine } from "./combustion_engine"
import { ElectricEngine } from "./electric_engine"

/**
 * ```js
 * // Example
 * sailboat = new Yacht()
 * ```
 */
export class Yacht {
    /** @ignore */
    #displacement!: number
    /** @ignore */
    #lwl!: number

    /**
     * ```js
     * // Example
     * // Add an electric engine to Yacht#engines
     * sailboat = new Sailboat()
     * sailboat.engines['my-engine-name'] = new ElectricEngine()
     * ```
     */
    public engines: (ElectricEngine | CombustionEngine)[]

    /**
     * SL Ratio
     */
    public slRatio:number

    public constructor() {
        this.engines = []
        this.slRatio = 1.34
    }

    /**
     * Displacement in LBS
     * ```js
     * // Example
     * // Sets a displacement of 9000 LBS
     * sailboat.displacement = 9000
     *
     * console.log(sailboat.displacement) // returns 9000
     * ```
     */
    public set displacement(displacement: number) {
        this.#displacement = displacement
    }

    public get displacement() {
        return this.#displacement
    }

    /**
     * Length water line in ft
     */
    public set lwl(lwl: number) {
        this.#lwl = lwl
    }

    public get lwl() {
        return this.#lwl
    }

    /**
     * Returns hull speed in kts
     */
    public getHullSpeed(): number {
        return this.slRatio * Math.sqrt(this.#lwl);
    }
}