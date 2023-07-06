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
  ErrorResponse,
  PutV1CategoriesCategoryIdProductsRequest,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    PutV1CategoriesCategoryIdProductsRequestFromJSON,
    PutV1CategoriesCategoryIdProductsRequestToJSON,
} from '../models';

export interface DeleteV1CategoriesCategoryIdProductsSkuRequest {
    categoryId: number;
    sku: string;
}

export interface PostV1CategoriesCategoryIdProductsRequest {
    categoryId: string;
    putV1CategoriesCategoryIdProductsRequest?: PutV1CategoriesCategoryIdProductsRequest;
}

export interface PutV1CategoriesCategoryIdProductsOperationRequest {
    categoryId: string;
    putV1CategoriesCategoryIdProductsRequest?: PutV1CategoriesCategoryIdProductsRequest;
}

/**
 * 
 */
export class CatalogCategoryLinkRepositoryV1Api extends runtime.BaseAPI {

    /**
     * Remove the product assignment from the category by category id and sku
     */
    async deleteV1CategoriesCategoryIdProductsSkuRaw(requestParameters: DeleteV1CategoriesCategoryIdProductsSkuRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId','Required parameter requestParameters.categoryId was null or undefined when calling deleteV1CategoriesCategoryIdProductsSku.');
        }

        if (requestParameters.sku === null || requestParameters.sku === undefined) {
            throw new runtime.RequiredError('sku','Required parameter requestParameters.sku was null or undefined when calling deleteV1CategoriesCategoryIdProductsSku.');
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
            path: `/V1/categories/{categoryId}/products/{sku}`.replace(`{${"categoryId"}}`, encodeURIComponent(String(requestParameters.categoryId))).replace(`{${"sku"}}`, encodeURIComponent(String(requestParameters.sku))),
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
     * Remove the product assignment from the category by category id and sku
     */
    async deleteV1CategoriesCategoryIdProductsSku(requestParameters: DeleteV1CategoriesCategoryIdProductsSkuRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.deleteV1CategoriesCategoryIdProductsSkuRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Assign a product to the required category
     */
    async postV1CategoriesCategoryIdProductsRaw(requestParameters: PostV1CategoriesCategoryIdProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId','Required parameter requestParameters.categoryId was null or undefined when calling postV1CategoriesCategoryIdProducts.');
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
            path: `/V1/categories/{categoryId}/products`.replace(`{${"categoryId"}}`, encodeURIComponent(String(requestParameters.categoryId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PutV1CategoriesCategoryIdProductsRequestToJSON(requestParameters.putV1CategoriesCategoryIdProductsRequest),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<boolean>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Assign a product to the required category
     */
    async postV1CategoriesCategoryIdProducts(requestParameters: PostV1CategoriesCategoryIdProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.postV1CategoriesCategoryIdProductsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Assign a product to the required category
     */
    async putV1CategoriesCategoryIdProductsRaw(requestParameters: PutV1CategoriesCategoryIdProductsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId','Required parameter requestParameters.categoryId was null or undefined when calling putV1CategoriesCategoryIdProducts.');
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
            path: `/V1/categories/{categoryId}/products`.replace(`{${"categoryId"}}`, encodeURIComponent(String(requestParameters.categoryId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PutV1CategoriesCategoryIdProductsRequestToJSON(requestParameters.putV1CategoriesCategoryIdProductsRequest),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<boolean>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Assign a product to the required category
     */
    async putV1CategoriesCategoryIdProducts(requestParameters: PutV1CategoriesCategoryIdProductsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.putV1CategoriesCategoryIdProductsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
