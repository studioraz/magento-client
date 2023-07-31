import { FetchAPI, IntegrationCustomerTokenServiceV1Api, PostV1CartsMineItemsRequest, PostV1IntegrationCustomerTokenRequest, QuoteDataCartInterface, QuoteDataCartItemInterface } from './../generated';
export * from './../generated';
/**
 * Magento Client config
 */
export type Config = {
    basePath: string;
    fetchApi?: FetchAPI;
    headers?: {
        [key: string]: string;
    };
    username: string;
    password: string;
};
export declare class MagentoCustomerClient {
    readonly integrationCustomerTokenServiceV1Api: IntegrationCustomerTokenServiceV1Api;
    private quoteCartManagementV1Api;
    private quoteCartItemRepositoryV1Api;
    constructor(opts: Config);
    generateAccessToken(requestParameters: PostV1IntegrationCustomerTokenRequest): Promise<string>;
    createQuote(): Promise<number>;
    getQuote(): Promise<QuoteDataCartInterface>;
    addQuoteItems(requestParameters: PostV1CartsMineItemsRequest): Promise<QuoteDataCartItemInterface>;
}
