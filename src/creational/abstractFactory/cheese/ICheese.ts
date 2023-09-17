export enum CheeseType {
    mozzarella = "mozzarella",
    goat = "goat",
}

export interface ICheese {
    type: CheeseType;
    prepareCheese(): void;
}
