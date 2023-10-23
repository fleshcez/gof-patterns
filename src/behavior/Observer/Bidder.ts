import { IObserver } from "./IObserver";

export class Bidder implements IObserver {
    constructor(private _bidderName: string) {}

    public get bidderName(): string {
        return this._bidderName;
    }

    update(
        observer: IObserver,
        productName: string,
        bidAmount: number
    ): string {
        if (observer.bidderName === this._bidderName) {
            return `Hello ${this._bidderName}! New amount ${bidAmount} has been placed on ${productName} by you!`;
        }

        if (observer.bidderName !== this._bidderName) {
            return `Hello ${this.bidderName}! New amount ${bidAmount} has been placed on ${productName} by ${observer.bidderName}!`;
        }
    }
}
