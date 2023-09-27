import { ICommand } from "../ICommand";
import { RotatingTop } from "../RotatingTop";

export class TopStopRotateCommand implements ICommand {
    constructor(private _rotatingTop: RotatingTop) {}

    execute(): string {
        console.log(
            "TopStopRotateCommand.execute(): Invoking stopRotating() on RotatingTop"
        );
        return this._rotatingTop.stopRotating();
    }

    undo(): string {
        console.log(
            "TopStopRotateCommand.undo(): Undoing previous action->Invoking startRotating() on RotatingTop"
        );
        return this._rotatingTop.startRotating();
    }
}
