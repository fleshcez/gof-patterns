import { SicilianToppingFactory } from "../../SicilianToppingFactory";
import { CheesePizza } from "../CheesePizza";
import { PepperoniPizza } from "../PepperoniPizza";
import { PizzaType, Pizza } from "../Pizza";
import { VeggiePizza } from "../VeggiePizza";
import { BasePizzaFactory } from "./BasePizzaFactory";

export class SicilianPizzaFactory extends BasePizzaFactory {
    public createPizza(type: PizzaType): Pizza {
        let pizza: Pizza;
        const sicilianToppingFactory = new SicilianToppingFactory();

        switch (type) {
            case PizzaType.cheese:
                pizza = new CheesePizza(sicilianToppingFactory);
                break;
            case PizzaType.pepperoni:
                pizza = new PepperoniPizza(sicilianToppingFactory);
                break;
            case PizzaType.veggie:
                pizza = new VeggiePizza(sicilianToppingFactory);
                break;
            default:
                throw `${type} not a valid pizza type!`;
        }

        pizza.addIngredients();
        pizza.bakePizza();
        return pizza;
    }
}
