import { BaseToppingFactory } from "../BaseToppingFactory";
import { Pizza } from "./Pizza";

export class CheesePizza extends Pizza {
    public constructor(private _toppingsFactory: BaseToppingFactory) {
        super();
    }

    public addIngredients(): void {
        this.ingredients.push(this._toppingsFactory.createCheese());
        this.ingredients.push(this._toppingsFactory.createSauce());
    }
}
