import { AbstractSupportHandler } from "./AbstractSupportHandler";
import { BillingSupportHandler } from "./BillingSupportHandler";
import { GeneralSupportHandler } from "./GeneralSupportHandler";
import { TechnicalSupportHandler } from "./TechnicalSupportHandler";

export class RequestorClient {
    public static getHandlerChain(): AbstractSupportHandler {
        const technicalSupportHandler: AbstractSupportHandler =
            new TechnicalSupportHandler(AbstractSupportHandler.TECHNICAL);
        const billingSupportHandler: AbstractSupportHandler =
            new BillingSupportHandler(AbstractSupportHandler.BILLING);
        const generalSupportHandler: AbstractSupportHandler =
            new GeneralSupportHandler(AbstractSupportHandler.GENERAL);

        technicalSupportHandler.setNextHandler(billingSupportHandler);
        billingSupportHandler.setNextHandler(generalSupportHandler);

        return technicalSupportHandler;
    }
}
