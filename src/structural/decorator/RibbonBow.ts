import { FlowerBouquet } from "./FlowerBouquet";
import { FlowerBouquetDecorator } from "./FlowerBouquetDecorator";

export class RibbonBow extends FlowerBouquetDecorator {
    constructor(private _flowerBouquet: FlowerBouquet) {
        super();
    }

    public getDescription(): string {
        return `${this._flowerBouquet.getDescription()}, ribbon bow`;
    }

    public cost(): number {
        return this._flowerBouquet.cost() + 6.5;
    }
}
