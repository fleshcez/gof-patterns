import { RaceCar } from "./RaceCar";

export class FlyweightSprintCar extends RaceCar {
    public static num: number = 0;

    constructor() {
        super();
        FlyweightSprintCar.num++;
    }

    public moveCar(
        currentX: number,
        currentY: number,
        newX: number,
        newY: number
    ) {
        return `New location of ${this.name} is X:${newX} - Y:${newY}`;
    }
}
