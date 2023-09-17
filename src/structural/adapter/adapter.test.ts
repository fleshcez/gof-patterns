import { describe, expect, test } from "@jest/globals";
import { NewLineFormatter } from "./NewLineFormatter";
import { ITextFormattable } from "./ITextFormattable";
import { CsvFormatter } from "./CsvFormatter";
import { CsvAdapterImpl } from "./CsvAdapterImpl";
import { ICsvFormattable } from "./ICsvFormattable";

describe("adapter test", () => {
    const toFormat =
        " Formatting line 1. Formatting line 2. Formatting line 3.";

    test("apply new line formatter", () => {
        const formatter: ITextFormattable = new NewLineFormatter();
        const formatted = formatter.formatText(toFormat);

        expect(formatted).toEqual(
            " Formatting line 1\n Formatting line 2\n Formatting line 3\n"
        );
    });

    test("apply csv formatter", () => {
        const csvFormatter: ICsvFormattable = new CsvFormatter();
        const adapter: ITextFormattable = new CsvAdapterImpl(csvFormatter);

        expect(adapter.formatText(toFormat)).toEqual(
            " Formatting line 1, Formatting line 2, Formatting line 3,"
        );
    });
});
