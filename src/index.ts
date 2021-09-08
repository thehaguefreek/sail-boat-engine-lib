/**
 * @class SailBoatEngine
 * @example
 * SBE = new SailBoatEngine()
 */
export class SailBoatEngine {
    private _slratio = 1.34
    private _displacement!: number
    private _lwl!: number

    /**
    * SL Ratio
    * @public
    * @type {number}
    * @default [1.34]
    */
    public set slratio(slratio: number) {
        this._slratio = slratio
    }

    public get slratio() {
        return this._slratio
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
        this._displacement = displacement
    }

    public get displacement() {
        return this._displacement
    }

    /**
    * Length water line in ft
    * @type {number}
    */
    public set lwl(lwl: number) {
        this._lwl = lwl
    }

    public get lwl() {
        return this._lwl
    }

    /**
    * Returns hull speed in kts
    * @public
    * @function
    * @returns {number} hull speed in knots
    */
    public hullSpeed(): number {
        return this._slratio * Math.sqrt(this._lwl);
    }
}