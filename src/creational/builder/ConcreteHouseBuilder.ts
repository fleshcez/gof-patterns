import { House } from "./House";
import { IHouseBuilder } from "./IHouseBuilder";

export class ConcreteHouseBuilder implements IHouseBuilder {
    private _house: House;

    public constructor() {
        this._house = new House();
    }

    buildFoundation(): void {
        this._house.setFoundation("brick, concrete");
    }

    buildStructure(): void {
        this._house.setStructure("concrete, brick");
    }

    buildRoof(): void {
        this._house.setRoof("concrete, steel");
    }

    paintHouse(): void {
        this._house.setPainted(true);
    }

    furnishHouse(): void {
        this._house.setFurnished(true);
    }

    getHouse(): House {
        return this._house;
    }
}
