import { describe, expect, test, it, beforeEach } from "@jest/globals";
import { RoseBouquet } from "./RoseBouquet";
import { OrchidBouquet } from "./OrchidBouquet";
import { PaperWrapper } from "./PaperWrapper";
import { Glitter } from "./Glitter";
import { RibbonBow } from "./RibbonBow";

describe("decorator tests", () => {
    test("simple bouquet", () => {
        const roseBouquet = new RoseBouquet();
        const orchidBouquet = new OrchidBouquet();

        expect(roseBouquet.cost()).toEqual(12);
        expect(roseBouquet.getDescription()).toEqual("Rose bouquet");

        expect(orchidBouquet.cost()).toEqual(29);
        expect(orchidBouquet.getDescription()).toEqual("Orchid bouquet");
    });

    test("decorated rose", () => {
        let roseBouquet = new RoseBouquet();

        roseBouquet = new PaperWrapper(roseBouquet);
        roseBouquet = new Glitter(roseBouquet);
        roseBouquet = new RibbonBow(roseBouquet);

        expect(roseBouquet.cost()).toEqual(25.5);
        expect(roseBouquet.getDescription()).toEqual(
            "Rose bouquet, paper wrap, glitter, ribbon bow"
        );
    });

    test("decorated orchid", () => {
        let orchidBouquet = new OrchidBouquet();

        orchidBouquet = new Glitter(orchidBouquet);
        orchidBouquet = new PaperWrapper(orchidBouquet);
        orchidBouquet = new RibbonBow(orchidBouquet);

        expect(orchidBouquet.cost()).toEqual(42.5);
        expect(orchidBouquet.getDescription()).toEqual(
            "Orchid bouquet, glitter, paper wrap, ribbon bow"
        );
    });
});
