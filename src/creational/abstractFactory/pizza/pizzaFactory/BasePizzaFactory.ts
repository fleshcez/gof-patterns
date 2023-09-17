import { Pizza, PizzaType } from "../Pizza";

export abstract class BasePizzaFactory {
    public abstract createPizza(type: PizzaType): Pizza;
}
