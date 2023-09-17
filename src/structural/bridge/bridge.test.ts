import { describe, expect, test } from "@jest/globals";
import { TextMessageSender } from "./TextMessageSender";
import { TextMessage } from "./TextMessage";
import { EmailMessageSender } from "./EmailMessageSender";
import { EmailMessage } from "./EmailMessage";

describe("test bridge", () => {
    test("send text message", () => {
        const textSender = new TextMessageSender();
        const textMessage = new TextMessage(textSender);

        expect(textMessage.send()).toEqual("Sending text message");
    });

    test("send email message", () => {
        const emailSender = new EmailMessageSender();
        const emailMessage = new EmailMessage(emailSender);

        expect(emailMessage.send()).toEqual("Sending email message");
    });
});
