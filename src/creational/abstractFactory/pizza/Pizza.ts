import { ICheese } from "../cheese/ICheese";
import { ISauce } from "../sauce/ISauce";

export enum PizzaType {
    veggie = "veggie",
    pepperoni = "pepperoni",
    cheese = "cheese",
}

export abstract class Pizza {
    public ingredients: (ICheese | ISauce)[] = [];
    public abstract addIngredients(): void;

    public bakePizza(): void {
        console.log("Baking pizza");
    }
}
