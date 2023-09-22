export class Role {
    private _role: string;

    public get role(): string {
        return this._role;
    }

    public set role(role: string) {
        this._role = role;
    }
}
