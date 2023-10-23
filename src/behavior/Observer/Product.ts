import { IObserver } from "./IObserver";
import { ISubject } from "./ISubject";

export class Product implements ISubject {
    private _observers: IObserver[] = [];
    private _observer: IObserver;

    constructor(private _productName: string, private _bidAmount: number) {}

    registerObserver(observer: IObserver): void {
        this._observers.push(observer);
    }

    removeObserver(observer: IObserver): void {
        this._observers = this._observers.filter((o) => o !== observer);
    }

    notifyObservers(): void {
        this._observers.forEach((o) => {
            o.update(this._observer, this._productName, this._bidAmount);
        });
    }

    setBidAmount(observer: IObserver, newBidAmount: number): void {
        if (newBidAmount > this._bidAmount) {
            this._observer = observer;
            this._bidAmount = newBidAmount;
            this.notifyObservers();
        }
    }
}
