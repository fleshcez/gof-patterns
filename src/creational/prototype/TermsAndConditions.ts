import { PrototypeCapableDocument } from "./PrototypeCapableDocument";

export class TermsAndConditions extends PrototypeCapableDocument {
    public clone(): TermsAndConditions {
        const tac = new TermsAndConditions();

        tac.vendorName = this.vendorName;
        tac.content = this.content;

        return tac;
    }

    public cloneDocument(): PrototypeCapableDocument {
        let tAndC: TermsAndConditions = undefined!;
        tAndC = this.clone();
        return tAndC;
    }

    public toString() {
        return `[TAndC vendor name - ${this.vendorName}, Content - ${this.content}]`;
    }
}
