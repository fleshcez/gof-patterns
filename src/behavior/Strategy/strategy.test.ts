import { beforeEach, describe, expect, test } from "@jest/globals";
import { IEncryptionStrategy } from "./IEncryptionStrategy";
import { AesEncryptionStrategy } from "./AesEncryptionStrategy";
import { BlowfishEncryptionStrategy } from "./BlowfishEncryptionStrategy";
import { Encryptor } from "./Encryptor";

describe("Strategy test", () => {
    let aesStrat: IEncryptionStrategy;
    let blowfishStrat: IEncryptionStrategy;
    const testText = "Test text";

    beforeEach(() => {
        aesStrat = new AesEncryptionStrategy();
        blowfishStrat = new BlowfishEncryptionStrategy();
    });

    test("should encrypt aes", () => {
        const encryptor = new Encryptor(aesStrat);
        encryptor.setPlainText(testText);
        expect(encryptor.getPlainText()).toEqual(testText);
        expect(encryptor.encrypt()).toEqual(`Aes: ${testText}`);
    });

    test("should encrypt blowfish", () => {
        const encryptor = new Encryptor(blowfishStrat);
        encryptor.setPlainText(testText);
        expect(encryptor.encrypt()).toEqual(`Blowfish: ${testText}`);
    });
});
