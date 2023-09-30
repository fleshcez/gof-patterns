import { beforeEach, describe, expect, test } from "@jest/globals";
import { PatternAggregateImpl } from "./PatternAggregateImpl";
import { DesignPattern } from "./DesignPattern";
import { PatternIteratorImpl } from "./PatternIteratorImpl";
import { IPatternAggregate } from "./IPatternAggregate";

describe("Iterator test", () => {
    let patternAggr: IPatternAggregate;
    let p1: DesignPattern,
        p2: DesignPattern,
        p3: DesignPattern,
        p4: DesignPattern;

    beforeEach(() => {
        p1 = new DesignPattern("Creational", "Factory Method");
        p2 = new DesignPattern("Creational", "Abstract Factory");
        p3 = new DesignPattern("Strucutral", "Adapter");
        p4 = new DesignPattern("Structural", "Bridge");
        patternAggr = new PatternAggregateImpl();
        patternAggr.addPattern(p1);
        patternAggr.addPattern(p2);
        patternAggr.addPattern(p3);
    });

    test("should iterate trough items", () => {
        const iterator = patternAggr.getPatternIterator();
        let index = 1;
        while (!iterator.isLastPattern()) {
            expect(iterator.nextPattern()).toEqual(eval(`p${index}`));
            index++;
        }
    });

    test("should remove item", () => {
        patternAggr.removePattern(p1);
        const iter = patternAggr.getPatternIterator();
        let found = false;

        while (!iter.isLastPattern()) {
            const pattern = iter.nextPattern();
            if (pattern === p1) {
                found = true;
                break;
            }
        }

        expect(found).toEqual(false);
    });

    test("should throw", () => {
        const iter = patternAggr.getPatternIterator();
        while (!iter.isLastPattern()) {
            iter.nextPattern();
        }

        const bad = () => {
            iter.nextPattern();
        };
        expect(bad).toThrow();
    });

    test("should add", () => {
        patternAggr.addPattern(p4);
        let found = false;
        const iter = patternAggr.getPatternIterator();
        while (!iter.isLastPattern()) {
            const pattern = iter.nextPattern();
            if (pattern === p4) {
                found = true;
                break;
            }
        }

        expect(found).toEqual(true);
    });
});
