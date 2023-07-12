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
import type { InventoryApiDataStockSourceLinkInterface } from './InventoryApiDataStockSourceLinkInterface';
/**
 * Search results of Repository::getList method Used fully qualified namespaces in annotations for proper work of WebApi request parser
 * @export
 * @interface InventoryApiDataStockSourceLinkSearchResultsInterface
 */
export interface InventoryApiDataStockSourceLinkSearchResultsInterface {
    /**
     * StockSourceLink list
     * @type {Array<InventoryApiDataStockSourceLinkInterface>}
     * @memberof InventoryApiDataStockSourceLinkSearchResultsInterface
     */
    items: Array<InventoryApiDataStockSourceLinkInterface>;
    /**
     *
     * @type {FrameworkSearchCriteriaInterface}
     * @memberof InventoryApiDataStockSourceLinkSearchResultsInterface
     */
    searchCriteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     * @type {number}
     * @memberof InventoryApiDataStockSourceLinkSearchResultsInterface
     */
    totalCount: number;
}
/**
 * Check if a given object implements the InventoryApiDataStockSourceLinkSearchResultsInterface interface.
 */
export declare function instanceOfInventoryApiDataStockSourceLinkSearchResultsInterface(value: object): boolean;
export declare function InventoryApiDataStockSourceLinkSearchResultsInterfaceFromJSON(json: any): InventoryApiDataStockSourceLinkSearchResultsInterface;
export declare function InventoryApiDataStockSourceLinkSearchResultsInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventoryApiDataStockSourceLinkSearchResultsInterface;
export declare function InventoryApiDataStockSourceLinkSearchResultsInterfaceToJSON(value?: InventoryApiDataStockSourceLinkSearchResultsInterface | null): any;
