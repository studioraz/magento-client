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
  PostV1CartsCartIdEstimateshippingmethodsbyaddressidRequest,
  QuoteDataShippingMethodInterface,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    PostV1CartsCartIdEstimateshippingmethodsbyaddressidRequestFromJSON,
    PostV1CartsCartIdEstimateshippingmethodsbyaddressidRequestToJSON,
    QuoteDataShippingMethodInterfaceFromJSON,
    QuoteDataShippingMethodInterfaceToJSON,
} from '../models';

export interface GetV1CartsCartIdShippingmethodsRequest {
    cartId: number;
}

export interface PostV1CartsCartIdEstimateshippingmethodsbyaddressidOperationRequest {
    cartId: number;
    postV1CartsCartIdEstimateshippingmethodsbyaddressidRequest?: PostV1CartsCartIdEstimateshippingmethodsbyaddressidRequest;
}

export interface PostV1CartsMineEstimateshippingmethodsbyaddressidRequest {
    postV1CartsCartIdEstimateshippingmethodsbyaddressidRequest?: PostV1CartsCartIdEstimateshippingmethodsbyaddressidRequest;
}

/**
 * 
 */
export class QuoteShippingMethodManagementV1Api extends runtime.BaseAPI {

    /**
     * Lists applicable shipping methods for a specified quote.
     */
    async getV1CartsCartIdShippingmethodsRaw(requestParameters: GetV1CartsCartIdShippingmethodsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<QuoteDataShippingMethodInterface>>> {
        if (requestParameters.cartId === null || requestParameters.cartId === undefined) {
            throw new runtime.RequiredError('cartId','Required parameter requestParameters.cartId was null or undefined when calling getV1CartsCartIdShippingmethods.');
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
            path: `/V1/carts/{cartId}/shipping-methods`.replace(`{${"cartId"}}`, encodeURIComponent(String(requestParameters.cartId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(QuoteDataShippingMethodInterfaceFromJSON));
    }

    /**
     * Lists applicable shipping methods for a specified quote.
     */
    async getV1CartsCartIdShippingmethods(requestParameters: GetV1CartsCartIdShippingmethodsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<QuoteDataShippingMethodInterface>> {
        const response = await this.getV1CartsCartIdShippingmethodsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Lists applicable shipping methods for a specified quote.
     */
    async getV1CartsMineShippingmethodsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<QuoteDataShippingMethodInterface>>> {
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
            path: `/V1/carts/mine/shipping-methods`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(QuoteDataShippingMethodInterfaceFromJSON));
    }

    /**
     * Lists applicable shipping methods for a specified quote.
     */
    async getV1CartsMineShippingmethods(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<QuoteDataShippingMethodInterface>> {
        const response = await this.getV1CartsMineShippingmethodsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Estimate shipping
     */
    async postV1CartsCartIdEstimateshippingmethodsbyaddressidRaw(requestParameters: PostV1CartsCartIdEstimateshippingmethodsbyaddressidOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<QuoteDataShippingMethodInterface>>> {
        if (requestParameters.cartId === null || requestParameters.cartId === undefined) {
            throw new runtime.RequiredError('cartId','Required parameter requestParameters.cartId was null or undefined when calling postV1CartsCartIdEstimateshippingmethodsbyaddressid.');
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
            path: `/V1/carts/{cartId}/estimate-shipping-methods-by-address-id`.replace(`{${"cartId"}}`, encodeURIComponent(String(requestParameters.cartId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostV1CartsCartIdEstimateshippingmethodsbyaddressidRequestToJSON(requestParameters.postV1CartsCartIdEstimateshippingmethodsbyaddressidRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(QuoteDataShippingMethodInterfaceFromJSON));
    }

    /**
     * Estimate shipping
     */
    async postV1CartsCartIdEstimateshippingmethodsbyaddressid(requestParameters: PostV1CartsCartIdEstimateshippingmethodsbyaddressidOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<QuoteDataShippingMethodInterface>> {
        const response = await this.postV1CartsCartIdEstimateshippingmethodsbyaddressidRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Estimate shipping
     */
    async postV1CartsMineEstimateshippingmethodsbyaddressidRaw(requestParameters: PostV1CartsMineEstimateshippingmethodsbyaddressidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<QuoteDataShippingMethodInterface>>> {
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
            path: `/V1/carts/mine/estimate-shipping-methods-by-address-id`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostV1CartsCartIdEstimateshippingmethodsbyaddressidRequestToJSON(requestParameters.postV1CartsCartIdEstimateshippingmethodsbyaddressidRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(QuoteDataShippingMethodInterfaceFromJSON));
    }

    /**
     * Estimate shipping
     */
    async postV1CartsMineEstimateshippingmethodsbyaddressid(requestParameters: PostV1CartsMineEstimateshippingmethodsbyaddressidRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<QuoteDataShippingMethodInterface>> {
        const response = await this.postV1CartsMineEstimateshippingmethodsbyaddressidRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
