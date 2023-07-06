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
  FrameworkSearchSearchResultInterface,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    FrameworkSearchSearchResultInterfaceFromJSON,
    FrameworkSearchSearchResultInterfaceToJSON,
} from '../models';

export interface GetV1AdobestockAssetListRequest {
    searchCriteriaRequestName?: string;
    searchCriteriaFilterGroups0Filters0Field?: string;
    searchCriteriaFilterGroups0Filters0Value?: string;
    searchCriteriaFilterGroups0Filters0ConditionType?: string;
    searchCriteriaSortOrders0Field?: string;
    searchCriteriaSortOrders0Direction?: string;
    searchCriteriaPageSize?: number;
    searchCriteriaCurrentPage?: number;
}

/**
 * 
 */
export class AdobeStockAssetApiGetAssetListV1Api extends runtime.BaseAPI {

    /**
     * Search for images based on search criteria
     */
    async getV1AdobestockAssetListRaw(requestParameters: GetV1AdobestockAssetListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FrameworkSearchSearchResultInterface>> {
        const queryParameters: any = {};

        if (requestParameters.searchCriteriaRequestName !== undefined) {
            queryParameters['searchCriteria[requestName]'] = requestParameters.searchCriteriaRequestName;
        }

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
            path: `/V1/adobestock/asset/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FrameworkSearchSearchResultInterfaceFromJSON(jsonValue));
    }

    /**
     * Search for images based on search criteria
     */
    async getV1AdobestockAssetList(requestParameters: GetV1AdobestockAssetListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FrameworkSearchSearchResultInterface> {
        const response = await this.getV1AdobestockAssetListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
