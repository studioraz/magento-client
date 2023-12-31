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
import type { InventoryLowQuantityNotificationApiDataSourceItemConfigurationInterface } from '../models';
export interface GetV1InventoryLowquantitynotificationSourceCodeSkuRequest {
    sourceCode: string;
    sku: string;
}
/**
 *
 */
export declare class InventoryLowQuantityNotificationApiGetSourceItemConfigurationV1Api extends runtime.BaseAPI {
    /**
     * Get the source item configuration
     */
    getV1InventoryLowquantitynotificationSourceCodeSkuRaw(requestParameters: GetV1InventoryLowquantitynotificationSourceCodeSkuRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventoryLowQuantityNotificationApiDataSourceItemConfigurationInterface>>;
    /**
     * Get the source item configuration
     */
    getV1InventoryLowquantitynotificationSourceCodeSku(requestParameters: GetV1InventoryLowquantitynotificationSourceCodeSkuRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventoryLowQuantityNotificationApiDataSourceItemConfigurationInterface>;
}
