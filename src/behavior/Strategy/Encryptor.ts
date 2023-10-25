import { IEncryptionStrategy } from "./IEncryptionStrategy";

export class Encryptor {
    public _plainText: string;
    constructor(private _strategy: IEncryptionStrategy) {}

    public encrypt(): string {
        return this._strategy.encryptData(this._plainText);
    }

    public setPlainText(text: string): void {
        this._plainText = text;
    }

    public getPlainText(): string {
        return this._plainText;
    }
}
