export class House {
    private _foundation: string;
    private _structure: string;
    private _roof: string;
    private _furnished: boolean;
    private _painted: boolean;

    public setFoundation(foundation: string): void {
        this._foundation = foundation;
    }

    public setStructure(structure: string): void {
        this._structure = structure;
    }

    public setRoof(roof: string): void {
        this._roof = roof;
    }

    public setFurnished(furnished: boolean): void {
        this._furnished = furnished;
    }

    public setPainted(painted: boolean): void {
        this._painted = painted;
    }

    public toString(): string {
        return `Foundation - ${this._foundation} Structure - ${this._structure} Roof - ${this._roof} Furnished - ${this._furnished} Painted - ${this._painted}`;
    }
}
