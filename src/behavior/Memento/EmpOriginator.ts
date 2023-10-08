import { EmpMemento } from "./EmpMemento";

export interface IEmployee {
    empId: number;
    empName: string;
    empPhoneNo: string;
    empDesignation: string;
}

export class EmpOriginator {
    constructor(
        private _empId: number,
        private _empName: string,
        private _empPhoneNo: string,
        private _empDesignation: string
    ) {}

    public get empDesignation(): string {
        return this._empDesignation;
    }

    public set empDesignation(value: string) {
        this._empDesignation = value;
    }

    public get empPhoneNo(): string {
        return this._empPhoneNo;
    }

    public set empPhoneNo(value: string) {
        this._empPhoneNo = value;
    }

    public get empName(): string {
        return this._empName;
    }

    public set empName(value: string) {
        this._empName = value;
    }

    public get empId(): number {
        return this._empId;
    }

    public set empId(value: number) {
        this._empId = value;
    }

    public saveToMemento(): EmpMemento {
        let empMemento: EmpMemento = new EmpMemento(
            this._empId,
            this._empName,
            this._empPhoneNo,
            this._empDesignation
        );
        return empMemento;
    }

    public undoFromMemento(memento: EmpMemento): void {
        this._empId = memento.empId;
        this._empName = memento.empName;
        this._empPhoneNo = memento.empPhoneNo;
        this._empDesignation = memento.empDesignation;
    }

    public getCurrentState(): IEmployee {
        return {
            empId: this._empId,
            empName: this._empName,
            empPhoneNo: this._empPhoneNo,
            empDesignation: this._empDesignation,
        };
    }
}
