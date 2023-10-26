import { PizzaMaker } from "./PizzaMaker";

export class VegPizzaMaker extends PizzaMaker {
    public prepareIngredients() {
        this.ingredients = "preparing mushroom, tomatoes, onions, basil";
    }
    public addToppings() {
        this.toppings = "adding mozzarella cheese and tomato sauce";
    }
}
