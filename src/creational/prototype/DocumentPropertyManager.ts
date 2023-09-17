import { AuthorizedSignatory } from "./AuthorizedSignatory";
import { NDAgreement } from "./NDAgreement";
import { PrototypeCapableDocument } from "./PrototypeCapableDocument";
import { TermsAndConditions } from "./TermsAndConditions";

export class DocumentPropertyManager {
    private static _prototypes: Map<string, PrototypeCapableDocument> = new Map<
        string,
        PrototypeCapableDocument
    >();

    public static init() {
        const tAndC: TermsAndConditions = new TermsAndConditions();
        tAndC.vendorName = "Vendor name 1";
        tAndC.content = "Read and accept terms and conditions...";
        this._prototypes.set("tandc", tAndC);

        const authorizedSignatory: AuthorizedSignatory =
            new AuthorizedSignatory();
        authorizedSignatory.name = "Marcel";
        authorizedSignatory.destination = "Costinesti";

        const nda: NDAgreement = new NDAgreement();
        nda.vendorName = "Vendor name 2";
        nda.content = "Read and accept the NDA...";
        nda.authorizedSignatory = authorizedSignatory;

        this._prototypes.set("nda", nda);
    }

    public static getClonedDocument(type: string): PrototypeCapableDocument {
        let clonedDoc: PrototypeCapableDocument = null!;
        try {
            const doc: PrototypeCapableDocument = this._prototypes.get(type)!;
            clonedDoc = doc.cloneDocument();
        } catch (e) {
            throw e;
        }
        return clonedDoc;
    }
}
