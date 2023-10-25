export interface IEncryptionStrategy {
    encryptData(plaintText: string): string;
}
