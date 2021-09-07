/**
 * Creates a new sailboat.
 * @constructor
 */

export class SailBoatEngine {
    private _slratio = 1.34

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
}