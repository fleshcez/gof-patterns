import { NumberExpression } from "./NumberExpression";
import { ParserUtil } from "./ParserUtil";

export class ExpressionParser {
    public parse(str: string): number {
        const stack = [];
        const tokenList = str.split(" ");

        tokenList.forEach((symbol) => {
            if (!ParserUtil.isOperator(symbol)) {
                const numberExpression = new NumberExpression(symbol);
                stack.push(numberExpression);
                console.log(`Pushed to stack: ${numberExpression.interpret()}`);
            } else if (ParserUtil.isOperator(symbol)) {
                const firstExpr = stack.pop();
                const secondExpr = stack.pop();
                console.log(
                    `Popped operands ${firstExpr.interpret()}, ${secondExpr.interpret()}`
                );

                const operator = ParserUtil.getExpressionObject(
                    firstExpr,
                    secondExpr,
                    symbol
                );
                console.log(`Applying operator: ${operator}`);

                const result = operator.interpret();
                const resultExpression = new NumberExpression(result);
                stack.push(resultExpression);

                console.log(
                    `Pushed result to stack: ${resultExpression.interpret()}`
                );
            }
        });

        const result = stack.pop().interpret();
        return result;
    }
}
