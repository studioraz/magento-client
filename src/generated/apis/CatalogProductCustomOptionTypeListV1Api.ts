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
  CatalogDataProductCustomOptionTypeInterface,
  ErrorResponse,
} from '../models';
import {
    CatalogDataProductCustomOptionTypeInterfaceFromJSON,
    CatalogDataProductCustomOptionTypeInterfaceToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

/**
 * 
 */
export class CatalogProductCustomOptionTypeListV1Api extends runtime.BaseAPI {

    /**
     * Get custom option types
     */
    async getV1ProductsOptionsTypesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CatalogDataProductCustomOptionTypeInterface>>> {
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
            path: `/V1/products/options/types`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CatalogDataProductCustomOptionTypeInterfaceFromJSON));
    }

    /**
     * Get custom option types
     */
    async getV1ProductsOptionsTypes(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CatalogDataProductCustomOptionTypeInterface>> {
        const response = await this.getV1ProductsOptionsTypesRaw(initOverrides);
        return await response.value();
    }

}
