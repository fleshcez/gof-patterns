import { describe, expect, test } from "@jest/globals";
import { SingletonClass } from "./SingletonClass";

describe("Singleton class", () => {
    test("should return the same instance", () => {
        expect(SingletonClass.getInstance()).toEqual(
            SingletonClass.getInstance()
        );
    });
});
