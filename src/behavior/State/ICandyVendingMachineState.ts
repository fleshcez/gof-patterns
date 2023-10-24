export interface ICandyVendingMachineState {
    insertCoin(): void;
    pressButton(): void;
    dispense(): void;
    getStateName(): string;
}
