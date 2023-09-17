import { describe, expect, test, it, beforeEach } from "@jest/globals";
import { PizzaFactory } from "./pizzaFactory";
import { PizzaType } from "./pizza/pizza";
import { BasePizzaFactory } from "./basePizzaFactory";

describe("Factory Pizza", () => {
    let factory: BasePizzaFactory;

    beforeEach(() => {
        factory = new PizzaFactory();
    });

    test("should bake a cheese pizza", () => {
        const ingredients = ["tomato sauce", "cheese"];
        const pizza = factory.create(PizzaType.cheese, ingredients);

        expect(pizza.getIngredients()).toEqual(ingredients);
        expect(pizza.getType()).toEqual(PizzaType.cheese);
    });

    test("should bake a veggie pizza", () => {
        const ingredients = [
            "tomato sauce",
            "garlic",
            "eggplant",
            "bell pepper",
        ];
        const pizza = factory.create(PizzaType.veggie, ingredients);

        expect(pizza.getIngredients()).toEqual(ingredients);
        expect(pizza.getType()).toEqual(PizzaType.veggie);
    });

    test("should bake a pepperoni pizza", () => {
        const ingredients = ["tomato sauce", "pepperoni", "mozzarella"];
        const pizza = factory.create(PizzaType.pepperoni, ingredients);

        expect(pizza.getIngredients()).toEqual(ingredients);
        expect(pizza.getType()).toEqual(PizzaType.pepperoni);
    });

    test("should throw an error", () => {
        const pizzaType = "burger" as any;
        const burgerPizzaFn = () => factory.create(pizzaType, ["beef"]);

        expect(burgerPizzaFn).toThrow(
            `${pizzaType} is not a valid pizza type!`
        );
    });
});
