import { House } from "./House";

export interface IHouseBuilder {
    buildFoundation(): void;
    buildStructure(): void;
    buildRoof(): void;
    paintHouse(): void;
    furnishHouse(): void;
    getHouse(): House;
}
