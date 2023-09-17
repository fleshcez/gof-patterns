import { beforeEach, describe, expect, test } from "@jest/globals";
import { DocumentPropertyManager } from "./DocumentPropertyManager";
import { NDAgreement } from "./NDAgreement";

describe("Prototype test", () => {
    beforeEach(() => {
        DocumentPropertyManager.init();
    });
    test("create cloned terms and conditions", () => {
        const clonedTAndC1 = DocumentPropertyManager.getClonedDocument("tandc");
        clonedTAndC1.vendorName = "Gigel";
        const clonedTAndC2 = DocumentPropertyManager.getClonedDocument("tandc");
        clonedTAndC2.vendorName = "Pop";

        expect(clonedTAndC1 === clonedTAndC2).toBeFalsy();
    });

    test("create cloned nda", () => {
        const clonedNDA1 = DocumentPropertyManager.getClonedDocument("nda");
        clonedNDA1.vendorName = "Patrick";
        const clonedNDA2 = DocumentPropertyManager.getClonedDocument("nda");
        clonedNDA2.vendorName = "Eugene";

        expect(clonedNDA1 === clonedNDA2).toBeFalsy();
    });

    test("authorized signatory", () => {
        const clonedNDA = DocumentPropertyManager.getClonedDocument(
            "nda"
        ) as NDAgreement;
        clonedNDA.vendorName = "Bob";
        clonedNDA.content = "NDA Content";
        clonedNDA.authorizedSignatory.name = "AS1";
        clonedNDA.authorizedSignatory.destination = "Dest1";

        var str = clonedNDA.toString();
        expect(str).toEqual(
            "[NDAgreement: Vendor name - Bob, Content - NDA Content, Authorized Signatory - [AuthorizedSignatory: Name - AS1 , Destination - Dest1 ]]"
        );
    });

    test("terms and conditions string", () => {
        const tac = DocumentPropertyManager.getClonedDocument("tandc");
        tac.vendorName = "Gicu";
        tac.content = "Continut";
        expect(tac.toString()).toEqual(
            `[TAndC vendor name - ${tac.vendorName}, Content - ${tac.content}]`
        );
    });

    test("should throw for non existing doc", () => {
        const nonDoc = () =>
            DocumentPropertyManager.getClonedDocument("incorrect");
        expect(nonDoc).toThrow();
    });
});
