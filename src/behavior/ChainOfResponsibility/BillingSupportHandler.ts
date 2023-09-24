import { AbstractSupportHandler } from "./AbstractSupportHandler";

export class BillingSupportHandler extends AbstractSupportHandler {
    constructor(level: number) {
        super();
        this.level = level;
    }

    protected handleRequest(message: string): string {
        return `BillingSupportHandler: Processing request. ${message}`;
    }
}
