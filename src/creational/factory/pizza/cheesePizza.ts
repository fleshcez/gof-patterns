import { Pizza, PizzaType } from "./pizza";

export class CheesePizza extends Pizza {
    public addIngredients(ingredients: string[]): void {
        this.ingredients = ingredients;
        this.type = PizzaType.cheese;
    }
}
