import { BaseToppingFactory } from "./BaseToppingFactory";

import { ICheese } from "./cheese/ICheese";
import { MozzarellaCheese } from "./cheese/MozzarellaCheese";
import { ISauce } from "./sauce/ISauce";
import { TomatoSauce } from "./sauce/TomatoSauce";

export class SicilianToppingFactory implements BaseToppingFactory {
    public createCheese(): ICheese {
        return new MozzarellaCheese();
    }
    public createSauce(): ISauce {
        return new TomatoSauce();
    }
}
