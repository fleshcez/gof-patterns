import { AbstractSupportHandler } from "./AbstractSupportHandler";

export class GeneralSupportHandler extends AbstractSupportHandler {
    public constructor(level: number) {
        super();
        this.level = level;
    }

    protected handleRequest(message: string): string {
        return `GeneralSupportHandler: Processing request. ${message}`;
    }
}
