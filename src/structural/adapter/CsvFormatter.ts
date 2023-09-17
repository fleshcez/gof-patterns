import { ICsvFormattable } from "./ICsvFormattable";

export class CsvFormatter implements ICsvFormattable {
    public formatCsvText(text: string): string {
        return (text as any).replaceAll(".", ",");
    }
}
