import { BasePizzaFactory } from "./basePizzaFactory";

import { PepperoniPizza } from "./pizza/pepperoniPizza";
import { CheesePizza } from "./pizza/cheesePizza";
import { VeggiePizza } from "./pizza/veggiePizza";

import { Pizza, PizzaType } from "./pizza/pizza";

export class PizzaFactory extends BasePizzaFactory {
    public create(type: string, ingredients: string[]): Pizza {
        let pizza: Pizza;
        switch (type) {
            case PizzaType.cheese:
                pizza = new CheesePizza();
                break;
            case PizzaType.pepperoni:
                pizza = new PepperoniPizza();
                break;
            case PizzaType.veggie:
                pizza = new VeggiePizza();
                break;
            default:
                throw `${type} is not a valid pizza type!`;
        }

        pizza.addIngredients(ingredients);
        pizza.bakePizza();
        return pizza;
    }
}
