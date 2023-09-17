import { ICheese } from "./cheese/ICheese";
import { ISauce } from "./sauce/ISauce";

export abstract class BaseToppingFactory {
    public abstract createCheese(): ICheese;
    public abstract createSauce(): ISauce;
}
