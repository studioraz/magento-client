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
import type { InventorySalesApiDataProductSalableResultInterface } from '../models';
export interface GetV1InventoryIsproductsalableforrequestedqtySkuStockIdRequestedQtyRequest {
    sku: string;
    stockId: number;
    requestedQty: number;
}
/**
 *
 */
export declare class InventorySalesApiIsProductSalableForRequestedQtyV1Api extends runtime.BaseAPI {
    /**
     * Get is product salable for given SKU in a given Stock for a certain Qty
     */
    getV1InventoryIsproductsalableforrequestedqtySkuStockIdRequestedQtyRaw(requestParameters: GetV1InventoryIsproductsalableforrequestedqtySkuStockIdRequestedQtyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventorySalesApiDataProductSalableResultInterface>>;
    /**
     * Get is product salable for given SKU in a given Stock for a certain Qty
     */
    getV1InventoryIsproductsalableforrequestedqtySkuStockIdRequestedQty(requestParameters: GetV1InventoryIsproductsalableforrequestedqtySkuStockIdRequestedQtyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventorySalesApiDataProductSalableResultInterface>;
}
