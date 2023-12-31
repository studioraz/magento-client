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
import type { CatalogInventoryDataStockItemInterface } from './CatalogInventoryDataStockItemInterface';
/**
 *
 * @export
 * @interface PutV1ProductsProductSkuStockItemsItemIdRequest
 */
export interface PutV1ProductsProductSkuStockItemsItemIdRequest {
    /**
     *
     * @type {CatalogInventoryDataStockItemInterface}
     * @memberof PutV1ProductsProductSkuStockItemsItemIdRequest
     */
    stockItem: CatalogInventoryDataStockItemInterface;
}
/**
 * Check if a given object implements the PutV1ProductsProductSkuStockItemsItemIdRequest interface.
 */
export declare function instanceOfPutV1ProductsProductSkuStockItemsItemIdRequest(value: object): boolean;
export declare function PutV1ProductsProductSkuStockItemsItemIdRequestFromJSON(json: any): PutV1ProductsProductSkuStockItemsItemIdRequest;
export declare function PutV1ProductsProductSkuStockItemsItemIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutV1ProductsProductSkuStockItemsItemIdRequest;
export declare function PutV1ProductsProductSkuStockItemsItemIdRequestToJSON(value?: PutV1ProductsProductSkuStockItemsItemIdRequest | null): any;
