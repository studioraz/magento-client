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
  PutV1CouponsCouponIdRequest,
  SalesRuleDataCouponInterface,
  SalesRuleDataCouponSearchResultInterface,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    PutV1CouponsCouponIdRequestFromJSON,
    PutV1CouponsCouponIdRequestToJSON,
    SalesRuleDataCouponInterfaceFromJSON,
    SalesRuleDataCouponInterfaceToJSON,
    SalesRuleDataCouponSearchResultInterfaceFromJSON,
    SalesRuleDataCouponSearchResultInterfaceToJSON,
} from '../models';

export interface DeleteV1CouponsCouponIdRequest {
    couponId: number;
}

export interface GetV1CouponsCouponIdRequest {
    couponId: number;
}

export interface GetV1CouponsSearchRequest {
    searchCriteriaFilterGroups0Filters0Field?: string;
    searchCriteriaFilterGroups0Filters0Value?: string;
    searchCriteriaFilterGroups0Filters0ConditionType?: string;
    searchCriteriaSortOrders0Field?: string;
    searchCriteriaSortOrders0Direction?: string;
    searchCriteriaPageSize?: number;
    searchCriteriaCurrentPage?: number;
}

export interface PostV1CouponsRequest {
    putV1CouponsCouponIdRequest?: PutV1CouponsCouponIdRequest;
}

export interface PutV1CouponsCouponIdOperationRequest {
    couponId: string;
    putV1CouponsCouponIdRequest?: PutV1CouponsCouponIdRequest;
}

/**
 * 
 */
export class SalesRuleCouponRepositoryV1Api extends runtime.BaseAPI {

    /**
     * Delete coupon by coupon id.
     */
    async deleteV1CouponsCouponIdRaw(requestParameters: DeleteV1CouponsCouponIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.couponId === null || requestParameters.couponId === undefined) {
            throw new runtime.RequiredError('couponId','Required parameter requestParameters.couponId was null or undefined when calling deleteV1CouponsCouponId.');
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
            path: `/V1/coupons/{couponId}`.replace(`{${"couponId"}}`, encodeURIComponent(String(requestParameters.couponId))),
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
     * Delete coupon by coupon id.
     */
    async deleteV1CouponsCouponId(requestParameters: DeleteV1CouponsCouponIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.deleteV1CouponsCouponIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get coupon by coupon id.
     */
    async getV1CouponsCouponIdRaw(requestParameters: GetV1CouponsCouponIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SalesRuleDataCouponInterface>> {
        if (requestParameters.couponId === null || requestParameters.couponId === undefined) {
            throw new runtime.RequiredError('couponId','Required parameter requestParameters.couponId was null or undefined when calling getV1CouponsCouponId.');
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
            path: `/V1/coupons/{couponId}`.replace(`{${"couponId"}}`, encodeURIComponent(String(requestParameters.couponId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SalesRuleDataCouponInterfaceFromJSON(jsonValue));
    }

    /**
     * Get coupon by coupon id.
     */
    async getV1CouponsCouponId(requestParameters: GetV1CouponsCouponIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SalesRuleDataCouponInterface> {
        const response = await this.getV1CouponsCouponIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a coupon using the specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#CouponRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
     */
    async getV1CouponsSearchRaw(requestParameters: GetV1CouponsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SalesRuleDataCouponSearchResultInterface>> {
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
            path: `/V1/coupons/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SalesRuleDataCouponSearchResultInterfaceFromJSON(jsonValue));
    }

    /**
     * Retrieve a coupon using the specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#CouponRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
     */
    async getV1CouponsSearch(requestParameters: GetV1CouponsSearchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SalesRuleDataCouponSearchResultInterface> {
        const response = await this.getV1CouponsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Save a coupon.
     */
    async postV1CouponsRaw(requestParameters: PostV1CouponsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SalesRuleDataCouponInterface>> {
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
            path: `/V1/coupons`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PutV1CouponsCouponIdRequestToJSON(requestParameters.putV1CouponsCouponIdRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SalesRuleDataCouponInterfaceFromJSON(jsonValue));
    }

    /**
     * Save a coupon.
     */
    async postV1Coupons(requestParameters: PostV1CouponsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SalesRuleDataCouponInterface> {
        const response = await this.postV1CouponsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Save a coupon.
     */
    async putV1CouponsCouponIdRaw(requestParameters: PutV1CouponsCouponIdOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SalesRuleDataCouponInterface>> {
        if (requestParameters.couponId === null || requestParameters.couponId === undefined) {
            throw new runtime.RequiredError('couponId','Required parameter requestParameters.couponId was null or undefined when calling putV1CouponsCouponId.');
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
            path: `/V1/coupons/{couponId}`.replace(`{${"couponId"}}`, encodeURIComponent(String(requestParameters.couponId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PutV1CouponsCouponIdRequestToJSON(requestParameters.putV1CouponsCouponIdRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SalesRuleDataCouponInterfaceFromJSON(jsonValue));
    }

    /**
     * Save a coupon.
     */
    async putV1CouponsCouponId(requestParameters: PutV1CouponsCouponIdOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SalesRuleDataCouponInterface> {
        const response = await this.putV1CouponsCouponIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
