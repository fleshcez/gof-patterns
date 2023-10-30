import { IMailClient, MailClientType } from "./IMailClient";
import { IMailClientVisitor } from "./IMailClientVisitor";

export class ZimbraMailClient implements IMailClient {
    configuration: string;
    type: MailClientType = MailClientType.zimbra;

    sendMail(mailInfo: string[]) {
        return `Sending zimbra mail: ${mailInfo}`;
    }

    receiveMail(mailInfo: string[]) {
        return `Recieving zimbra mail: ${mailInfo}`;
    }

    accept(visitor: IMailClientVisitor): void {
        visitor.visit(this);
    }
}
