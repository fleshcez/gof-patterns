import { IEmployee } from "./EmpOriginator";

export class EmpMemento {
    constructor(
        private _empId: number,
        private _empName: string,
        private _empPhoneNo: string,
        private _empDesignation: string
    ) {}

    public get empDesignation(): string {
        return this._empDesignation;
    }

    public get empPhoneNo(): string {
        return this._empPhoneNo;
    }

    public get empName(): string {
        return this._empName;
    }

    public get empId(): number {
        return this._empId;
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
