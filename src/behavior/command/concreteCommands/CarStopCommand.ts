import { Car } from "../Car";
import { ICommand } from "../ICommand";

export class CarStopCommand implements ICommand {
    constructor(private _car: Car) {}
    execute(): string {
        console.log("CarStopCommand.execute(): Invoking stop() on Car");
        return this._car.stop();
    }

    undo(): string {
        console.log(
            "CarStopCommand.undo(): Undoing previous action-> Invoking move() on Car"
        );
        return this._car.move();
    }
}
