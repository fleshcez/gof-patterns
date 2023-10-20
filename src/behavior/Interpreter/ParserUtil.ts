import { AdditionExpression } from "./AdditionExpression";
import { DivisionExpression } from "./DivisionExpression";
import { IExpression } from "./IExpression";
import { MultiplicationExpression } from "./MultiplicationExpression";
import { SubtractionExpression } from "./SubtractionExpression";

export class ParserUtil {
    public static isOperator(symbol: string): boolean {
        return (
            symbol === "-" || symbol === "+" || symbol === "*" || symbol === "/"
        );
    }

    public static getExpressionObject(
        firstExpression: IExpression,
        secondExpression: IExpression,
        symbol: string
    ): IExpression {
        switch (symbol) {
            case "+":
                return new AdditionExpression(
                    firstExpression,
                    secondExpression
                );
            case "-":
                return new SubtractionExpression(
                    firstExpression,
                    secondExpression
                );
            case "*":
                return new MultiplicationExpression(
                    firstExpression,
                    secondExpression
                );
            case "/":
                return new DivisionExpression(
                    firstExpression,
                    secondExpression
                );
        }
    }
}
