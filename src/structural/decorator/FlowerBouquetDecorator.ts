import { FlowerBouquet } from "./FlowerBouquet";

export abstract class FlowerBouquetDecorator extends FlowerBouquet {
    public abstract getDescription(): string;
}
