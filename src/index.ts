/**
 * Creates new sailboat
 * @class SailBoatEngine
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
    * Returns hull speed knots
    * @public
    * @function
    */
    public hullSpeed() {
        return this._slratio * Math.sqrt(this._lwl);
    }
}