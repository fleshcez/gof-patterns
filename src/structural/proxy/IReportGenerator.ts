export interface IReportGenerator {
    displayReportTemplate(reportFormat: string, reportEntries: number): string;
    generateComplexReport(reportFormat: string, reportEntries: number): string;
    generateSensitiveReport(): string;
}
