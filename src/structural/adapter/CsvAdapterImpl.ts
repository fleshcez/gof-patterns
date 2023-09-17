import { ICsvFormattable } from "./ICsvFormattable";
import { ITextFormattable } from "./ITextFormattable";

export class CsvAdapterImpl implements ITextFormattable {
    constructor(private _csvFormatter: ICsvFormattable) {}

    formatText(text: string): string {
        return this._csvFormatter.formatCsvText(text);
    }
}
