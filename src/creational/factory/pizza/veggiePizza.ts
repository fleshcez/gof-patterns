import { Pizza, PizzaType } from "./pizza";

export class VeggiePizza extends Pizza {
    public addIngredients(ingredients: string[]): void {
        this.ingredients = ingredients;
        this.type = PizzaType.veggie;
    }
}
