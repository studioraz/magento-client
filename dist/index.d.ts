import { FetchAPI, IntegrationAdminTokenServiceV1Api, PostV1IntegrationAdminTokenOperationRequest, CatalogCategoryManagementV1Api, GetV1CategoriesRequest, CatalogDataCategoryTreeInterface, SRMagentoRestApiAddonConfigManagementServiceV1Api, PostV1SrsysconfigConfigGetOperationRequest, PostV1SrsysconfigConfigSetOperationRequest } from './generated';
export * from './generated';
/**
 * MailSlurp config
 *
 * @remarks
 * [Obtain your API Key](https://app.mailslurp.com) in your dashboard.
 */
export type Config = {
    apiKey: string;
    accessToken?: string;
    attribution?: string;
    basePath?: string;
    fetchApi?: FetchAPI;
    headers?: {
        [key: string]: string;
    };
    username: string;
    password: string;
};
export declare class MagentoClient {
    readonly integrationAdminTokenServiceV1Api: IntegrationAdminTokenServiceV1Api;
    readonly catalogCategoryManagementV1Api: CatalogCategoryManagementV1Api;
    readonly srMagentoRestApiAddonConfigManagementServiceV1Api: SRMagentoRestApiAddonConfigManagementServiceV1Api;
    constructor(opts: Config);
    generateAccessToken(requestParameters: PostV1IntegrationAdminTokenOperationRequest): Promise<string>;
    getCategories(requestParameters: GetV1CategoriesRequest): Promise<CatalogDataCategoryTreeInterface>;
    getSysConfigs(requestParameters: PostV1SrsysconfigConfigGetOperationRequest): Promise<string>;
    setSysConfigs(requestParameters: PostV1SrsysconfigConfigSetOperationRequest): Promise<boolean>;
}
export declare function wrapException<T>(fn: () => Promise<T>): Promise<T>;
export interface Result<T> {
    content?: T;
    error?: {
        statusCode: number;
        message: string;
    };
}
export declare function wrapResult<T>(fn: () => Promise<T>): Promise<Result<T>>;
export default MagentoClient;