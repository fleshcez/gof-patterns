import { beforeEach, describe, expect, test } from "@jest/globals";
import { Product } from "./Product";
import { ProductCatalog } from "./ProductCatalog";
import { CatalogComponent } from "./CatalogComponent";

class TestCatalogComponent extends CatalogComponent {}

describe("composite test", () => {
    let mainCatalog: CatalogComponent;

    beforeEach(() => {
        const mJean = new Product("M: Jeans 32", 65);
        const mTShirt = new Product("M: T Shirt 38", 45);

        const fCatalog = new ProductCatalog("Women products");
        const fJean = new Product("F: Jeans 32", 65);
        const fTShirt = new Product("F: T Shirt 38", 45);
        fCatalog.add(fJean);
        fCatalog.add(fTShirt);

        const kidCatalog = new ProductCatalog("Kid products");
        const kidShorts = new Product("Kid shorts", 23);
        const kidPlayGears = new Product("Summer play gear", 65);
        kidCatalog.add(kidShorts);
        kidCatalog.add(kidPlayGears);

        mainCatalog = new ProductCatalog("Primary catalog");
        mainCatalog.add(mJean);
        mainCatalog.add(mTShirt);
        mainCatalog.add(fCatalog);
        mainCatalog.add(kidCatalog);
    });
    test("add to catalog", () => {
        const catalogContent: string = mainCatalog.print();
        expect(
            catalogContent.includes("Product name: M: Jeans 32, Price: 65")
        ).toBeTruthy();
        expect(
            catalogContent.includes("Product name: M: T Shirt 38, Price: 45")
        ).toBeTruthy();
    });

    test("remove from catalog", () => {
        const kidCatalog = new ProductCatalog("Kid products");
        const kidShorts = new Product("Kid shorts", 23);
        const kidPlayGears = new Product("Summer play gear", 65);
        kidCatalog.add(kidShorts);
        kidCatalog.add(kidPlayGears);

        kidCatalog.remove(kidShorts);
        expect(
            kidCatalog.print().includes("Product name: Kid shorts, Price: 23")
        ).toBeFalsy();
    });

    test("get catalog name", () => {
        const catName = "Kid products";
        const kidCatalog = new ProductCatalog(catName);
        expect(kidCatalog.getName()).toEqual(catName);
    });

    test("throw for not implemented methods", () => {
        const testCatalogComponent = new TestCatalogComponent();
        const catComp = new ProductCatalog("aa");
        const f1 = () => testCatalogComponent.getPrice();
        const f2 = () => testCatalogComponent.add(catComp);
        const f3 = () => testCatalogComponent.remove(catComp);
        const f4 = () => testCatalogComponent.print();
        const f5 = () => testCatalogComponent.getName();

        expect(f1).toThrow();
        expect(f2).toThrow();
        expect(f3).toThrow();
        expect(f4).toThrow();
        expect(f5).toThrow();
    });
});
