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
  PutV1TaxRatesRequest,
  TaxDataTaxRateInterface,
  TaxDataTaxRateSearchResultsInterface,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    PutV1TaxRatesRequestFromJSON,
    PutV1TaxRatesRequestToJSON,
    TaxDataTaxRateInterfaceFromJSON,
    TaxDataTaxRateInterfaceToJSON,
    TaxDataTaxRateSearchResultsInterfaceFromJSON,
    TaxDataTaxRateSearchResultsInterfaceToJSON,
} from '../models';

export interface DeleteV1TaxRatesRateIdRequest {
    rateId: number;
}

export interface GetV1TaxRatesRateIdRequest {
    rateId: number;
}

export interface GetV1TaxRatesSearchRequest {
    searchCriteriaFilterGroups0Filters0Field?: string;
    searchCriteriaFilterGroups0Filters0Value?: string;
    searchCriteriaFilterGroups0Filters0ConditionType?: string;
    searchCriteriaSortOrders0Field?: string;
    searchCriteriaSortOrders0Direction?: string;
    searchCriteriaPageSize?: number;
    searchCriteriaCurrentPage?: number;
}

export interface PostV1TaxRatesRequest {
    putV1TaxRatesRequest?: PutV1TaxRatesRequest;
}

export interface PutV1TaxRatesOperationRequest {
    putV1TaxRatesRequest?: PutV1TaxRatesRequest;
}

/**
 * 
 */
export class TaxTaxRateRepositoryV1Api extends runtime.BaseAPI {

    /**
     * Delete tax rate
     */
    async deleteV1TaxRatesRateIdRaw(requestParameters: DeleteV1TaxRatesRateIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.rateId === null || requestParameters.rateId === undefined) {
            throw new runtime.RequiredError('rateId','Required parameter requestParameters.rateId was null or undefined when calling deleteV1TaxRatesRateId.');
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
            path: `/V1/taxRates/{rateId}`.replace(`{${"rateId"}}`, encodeURIComponent(String(requestParameters.rateId))),
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
     * Delete tax rate
     */
    async deleteV1TaxRatesRateId(requestParameters: DeleteV1TaxRatesRateIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.deleteV1TaxRatesRateIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get tax rate
     */
    async getV1TaxRatesRateIdRaw(requestParameters: GetV1TaxRatesRateIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaxDataTaxRateInterface>> {
        if (requestParameters.rateId === null || requestParameters.rateId === undefined) {
            throw new runtime.RequiredError('rateId','Required parameter requestParameters.rateId was null or undefined when calling getV1TaxRatesRateId.');
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
            path: `/V1/taxRates/{rateId}`.replace(`{${"rateId"}}`, encodeURIComponent(String(requestParameters.rateId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TaxDataTaxRateInterfaceFromJSON(jsonValue));
    }

    /**
     * Get tax rate
     */
    async getV1TaxRatesRateId(requestParameters: GetV1TaxRatesRateIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaxDataTaxRateInterface> {
        const response = await this.getV1TaxRatesRateIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search TaxRates This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#TaxRateRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
     */
    async getV1TaxRatesSearchRaw(requestParameters: GetV1TaxRatesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaxDataTaxRateSearchResultsInterface>> {
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
            path: `/V1/taxRates/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TaxDataTaxRateSearchResultsInterfaceFromJSON(jsonValue));
    }

    /**
     * Search TaxRates This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#TaxRateRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
     */
    async getV1TaxRatesSearch(requestParameters: GetV1TaxRatesSearchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaxDataTaxRateSearchResultsInterface> {
        const response = await this.getV1TaxRatesSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create or update tax rate
     */
    async postV1TaxRatesRaw(requestParameters: PostV1TaxRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaxDataTaxRateInterface>> {
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
            path: `/V1/taxRates`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PutV1TaxRatesRequestToJSON(requestParameters.putV1TaxRatesRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TaxDataTaxRateInterfaceFromJSON(jsonValue));
    }

    /**
     * Create or update tax rate
     */
    async postV1TaxRates(requestParameters: PostV1TaxRatesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaxDataTaxRateInterface> {
        const response = await this.postV1TaxRatesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create or update tax rate
     */
    async putV1TaxRatesRaw(requestParameters: PutV1TaxRatesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaxDataTaxRateInterface>> {
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
            path: `/V1/taxRates`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PutV1TaxRatesRequestToJSON(requestParameters.putV1TaxRatesRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TaxDataTaxRateInterfaceFromJSON(jsonValue));
    }

    /**
     * Create or update tax rate
     */
    async putV1TaxRates(requestParameters: PutV1TaxRatesOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaxDataTaxRateInterface> {
        const response = await this.putV1TaxRatesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
