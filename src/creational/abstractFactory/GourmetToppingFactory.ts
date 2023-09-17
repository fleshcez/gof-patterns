import { BaseToppingFactory } from "./BaseToppingFactory";
import { ICheese } from "./cheese/ICheese";
import { GoatCheese } from "./cheese/GoatCheese";
import { CaliforniaOilSauce } from "./sauce/CaliforniaOilSauce";
import { ISauce } from "./sauce/ISauce";

export class GourmetToppingFactory implements BaseToppingFactory {
    public createCheese(): ICheese {
        return new GoatCheese();
    }
    public createSauce(): ISauce {
        return new CaliforniaOilSauce();
    }
}
