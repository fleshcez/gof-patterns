export enum PizzaType {
    cheese = "cheese",
    pepperoni = "pepperoni",
    veggie = "veggie",
}

export abstract class Pizza {
    protected ingredients: string[];
    protected type: PizzaType;

    public abstract addIngredients(ingredients: string[]): void;

    public getIngredients(): string[] {
        return this.ingredients;
    }

    public getType(): PizzaType {
        return this.type;
    }

    public bakePizza(): void {
        console.log("Baking pizza");
    }
}
