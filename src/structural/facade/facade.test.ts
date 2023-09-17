import { describe, expect, test } from "@jest/globals";
import { OrderFulfillmentController } from "./OrderFulfillmentController";
import { OrderServiceFacadeImpl } from "./OrderServiceFacadeImpl";

describe("test facade", () => {
    test("order product", () => {
        const controller = new OrderFulfillmentController();
        const facade = new OrderServiceFacadeImpl();
        controller.facade = facade;

        expect(controller.orderProduct(17)).toEqual(true);
    });
});
