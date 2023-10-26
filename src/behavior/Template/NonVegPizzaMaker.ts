import { PizzaMaker } from "./PizzaMaker";

export class NonVegPizzaMaker extends PizzaMaker {
    public prepareIngredients() {
        this.ingredients =
            "Preparing chicken ham, onion, chicken sausages, and smoked chicken";
    }

    public addToppings() {
        this.toppings =
            "Adding cheese, pepper jelly, and BBQ sauce along with ingredients to crust.";
    }
}
