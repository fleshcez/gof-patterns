import { describe, expect, test } from "@jest/globals";
import { VegPizzaMaker } from "./VegPizzaMaker";
import { NonVegPizzaMaker } from "./NonVegPizzaMaker";
import { InHouseAssortedPizzaMaker } from "./InHouseAssortedPizzaMaker";

describe("Template test", () => {
    test("veg pizza", () => {
        const maker = new VegPizzaMaker();
        maker.makePizza();

        expect(maker.isDoughPrepared).toEqual(true);
        expect(maker.isCrustPrebaked).toEqual(true);
        expect(maker.ingredients).toEqual(
            "preparing mushroom, tomatoes, onions, basil"
        );
        expect(maker.toppings).toEqual(
            "adding mozzarella cheese and tomato sauce"
        );
        expect(maker.isBaked).toEqual(true);
        expect(maker.isPacked).toEqual(true);
    });

    test("non veg pizza", () => {
        const maker = new NonVegPizzaMaker();
        maker.makePizza();

        expect(maker.isDoughPrepared).toEqual(true);
        expect(maker.isCrustPrebaked).toEqual(true);
        expect(maker.ingredients).toEqual(
            "Preparing chicken ham, onion, chicken sausages, and smoked chicken"
        );
        expect(maker.toppings).toEqual(
            "Adding cheese, pepper jelly, and BBQ sauce along with ingredients to crust."
        );
        expect(maker.isBaked).toEqual(true);
        expect(maker.isPacked).toEqual(true);
    });

    test("in house pizza", () => {
        const maker = new InHouseAssortedPizzaMaker();
        maker.makePizza();

        expect(maker.isDoughPrepared).toEqual(true);
        expect(maker.isCrustPrebaked).toEqual(true);
        expect(maker.ingredients).toEqual(
            "Preparing sweet corns,chicken sausage, green chillies, and onions."
        );
        expect(maker.toppings).toEqual(
            "Adding cheddar cheese and  bechamel sauce along with ingredients to crust."
        );
        expect(maker.isBaked).toEqual(true);
        expect(maker.isPacked).toEqual(false);
    });
});
