// import all from './generated';

import {
    Configuration,
    FetchAPI,
    IntegrationAdminTokenServiceV1Api,
    PostV1IntegrationAdminTokenOperationRequest,
    CatalogCategoryManagementV1Api,
    GetV1CategoriesRequest,
    CatalogDataCategoryTreeInterface,
    SRMagentoRestApiAddonConfigManagementServiceV1Api,
    PostV1SrsysconfigConfigGetOperationRequest,
    PostV1SrsysconfigConfigSetOperationRequest,
} from './generated';

export * from './generated';

/**
 * Magento Client config
 */
export type Config = {
    // optional attribution id (see sales)
    basePath: string;
    // optional fetch override
    fetchApi?: FetchAPI;

    headers?: { [key: string]: string };
    username: string;
    password: string;
};

export class MagentoClient {
    public readonly integrationAdminTokenServiceV1Api : IntegrationAdminTokenServiceV1Api;
    public readonly catalogCategoryManagementV1Api : CatalogCategoryManagementV1Api

    public readonly srMagentoRestApiAddonConfigManagementServiceV1Api : SRMagentoRestApiAddonConfigManagementServiceV1Api

    constructor(opts: Config) {
        // check options
        if (!opts.username) {
            throw 'admin username config is required';
        }
        if (!opts.password) {
            throw 'admin password config is required';
        }

        if (!opts.basePath) {
            throw 'base path config is required';
        }

            const _fetch: any = opts.fetchApi || fetch;

        // create credentials
        const clientConfiguration = new Configuration({
            username: opts.username,
            password: opts.password,
            basePath: opts.basePath
        });

        const args = [clientConfiguration, clientConfiguration.basePath, _fetch];

        this.integrationAdminTokenServiceV1Api = new IntegrationAdminTokenServiceV1Api(...args);

        const clientConfiguration1 = new Configuration({
            username: opts.username,
            password: opts.password,
            accessToken : this.generateAccessToken({
                postV1IntegrationAdminTokenRequest : {
                    username: opts.username,
                    password: opts.password
                }
            })
        });

        let args1 = [clientConfiguration1, clientConfiguration1.basePath, _fetch];
        this.catalogCategoryManagementV1Api = new CatalogCategoryManagementV1Api(...args1);
        this.srMagentoRestApiAddonConfigManagementServiceV1Api = new SRMagentoRestApiAddonConfigManagementServiceV1Api(...args1);
    };


    async generateAccessToken(requestParameters: PostV1IntegrationAdminTokenOperationRequest): Promise<string> {
        return wrapCall('generateAccessToken', () =>
            this.integrationAdminTokenServiceV1Api.postV1IntegrationAdminToken(requestParameters)
        );
    }

    async getCategories(requestParameters: GetV1CategoriesRequest): Promise<CatalogDataCategoryTreeInterface> {
        return wrapCall('getCategories', () =>
            this.catalogCategoryManagementV1Api.getV1Categories(requestParameters)
        );
    }

    async getSysConfigs(requestParameters: PostV1SrsysconfigConfigGetOperationRequest): Promise<string> {
        return wrapCall('getSysConfigs', () =>
            this.srMagentoRestApiAddonConfigManagementServiceV1Api.postV1SrsysconfigConfigGet(requestParameters)
        );
    }

    async setSysConfigs(requestParameters: PostV1SrsysconfigConfigSetOperationRequest): Promise<boolean> {
        return wrapCall('setSysConfigs', () =>
          this.srMagentoRestApiAddonConfigManagementServiceV1Api.postV1SrsysconfigConfigSet(requestParameters)
        );
    }

}


// helper
async function wrapCall<T>(tag: String, fn: () => Promise<T>): Promise<T> {
    try {
        return await fn();
    } catch (e) {
        throw e.json ? await e.json() : e;
    }
}

export async function wrapException<T>(fn: () => Promise<T>): Promise<T> {
    return wrapCall('wrapped exception', fn);
}

export interface Result<T> {
    content?: T;
    error?: {
        statusCode: number;
        message: string;
    };
}

export async function wrapResult<T>(fn: () => Promise<T>): Promise<Result<T>> {
    try {
        const content = await fn();
        return {
            content,
        };
    } catch (e) {
        const statusCode = e.status ? e.status : 500;
        const message = e.json ? await e.json() : e;
        return {
            error: {
                statusCode,
                message,
            },
        };
    }
}


export default MagentoClient;
