import { FetchAPI, IntegrationAdminTokenServiceV1Api, PostV1IntegrationAdminTokenOperationRequest, CatalogCategoryManagementV1Api, GetV1CategoriesRequest, CatalogDataCategoryTreeInterface, SRMagentoRestApiAddonConfigManagementServiceV1Api, PostV1SrsysconfigConfigGetOperationRequest, PostV1SrsysconfigConfigSetOperationRequest, CustomerAccountManagementV1Api, CustomerDataCustomerInterface, PostV1CustomersOperationRequest } from './../generated';
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
export declare class MagentoAdminClient {
    readonly integrationAdminTokenServiceV1Api: IntegrationAdminTokenServiceV1Api;
    readonly catalogCategoryManagementV1Api: CatalogCategoryManagementV1Api;
    readonly srMagentoRestApiAddonConfigManagementServiceV1Api: SRMagentoRestApiAddonConfigManagementServiceV1Api;
    readonly customerAccountManagementV1Api: CustomerAccountManagementV1Api;
    constructor(opts: Config);
    generateAccessToken(requestParameters: PostV1IntegrationAdminTokenOperationRequest): Promise<string>;
    getCategories(requestParameters: GetV1CategoriesRequest): Promise<CatalogDataCategoryTreeInterface>;
    getSysConfigs(requestParameters: PostV1SrsysconfigConfigGetOperationRequest): Promise<string>;
    setSysConfigs(requestParameters: PostV1SrsysconfigConfigSetOperationRequest): Promise<boolean>;
    createCustomerAccount(requestParameters: PostV1CustomersOperationRequest): Promise<CustomerDataCustomerInterface>;
}
