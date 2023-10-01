import { IArmedUnit } from "./IArmedUnit";
import { ICommander } from "./ICommander";

export class SoldierUnit implements IArmedUnit {
    constructor(private _commander: ICommander) {}
    attack(): string {
        if (this._commander.canAttack()) {
            this._commander.setAttackStatus(false);
            return "Soldier: attacking";
        } else {
            return "Soldier: Cannot attack now, other units are attacking";
        }
    }

    stopAttack(): string {
        this._commander.setAttackStatus(true);
        return "Soldier: stopped attack";
    }
}
