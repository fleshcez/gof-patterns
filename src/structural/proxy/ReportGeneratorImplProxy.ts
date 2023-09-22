import { IReportGenerator } from "./IReportGenerator";
import { ReportGeneratorImpl } from "./ReportGeneratorImpl";
import { Role } from "./Role";

export class ReportGeneratorImplProxy implements IReportGenerator {
    private _reportGeneratorImpl: IReportGenerator;

    public constructor(private _accessRole: Role) {}

    displayReportTemplate(reportFormat: string, reportEntries: number): string {
        return `ReportGeneratorImplProxy: Displaying blank report template in ${reportFormat} format with ${reportEntries} entries`;
    }
    generateComplexReport(reportFormat: string, reportEntries: number): string {
        this._checkAndCreateGenerator();
        return this._reportGeneratorImpl.generateComplexReport(
            reportFormat,
            reportEntries
        );
    }

    generateSensitiveReport(): string {
        if (this._accessRole.role === "Manager") {
            this._checkAndCreateGenerator();
            return this._reportGeneratorImpl.generateSensitiveReport();
        } else {
            throw "Not authorized";
        }
    }

    private _checkAndCreateGenerator(): void {
        if (!this._reportGeneratorImpl) {
            this._reportGeneratorImpl = new ReportGeneratorImpl();
        }
    }
}
