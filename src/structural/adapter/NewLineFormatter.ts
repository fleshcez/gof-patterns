import { ITextFormattable } from "./ITextFormattable";

export class NewLineFormatter implements ITextFormattable {
    public formatText(text: string): string {
        return (text as any).replaceAll(".", "\n");
    }
}
