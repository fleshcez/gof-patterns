import { IArmedUnit } from "./IArmedUnit";
import { ICommander } from "./ICommander";

export class TankUnit implements IArmedUnit {
    constructor(private _commander: ICommander) {}

    attack(): string {
        if (this._commander.canAttack()) {
            this._commander.setAttackStatus(false);
            return "Tank: attacking";
        } else {
            return "Tank: cannot attack";
        }
    }

    stopAttack(): string {
        this._commander.setAttackStatus(true);
        return "Tank: stopped attack";
    }
}
