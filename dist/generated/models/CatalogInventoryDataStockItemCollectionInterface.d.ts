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
import type { CatalogInventoryStockItemCriteriaInterface } from './CatalogInventoryStockItemCriteriaInterface';
/**
 * Interface StockItemCollectionInterface
 * @export
 * @interface CatalogInventoryDataStockItemCollectionInterface
 */
export interface CatalogInventoryDataStockItemCollectionInterface {
    /**
     * Items
     * @type {Array<CatalogInventoryDataStockItemInterface>}
     * @memberof CatalogInventoryDataStockItemCollectionInterface
     */
    items: Array<CatalogInventoryDataStockItemInterface>;
    /**
     *
     * @type {CatalogInventoryStockItemCriteriaInterface}
     * @memberof CatalogInventoryDataStockItemCollectionInterface
     */
    searchCriteria: CatalogInventoryStockItemCriteriaInterface;
    /**
     * Total count.
     * @type {number}
     * @memberof CatalogInventoryDataStockItemCollectionInterface
     */
    totalCount: number;
}
/**
 * Check if a given object implements the CatalogInventoryDataStockItemCollectionInterface interface.
 */
export declare function instanceOfCatalogInventoryDataStockItemCollectionInterface(value: object): boolean;
export declare function CatalogInventoryDataStockItemCollectionInterfaceFromJSON(json: any): CatalogInventoryDataStockItemCollectionInterface;
export declare function CatalogInventoryDataStockItemCollectionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogInventoryDataStockItemCollectionInterface;
export declare function CatalogInventoryDataStockItemCollectionInterfaceToJSON(value?: CatalogInventoryDataStockItemCollectionInterface | null): any;
