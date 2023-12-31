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
  PutV1ProductsSkuLinksRequest,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    PutV1ProductsSkuLinksRequestFromJSON,
    PutV1ProductsSkuLinksRequestToJSON,
} from '../models';

export interface DeleteV1ProductsSkuLinksTypeLinkedProductSkuRequest {
    sku: string;
    type: string;
    linkedProductSku: string;
}

export interface PutV1ProductsSkuLinksOperationRequest {
    sku: string;
    putV1ProductsSkuLinksRequest?: PutV1ProductsSkuLinksRequest;
}

/**
 * 
 */
export class CatalogProductLinkRepositoryV1Api extends runtime.BaseAPI {

    /**
     * 
     */
    async deleteV1ProductsSkuLinksTypeLinkedProductSkuRaw(requestParameters: DeleteV1ProductsSkuLinksTypeLinkedProductSkuRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.sku === null || requestParameters.sku === undefined) {
            throw new runtime.RequiredError('sku','Required parameter requestParameters.sku was null or undefined when calling deleteV1ProductsSkuLinksTypeLinkedProductSku.');
        }

        if (requestParameters.type === null || requestParameters.type === undefined) {
            throw new runtime.RequiredError('type','Required parameter requestParameters.type was null or undefined when calling deleteV1ProductsSkuLinksTypeLinkedProductSku.');
        }

        if (requestParameters.linkedProductSku === null || requestParameters.linkedProductSku === undefined) {
            throw new runtime.RequiredError('linkedProductSku','Required parameter requestParameters.linkedProductSku was null or undefined when calling deleteV1ProductsSkuLinksTypeLinkedProductSku.');
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
            path: `/V1/products/{sku}/links/{type}/{linkedProductSku}`.replace(`{${"sku"}}`, encodeURIComponent(String(requestParameters.sku))).replace(`{${"type"}}`, encodeURIComponent(String(requestParameters.type))).replace(`{${"linkedProductSku"}}`, encodeURIComponent(String(requestParameters.linkedProductSku))),
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
     * 
     */
    async deleteV1ProductsSkuLinksTypeLinkedProductSku(requestParameters: DeleteV1ProductsSkuLinksTypeLinkedProductSkuRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.deleteV1ProductsSkuLinksTypeLinkedProductSkuRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Save product link
     */
    async putV1ProductsSkuLinksRaw(requestParameters: PutV1ProductsSkuLinksOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.sku === null || requestParameters.sku === undefined) {
            throw new runtime.RequiredError('sku','Required parameter requestParameters.sku was null or undefined when calling putV1ProductsSkuLinks.');
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
            path: `/V1/products/{sku}/links`.replace(`{${"sku"}}`, encodeURIComponent(String(requestParameters.sku))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PutV1ProductsSkuLinksRequestToJSON(requestParameters.putV1ProductsSkuLinksRequest),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<boolean>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Save product link
     */
    async putV1ProductsSkuLinks(requestParameters: PutV1ProductsSkuLinksOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.putV1ProductsSkuLinksRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
