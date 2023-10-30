import { IMailClientVisitor } from "./IMailClientVisitor";

export enum MailClientType {
    opera = "opera",
    squirrel = "squirrel",
    zimbra = "zimbra",
}

export interface IMailClient {
    type: MailClientType;
    configuration: string;
    sendMail(mailInfo: string[]);
    receiveMail(mailInfo: string[]);
    accept(visitor: IMailClientVisitor): void;
}
