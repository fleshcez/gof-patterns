import { describe, expect, test, it } from "@jest/globals";
import { RemoteControl } from "./RemoteControl";
import { Car } from "./Car";
import { CarMoveCommand } from "./concreteCommands/CarMoveCommand";
import { CarStopCommand } from "./concreteCommands/CarStopCommand";
import { RotatingTop } from "./RotatingTop";
import { TopRotateCommand } from "./concreteCommands/TopRotateCommand";
import { TopStopRotateCommand } from "./concreteCommands/TopStopRotateCommand";

describe("command test", () => {
    describe("car", () => {
        const remote = new RemoteControl();
        const car = new Car();
        const carMoveCommand = new CarMoveCommand(car);
        const carStopCommand = new CarStopCommand(car);

        test("should move", () => {
            expect(remote.onButton(carMoveCommand)).toEqual("moving car");
        });

        test("should stop", () => {
            expect(remote.offButtonPressed(carStopCommand)).toEqual(
                "stopping car"
            );
        });

        test("should undo", () => {
            expect(remote.undoButtonPressed()).toEqual("moving car");
        });

        test("should undo move command", () => {
            remote.onButton(carMoveCommand);
            expect(remote.undoButtonPressed()).toEqual("stopping car");
        });
    });

    describe("rotating top", () => {
        const rot = new RotatingTop();
        const remote = new RemoteControl();
        const topRotateCommand = new TopRotateCommand(rot);
        const topStopRotateCommand = new TopStopRotateCommand(rot);

        test("should rotate top", () => {
            expect(remote.onButton(topRotateCommand)).toEqual(
                "started rotating"
            );
        });

        test("should stop rotating", () => {
            expect(remote.offButtonPressed(topStopRotateCommand)).toEqual(
                "stopped rotating"
            );
        });

        test("should undo", () => {
            expect(remote.undoButtonPressed()).toEqual("started rotating");
        });

        test("should undo rotating", () => {
            remote.onButton(topRotateCommand);
            expect(remote.undoButtonPressed()).toEqual("stopped rotating");
        });
    });
});
