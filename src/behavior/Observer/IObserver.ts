export interface IObserver {
    get bidderName(): string;
    update(observer: IObserver, productName: string, bidAmount: number): string;
}
