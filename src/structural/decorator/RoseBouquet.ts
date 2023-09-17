import { FlowerBouquet } from "./FlowerBouquet";

export class RoseBouquet extends FlowerBouquet {
    public constructor() {
        super();
        this.description = "Rose bouquet";
    }

    public cost(): number {
        return 12;
    }
}
