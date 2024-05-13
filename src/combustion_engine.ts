/**
 * ```js
 * // Example
 * // Adds 'Kromhout' combustion engine to sailboat
 * sailboat.engines['Kromhout'] = new CombustionEngine()
 * ```
 */
export class CombustionEngine {
    #type = 'combustion'

    public getType() {
        return this.#type
    }

    /** @ignore */
    #ratedPowerHP!: number

    /**
     * Rated power in HP
     */
    public set ratedPowerHP(ratedPowerHP: number) {
        this.#ratedPowerHP = ratedPowerHP
    }

    public get ratedPowerHP() {
        return this.#ratedPowerHP
    }
}