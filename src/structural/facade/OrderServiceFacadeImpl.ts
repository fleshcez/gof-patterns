import { IOrderServiceFacade } from "./IOrderServiceFacade";
import { InventoryService } from "./InventoryService";
import { PaymentService } from "./PaymentService";
import { Product } from "./Product";
import { ShippingService } from "./ShippingService";

export class OrderServiceFacadeImpl implements IOrderServiceFacade {
    placeOrder(productId: number): boolean {
        let orderFulfilled = false;
        const product = new Product(productId, "Shoe");

        if (InventoryService.isAvailable(product)) {
            console.log(`Product with ID: ${productId} is available.`);
            const paymentConfirmed = PaymentService.makePayment();

            if (paymentConfirmed) {
                console.log("Payment confirmed");
                ShippingService.shipProduct(product);
                orderFulfilled = true;
            }
        }
        return orderFulfilled;
    }
}
