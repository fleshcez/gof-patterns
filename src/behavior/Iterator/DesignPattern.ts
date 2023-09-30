export class DesignPattern {
    constructor(private _patternType: string, private _patternName: string) {}

    public getPatternType(): string {
        return this._patternType;
    }

    public getPatterName(): string {
        return this._patternName;
    }
}
