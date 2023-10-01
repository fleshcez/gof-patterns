import { beforeEach, describe, expect, test } from "@jest/globals";
import { CommanderImpl } from "./CommanderImpl";
import { SoldierUnit } from "./SoldierUnit";
import { TankUnit } from "./TankUnit";
import { IArmedUnit } from "./IArmedUnit";
import { ICommander } from "./ICommander";

describe("mediator test", () => {
    let commander: ICommander;
    let soldier: IArmedUnit;
    let tank: IArmedUnit;

    beforeEach(() => {
        commander = new CommanderImpl();
        soldier = new SoldierUnit(commander);
        tank = new TankUnit(commander);
        commander.registerArmedUnits(soldier, tank);
    });

    test("soldier starts attacking first", () => {
        expect(commander.startAttack(soldier)).toEqual("Soldier: attacking");
        expect(commander.startAttack(tank)).toEqual("Tank: cannot attack");
        expect(commander.ceaseAttack(soldier)).toEqual(
            "Soldier: stopped attack"
        );
        expect(commander.startAttack(tank)).toEqual("Tank: attacking");
    });

    test("tank starts attacking first", () => {
        expect(commander.startAttack(tank)).toEqual("Tank: attacking");
        expect(commander.startAttack(soldier)).toEqual(
            "Soldier: Cannot attack now, other units are attacking"
        );
        expect(commander.ceaseAttack(tank)).toEqual("Tank: stopped attack");
        expect(commander.startAttack(soldier)).toEqual("Soldier: attacking");
    });
});
