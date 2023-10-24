import { CandyVendingMachine } from "./CandyVendingMachine";
import { ICandyVendingMachineState } from "./ICandyVendingMachineState";

export class NoCandyState implements ICandyVendingMachineState {
    constructor(private _machine: CandyVendingMachine) {}

    insertCoin(): void {
        throw new Error("No candies available");
    }

    pressButton(): void {
        throw new Error("No candies available");
    }

    dispense(): void {
        throw new Error("No candies available");
    }

    getStateName(): string {
        return "NoCandyState";
    }
}
