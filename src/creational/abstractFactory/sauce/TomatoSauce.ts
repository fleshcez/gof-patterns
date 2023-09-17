import { ISauce, SauceType } from "./ISauce";

export class TomatoSauce implements ISauce {
    public type = SauceType.tomato;

    constructor() {
        this.prepareSauce();
    }

    prepareSauce(): void {
        console.log("Preparing tomato sauce");
    }
}
