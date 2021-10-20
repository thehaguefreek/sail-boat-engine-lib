/**
 * ```js
 * // Example
 * sailboat = new SailBoat()
 * ```
 */
export class SailBoat {
    /** @ignore */
    #displacement!: number
    /** @ignore */
    #lwl!: number

    /**
     * ```js
     * // Example
     * // Add an electric engine to SailBoat#engines
     * sailboat = new Sailboat()
     * sailboat.engines['my-engine-name'] = new ElectricEngine()
     * ```
     */
    public engines: { [name: string | number]: any } = {}

    /**
     * SL Ratio
     */
    slratio:number = 1.34

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
    public hullSpeed(): number {
        return this.slratio * Math.sqrt(this.#lwl);
    }
}