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
import type { InventoryApiDataStockInterface } from '../models';
export interface GetV1InventoryStockresolverTypeCodeRequest {
    type: string;
    code: string;
}
/**
 *
 */
export declare class InventorySalesApiStockResolverV1Api extends runtime.BaseAPI {
    /**
     * Resolve Stock by Sales Channel type and code
     */
    getV1InventoryStockresolverTypeCodeRaw(requestParameters: GetV1InventoryStockresolverTypeCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventoryApiDataStockInterface>>;
    /**
     * Resolve Stock by Sales Channel type and code
     */
    getV1InventoryStockresolverTypeCode(requestParameters: GetV1InventoryStockresolverTypeCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventoryApiDataStockInterface>;
}
