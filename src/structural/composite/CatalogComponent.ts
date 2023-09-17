export abstract class CatalogComponent {
    public add(catalogComponent: CatalogComponent): void {
        throw "Cannot add item to catalog.";
    }

    public remove(catalogComponent: CatalogComponent): void {
        throw "Cannot remove item from catalog.";
    }

    public getName(): string {
        throw "Cannot return name.";
    }

    public getPrice(): number {
        throw "Cannot get price.";
    }

    public print(): string {
        throw "Cannot print.";
    }
}
