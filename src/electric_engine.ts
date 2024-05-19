/**
 * ```js
 * // Example
 * // Add electric engine to your sailboat
 * sailboat.engines['my-electric-engine-name'] = new ElectricEngine()
 * ```
 */
export class ElectricEngine {
  #ratedPowerKW!: number;
  #voltage!: number;
  #current!: number;

  public constructor() {
    this.voltage = 48;
  }

  /**
   * Voltage in Volt
   */
  public set voltage(voltage: number) {
    this.#voltage = voltage;
  }

  public get voltage(): number {
    return this.#voltage;
  }

  /**
   * Maximum current in Amps
   */
  public set current(current: number) {
    this.#current = current;
  }

  public get current() {
    return this.#current;
  }

  /**
   * Rated power in KW
   */
  public set ratedPowerKW(ratedPowerKW: number) {
    this.#ratedPowerKW = ratedPowerKW;
  }

  public get ratedPowerKW() {
    return this.#ratedPowerKW;
  }

  /**
   * Calculates power based on voltage and current
   */
  private get calculatedPowerKW(): number {
    return (this.#current * this.#voltage) / 1000;
  }

  /**
   * Maximum power based on voltage, current ánd rated power
   */
  public maxPower(): number {
    if (isNaN(this.calculatedPowerKW)) {
      return this.#ratedPowerKW;
    }
    if (isNaN(this.#ratedPowerKW)) {
      return this.calculatedPowerKW;
    }
    if (this.#ratedPowerKW < this.calculatedPowerKW) {
      return this.#ratedPowerKW;
    } else {
      return this.calculatedPowerKW;
    }
  }
}
