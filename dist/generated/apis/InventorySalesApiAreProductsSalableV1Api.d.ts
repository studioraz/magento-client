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
import type { InventorySalesApiDataIsProductSalableResultInterface } from '../models';
export interface GetV1InventoryAreproductssalableRequest {
    skus: Array<string>;
    stockId: number;
}
/**
 *
 */
export declare class InventorySalesApiAreProductsSalableV1Api extends runtime.BaseAPI {
    /**
     * Get products salable status for given SKUs and given Stock.
     */
    getV1InventoryAreproductssalableRaw(requestParameters: GetV1InventoryAreproductssalableRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<InventorySalesApiDataIsProductSalableResultInterface>>>;
    /**
     * Get products salable status for given SKUs and given Stock.
     */
    getV1InventoryAreproductssalable(requestParameters: GetV1InventoryAreproductssalableRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<InventorySalesApiDataIsProductSalableResultInterface>>;
}