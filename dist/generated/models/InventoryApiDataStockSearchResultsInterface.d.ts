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
import type { FrameworkSearchCriteriaInterface } from './FrameworkSearchCriteriaInterface';
import type { InventoryApiDataStockInterface } from './InventoryApiDataStockInterface';
/**
 * Search results of Repository::getList method Used fully qualified namespaces in annotations for proper work of WebApi request parser
 * @export
 * @interface InventoryApiDataStockSearchResultsInterface
 */
export interface InventoryApiDataStockSearchResultsInterface {
    /**
     * Stocks list
     * @type {Array<InventoryApiDataStockInterface>}
     * @memberof InventoryApiDataStockSearchResultsInterface
     */
    items: Array<InventoryApiDataStockInterface>;
    /**
     *
     * @type {FrameworkSearchCriteriaInterface}
     * @memberof InventoryApiDataStockSearchResultsInterface
     */
    searchCriteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     * @type {number}
     * @memberof InventoryApiDataStockSearchResultsInterface
     */
    totalCount: number;
}
/**
 * Check if a given object implements the InventoryApiDataStockSearchResultsInterface interface.
 */
export declare function instanceOfInventoryApiDataStockSearchResultsInterface(value: object): boolean;
export declare function InventoryApiDataStockSearchResultsInterfaceFromJSON(json: any): InventoryApiDataStockSearchResultsInterface;
export declare function InventoryApiDataStockSearchResultsInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventoryApiDataStockSearchResultsInterface;
export declare function InventoryApiDataStockSearchResultsInterfaceToJSON(value?: InventoryApiDataStockSearchResultsInterface | null): any;
