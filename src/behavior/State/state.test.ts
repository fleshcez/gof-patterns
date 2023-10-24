import { beforeEach, describe, expect, test } from "@jest/globals";
import { CandyVendingMachine } from "./CandyVendingMachine";

describe("Observer test", () => {
    let candyMachine: CandyVendingMachine;

    beforeEach(() => {
        candyMachine = new CandyVendingMachine(3);
    });

    test("get candy", () => {
        expect(candyMachine.getState().getStateName()).toEqual("NoCoinState");
        candyMachine.insertCoin();
        expect(candyMachine.getState().getStateName()).toEqual(
            "ContainsCoinState"
        );
        candyMachine.pressButton();
        expect(candyMachine.getCount()).toEqual(2);
        expect(candyMachine.getState().getStateName()).toEqual("NoCoinState");
    });

    test("no candy", () => {
        candyMachine.ejectCandy();
        candyMachine.ejectCandy();
        candyMachine.ejectCandy();
        candyMachine.insertCoin();
        expect(candyMachine.getCount()).toEqual(0);
        candyMachine.pressButton();
        expect(candyMachine.getState().getStateName()).toEqual("NoCandyState");
    });

    test("contains coin state", () => {
        candyMachine.insertCoin();
        const state = candyMachine.getState();
        const fn = () => state.insertCoin();
        const fn2 = () => state.dispense();
        expect(fn).toThrow("Coin already inserted");
        expect(fn2).toThrow("Press button to dispense");
    });

    test("dispensed coin state", () => {
        candyMachine.insertCoin();
        const state = candyMachine.getState();
        state.pressButton();
        const dispensedState = candyMachine.getState();
        const fn1 = () => dispensedState.insertCoin();
        const fn2 = () => dispensedState.pressButton();
        expect(fn1).toThrow("System is currently dispensing");
        expect(fn2).toThrow("System is currently dispensing");
        expect(dispensedState.getStateName()).toEqual("DispensedState");
    });

    test("No candy state", () => {
        candyMachine.ejectCandy();
        candyMachine.ejectCandy();
        candyMachine.ejectCandy();
        candyMachine.insertCoin();
        candyMachine.pressButton();
        const state = candyMachine.getState();
        const f1 = () => state.dispense();
        const f2 = () => state.pressButton();
        const f3 = () => state.insertCoin();
        expect(f1).toThrow("No candies available");
        expect(f2).toThrow("No candies available");
        expect(f3).toThrow("No candies available");
    });

    test("No coin state", () => {
        const state = candyMachine.getState();
        const f1 = () => state.dispense();
        const f2 = () => state.pressButton();
        expect(f1).toThrow("No coin insertetd");
        expect(f2).toThrow("No coin insertetd");
    });

    test("Refill candy machine", () => {
        expect(candyMachine.getCount()).toEqual(3);
        candyMachine.refillCandy(2);
        expect(candyMachine.getCount()).toEqual(5);
    });
});
