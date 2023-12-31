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
  CatalogDataProductInterface,
  ErrorResponse,
  PostV1ConfigurableproductsSkuChildRequest,
} from '../models';
import {
    CatalogDataProductInterfaceFromJSON,
    CatalogDataProductInterfaceToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    PostV1ConfigurableproductsSkuChildRequestFromJSON,
    PostV1ConfigurableproductsSkuChildRequestToJSON,
} from '../models';

export interface DeleteV1ConfigurableproductsSkuChildrenChildSkuRequest {
    sku: string;
    childSku: string;
}

export interface GetV1ConfigurableproductsSkuChildrenRequest {
    sku: string;
}

export interface PostV1ConfigurableproductsSkuChildOperationRequest {
    sku: string;
    postV1ConfigurableproductsSkuChildRequest?: PostV1ConfigurableproductsSkuChildRequest;
}

/**
 * 
 */
export class ConfigurableProductLinkManagementV1Api extends runtime.BaseAPI {

    /**
     * Remove configurable product option
     */
    async deleteV1ConfigurableproductsSkuChildrenChildSkuRaw(requestParameters: DeleteV1ConfigurableproductsSkuChildrenChildSkuRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.sku === null || requestParameters.sku === undefined) {
            throw new runtime.RequiredError('sku','Required parameter requestParameters.sku was null or undefined when calling deleteV1ConfigurableproductsSkuChildrenChildSku.');
        }

        if (requestParameters.childSku === null || requestParameters.childSku === undefined) {
            throw new runtime.RequiredError('childSku','Required parameter requestParameters.childSku was null or undefined when calling deleteV1ConfigurableproductsSkuChildrenChildSku.');
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
            path: `/V1/configurable-products/{sku}/children/{childSku}`.replace(`{${"sku"}}`, encodeURIComponent(String(requestParameters.sku))).replace(`{${"childSku"}}`, encodeURIComponent(String(requestParameters.childSku))),
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
     * Remove configurable product option
     */
    async deleteV1ConfigurableproductsSkuChildrenChildSku(requestParameters: DeleteV1ConfigurableproductsSkuChildrenChildSkuRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.deleteV1ConfigurableproductsSkuChildrenChildSkuRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all children for Configurable product
     */
    async getV1ConfigurableproductsSkuChildrenRaw(requestParameters: GetV1ConfigurableproductsSkuChildrenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CatalogDataProductInterface>>> {
        if (requestParameters.sku === null || requestParameters.sku === undefined) {
            throw new runtime.RequiredError('sku','Required parameter requestParameters.sku was null or undefined when calling getV1ConfigurableproductsSkuChildren.');
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
            path: `/V1/configurable-products/{sku}/children`.replace(`{${"sku"}}`, encodeURIComponent(String(requestParameters.sku))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CatalogDataProductInterfaceFromJSON));
    }

    /**
     * Get all children for Configurable product
     */
    async getV1ConfigurableproductsSkuChildren(requestParameters: GetV1ConfigurableproductsSkuChildrenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CatalogDataProductInterface>> {
        const response = await this.getV1ConfigurableproductsSkuChildrenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     */
    async postV1ConfigurableproductsSkuChildRaw(requestParameters: PostV1ConfigurableproductsSkuChildOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.sku === null || requestParameters.sku === undefined) {
            throw new runtime.RequiredError('sku','Required parameter requestParameters.sku was null or undefined when calling postV1ConfigurableproductsSkuChild.');
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
            path: `/V1/configurable-products/{sku}/child`.replace(`{${"sku"}}`, encodeURIComponent(String(requestParameters.sku))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostV1ConfigurableproductsSkuChildRequestToJSON(requestParameters.postV1ConfigurableproductsSkuChildRequest),
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
    async postV1ConfigurableproductsSkuChild(requestParameters: PostV1ConfigurableproductsSkuChildOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.postV1ConfigurableproductsSkuChildRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
