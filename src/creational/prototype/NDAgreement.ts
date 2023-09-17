import { AuthorizedSignatory } from "./AuthorizedSignatory";
import { PrototypeCapableDocument } from "./PrototypeCapableDocument";

export class NDAgreement extends PrototypeCapableDocument {
    private _authorizedSignatory: AuthorizedSignatory;

    public get authorizedSignatory(): AuthorizedSignatory {
        return this._authorizedSignatory;
    }

    public set authorizedSignatory(asig: AuthorizedSignatory) {
        this._authorizedSignatory = asig;
    }

    public clone(): NDAgreement {
        const nda = new NDAgreement();
        nda.vendorName = this.vendorName;
        nda.content = this.content;
        return nda;
    }

    public cloneDocument(): PrototypeCapableDocument {
        const nda = this.clone();
        const clonedAuthorizedSignatory = this.authorizedSignatory.clone();
        nda.authorizedSignatory = clonedAuthorizedSignatory;

        return nda;
    }

    public toString(): string {
        return `[NDAgreement: Vendor name - ${this.vendorName}, Content - ${this.content}, Authorized Signatory - ${this.authorizedSignatory}]`;
    }
}
