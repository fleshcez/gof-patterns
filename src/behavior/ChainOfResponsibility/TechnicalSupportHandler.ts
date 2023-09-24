import { AbstractSupportHandler } from "./AbstractSupportHandler";

export class TechnicalSupportHandler extends AbstractSupportHandler {
    constructor(level: number) {
        super();
        this.level = level;
    }

    protected handleRequest(message: string): string {
        return `TechnicalSupportHandler: Processing request ${message}`;
    }
}
