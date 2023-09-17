import { describe, expect, test } from "@jest/globals";
import { ConcreteHouseBuilder } from "./ConcreteHouseBuilder";
import { ConstructionEngineer } from "./ConstructionEngineer";
import { PrefabricatedHouseBuilder } from "./PrefabricatedHouseBuilder";

describe("Builder", () => {
    test("should build a concrete house", () => {
        const concreteHouseBuilder = new ConcreteHouseBuilder();
        const engineer = new ConstructionEngineer(concreteHouseBuilder);
        const house = engineer.buildHouse();

        expect(house.toString()).toEqual(
            `Foundation - brick, concrete Structure - concrete, brick Roof - concrete, steel Furnished - true Painted - true`
        );
    });

    test("should build a panel house", () => {
        const prefabricatedHouseBuilder = new PrefabricatedHouseBuilder();
        const engineer = new ConstructionEngineer(prefabricatedHouseBuilder);
        const house = engineer.buildHouse();

        expect(house.toString()).toEqual(
            `Foundation - wood, laminate Structure - wood and structural steel Roof - roofing sheets Furnished - false Painted - false`
        );
    });
});
