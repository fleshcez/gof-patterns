import { IArmedUnit } from "./IArmedUnit";
import { ICommander } from "./ICommander";

export class CommanderImpl implements ICommander {
    private _soldier: IArmedUnit;
    private _tank: IArmedUnit;
    private _attackStatus: boolean = true;

    registerArmedUnits(soldier: IArmedUnit, tank: IArmedUnit): void {
        this._soldier = soldier;
        this._tank = tank;
    }

    setAttackStatus(attackStatus: boolean): void {
        this._attackStatus = attackStatus;
    }

    canAttack(): boolean {
        return this._attackStatus;
    }

    startAttack(armedUnit: IArmedUnit): string {
        return armedUnit.attack();
    }
    ceaseAttack(armedUnit: IArmedUnit): string {
        return armedUnit.stopAttack();
    }
}
