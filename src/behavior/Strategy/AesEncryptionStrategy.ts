import { IEncryptionStrategy } from "./IEncryptionStrategy";

export class AesEncryptionStrategy implements IEncryptionStrategy {
    encryptData(plaintText: string): string {
        return `Aes: ${plaintText}`;
    }
}
