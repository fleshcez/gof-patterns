import { IMailClient, MailClientType } from "./IMailClient";
import { IMailClientVisitor } from "./IMailClientVisitor";

export class OperaMailClient implements IMailClient {
    type: MailClientType = MailClientType.opera;
    public configuration: string;

    sendMail(mailInfo: string[]) {
        return `Sending opera mail: ${mailInfo}`;
    }

    receiveMail(mailInfo: string[]) {
        return `Recieving opera mail: ${mailInfo}`;
    }

    accept(visitor: IMailClientVisitor): void {
        visitor.visit(this);
    }
}
