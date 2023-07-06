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
  PostV1OrderOrderIdInvoiceRequest,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    PostV1OrderOrderIdInvoiceRequestFromJSON,
    PostV1OrderOrderIdInvoiceRequestToJSON,
} from '../models';

export interface PostV1OrderOrderIdInvoiceOperationRequest {
    orderId: number;
    postV1OrderOrderIdInvoiceRequest?: PostV1OrderOrderIdInvoiceRequest;
}

/**
 * 
 */
export class SalesInvoiceOrderV1Api extends runtime.BaseAPI {

    /**
     * 
     */
    async postV1OrderOrderIdInvoiceRaw(requestParameters: PostV1OrderOrderIdInvoiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters.orderId === null || requestParameters.orderId === undefined) {
            throw new runtime.RequiredError('orderId','Required parameter requestParameters.orderId was null or undefined when calling postV1OrderOrderIdInvoice.');
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
            path: `/V1/order/{orderId}/invoice`.replace(`{${"orderId"}}`, encodeURIComponent(String(requestParameters.orderId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostV1OrderOrderIdInvoiceRequestToJSON(requestParameters.postV1OrderOrderIdInvoiceRequest),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * 
     */
    async postV1OrderOrderIdInvoice(requestParameters: PostV1OrderOrderIdInvoiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.postV1OrderOrderIdInvoiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
