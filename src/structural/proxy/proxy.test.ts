import { describe, expect, test } from "@jest/globals";
import { Role } from "./Role";
import { ReportGeneratorImplProxy } from "./ReportGeneratorImplProxy";
import { ReportGeneratorImpl } from "./ReportGeneratorImpl";

describe("test proxy", () => {
    describe("when not a manager", () => {
        const accessRole = new Role();
        accessRole.role = "Peasant";
        const proxy = new ReportGeneratorImplProxy(accessRole);
        const format = "docx";
        const entries = 5;

        test("should generate blank template", () => {
            expect(proxy.displayReportTemplate(format, entries)).toEqual(
                `ReportGeneratorImplProxy: Displaying blank report template in ${format} format with ${entries} entries`
            );
        });

        test("should generate complex report", () => {
            expect(proxy.generateComplexReport(format, entries)).toEqual(
                `ReportGeneratorImpl: Generating complex report in ${format} format with ${entries} entries`
            );
        });

        test("should throw for sensitive report", () => {
            var bad = () => proxy.generateSensitiveReport();
            expect(bad).toThrow();
        });

        test("basic report generator should have no tempalte", () => {
            const r = new ReportGeneratorImpl();
            expect(r.displayReportTemplate("a", 1)).toEqual("");
        });
    });

    describe("when manager role", () => {
        test("should generate sensitive report", () => {
            const accessRole = new Role();
            accessRole.role = "Manager";
            const rg = new ReportGeneratorImplProxy(accessRole);
            expect(rg.generateSensitiveReport()).toEqual(
                "ReportGeneratorImpl: Generating sensitive report"
            );
        });
    });
});
