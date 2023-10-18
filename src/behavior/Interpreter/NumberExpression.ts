import { IExpression } from "./IExpression";

export class NumberExpression implements IExpression {
    private _number: number;
    constructor(nr: string | number) {
        if (typeof nr === "string") {
            this._number = Number.parseInt(nr);
        } else {
            this._number = nr;
        }
    }

    interpret(): number {
        return this._number;
    }
}
