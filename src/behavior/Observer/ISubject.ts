import { IObserver } from "./IObserver";

export interface ISubject {
    registerObserver(observer: IObserver): void;
    removeObserver(observer: IObserver): void;
    notifyObservers(): void;
    setBidAmount(observer: IObserver, newBidAmount: number): void;
}
