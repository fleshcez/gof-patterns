import { DesignPattern } from "./DesignPattern";

export interface IPatternIterator {
    nextPattern(): DesignPattern;
    isLastPattern(): boolean;
}
