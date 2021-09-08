/**
 * Creates a new sailboat.
 * @constructor
 */

export class SailBoatEngine {
    private _slratio = 1.34
    private _displacement!: number
    private _lwl!: number

    /**
    * Sets the slratio
    * @public
    */
    public set slratio(slratio: number) {
        this._slratio = slratio
    }

    /**
    * Gets the slratio
    * @public
    */
    public get slratio() {
        return this._slratio
    }

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

    public hullSpeed() {
        return this._slratio * Math.sqrt(this._lwl);
    }
}