export abstract class PizzaMaker {
    public isDoughPrepared: boolean;
    public isCrustPrebaked: boolean;
    public ingredients: string;
    public toppings: string;
    public isBaked: boolean;
    public isPacked: boolean = false;

    public makePizza(): void {
        this.preparePizzaDough();
        this.preBakeCrust();
        this.prepareIngredients();
        this.addToppings();
        this.bakePizza();

        if (this.customerWantsPackedPizza()) {
            this.packPizza();
        }
    }

    public preparePizzaDough(): void {
        this.isDoughPrepared = true;
    }

    public preBakeCrust() {
        this.isCrustPrebaked = true;
    }

    public abstract prepareIngredients(): void;

    public abstract addToppings(): void;

    public bakePizza() {
        this.isBaked = true;
    }

    public packPizza(): void {
        this.isPacked = true;
    }

    public customerWantsPackedPizza(): boolean {
        return true;
    }
}
