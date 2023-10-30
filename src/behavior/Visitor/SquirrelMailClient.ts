import { IMailClient, MailClientType } from "./IMailClient";
import { IMailClientVisitor } from "./IMailClientVisitor";

export class SquirrelMailClient implements IMailClient {
    type: MailClientType = MailClientType.squirrel;
    configuration: string;

    sendMail(mailInfo: string[]) {
        return `Sending squirrel mail: ${mailInfo}`;
    }

    receiveMail(mailInfo: string[]) {
        return `Recieving squirrel mail: ${mailInfo}`;
    }

    accept(visitor: IMailClientVisitor): void {
        visitor.visit(this);
    }
}
