import { PizzaMaker } from "./PizzaMaker";

export class InHouseAssortedPizzaMaker extends PizzaMaker {
    public prepareIngredients() {
        this.ingredients =
            "Preparing sweet corns,chicken sausage, green chillies, and onions.";
    }

    public addToppings() {
        this.toppings =
            "Adding cheddar cheese and  bechamel sauce along with ingredients to crust.";
    }

    public customerWantsPackedPizza(): boolean {
        return false;
    }
}
