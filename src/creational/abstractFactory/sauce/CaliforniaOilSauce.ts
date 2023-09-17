import { ISauce, SauceType } from "./ISauce";

export class CaliforniaOilSauce implements ISauce {
    public type = SauceType.californiaOil;

    constructor() {
        this.prepareSauce();
    }

    prepareSauce(): void {
        console.log("Preparing california sauce");
    }
}
