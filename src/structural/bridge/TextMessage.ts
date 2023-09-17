import { Message } from "./Message";
import { IMessageSender } from "./MessageSender";

export class TextMessage extends Message {
    constructor(sender: IMessageSender) {
        super(sender);
    }

    public send(): string {
        return this.messageSender.sendMessage();
    }
}
