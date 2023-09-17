import { CheeseType, ICheese } from "./ICheese";

export class GoatCheese implements ICheese {
    public type = CheeseType.goat;

    constructor() {
        this.prepareCheese();
    }

    prepareCheese(): void {
        console.log("Preparing goat cheese");
    }
}
