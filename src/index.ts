/**
 * Creates new sailboat
 * @class SailBoatEngine
 */
export class SailBoatEngine {
    private _slratio = 1.34
    private _displacement!: number
    private _lwl!: number

    /**
    * Sets the slratio
    * @public
    * @type {number}
    * @memberof SailBoatEngine
    */
    public set slratio(slratio: number) {
        this._slratio = slratio
    }

    /**
    * Gets the slratio
    * @public
    * @type {number}
    * @default [1.34]
    * @memberof SailBoatEngine
    */
    public get slratio() {
        return this._slratio
    }

    /**
    * Sets the displacement in ft
    * @type {number}
    */
    public set displacement(displacement: number) {
        this._displacement = displacement
    }

    public get displacement() {
        return this._displacement
    }

    public set lwl(lwl: number) {
        this._lwl = lwl
    }

    public get lwl() {
        return this._lwl
    }

    /**
    * Sets the displacement in ft
    * @public
    * @function
    */
    public hullSpeed() {
        return this._slratio * Math.sqrt(this._lwl);
    }
}