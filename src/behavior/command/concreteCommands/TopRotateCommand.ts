import { ICommand } from "../ICommand";
import { RotatingTop } from "../RotatingTop";

export class TopRotateCommand implements ICommand {
    constructor(private _rotatingTop: RotatingTop) {}
    execute(): string {
        console.log(
            "TopRotateCommand.execute(): Invoking startRotating() on RotatingTop"
        );
        return this._rotatingTop.startRotating();
    }

    undo(): string {
        console.log(
            "TopRotateCommand.undo(): Undoing previous action->Invoking stopRotating() on RotatingTop"
        );
        return this._rotatingTop.stopRotating();
    }
}
