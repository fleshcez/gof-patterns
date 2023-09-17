import { House } from "./House";
import { IHouseBuilder } from "./IHouseBuilder";

export class PrefabricatedHouseBuilder implements IHouseBuilder {
    private _house: House;

    public constructor() {
        this._house = new House();
    }

    buildFoundation(): void {
        this._house.setFoundation("wood, laminate");
    }

    buildStructure(): void {
        this._house.setStructure("wood and structural steel");
    }

    buildRoof(): void {
        this._house.setRoof("roofing sheets");
    }

    paintHouse(): void {
        this._house.setPainted(false);
    }

    furnishHouse(): void {
        this._house.setFurnished(false);
    }

    getHouse(): House {
        return this._house;
    }
}
