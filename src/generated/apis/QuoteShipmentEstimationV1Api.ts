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
  PostV1CartsCartIdEstimateshippingmethodsRequest,
  QuoteDataShippingMethodInterface,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    PostV1CartsCartIdEstimateshippingmethodsRequestFromJSON,
    PostV1CartsCartIdEstimateshippingmethodsRequestToJSON,
    QuoteDataShippingMethodInterfaceFromJSON,
    QuoteDataShippingMethodInterfaceToJSON,
} from '../models';

export interface PostV1CartsCartIdEstimateshippingmethodsOperationRequest {
    cartId: string;
    postV1CartsCartIdEstimateshippingmethodsRequest?: PostV1CartsCartIdEstimateshippingmethodsRequest;
}

export interface PostV1CartsMineEstimateshippingmethodsRequest {
    postV1CartsCartIdEstimateshippingmethodsRequest?: PostV1CartsCartIdEstimateshippingmethodsRequest;
}

/**
 * 
 */
export class QuoteShipmentEstimationV1Api extends runtime.BaseAPI {

    /**
     * Estimate shipping by address and return list of available shipping methods
     */
    async postV1CartsCartIdEstimateshippingmethodsRaw(requestParameters: PostV1CartsCartIdEstimateshippingmethodsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<QuoteDataShippingMethodInterface>>> {
        if (requestParameters.cartId === null || requestParameters.cartId === undefined) {
            throw new runtime.RequiredError('cartId','Required parameter requestParameters.cartId was null or undefined when calling postV1CartsCartIdEstimateshippingmethods.');
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
            path: `/V1/carts/{cartId}/estimate-shipping-methods`.replace(`{${"cartId"}}`, encodeURIComponent(String(requestParameters.cartId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostV1CartsCartIdEstimateshippingmethodsRequestToJSON(requestParameters.postV1CartsCartIdEstimateshippingmethodsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(QuoteDataShippingMethodInterfaceFromJSON));
    }

    /**
     * Estimate shipping by address and return list of available shipping methods
     */
    async postV1CartsCartIdEstimateshippingmethods(requestParameters: PostV1CartsCartIdEstimateshippingmethodsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<QuoteDataShippingMethodInterface>> {
        const response = await this.postV1CartsCartIdEstimateshippingmethodsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Estimate shipping by address and return list of available shipping methods
     */
    async postV1CartsMineEstimateshippingmethodsRaw(requestParameters: PostV1CartsMineEstimateshippingmethodsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<QuoteDataShippingMethodInterface>>> {
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
            path: `/V1/carts/mine/estimate-shipping-methods`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostV1CartsCartIdEstimateshippingmethodsRequestToJSON(requestParameters.postV1CartsCartIdEstimateshippingmethodsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(QuoteDataShippingMethodInterfaceFromJSON));
    }

    /**
     * Estimate shipping by address and return list of available shipping methods
     */
    async postV1CartsMineEstimateshippingmethods(requestParameters: PostV1CartsMineEstimateshippingmethodsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<QuoteDataShippingMethodInterface>> {
        const response = await this.postV1CartsMineEstimateshippingmethodsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
