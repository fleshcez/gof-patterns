import { FlowerBouquet } from "./FlowerBouquet";

export class OrchidBouquet extends FlowerBouquet {
    public constructor() {
        super();
        this.description = "Orchid bouquet";
    }

    public cost(): number {
        return 29;
    }
}
