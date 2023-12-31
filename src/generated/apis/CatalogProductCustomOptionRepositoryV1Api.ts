/* tslint:disable */
/* eslint-disable */
/**
 * Magento Community
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CatalogDataProductCustomOptionInterface,
  ErrorResponse,
  PostV1ProductsOptionsRequest,
} from '../models';
import {
    CatalogDataProductCustomOptionInterfaceFromJSON,
    CatalogDataProductCustomOptionInterfaceToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    PostV1ProductsOptionsRequestFromJSON,
    PostV1ProductsOptionsRequestToJSON,
} from '../models';

export interface DeleteV1ProductsSkuOptionsOptionIdRequest {
    sku: string;
    optionId: number;
}

export interface GetV1ProductsSkuOptionsRequest {
    sku: string;
}

export interface GetV1ProductsSkuOptionsOptionIdRequest {
    sku: string;
    optionId: number;
}

export interface PostV1ProductsOptionsOperationRequest {
    postV1ProductsOptionsRequest?: PostV1ProductsOptionsRequest;
}

export interface PutV1ProductsOptionsOptionIdRequest {
    optionId: string;
    postV1ProductsOptionsRequest?: PostV1ProductsOptionsRequest;
}

/**
 * 
 */
export class CatalogProductCustomOptionRepositoryV1Api extends runtime.BaseAPI {

    /**
     * 
     */
    async deleteV1ProductsSkuOptionsOptionIdRaw(requestParameters: DeleteV1ProductsSkuOptionsOptionIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.sku === null || requestParameters.sku === undefined) {
            throw new runtime.RequiredError('sku','Required parameter requestParameters.sku was null or undefined when calling deleteV1ProductsSkuOptionsOptionId.');
        }

        if (requestParameters.optionId === null || requestParameters.optionId === undefined) {
            throw new runtime.RequiredError('optionId','Required parameter requestParameters.optionId was null or undefined when calling deleteV1ProductsSkuOptionsOptionId.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/V1/products/{sku}/options/{optionId}`.replace(`{${"sku"}}`, encodeURIComponent(String(requestParameters.sku))).replace(`{${"optionId"}}`, encodeURIComponent(String(requestParameters.optionId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<boolean>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * 
     */
    async deleteV1ProductsSkuOptionsOptionId(requestParameters: DeleteV1ProductsSkuOptionsOptionIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.deleteV1ProductsSkuOptionsOptionIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the list of custom options for a specific product
     */
    async getV1ProductsSkuOptionsRaw(requestParameters: GetV1ProductsSkuOptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CatalogDataProductCustomOptionInterface>>> {
        if (requestParameters.sku === null || requestParameters.sku === undefined) {
            throw new runtime.RequiredError('sku','Required parameter requestParameters.sku was null or undefined when calling getV1ProductsSkuOptions.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/V1/products/{sku}/options`.replace(`{${"sku"}}`, encodeURIComponent(String(requestParameters.sku))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CatalogDataProductCustomOptionInterfaceFromJSON));
    }

    /**
     * Get the list of custom options for a specific product
     */
    async getV1ProductsSkuOptions(requestParameters: GetV1ProductsSkuOptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CatalogDataProductCustomOptionInterface>> {
        const response = await this.getV1ProductsSkuOptionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get custom option for a specific product
     */
    async getV1ProductsSkuOptionsOptionIdRaw(requestParameters: GetV1ProductsSkuOptionsOptionIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogDataProductCustomOptionInterface>> {
        if (requestParameters.sku === null || requestParameters.sku === undefined) {
            throw new runtime.RequiredError('sku','Required parameter requestParameters.sku was null or undefined when calling getV1ProductsSkuOptionsOptionId.');
        }

        if (requestParameters.optionId === null || requestParameters.optionId === undefined) {
            throw new runtime.RequiredError('optionId','Required parameter requestParameters.optionId was null or undefined when calling getV1ProductsSkuOptionsOptionId.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/V1/products/{sku}/options/{optionId}`.replace(`{${"sku"}}`, encodeURIComponent(String(requestParameters.sku))).replace(`{${"optionId"}}`, encodeURIComponent(String(requestParameters.optionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CatalogDataProductCustomOptionInterfaceFromJSON(jsonValue));
    }

    /**
     * Get custom option for a specific product
     */
    async getV1ProductsSkuOptionsOptionId(requestParameters: GetV1ProductsSkuOptionsOptionIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogDataProductCustomOptionInterface> {
        const response = await this.getV1ProductsSkuOptionsOptionIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Save Custom Option
     */
    async postV1ProductsOptionsRaw(requestParameters: PostV1ProductsOptionsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogDataProductCustomOptionInterface>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/V1/products/options`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostV1ProductsOptionsRequestToJSON(requestParameters.postV1ProductsOptionsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CatalogDataProductCustomOptionInterfaceFromJSON(jsonValue));
    }

    /**
     * Save Custom Option
     */
    async postV1ProductsOptions(requestParameters: PostV1ProductsOptionsOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogDataProductCustomOptionInterface> {
        const response = await this.postV1ProductsOptionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Save Custom Option
     */
    async putV1ProductsOptionsOptionIdRaw(requestParameters: PutV1ProductsOptionsOptionIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogDataProductCustomOptionInterface>> {
        if (requestParameters.optionId === null || requestParameters.optionId === undefined) {
            throw new runtime.RequiredError('optionId','Required parameter requestParameters.optionId was null or undefined when calling putV1ProductsOptionsOptionId.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/V1/products/options/{optionId}`.replace(`{${"optionId"}}`, encodeURIComponent(String(requestParameters.optionId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PostV1ProductsOptionsRequestToJSON(requestParameters.postV1ProductsOptionsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CatalogDataProductCustomOptionInterfaceFromJSON(jsonValue));
    }

    /**
     * Save Custom Option
     */
    async putV1ProductsOptionsOptionId(requestParameters: PutV1ProductsOptionsOptionIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogDataProductCustomOptionInterface> {
        const response = await this.putV1ProductsOptionsOptionIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
