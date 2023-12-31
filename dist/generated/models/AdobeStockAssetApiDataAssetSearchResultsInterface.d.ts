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
import type { AdobeStockAssetApiDataAssetInterface } from './AdobeStockAssetApiDataAssetInterface';
import type { FrameworkSearchCriteriaInterface } from './FrameworkSearchCriteriaInterface';
/**
 * Interface AssetSearchResultsInterface
 * @export
 * @interface AdobeStockAssetApiDataAssetSearchResultsInterface
 */
export interface AdobeStockAssetApiDataAssetSearchResultsInterface {
    /**
     * Assets list.
     * @type {Array<AdobeStockAssetApiDataAssetInterface>}
     * @memberof AdobeStockAssetApiDataAssetSearchResultsInterface
     */
    items: Array<AdobeStockAssetApiDataAssetInterface>;
    /**
     *
     * @type {FrameworkSearchCriteriaInterface}
     * @memberof AdobeStockAssetApiDataAssetSearchResultsInterface
     */
    searchCriteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     * @type {number}
     * @memberof AdobeStockAssetApiDataAssetSearchResultsInterface
     */
    totalCount: number;
}
/**
 * Check if a given object implements the AdobeStockAssetApiDataAssetSearchResultsInterface interface.
 */
export declare function instanceOfAdobeStockAssetApiDataAssetSearchResultsInterface(value: object): boolean;
export declare function AdobeStockAssetApiDataAssetSearchResultsInterfaceFromJSON(json: any): AdobeStockAssetApiDataAssetSearchResultsInterface;
export declare function AdobeStockAssetApiDataAssetSearchResultsInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdobeStockAssetApiDataAssetSearchResultsInterface;
export declare function AdobeStockAssetApiDataAssetSearchResultsInterfaceToJSON(value?: AdobeStockAssetApiDataAssetSearchResultsInterface | null): any;
