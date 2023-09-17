import { FlowerBouquet } from "./FlowerBouquet";
import { FlowerBouquetDecorator } from "./FlowerBouquetDecorator";

export class Glitter extends FlowerBouquetDecorator {
    constructor(private _flowerBouquet: FlowerBouquet) {
        super();
    }
    public getDescription(): string {
        return `${this._flowerBouquet.getDescription()}, glitter`;
    }

    public cost(): number {
        return this._flowerBouquet.cost() + 4;
    }
}
