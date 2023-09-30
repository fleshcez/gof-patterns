import { DesignPattern } from "./DesignPattern";
import { IPatternAggregate } from "./IPatternAggregate";
import { IPatternIterator } from "./IPatternIterator";
import { PatternIteratorImpl } from "./PatternIteratorImpl";

export class PatternAggregateImpl implements IPatternAggregate {
    private _patterns: DesignPattern[] = [];

    addPattern(designPattern: DesignPattern): void {
        this._patterns.push(designPattern);
    }

    removePattern(designPattern: DesignPattern): void {
        this._patterns = this._patterns.filter(
            (p) =>
                p.getPatterName() !== designPattern.getPatterName() &&
                p.getPatternType() !== designPattern.getPatternType()
        );
    }

    getPatternIterator(): IPatternIterator {
        return new PatternIteratorImpl(this._patterns);
    }
}
