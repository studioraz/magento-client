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
  CheckoutAgreementsDataAgreementInterface,
  ErrorResponse,
} from '../models';
import {
    CheckoutAgreementsDataAgreementInterfaceFromJSON,
    CheckoutAgreementsDataAgreementInterfaceToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface GetV1CartsLicenceListRequest {
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
export class CheckoutAgreementsCheckoutAgreementsListV1Api extends runtime.BaseAPI {

    /**
     * List of checkout agreements.
     */
    async getV1CartsLicenceListRaw(requestParameters: GetV1CartsLicenceListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CheckoutAgreementsDataAgreementInterface>>> {
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
            path: `/V1/carts/licence/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CheckoutAgreementsDataAgreementInterfaceFromJSON));
    }

    /**
     * List of checkout agreements.
     */
    async getV1CartsLicenceList(requestParameters: GetV1CartsLicenceListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CheckoutAgreementsDataAgreementInterface>> {
        const response = await this.getV1CartsLicenceListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
