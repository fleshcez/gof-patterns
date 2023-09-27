export interface ICommand {
    execute(): string;
    undo(): string;
}
