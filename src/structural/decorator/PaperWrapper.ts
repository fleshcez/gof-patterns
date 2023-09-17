import { FlowerBouquet } from "./FlowerBouquet";
import { FlowerBouquetDecorator } from "./FlowerBouquetDecorator";

export class PaperWrapper extends FlowerBouquetDecorator {
    constructor(private _flowerBouquet: FlowerBouquet) {
        super();
    }

    public getDescription(): string {
        return `${this._flowerBouquet.getDescription()}, paper wrap`;
    }
    public cost(): number {
        return this._flowerBouquet.cost() + 3;
    }
}
