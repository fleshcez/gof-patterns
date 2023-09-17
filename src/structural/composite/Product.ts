import { CatalogComponent } from "./CatalogComponent";

export class Product extends CatalogComponent {
    constructor(private _name: string, private _price: number) {
        super();
    }

    public getName(): string {
        return this._name;
    }

    public getPrice(): number {
        return this._price;
    }

    public print(): string {
        return `Product name: ${this.getName()}, Price: ${this.getPrice()}\n`;
    }
}
