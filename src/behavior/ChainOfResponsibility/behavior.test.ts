import { beforeEach, describe, expect, test } from "@jest/globals";
import { AbstractSupportHandler } from "./AbstractSupportHandler";
import { RequestorClient } from "./RequestorClient";

describe("chain of responsibility test", () => {
    let handler: AbstractSupportHandler;
    beforeEach(() => {
        handler = RequestorClient.getHandlerChain();
    });

    test("should handle technical request", () => {
        const message = "Internet down";

        const response = handler.receiveRequest(
            AbstractSupportHandler.TECHNICAL,
            "Internet down"
        );

        expect(response).toEqual(
            `TechnicalSupportHandler: Processing request ${message}`
        );
    });

    test("should handle billing request", () => {
        const message = "Resend this month's bill";

        const response = handler.receiveRequest(
            AbstractSupportHandler.BILLING,
            message
        );

        expect(response).toEqual(
            `BillingSupportHandler: Processing request. ${message}`
        );
    });

    test("should bandle general request", () => {
        const message = "Some general request.";

        const response = handler.receiveRequest(
            AbstractSupportHandler.GENERAL,
            message
        );
        expect(response).toEqual(
            `GeneralSupportHandler: Processing request. ${message}`
        );
    });
});
