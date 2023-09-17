import { IMessageSender } from "./MessageSender";

export abstract class Message {
    constructor(protected messageSender: IMessageSender) {}

    public abstract send(): string;
}
