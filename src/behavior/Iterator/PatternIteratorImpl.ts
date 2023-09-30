import { DesignPattern } from "./DesignPattern";
import { IPatternIterator } from "./IPatternIterator";

export class PatternIteratorImpl implements IPatternIterator {
    private _position: number = 0;

    constructor(private _patterns: DesignPattern[]) {}

    public nextPattern(): DesignPattern {
        if (!this.isLastPattern()) {
            return this._patterns[this._position++];
        }
        throw "not found";
    }

    public isLastPattern(): boolean {
        return !(this._position < this._patterns.length);
    }
}
