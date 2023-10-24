import { CandyVendingMachine } from "./CandyVendingMachine";
import { ICandyVendingMachineState } from "./ICandyVendingMachineState";

export class DispensedState implements ICandyVendingMachineState {
    constructor(private _machine: CandyVendingMachine) {}

    insertCoin(): void {
        throw new Error("System is currently dispensing");
    }

    pressButton(): void {
        throw new Error("System is currently dispensing");
    }

    dispense(): void {
        if (this._machine.getCount() > 0) {
            this._machine.setState(this._machine.getNoCoinState());
            this._machine.setCount(this._machine.getCount() - 1);
        } else {
            console.log("No candies available");
            this._machine.setState(this._machine.getNoCandyState());
        }
    }

    getStateName(): string {
        return "DispensedState";
    }
}
