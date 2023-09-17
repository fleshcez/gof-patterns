import { Product } from "./Product";

export class InventoryService {
    public static isAvailable(product: Product) {
        //  Check warehose db for product
        return true;
    }
}
