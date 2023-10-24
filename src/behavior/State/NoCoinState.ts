import { CandyVendingMachine } from "./CandyVendingMachine";
import { ICandyVendingMachineState } from "./ICandyVendingMachineState";

export class NoCoinState implements ICandyVendingMachineState {
    constructor(private _machine: CandyVendingMachine) {}

    public insertCoin(): void {
        this._machine.setState(this._machine.getContainsCoinState());
    }

    public pressButton(): void {
        throw new Error("No coin insertetd");
    }

    public dispense(): void {
        throw new Error("No coin insertetd");
    }

    public getStateName(): string {
        return "NoCoinState";
    }
}
