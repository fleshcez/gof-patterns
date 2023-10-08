import { EmpMemento } from "./EmpMemento";

export class EmpCareTaker {
    private _mementos: EmpMemento[] = [];

    public getMemento(): EmpMemento {
        const memento = this._mementos.pop();
        return memento;
    }

    public addMemento(memento: EmpMemento): void {
        this._mementos.push(memento);
    }
}
