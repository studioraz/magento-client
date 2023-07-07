// import all from './generated';

import {
    Configuration,
    FetchAPI,
    ApiResponse,
    IntegrationAdminTokenServiceV1Api,
    PostV1IntegrationAdminTokenOperationRequest,
    CatalogCategoryListV1Api,
    CatalogDataCategorySearchResultsInterface,
    GetV1CategoriesListRequest,
    CatalogCategoryManagementV1Api, GetV1CategoriesRequest, CatalogDataCategoryTreeInterface
} from './generated';

import { ApiMiddleware } from './ApiMiddleware';

export * from './generated';

/**
 * MailSlurp config
 *
 * @remarks
 * [Obtain your API Key](https://app.mailslurp.com) in your dashboard.
 */
export type Config = {
    // obtain an apiKey at https://app.mailslurp.com
    apiKey: string;

    accessToken?: string;
    // optional attribution id (see sales)
    attribution?: string;
    // optional api base path
    basePath?: string;
    // optional fetch override
    fetchApi?: FetchAPI;
    // optional request headers map
    headers?: { [key: string]: string };

    username: string;

    password: string;

};

export class MagentoClient {
    public readonly integrationAdminTokenServiceV1Api : IntegrationAdminTokenServiceV1Api;
    public readonly catalogCategoryManagementV1Api : CatalogCategoryManagementV1Api
    constructor(opts: Config) {
        // check options
        if (!opts.username) {
            throw 'admin username config is required';
        }
        if (!opts.password) {
            throw 'admin password config is required';
        }

        /*
        // TODO: implement a design pattern for generating access tokens
        // @see: https://stackovserflow.com/questions/43431550/async-await-class-constructor
        const accessToken = this.generateAccessToken({
            postV1IntegrationAdminTokenRequest : {
                username: opts.username,
                password: opts.password
            }
        });
         */
        const _fetch: any = opts.fetchApi || fetch;

        // create credentials
        const clientConfiguration = new Configuration({
            username: opts.username,
            password: opts.password,
            accessToken: opts.accessToken || undefined,
            //apiKey: opts.apiKey || undefined,
            //middleware: [new ApiMiddleware()]
        });

        const args = [clientConfiguration, clientConfiguration.basePath, _fetch];

        this.integrationAdminTokenServiceV1Api = new IntegrationAdminTokenServiceV1Api(...args);
        this.catalogCategoryManagementV1Api = new CatalogCategoryManagementV1Api(...args);

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
