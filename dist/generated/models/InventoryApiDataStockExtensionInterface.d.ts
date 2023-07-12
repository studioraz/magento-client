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
import type { InventorySalesApiDataSalesChannelInterface } from './InventorySalesApiDataSalesChannelInterface';
/**
 * TODO: temporal fix of extension classes generation during installation ExtensionInterface class for @see \Magento\InventoryApi\Api\Data\StockInterface
 * @export
 * @interface InventoryApiDataStockExtensionInterface
 */
export interface InventoryApiDataStockExtensionInterface {
    /**
     *
     * @type {Array<InventorySalesApiDataSalesChannelInterface>}
     * @memberof InventoryApiDataStockExtensionInterface
     */
    salesChannels?: Array<InventorySalesApiDataSalesChannelInterface>;
}
/**
 * Check if a given object implements the InventoryApiDataStockExtensionInterface interface.
 */
export declare function instanceOfInventoryApiDataStockExtensionInterface(value: object): boolean;
export declare function InventoryApiDataStockExtensionInterfaceFromJSON(json: any): InventoryApiDataStockExtensionInterface;
export declare function InventoryApiDataStockExtensionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventoryApiDataStockExtensionInterface;
export declare function InventoryApiDataStockExtensionInterfaceToJSON(value?: InventoryApiDataStockExtensionInterface | null): any;
