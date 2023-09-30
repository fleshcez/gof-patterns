import { DesignPattern } from "./DesignPattern";
import { IPatternIterator } from "./IPatternIterator";

export interface IPatternAggregate {
    addPattern(designPattern: DesignPattern): void;
    removePattern(designPattern: DesignPattern): void;
    getPatternIterator(): IPatternIterator;
}
