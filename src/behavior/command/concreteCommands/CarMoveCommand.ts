import { Car } from "../Car";
import { ICommand } from "../ICommand";

export class CarMoveCommand implements ICommand {
    constructor(private _car: Car) {}

    execute(): string {
        console.log("CarMoveCommand.execute(): Invoking move() on Car");
        return this._car.move();
    }

    undo(): string {
        console.log(
            "CarMoveCommand.undo():  Undoing previous action->Invoking stop() on Car"
        );
        return this._car.stop();
    }
}
