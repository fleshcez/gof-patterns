import { Message } from "./Message";
import { IMessageSender } from "./MessageSender";

export class EmailMessage extends Message {
    constructor(sender: IMessageSender) {
        super(sender);
    }

    public send(): string {
        return this.messageSender.sendMessage();
    }
}
