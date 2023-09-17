import { FlyweightMidgetCar } from "./FlyweightMidgetCar";
import { FlyweightSprintCar } from "./FlyweightSprintCar";
import { RaceCar } from "./RaceCar";

export class CarFactory {
    private static flyweights: Map<string, RaceCar> = new Map();

    public static getRaceCar(key: string) {
        if (CarFactory.flyweights.has(key)) {
            return CarFactory.flyweights.get(key);
        }

        let rc: RaceCar;
        switch (key) {
            case "Midget":
                rc = new FlyweightMidgetCar();
                rc.name = "Midget Car";
                rc.horsepower = 400;
                rc.speed = 140;
                break;
            case "Sprint":
                rc = new FlyweightSprintCar();
                rc.name = "Sprint Car";
                rc.horsepower = 1000;
                rc.speed = 160;
                break;
            default:
                throw "No such car";
        }
        CarFactory.flyweights.set(key, rc);
        return rc;
    }
}
