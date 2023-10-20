import { beforeEach, describe, expect, test } from "@jest/globals";
import { ExpressionParser } from "./ExpressionParser";

describe("interpreter test", () => {
    let expressionParser: ExpressionParser;

    beforeEach(() => {
        expressionParser = new ExpressionParser();
    });

    test("it should parse", () => {
        const expr = "2 1 5 + *"; // (5 + 1) * 2 = 12
        const expr2 = "2 1 5 6 + - *"; // ((5 + 6) - 1) * 2 = 20
        expect(expressionParser.parse(expr)).toEqual(12);
        expect(expressionParser.parse(expr2)).toEqual(20);
    });

    test("it should divide", () => {
        const expr = "2 6 /";
        expect(expressionParser.parse(expr)).toEqual(3);
    });
});
