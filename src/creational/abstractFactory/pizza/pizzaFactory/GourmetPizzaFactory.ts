import { GourmetToppingFactory } from "../../GourmetToppingFactory";
import { CheesePizza } from "../CheesePizza";
import { PepperoniPizza } from "../PepperoniPizza";
import { PizzaType, Pizza } from "../Pizza";
import { VeggiePizza } from "../VeggiePizza";
import { BasePizzaFactory } from "./BasePizzaFactory";

export class GourmetPizzaFactory extends BasePizzaFactory {
    public createPizza(type: PizzaType): Pizza {
        let pizza: Pizza;
        const gourmetToppingFactory = new GourmetToppingFactory();

        switch (type) {
            case PizzaType.cheese:
                pizza = new CheesePizza(gourmetToppingFactory);
                break;
            case PizzaType.pepperoni:
                pizza = new PepperoniPizza(gourmetToppingFactory);
                break;
            case PizzaType.veggie:
                pizza = new VeggiePizza(gourmetToppingFactory);
                break;
            default:
                throw `${type} is not a valid gourmet pizza type!`;
        }
        pizza.addIngredients();
        pizza.bakePizza();
        return pizza;
    }
}
