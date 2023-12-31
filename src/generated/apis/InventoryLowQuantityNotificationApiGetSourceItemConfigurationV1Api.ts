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
  InventoryLowQuantityNotificationApiDataSourceItemConfigurationInterface,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    InventoryLowQuantityNotificationApiDataSourceItemConfigurationInterfaceFromJSON,
    InventoryLowQuantityNotificationApiDataSourceItemConfigurationInterfaceToJSON,
} from '../models';

export interface GetV1InventoryLowquantitynotificationSourceCodeSkuRequest {
    sourceCode: string;
    sku: string;
}

/**
 * 
 */
export class InventoryLowQuantityNotificationApiGetSourceItemConfigurationV1Api extends runtime.BaseAPI {

    /**
     * Get the source item configuration
     */
    async getV1InventoryLowquantitynotificationSourceCodeSkuRaw(requestParameters: GetV1InventoryLowquantitynotificationSourceCodeSkuRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventoryLowQuantityNotificationApiDataSourceItemConfigurationInterface>> {
        if (requestParameters.sourceCode === null || requestParameters.sourceCode === undefined) {
            throw new runtime.RequiredError('sourceCode','Required parameter requestParameters.sourceCode was null or undefined when calling getV1InventoryLowquantitynotificationSourceCodeSku.');
        }

        if (requestParameters.sku === null || requestParameters.sku === undefined) {
            throw new runtime.RequiredError('sku','Required parameter requestParameters.sku was null or undefined when calling getV1InventoryLowquantitynotificationSourceCodeSku.');
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
            path: `/V1/inventory/low-quantity-notification/{sourceCode}/{sku}`.replace(`{${"sourceCode"}}`, encodeURIComponent(String(requestParameters.sourceCode))).replace(`{${"sku"}}`, encodeURIComponent(String(requestParameters.sku))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InventoryLowQuantityNotificationApiDataSourceItemConfigurationInterfaceFromJSON(jsonValue));
    }

    /**
     * Get the source item configuration
     */
    async getV1InventoryLowquantitynotificationSourceCodeSku(requestParameters: GetV1InventoryLowquantitynotificationSourceCodeSkuRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventoryLowQuantityNotificationApiDataSourceItemConfigurationInterface> {
        const response = await this.getV1InventoryLowquantitynotificationSourceCodeSkuRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
