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
 * Interface StockStatusInterface
 * @export
 * @interface CatalogInventoryDataStockStatusInterface
 */
export interface CatalogInventoryDataStockStatusInterface {
    /**
     *
     * @type {number}
     * @memberof CatalogInventoryDataStockStatusInterface
     */
    productId: number;
    /**
     *
     * @type {number}
     * @memberof CatalogInventoryDataStockStatusInterface
     */
    stockId: number;
    /**
     *
     * @type {number}
     * @memberof CatalogInventoryDataStockStatusInterface
     */
    qty: number;
    /**
     *
     * @type {number}
     * @memberof CatalogInventoryDataStockStatusInterface
     */
    stockStatus: number;
    /**
     *
     * @type {CatalogInventoryDataStockItemInterface}
     * @memberof CatalogInventoryDataStockStatusInterface
     */
    stockItem: CatalogInventoryDataStockItemInterface;
    /**
     * ExtensionInterface class for @see \Magento\CatalogInventory\Api\Data\StockStatusInterface
     * @type {object}
     * @memberof CatalogInventoryDataStockStatusInterface
     */
    extensionAttributes?: object;
}
/**
 * Check if a given object implements the CatalogInventoryDataStockStatusInterface interface.
 */
export declare function instanceOfCatalogInventoryDataStockStatusInterface(value: object): boolean;
export declare function CatalogInventoryDataStockStatusInterfaceFromJSON(json: any): CatalogInventoryDataStockStatusInterface;
export declare function CatalogInventoryDataStockStatusInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogInventoryDataStockStatusInterface;
export declare function CatalogInventoryDataStockStatusInterfaceToJSON(value?: CatalogInventoryDataStockStatusInterface | null): any;
