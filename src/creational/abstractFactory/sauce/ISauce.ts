export enum SauceType {
    californiaOil = "californiaOil",
    tomato = "tomato",
}

export interface ISauce {
    type: SauceType;
    prepareSauce(): void;
}
