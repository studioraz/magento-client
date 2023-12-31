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
  InventoryApiDataStockInterface,
  InventoryApiDataStockSearchResultsInterface,
  PostV1InventoryStocksRequest,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    InventoryApiDataStockInterfaceFromJSON,
    InventoryApiDataStockInterfaceToJSON,
    InventoryApiDataStockSearchResultsInterfaceFromJSON,
    InventoryApiDataStockSearchResultsInterfaceToJSON,
    PostV1InventoryStocksRequestFromJSON,
    PostV1InventoryStocksRequestToJSON,
} from '../models';

export interface DeleteV1InventoryStocksStockIdRequest {
    stockId: number;
}

export interface GetV1InventoryStocksRequest {
    searchCriteriaFilterGroups0Filters0Field?: string;
    searchCriteriaFilterGroups0Filters0Value?: string;
    searchCriteriaFilterGroups0Filters0ConditionType?: string;
    searchCriteriaSortOrders0Field?: string;
    searchCriteriaSortOrders0Direction?: string;
    searchCriteriaPageSize?: number;
    searchCriteriaCurrentPage?: number;
}

export interface GetV1InventoryStocksStockIdRequest {
    stockId: number;
}

export interface PostV1InventoryStocksOperationRequest {
    postV1InventoryStocksRequest?: PostV1InventoryStocksRequest;
}

export interface PutV1InventoryStocksStockIdRequest {
    stockId: string;
    postV1InventoryStocksRequest?: PostV1InventoryStocksRequest;
}

/**
 * 
 */
export class InventoryApiStockRepositoryV1Api extends runtime.BaseAPI {

    /**
     * Delete the Stock data by stockId. If stock is not found do nothing
     */
    async deleteV1InventoryStocksStockIdRaw(requestParameters: DeleteV1InventoryStocksStockIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ErrorResponse>> {
        if (requestParameters.stockId === null || requestParameters.stockId === undefined) {
            throw new runtime.RequiredError('stockId','Required parameter requestParameters.stockId was null or undefined when calling deleteV1InventoryStocksStockId.');
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
            path: `/V1/inventory/stocks/{stockId}`.replace(`{${"stockId"}}`, encodeURIComponent(String(requestParameters.stockId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ErrorResponseFromJSON(jsonValue));
    }

    /**
     * Delete the Stock data by stockId. If stock is not found do nothing
     */
    async deleteV1InventoryStocksStockId(requestParameters: DeleteV1InventoryStocksStockIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ErrorResponse> {
        const response = await this.deleteV1InventoryStocksStockIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Find Stocks by given SearchCriteria SearchCriteria is not required because load all stocks is useful case
     */
    async getV1InventoryStocksRaw(requestParameters: GetV1InventoryStocksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventoryApiDataStockSearchResultsInterface>> {
        const queryParameters: any = {};

        if (requestParameters.searchCriteriaFilterGroups0Filters0Field !== undefined) {
            queryParameters['searchCriteria[filterGroups][0][filters][0][field]'] = requestParameters.searchCriteriaFilterGroups0Filters0Field;
        }

        if (requestParameters.searchCriteriaFilterGroups0Filters0Value !== undefined) {
            queryParameters['searchCriteria[filterGroups][0][filters][0][value]'] = requestParameters.searchCriteriaFilterGroups0Filters0Value;
        }

        if (requestParameters.searchCriteriaFilterGroups0Filters0ConditionType !== undefined) {
            queryParameters['searchCriteria[filterGroups][0][filters][0][conditionType]'] = requestParameters.searchCriteriaFilterGroups0Filters0ConditionType;
        }

        if (requestParameters.searchCriteriaSortOrders0Field !== undefined) {
            queryParameters['searchCriteria[sortOrders][0][field]'] = requestParameters.searchCriteriaSortOrders0Field;
        }

        if (requestParameters.searchCriteriaSortOrders0Direction !== undefined) {
            queryParameters['searchCriteria[sortOrders][0][direction]'] = requestParameters.searchCriteriaSortOrders0Direction;
        }

        if (requestParameters.searchCriteriaPageSize !== undefined) {
            queryParameters['searchCriteria[pageSize]'] = requestParameters.searchCriteriaPageSize;
        }

        if (requestParameters.searchCriteriaCurrentPage !== undefined) {
            queryParameters['searchCriteria[currentPage]'] = requestParameters.searchCriteriaCurrentPage;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/V1/inventory/stocks`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InventoryApiDataStockSearchResultsInterfaceFromJSON(jsonValue));
    }

    /**
     * Find Stocks by given SearchCriteria SearchCriteria is not required because load all stocks is useful case
     */
    async getV1InventoryStocks(requestParameters: GetV1InventoryStocksRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventoryApiDataStockSearchResultsInterface> {
        const response = await this.getV1InventoryStocksRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Stock data by given stockId. If you want to create plugin on get method, also you need to create separate plugin on getList method, because entity loading way is different for these methods
     */
    async getV1InventoryStocksStockIdRaw(requestParameters: GetV1InventoryStocksStockIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventoryApiDataStockInterface>> {
        if (requestParameters.stockId === null || requestParameters.stockId === undefined) {
            throw new runtime.RequiredError('stockId','Required parameter requestParameters.stockId was null or undefined when calling getV1InventoryStocksStockId.');
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
            path: `/V1/inventory/stocks/{stockId}`.replace(`{${"stockId"}}`, encodeURIComponent(String(requestParameters.stockId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InventoryApiDataStockInterfaceFromJSON(jsonValue));
    }

    /**
     * Get Stock data by given stockId. If you want to create plugin on get method, also you need to create separate plugin on getList method, because entity loading way is different for these methods
     */
    async getV1InventoryStocksStockId(requestParameters: GetV1InventoryStocksStockIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventoryApiDataStockInterface> {
        const response = await this.getV1InventoryStocksStockIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Save Stock data
     */
    async postV1InventoryStocksRaw(requestParameters: PostV1InventoryStocksOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
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
            path: `/V1/inventory/stocks`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostV1InventoryStocksRequestToJSON(requestParameters.postV1InventoryStocksRequest),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Save Stock data
     */
    async postV1InventoryStocks(requestParameters: PostV1InventoryStocksOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.postV1InventoryStocksRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Save Stock data
     */
    async putV1InventoryStocksStockIdRaw(requestParameters: PutV1InventoryStocksStockIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters.stockId === null || requestParameters.stockId === undefined) {
            throw new runtime.RequiredError('stockId','Required parameter requestParameters.stockId was null or undefined when calling putV1InventoryStocksStockId.');
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
            path: `/V1/inventory/stocks/{stockId}`.replace(`{${"stockId"}}`, encodeURIComponent(String(requestParameters.stockId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PostV1InventoryStocksRequestToJSON(requestParameters.postV1InventoryStocksRequest),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Save Stock data
     */
    async putV1InventoryStocksStockId(requestParameters: PutV1InventoryStocksStockIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.putV1InventoryStocksStockIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
