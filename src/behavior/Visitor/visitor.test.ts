import { beforeEach, describe, expect, test } from "@jest/globals";
import { MacMailClientVisitor } from "./MacMailClientVisitor";
import { LinuxMailClientVisitor } from "./LinixMailClientVisitor";
import { WindowsMailClientVisitor } from "./WindowsMailClientVisitor";
import { OperaMailClient } from "./OperaMailClient";
import { SquirrelMailClient } from "./SquirrelMailClient";
import { ZimbraMailClient } from "./ZimbraMailClient";

describe("Visitor test", () => {
    let windowsMailClientVisitor: WindowsMailClientVisitor;
    let linuxMailClientVisitor: LinuxMailClientVisitor;
    let macMailClientVisitor: MacMailClientVisitor;

    let operaMailClient: OperaMailClient;
    let squirrelMailClient: SquirrelMailClient;
    let zimbraMailClient: ZimbraMailClient;

    beforeEach(() => {
        windowsMailClientVisitor = new WindowsMailClientVisitor();
        macMailClientVisitor = new MacMailClientVisitor();
        linuxMailClientVisitor = new LinuxMailClientVisitor();

        operaMailClient = new OperaMailClient();
        squirrelMailClient = new SquirrelMailClient();
        zimbraMailClient = new ZimbraMailClient();
    });

    test("Configure opera browser", () => {
        operaMailClient.accept(windowsMailClientVisitor);
        expect(operaMailClient.configuration).toEqual(
            "Config opera for windows complete"
        );
        operaMailClient.accept(linuxMailClientVisitor);
        expect(operaMailClient.configuration).toEqual(
            "Config opera for linux complete"
        );
        operaMailClient.accept(macMailClientVisitor);
        expect(operaMailClient.configuration).toEqual(
            "Config opera for mac complete"
        );
    });

    test("Configure squirrel for browser", () => {
        squirrelMailClient.accept(windowsMailClientVisitor);
        expect(squirrelMailClient.configuration).toEqual(
            "Config squirrel for windows complete"
        );
        squirrelMailClient.accept(linuxMailClientVisitor);
        expect(squirrelMailClient.configuration).toEqual(
            "Config squirrel for linux complete"
        );
        squirrelMailClient.accept(macMailClientVisitor);
        expect(squirrelMailClient.configuration).toEqual(
            "Config squirrel for mac complete"
        );
    });

    test("Configure zimbra for browser", () => {
        zimbraMailClient.accept(windowsMailClientVisitor);
        expect(zimbraMailClient.configuration).toEqual(
            "Config zimbra for windows complete"
        );
        zimbraMailClient.accept(linuxMailClientVisitor);
        expect(zimbraMailClient.configuration).toEqual(
            "Config zimbra for linux complete"
        );
        zimbraMailClient.accept(macMailClientVisitor);
        expect(zimbraMailClient.configuration).toEqual(
            "Config zimbra for mac complete"
        );
    });

    test("Opera mail client send and receive", () => {
        const send = operaMailClient.sendMail(["Hello", "there"]);
        expect(send).toEqual(`Sending opera mail: Hello,there`);

        const receive = operaMailClient.receiveMail(["Hello", "there"]);
        expect(receive).toEqual(`Recieving opera mail: Hello,there`);
    });

    test("Zimbra mail client send and receive", () => {
        const send = zimbraMailClient.sendMail(["Hello", "there"]);
        expect(send).toEqual(`Sending zimbra mail: Hello,there`);

        const receive = zimbraMailClient.receiveMail(["Hello", "there"]);
        expect(receive).toEqual(`Recieving zimbra mail: Hello,there`);
    });

    test("Squirrel mail client send and receive", () => {
        const send = squirrelMailClient.sendMail(["Hello", "there"]);
        expect(send).toEqual(`Sending squirrel mail: Hello,there`);

        const receive = squirrelMailClient.receiveMail(["Hello", "there"]);
        expect(receive).toEqual(`Recieving squirrel mail: Hello,there`);
    });
});
