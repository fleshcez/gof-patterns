import { RaceCar } from "./RaceCar";

export class FlyweightMidgetCar extends RaceCar {
    public static num: number = 0;

    constructor() {
        super();
        FlyweightMidgetCar.num++;
    }

    public moveCar(
        currentX: number,
        currentY: number,
        newX: number,
        newY: number
    ): string {
        return `New location of ${this.name} is X:${newX} - Y:${newY}`;
    }
}
