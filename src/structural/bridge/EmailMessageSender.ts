import { IMessageSender } from "./MessageSender";

export class EmailMessageSender implements IMessageSender {
    sendMessage(): string {
        return "Sending email message";
    }
}
