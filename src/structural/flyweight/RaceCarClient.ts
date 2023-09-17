import { CarFactory } from "./CarFactory";
import { RaceCar } from "./RaceCar";

export class RaceCarClient {
    private raceCar: RaceCar;

    public constructor(name: string) {
        this.raceCar = CarFactory.getRaceCar(name);
    }

    public currentX: number = 0;
    public currentY: number = 0;

    public moveCar(newX: number, newY: number): string {
        const res = this.raceCar.moveCar(
            this.currentX,
            this.currentY,
            newX,
            newY
        );
        this.currentX = newX;
        this.currentY = newY;
        return res;
    }
}
