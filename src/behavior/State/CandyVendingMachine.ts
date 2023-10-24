import { ContainsCoinState } from "./ContainsCoinState";
import { DispensedState } from "./DispensedState";
import { ICandyVendingMachineState } from "./ICandyVendingMachineState";
import { NoCandyState } from "./NoCandyState";
import { NoCoinState } from "./NoCoinState";

export class CandyVendingMachine {
    private _noCoinState: ICandyVendingMachineState;
    private _noCandyState: ICandyVendingMachineState;
    private _containsCoinState: ICandyVendingMachineState;
    private _dispensedState: ICandyVendingMachineState;

    private _state: ICandyVendingMachineState;

    private _count;
    constructor(numberOfCandies: number) {
        this._count = numberOfCandies;

        this._noCoinState = new NoCoinState(this);
        this._containsCoinState = new ContainsCoinState(this);
        this._dispensedState = new DispensedState(this);
        this._noCandyState = new NoCandyState(this);

        this._state = this._noCoinState;
    }

    public setState(state: ICandyVendingMachineState) {
        this._state = state;
    }

    public getState(): ICandyVendingMachineState {
        return this._state;
    }

    public getContainsCoinState(): ICandyVendingMachineState {
        return this._containsCoinState;
    }

    public getDispensedState(): ICandyVendingMachineState {
        return this._dispensedState;
    }

    public getNoCandyState(): ICandyVendingMachineState {
        return this._noCandyState;
    }

    public getNoCoinState(): ICandyVendingMachineState {
        return this._noCoinState;
    }

    public getCount(): number {
        return this._count;
    }

    public setCount(count: number): void {
        this._count = count;
    }

    public refillCandy(count: number): void {
        this._count += count;
    }

    public insertCoin(): void {
        this._state.insertCoin();
    }

    public pressButton(): void {
        this._state.pressButton();
        this._state.dispense();
    }

    public ejectCandy(): void {
        if (this._count !== 0) {
            this._count--;
        }
    }
}
