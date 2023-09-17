import { IOrderServiceFacade } from "./IOrderServiceFacade";

export class OrderFulfillmentController {
    public facade: IOrderServiceFacade;
    orderFulfilled: boolean = false;

    public orderProduct(productId: number): boolean {
        const orderFulfilled = this.facade.placeOrder(productId);
        console.log("Order fulfillment completed");
        return orderFulfilled;
    }
}
