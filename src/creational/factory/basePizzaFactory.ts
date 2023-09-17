import { Pizza, PizzaType } from "./pizza/pizza";

export abstract class BasePizzaFactory {
    public abstract create(type: PizzaType, ingredients: string[]): Pizza;
}
