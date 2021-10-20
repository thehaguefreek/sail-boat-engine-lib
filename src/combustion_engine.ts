/**
 * ```js
 * // Example
 * // Adds 'Kromhout' combustion engine to sailboat
 * sailboat.engines['Kromhout'] = new CombustionEngine()
 * ```
 */
export class CombustionEngine {
    #ratedpower!: number

    /**
     * Rated power in HP
     */
    public set ratedpower(ratedpower: number) {
        this.#ratedpower = ratedpower
    }

    public get ratedpower() {
        return this.#ratedpower
    }
}