import { IMailClient } from "./IMailClient";

export interface IMailClientVisitor {
    visit(mailClient: IMailClient): void;
}
