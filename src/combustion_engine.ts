/// <reference path="references.ts" />

/**
 * @class CombustionEngine
 * @example
 * // Adds 'Kromhout' combustion engine to sailboat
 * sailboat.engines['Kromhout'] = new CombustionEngine()
 */
export class CombustionEngine {
    #ratedpower!: number

    /**
   * Rated power in HP
   * @public
   * @type {number}
   */
    public set ratedpower(ratedpower: number) {
        this.#ratedpower = ratedpower
    }

    public get ratedpower() {
        return this.#ratedpower
    }
}