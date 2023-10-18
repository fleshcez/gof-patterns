import { IExpression } from "./IExpression";

export class AdditionExpression implements IExpression {
    constructor(
        private _firstExpression: IExpression,
        private _secondExpression: IExpression
    ) {}

    public interpret(): number {
        return (
            this._firstExpression.interpret() +
            this._secondExpression.interpret()
        );
    }

    public toString(): string {
        return "+";
    }
}
