export class EagerSingletonClass {
    private static _instance: EagerSingletonClass = new EagerSingletonClass();

    private constructor() {}

    public static getInstance(): EagerSingletonClass {
        return this._instance;
    }
}
