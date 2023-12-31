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
import type { CatalogDataCategoryInterface } from './CatalogDataCategoryInterface';
import type { FrameworkSearchCriteriaInterface } from './FrameworkSearchCriteriaInterface';
/**
 *
 * @export
 * @interface CatalogDataCategorySearchResultsInterface
 */
export interface CatalogDataCategorySearchResultsInterface {
    /**
     * Categories
     * @type {Array<CatalogDataCategoryInterface>}
     * @memberof CatalogDataCategorySearchResultsInterface
     */
    items: Array<CatalogDataCategoryInterface>;
    /**
     *
     * @type {FrameworkSearchCriteriaInterface}
     * @memberof CatalogDataCategorySearchResultsInterface
     */
    searchCriteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     * @type {number}
     * @memberof CatalogDataCategorySearchResultsInterface
     */
    totalCount: number;
}
/**
 * Check if a given object implements the CatalogDataCategorySearchResultsInterface interface.
 */
export declare function instanceOfCatalogDataCategorySearchResultsInterface(value: object): boolean;
export declare function CatalogDataCategorySearchResultsInterfaceFromJSON(json: any): CatalogDataCategorySearchResultsInterface;
export declare function CatalogDataCategorySearchResultsInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogDataCategorySearchResultsInterface;
export declare function CatalogDataCategorySearchResultsInterfaceToJSON(value?: CatalogDataCategorySearchResultsInterface | null): any;
