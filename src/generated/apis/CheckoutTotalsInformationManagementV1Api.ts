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
  PostV1CartsCartIdTotalsinformationRequest,
  QuoteDataTotalsInterface,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    PostV1CartsCartIdTotalsinformationRequestFromJSON,
    PostV1CartsCartIdTotalsinformationRequestToJSON,
    QuoteDataTotalsInterfaceFromJSON,
    QuoteDataTotalsInterfaceToJSON,
} from '../models';

export interface PostV1CartsCartIdTotalsinformationOperationRequest {
    cartId: number;
    postV1CartsCartIdTotalsinformationRequest?: PostV1CartsCartIdTotalsinformationRequest;
}

export interface PostV1CartsMineTotalsinformationRequest {
    postV1CartsCartIdTotalsinformationRequest?: PostV1CartsCartIdTotalsinformationRequest;
}

/**
 * 
 */
export class CheckoutTotalsInformationManagementV1Api extends runtime.BaseAPI {

    /**
     * Calculate quote totals based on address and shipping method.
     */
    async postV1CartsCartIdTotalsinformationRaw(requestParameters: PostV1CartsCartIdTotalsinformationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuoteDataTotalsInterface>> {
        if (requestParameters.cartId === null || requestParameters.cartId === undefined) {
            throw new runtime.RequiredError('cartId','Required parameter requestParameters.cartId was null or undefined when calling postV1CartsCartIdTotalsinformation.');
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
            path: `/V1/carts/{cartId}/totals-information`.replace(`{${"cartId"}}`, encodeURIComponent(String(requestParameters.cartId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostV1CartsCartIdTotalsinformationRequestToJSON(requestParameters.postV1CartsCartIdTotalsinformationRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QuoteDataTotalsInterfaceFromJSON(jsonValue));
    }

    /**
     * Calculate quote totals based on address and shipping method.
     */
    async postV1CartsCartIdTotalsinformation(requestParameters: PostV1CartsCartIdTotalsinformationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuoteDataTotalsInterface> {
        const response = await this.postV1CartsCartIdTotalsinformationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Calculate quote totals based on address and shipping method.
     */
    async postV1CartsMineTotalsinformationRaw(requestParameters: PostV1CartsMineTotalsinformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuoteDataTotalsInterface>> {
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
            path: `/V1/carts/mine/totals-information`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostV1CartsCartIdTotalsinformationRequestToJSON(requestParameters.postV1CartsCartIdTotalsinformationRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QuoteDataTotalsInterfaceFromJSON(jsonValue));
    }

    /**
     * Calculate quote totals based on address and shipping method.
     */
    async postV1CartsMineTotalsinformation(requestParameters: PostV1CartsMineTotalsinformationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuoteDataTotalsInterface> {
        const response = await this.postV1CartsMineTotalsinformationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
