import { beforeEach, describe, expect, jest, test } from "@jest/globals";
import { Bidder } from "./Bidder";
import { Product } from "./Product";

describe("Observer test", () => {
    let bidder1: Bidder, bidder2: Bidder;
    let product: Product;

    beforeEach(() => {
        bidder1 = new Bidder("Alex");
        bidder2 = new Bidder("Henry");
        product = new Product("LG TV", 200);
    });

    test("should get notified", () => {
        const bidder1UpdateFn = jest.fn() as any;
        bidder1.update = bidder1UpdateFn;

        const bidder2UpdateFn = jest.fn() as any;
        bidder2.update = bidder2UpdateFn;

        product.registerObserver(bidder1);
        product.registerObserver(bidder2);

        product.setBidAmount(bidder1, 225);
        expect(bidder1UpdateFn).toHaveBeenCalledWith(bidder1, "LG TV", 225);
        expect(bidder2UpdateFn).toHaveBeenCalledWith(bidder1, "LG TV", 225);
    });

    test("should not call unregistered observer", () => {
        const bidder1UpdateFn = jest.fn() as any;
        bidder1.update = bidder1UpdateFn;

        const bidder2UpdateFn = jest.fn() as any;
        bidder2.update = bidder2UpdateFn;

        product.registerObserver(bidder1);
        product.registerObserver(bidder2);
        product.removeObserver(bidder2);

        product.setBidAmount(bidder1, 300);
        expect(bidder2UpdateFn).toHaveBeenCalledTimes(0);
    });

    test("bidder messages", () => {
        expect(bidder1.bidderName).toEqual("Alex");
        expect(bidder1.update(bidder1, "Space car", 400)).toEqual(
            `Hello Alex! New amount 400 has been placed on Space car by you!`
        );
        expect(bidder1.update(bidder2, "Phone", 200)).toEqual(
            `Hello Alex! New amount 200 has been placed on Phone by Henry!`
        );
    });
});
