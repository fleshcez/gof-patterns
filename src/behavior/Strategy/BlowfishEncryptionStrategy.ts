import { IEncryptionStrategy } from "./IEncryptionStrategy";

export class BlowfishEncryptionStrategy implements IEncryptionStrategy {
    encryptData(plaintText: string): string {
        return `Blowfish: ${plaintText}`;
    }
}
