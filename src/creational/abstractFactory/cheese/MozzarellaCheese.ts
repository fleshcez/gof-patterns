import { CheeseType, ICheese } from "./ICheese";

export class MozzarellaCheese implements ICheese {
    public type = CheeseType.mozzarella;

    constructor() {
        this.prepareCheese();
    }

    prepareCheese(): void {
        console.log("Preparing mozzarella cheese");
    }
}
