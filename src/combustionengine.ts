/// <reference path="references.ts" />

/**
 * @class CombustionEngine
 * @example
 * SBE = new CombustionEngine()
 */
export class CombustionEngine {
    private _ratedpower!: number

    /**
   * Rated power in HP
   * @public
   * @type {number}
   */
    public set ratedpower(ratedpower: number) {
        this._ratedpower = ratedpower
    }

    public get ratedpower() {
        return this._ratedpower
    }
}