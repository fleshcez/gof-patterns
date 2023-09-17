export abstract class RaceCar {
    name: string;
    speed: number;
    horsepower: number;

    public abstract moveCar(
        currentX: number,
        currentY: number,
        newX: number,
        newY: number
    );
}
