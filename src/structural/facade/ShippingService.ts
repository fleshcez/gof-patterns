import { Product } from "./Product";

export class ShippingService {
    public static shipProduct(product: Product): void {
        console.log(`Shipping product ${product.name}`);
    }
}
