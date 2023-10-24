import { CandyVendingMachine } from "./CandyVendingMachine";
import { ICandyVendingMachineState } from "./ICandyVendingMachineState";

export class ContainsCoinState implements ICandyVendingMachineState {
    constructor(private _machine: CandyVendingMachine) {}

    insertCoin(): void {
        throw new Error("Coin already inserted");
    }

    pressButton(): void {
        this._machine.setState(this._machine.getDispensedState());
    }

    dispense(): void {
        throw new Error("Press button to dispense");
    }

    getStateName(): string {
        return "ContainsCoinState";
    }
}
