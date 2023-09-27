import { ICommand } from "./ICommand";

export class RemoteControl {
    private _onCommand: ICommand;
    private _offCommand: ICommand;
    private _undoCommand: ICommand;

    public onButton(onCommand: ICommand) {
        this._onCommand = onCommand;
        this._undoCommand = onCommand;
        return onCommand.execute();
    }

    public offButtonPressed(offCommand: ICommand) {
        this._offCommand = offCommand;
        this._undoCommand = offCommand;
        return offCommand.execute();
    }

    public undoButtonPressed() {
        return this._undoCommand.undo();
    }
}
