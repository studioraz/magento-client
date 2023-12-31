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
  CatalogDataProductLinkAttributeInterface,
  CatalogDataProductLinkTypeInterface,
  ErrorResponse,
} from '../models';
import {
    CatalogDataProductLinkAttributeInterfaceFromJSON,
    CatalogDataProductLinkAttributeInterfaceToJSON,
    CatalogDataProductLinkTypeInterfaceFromJSON,
    CatalogDataProductLinkTypeInterfaceToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface GetV1ProductsLinksTypeAttributesRequest {
    type: string;
}

/**
 * 
 */
export class CatalogProductLinkTypeListV1Api extends runtime.BaseAPI {

    /**
     * Provide a list of the product link type attributes
     */
    async getV1ProductsLinksTypeAttributesRaw(requestParameters: GetV1ProductsLinksTypeAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CatalogDataProductLinkAttributeInterface>>> {
        if (requestParameters.type === null || requestParameters.type === undefined) {
            throw new runtime.RequiredError('type','Required parameter requestParameters.type was null or undefined when calling getV1ProductsLinksTypeAttributes.');
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
            path: `/V1/products/links/{type}/attributes`.replace(`{${"type"}}`, encodeURIComponent(String(requestParameters.type))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CatalogDataProductLinkAttributeInterfaceFromJSON));
    }

    /**
     * Provide a list of the product link type attributes
     */
    async getV1ProductsLinksTypeAttributes(requestParameters: GetV1ProductsLinksTypeAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CatalogDataProductLinkAttributeInterface>> {
        const response = await this.getV1ProductsLinksTypeAttributesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve information about available product link types
     */
    async getV1ProductsLinksTypesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CatalogDataProductLinkTypeInterface>>> {
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
            path: `/V1/products/links/types`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CatalogDataProductLinkTypeInterfaceFromJSON));
    }

    /**
     * Retrieve information about available product link types
     */
    async getV1ProductsLinksTypes(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CatalogDataProductLinkTypeInterface>> {
        const response = await this.getV1ProductsLinksTypesRaw(initOverrides);
        return await response.value();
    }

}
