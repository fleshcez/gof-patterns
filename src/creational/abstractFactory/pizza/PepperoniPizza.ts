import { BaseToppingFactory } from "../BaseToppingFactory";
import { Pizza } from "./Pizza";

export class PepperoniPizza extends Pizza {
    public constructor(private _toppingFactory: BaseToppingFactory) {
        super();
    }

    public addIngredients(): void {
        this.ingredients.push(this._toppingFactory.createCheese());
        this.ingredients.push(this._toppingFactory.createSauce());
    }
}
