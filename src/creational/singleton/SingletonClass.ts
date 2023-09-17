export class SingletonClass {
    private static _instance: SingletonClass = undefined!;

    private constructor() {}

    public static getInstance(): SingletonClass {
        if (this._instance === undefined) {
            this._instance = new SingletonClass();
        }

        return this._instance;
    }
}
