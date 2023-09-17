import { ICloneable } from "./PrototypeCapableDocument";

export class AuthorizedSignatory implements ICloneable<AuthorizedSignatory> {
    private _name: string;
    private _designation: string;

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get destination(): string {
        return this._designation;
    }

    public set destination(destination: string) {
        this._designation = destination;
    }

    public clone(): AuthorizedSignatory {
        const as = new AuthorizedSignatory();
        as.name = this.name;
        as.destination = this.destination;
        return as;
    }

    public toString(): string {
        return `[AuthorizedSignatory: Name - ${this.name} , Destination - ${this._designation} ]`;
    }
}
