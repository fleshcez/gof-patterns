export abstract class AbstractSupportHandler {
    public static TECHNICAL: number = 10;
    public static BILLING: number = 20;
    public static GENERAL: number = 30;

    protected level: number;

    protected nextHandler: AbstractSupportHandler;
    public setNextHandler(nextHandler: AbstractSupportHandler): void {
        this.nextHandler = nextHandler;
    }

    public receiveRequest(level: number, message: string): string {
        if (this.level >= level) {
            return this.handleRequest(message);
        } else {
            return this.nextHandler.receiveRequest(level, message);
        }
    }

    protected abstract handleRequest(message: string): string;
}
