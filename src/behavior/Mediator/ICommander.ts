import { IArmedUnit } from "./IArmedUnit";

export interface ICommander {
    registerArmedUnits(soldier: IArmedUnit, tank: IArmedUnit): void;
    setAttackStatus(attackStatus: boolean): void;
    canAttack(): boolean;
    startAttack(armedUnit: IArmedUnit): string;
    ceaseAttack(armedUnit: IArmedUnit): string;
}
