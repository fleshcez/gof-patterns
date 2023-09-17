import { Pizza, PizzaType } from "./pizza";

export class PepperoniPizza extends Pizza {
    public addIngredients(ingredients: string[]): void {
        this.ingredients = ingredients;
        this.type = PizzaType.pepperoni;
    }
}
