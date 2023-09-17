import { IMessageSender } from "./MessageSender";

export class TextMessageSender implements IMessageSender {
    sendMessage(): string {
        return "Sending text message";
    }
}
