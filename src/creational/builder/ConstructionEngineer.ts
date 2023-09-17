import { House } from "./House";
import { IHouseBuilder } from "./IHouseBuilder";

export class ConstructionEngineer {
    public constructor(private _houseBuilder: IHouseBuilder) {}

    public buildHouse(): House {
        this._houseBuilder.buildFoundation();
        this._houseBuilder.buildStructure();
        this._houseBuilder.buildRoof();
        this._houseBuilder.paintHouse();
        this._houseBuilder.furnishHouse();

        return this._houseBuilder.getHouse();
    }
}
