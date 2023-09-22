import { IReportGenerator } from "./IReportGenerator";

export class ReportGeneratorImpl implements IReportGenerator {
    public constructor() {
        console.log("Report generator created");
    }

    displayReportTemplate(reportFormat: string, reportEntries: number): string {
        return "";
    }

    generateComplexReport(reportFormat: string, reportEntries: number): string {
        return `ReportGeneratorImpl: Generating complex report in ${reportFormat} format with ${reportEntries} entries`;
    }

    generateSensitiveReport(): string {
        return "ReportGeneratorImpl: Generating sensitive report";
    }
}
