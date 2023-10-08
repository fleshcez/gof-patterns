import { beforeEach, describe, expect, test } from "@jest/globals";
import { EmpOriginator, IEmployee } from "./EmpOriginator";
import { EmpCareTaker } from "./EmpCareTaker";

describe("Memento test", () => {
    let empOriginator: EmpOriginator;
    let empCareTaker: EmpCareTaker;

    beforeEach(() => {
        empOriginator = new EmpOriginator(11, "Mark", "123", "Sales");
        empCareTaker = new EmpCareTaker();
    });

    test("save a memento", () => {
        empOriginator.empId = 22;
        empCareTaker.addMemento(empOriginator.saveToMemento());
        expect(empCareTaker.getMemento().getCurrentState()).toEqual({
            empId: 22,
            empName: "Mark",
            empPhoneNo: "123",
            empDesignation: "Sales",
        } as IEmployee);
    });

    test("rever to an older memento state", () => {
        empOriginator.empName = "Marko";
        empOriginator.empPhoneNo = "456";
        empOriginator.empDesignation = "IT";

        expect(empOriginator.empId).toBe(11);
        expect(empOriginator.empPhoneNo).toBe("456");
        expect(empOriginator.empDesignation).toBe("IT");
        expect(empOriginator.empName).toBe("Marko");

        empCareTaker.addMemento(empOriginator.saveToMemento());

        empOriginator.empId = 33;
        empCareTaker.addMemento(empOriginator.saveToMemento());

        let memento = empCareTaker.getMemento();
        expect(memento.empId).toBe(33);
        expect(memento.empName).toBe("Marko");
        expect(memento.empDesignation).toBe("IT");
        expect(memento.empPhoneNo).toBe("456");

        const popped = empCareTaker.getMemento();
        empOriginator.undoFromMemento(popped);
        expect(empOriginator.getCurrentState()).toEqual({
            empId: 11,
            empPhoneNo: "456",
            empDesignation: "IT",
            empName: "Marko",
        } as IEmployee);
    });
});
