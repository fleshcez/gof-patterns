import { describe, expect, test, it, beforeEach } from "@jest/globals";

import { SicilianToppingFactory } from "./SicilianToppingFactory";
import { BaseToppingFactory } from "./BaseToppingFactory";
import { GourmetToppingFactory } from "./GourmetToppingFactory";

import { GourmetPizzaFactory } from "./pizza/pizzaFactory/GourmetPizzaFactory";
import { BasePizzaFactory } from "./pizza/pizzaFactory/BasePizzaFactory";
import { Pizza, PizzaType } from "./pizza/Pizza";
import { CheeseType } from "./cheese/ICheese";
import { SauceType } from "./sauce/ISauce";
import { SicilianPizzaFactory } from "./pizza/pizzaFactory/SicilianPizzaFactory";
import { VeggiePizza } from "./pizza/VeggiePizza";

describe("Pizza abstract factory test", () => {
    describe("Gourmet pizzas", () => {
        let gourmetPizzaFactory: BasePizzaFactory;

        beforeEach(() => {
            gourmetPizzaFactory = new GourmetPizzaFactory();
        });

        const checkIngredients = (pizza: Pizza) => {
            const cheese = pizza.ingredients.find(
                (i) => i.type === CheeseType.goat
            );
            const sauce = pizza.ingredients.find(
                (i) => i.type === SauceType.californiaOil
            );
            expect(cheese).toEqual({ type: CheeseType.goat });
            expect(sauce).toEqual({ type: SauceType.californiaOil });
        };

        test("should create a gourmet veggie pizza", () => {
            const vp = gourmetPizzaFactory.createPizza(PizzaType.veggie);
            checkIngredients(vp);
        });

        test("should create a gourmet pepperoni pizza", () => {
            const pp = gourmetPizzaFactory.createPizza(PizzaType.pepperoni);
            checkIngredients(pp);
        });

        test("should create a gourmet cheese pizza", () => {
            const cp = gourmetPizzaFactory.createPizza(PizzaType.cheese);
            checkIngredients(cp);
        });

        test("should throw an error", () => {
            const bad = () => gourmetPizzaFactory.createPizza("beef" as any);
            expect(bad).toThrow();
        });
    });

    describe("Sicilian pizzas", () => {
        let sicilianPizzaFactory: BasePizzaFactory;
        beforeEach(() => {
            sicilianPizzaFactory = new SicilianPizzaFactory();
        });

        const checkIngredients = (pizza: Pizza) => {
            const cheese = pizza.ingredients.find(
                (i) => i.type === CheeseType.mozzarella
            );
            const sauce = pizza.ingredients.find(
                (i) => i.type === SauceType.tomato
            );
            expect(cheese).toEqual({ type: CheeseType.mozzarella });
            expect(sauce).toEqual({ type: SauceType.tomato });
        };

        test("should create a sicilian veggie pizza", () => {
            const vp = sicilianPizzaFactory.createPizza(PizzaType.veggie);
            checkIngredients(vp);
        });

        test("should create a sicilian cheese pizza", () => {
            const cp = sicilianPizzaFactory.createPizza(PizzaType.cheese);
            checkIngredients(cp);
        });

        test("should create a sicilian pepperoni pizza", () => {
            const pp = sicilianPizzaFactory.createPizza(PizzaType.pepperoni);
            checkIngredients(pp);
        });

        test("should throw error", () => {
            const bad = () => sicilianPizzaFactory.createPizza("beef" as any);
            expect(bad).toThrow();
        });
    });
});
