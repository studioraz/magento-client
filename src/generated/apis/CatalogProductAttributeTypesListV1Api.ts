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
  CatalogDataProductAttributeTypeInterface,
  ErrorResponse,
} from '../models';
import {
    CatalogDataProductAttributeTypeInterfaceFromJSON,
    CatalogDataProductAttributeTypeInterfaceToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

/**
 * 
 */
export class CatalogProductAttributeTypesListV1Api extends runtime.BaseAPI {

    /**
     * Retrieve list of product attribute types
     */
    async getV1ProductsAttributesTypesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CatalogDataProductAttributeTypeInterface>>> {
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
            path: `/V1/products/attributes/types`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CatalogDataProductAttributeTypeInterfaceFromJSON));
    }

    /**
     * Retrieve list of product attribute types
     */
    async getV1ProductsAttributesTypes(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CatalogDataProductAttributeTypeInterface>> {
        const response = await this.getV1ProductsAttributesTypesRaw(initOverrides);
        return await response.value();
    }

}
