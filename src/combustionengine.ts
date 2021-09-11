/// <reference path="references.ts" />

/**
 * @class CombustionEngine
 * @example
 * SBE = new CombustionEngine()
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