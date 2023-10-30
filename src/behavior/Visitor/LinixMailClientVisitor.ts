import { IMailClient, MailClientType } from "./IMailClient";
import { IMailClientVisitor } from "./IMailClientVisitor";

export class LinuxMailClientVisitor implements IMailClientVisitor {
    // Cannot overload methodes in typescript/js
    visit(mailClient: IMailClient): void {
        switch (mailClient.type) {
            case MailClientType.opera:
                this._visitOpera(mailClient);
                break;
            case MailClientType.squirrel:
                this._visitSquirrel(mailClient);
                break;
            case MailClientType.zimbra:
                this._visitZimbra(mailClient);
                break;
        }
    }

    private _visitZimbra(mailClient: IMailClient): void {
        mailClient.configuration = "Config zimbra for linux complete";
    }

    private _visitSquirrel(mailClient: IMailClient): void {
        mailClient.configuration = "Config squirrel for linux complete";
    }

    private _visitOpera(mailClient: IMailClient): void {
        mailClient.configuration = "Config opera for linux complete";
    }
}
