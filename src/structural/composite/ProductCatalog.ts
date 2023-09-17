import { CatalogComponent } from "./CatalogComponent";

export class ProductCatalog extends CatalogComponent {
    private _items: CatalogComponent[] = [];

    constructor(private _name: string) {
        super();
    }

    public getName(): string {
        return this._name;
    }

    public print(): string {
        return this._items.reduce((acc, cur) => {
            return `${acc} ${cur.print()}`;
        }, "");
    }

    public add(catalogComponent: CatalogComponent): void {
        this._items.push(catalogComponent);
    }

    public remove(catalogComponent: CatalogComponent): void {
        this._items = this._items.filter((i) => i !== catalogComponent);
    }
}
