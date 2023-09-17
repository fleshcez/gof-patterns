import { describe, expect, test } from "@jest/globals";
import { RaceCarClient } from "./RaceCarClient";
import { RaceCar } from "./RaceCar";
import { FlyweightMidgetCar } from "./FlyweightMidgetCar";
import { FlyweightSprintCar } from "./FlyweightSprintCar";

describe("fylweight test", () => {
    test("create race cars", () => {
        const clients = [
            new RaceCarClient("Midget"),
            new RaceCarClient("Midget"),
            new RaceCarClient("Sprint"),
        ];

        expect(FlyweightMidgetCar.num).toEqual(1);
        expect(FlyweightSprintCar.num).toEqual(1);
    });

    test("should throw for non existent car type", () => {
        const x = () => new RaceCarClient("Drift");
        expect(x).toThrow();
    });

    test("should move care", () => {
        const midget = new RaceCarClient("Midget");
        const sprint = new RaceCarClient("Sprint");

        const moveMidget = midget.moveCar(10, 20);
        const moveSprint = sprint.moveCar(1, 2);

        expect(moveMidget).toEqual(`New location of Midget Car is X:10 - Y:20`);
        expect(moveSprint).toEqual(`New location of Sprint Car is X:1 - Y:2`);
    });
});
