export interface ICloneable<T> {
    clone: () => T;
}

export abstract class PrototypeCapableDocument
    implements ICloneable<PrototypeCapableDocument>
{
    private _vendorName: string;
    private _content: string;

    public get vendorName(): string {
        return this._vendorName;
    }

    public set vendorName(vendor: string) {
        this._vendorName = vendor;
    }

    public get content(): string {
        return this._content;
    }

    public set content(content) {
        this._content = content;
    }

    public abstract cloneDocument(): PrototypeCapableDocument;
    public abstract clone(): PrototypeCapableDocument;
}
